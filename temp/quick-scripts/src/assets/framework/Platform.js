"use strict";
cc._RF.push(module, '8fc52zVaq1FVrE4//XvMzeK', 'Platform');
// framework/Platform.ts

Object.defineProperty(exports, "__esModule", { value: true });
var sdk_1 = require("./wxsdk/sdk");
var ToastManager_1 = require("./plugin_boosts/ui/ToastManager");
var BKTool_1 = require("./qqsdk/BKTool");
var SpriteFrameCache_1 = require("./plugin_boosts/misc/SpriteFrameCache");
var Signal_1 = require("./plugin_boosts/misc/Signal");
var EventManager_1 = require("./plugin_boosts/utils/EventManager");
var Info_1 = require("../../assets/Game/Scripts/Info");
var WxCommands;
(function (WxCommands) {
    WxCommands[WxCommands["Hide"] = 99] = "Hide";
    WxCommands[WxCommands["Next"] = 100] = "Next";
    WxCommands[WxCommands["RankSmall"] = 101] = "RankSmall";
    WxCommands[WxCommands["Rank"] = 102] = "Rank";
})(WxCommands || (WxCommands = {}));
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.getOpenID = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // wechat 
            var userInfo = sdk_1.wxsdk.userInfo;
            if (userInfo && userInfo.openID) {
                return userInfo.openID;
            }
            else {
                return "";
            }
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return GameStatusInfo.openId;
        }
        else {
            return "123";
        }
    };
    Platform.getNick = function () {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return BKTool_1.default.getNick();
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            return (sdk_1.wxsdk.userInfo && sdk_1.wxsdk.userInfo.nickName) || "自已";
        }
        else {
            return "玩家自已";
        }
    };
    Platform.getHead = function () {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return BKTool_1.default.getHead();
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/QlHaicGZOD7do9LuX5W4APHYSrUBqVaGULuwISLUf35IyOOYZ3IXl7nF5mW36JiaQ9snziawrAvkknX41SmeYa9AQ/132"city:""country:""gender:1language:"zh_CN"nickName:"Damon Ren⁶⁶⁶"province:""
            var userInfo = sdk_1.wxsdk.userInfo;
            if (userInfo && userInfo.avatarUrl) {
                return userInfo.avatarUrl;
            }
            else {
                return "https://tank.wdfunny.com/speed_logo/2.jpg";
            }
        }
        return "https://tank.wdfunny.com/speed_logo/1.jpg";
    };
    Platform.loadHeadQQ = function (sp) {
        var self = this;
        var absolutePath = "GameSandBox://_head/" + GameStatusInfo.openId + ".jpg";
        var isExit = BK.FileUtil.isFileExist(absolutePath);
        cc.log(absolutePath + " is exit :" + isExit);
        //如果指定目录中存在此图像就直接显示否则从网络获取
        if (isExit) {
            cc.loader.load(absolutePath, function (err, texture) {
                if (err == null) {
                    sp.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        }
        else {
            BK.MQQ.Account.getHeadEx(GameStatusInfo.openId, function (oId, imgPath) {
                cc.log("openId:" + oId + " imgPath:" + imgPath);
                var image = new Image();
                image.onload = function () {
                    var tex = new cc.Texture2D();
                    tex.initWithElement(image);
                    tex.handleLoadedTexture();
                    sp.spriteFrame = new cc.SpriteFrame(tex);
                };
                image.src = imgPath;
            });
        }
    };
    Platform.loadSelfHead = function (sprite) {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            this.loadHeadQQ(sprite);
        }
        else {
            SpriteFrameCache_1.default.instance.getSpriteFrame(Platform.getHead()).then(function (sf) { return sprite.spriteFrame = sf; });
        }
    };
    Platform.exit = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wx.offShow(Platform.onEnterForeground);
            wx.offHide(Platform.onEnterBackground);
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
        }
    };
    Platform.login = function () {
        var _this = this;
        this.isAndroid = cc.sys.os == "Android";
        console.log("================= os", cc.sys.os);
        this.isIOS = cc.sys.os == "iOS";
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.login();
            sdk_1.wxsdk.requestConfig(function (data) {
                _this.configGetSignal.fire(data);
            });
            // get conf 
            wx.onShow(Platform.onEnterForeground);
            wx.onHide(Platform.onEnterBackground);
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            BKTool_1.default.login();
            BK.onEnterForeground(Platform.onEnterForeground);
            BK.onEnterBackground(Platform.onEnterBackground);
        }
    };
    Platform.requestServerConfigs = function (name, callback, target) {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.requestDB(name, callback, target);
        }
    };
    Platform.getGameID = function () {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            GameStatusInfo.gameId;
        }
        return "speed_wanyiwan";
    };
    Platform.getLaunchOptions = function () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            return wx.getLaunchOptionsSync();
        }
        return {};
    };
    Platform.getCity = function () {
        return "";
    };
    Platform.share = function (callback, target) {
        console.log("######开始分享");
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.openShare();
            var t_1 = new Date().getTime();
            Platform.onEnterForegroundSignal.on(function () {
                Platform.onEnterForegroundSignal.clear();
                var d = new Date().getTime() - t_1;
                if (d > 2333) {
                    setTimeout(function (_) {
                        if (callback)
                            callback.call(target);
                    }, 500);
                }
                else {
                    //用户及时返回分享失败 
                    ToastManager_1.Toast.make("分享失败,请尝试换其它群分享");
                }
            });
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            BKTool_1.default.share(function (v) {
                if (v == "success") {
                    callback && callback.call(target);
                }
                else {
                    // Toast.make("分享失败")
                }
            });
        }
        else {
            callback && callback.call(target);
        }
    };
    Platform.watch_video = function (callback, target) {
        console.log("######开始看视频");
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.loadVideoAd(function (code, isEnded) {
                if (code == "load") {
                    cc.audioEngine.pauseMusic();
                    Platform.bannnerRefreshEnabled = false;
                }
                else if (code == "close") {
                    Platform.bannnerRefreshEnabled = true;
                    if (!isEnded)
                        ToastManager_1.Toast.make("必须看完视频,才能获取奖励");
                    else
                        callback && callback.call(target);
                }
            });
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            //关闭背景
            cc.audioEngine.pauseMusic();
            var isFinish_1 = false;
            BKTool_1.default.loadVideoAd(function (v, video) {
                if (v == "load") {
                    video.show();
                }
                else if (v == "finish") {
                    isFinish_1 = true;
                }
                else if (v == "close") {
                    if (!isFinish_1)
                        ToastManager_1.Toast.make("必须看完视频,才能获取奖励");
                    else
                        callback && callback.call(target);
                }
            });
        }
        else {
            callback && callback.call(target);
        }
    };
    Platform.showBannerAd = function () {
        console.log("######显示Banner广告");
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            sdk_1.wxsdk.showBannerAd();
        }
        else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            BKTool_1.default.showBannerAd();
        }
        else {
        }
    };
    Platform.initBannerAd = function (b) {
        if (b === void 0) { b = 1; }
        if (b == 0)
            return;
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            setInterval(function (_) {
                console.log("######加载Banner广告");
                BKTool_1.default.hideBannerAd();
                BKTool_1.default.loadBannerAd(function (v) {
                    v == "load" && BKTool_1.default.showBannerAd();
                });
            }, 30000);
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            setInterval(function (_) {
                if (Platform.bannnerRefreshEnabled) {
                    console.log("######加载Banner广告");
                    sdk_1.wxsdk.hideBannerAd();
                    sdk_1.wxsdk.loadBannerAd(function (v) {
                        v == "load" && sdk_1.wxsdk.showBannerAd();
                    });
                }
            }, 40000);
        }
    };
    Platform.jumpTo = function () {
        // var desGameId = 1234; //跳转的gameid，必须为数字
        // var extendInfo = ""; //额外参数，必须为字符串
        // BK.QQ.skipGame(desGameId, extendInfo);
    };
    Platform.showRankDialog = function () {
        console.log("[Platform]#showRankDialog");
        ToastManager_1.Toast.make("#[Platform]#showRankDialog");
        // ViewManager.instance.show("Game/RankDialog")
    };
    // Andriod 发送游戏快捷方式到桌面
    Platform.onEnterForeground = function () {
        console.log("=====================onEnterForeground=====================");
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            //onEnterForeground
            // Device.resumeMusic()
            cc.audioEngine.resumeMusic();
        }
        else {
            cc.audioEngine.resumeMusic();
        }
        Platform.onEnterForegroundSignal.fire();
        EventManager_1.event.emit("onEnterForeground");
    };
    Platform.onEnterBackground = function () {
        // BK.onEnterBackground(enterBackgroundListener);
        EventManager_1.event.emit("onEnterBackground");
    };
    Platform.onGameExit = function () {
        // BK.onGameClose(gameCloseListener);
    };
    Platform.showSmallRank = function () {
        sdk_1.wxsdk.postMessage(WxCommands.RankSmall);
    };
    Platform.showRank = function (scrollView) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Platform.fetchRankingData()];
                    case 1:
                        data = _a.sent();
                        // If no scrollView provided, just log the data
                        if (!scrollView) {
                            console.log("Ranking List:", data);
                            return [2 /*return*/];
                        }
                        // Render ranking items to the scrollView
                        Platform.renderRankingList(scrollView, data);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error("Error fetching ranking list:", err_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch ranking data from API.
     * Uses fetch in browser, XMLHttpRequest in simulator.
     */
    Platform.fetchRankingData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = [];
                        if (!(typeof fetch !== "undefined")) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch("https://5d820f171c8ff70014ef438d.mockapi.io/1/ranking-list")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: 
                    // Simulator: use XMLHttpRequest
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var xhr = new XMLHttpRequest();
                            xhr.open("GET", "https://5d820f171c8ff70014ef438d.mockapi.io/1/ranking-list", true);
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState === 4) {
                                    if (xhr.status === 200) {
                                        try {
                                            data = JSON.parse(xhr.responseText);
                                            resolve();
                                        }
                                        catch (e) {
                                            reject(e);
                                        }
                                    }
                                    else {
                                        reject(new Error("Network error"));
                                    }
                                }
                            };
                            xhr.send();
                        })];
                    case 4:
                        // Simulator: use XMLHttpRequest
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Render ranking data to the scrollView.
     * Each item is a node with a label.
     */
    Platform.renderRankingList = function (scrollView, data) {
        var content = scrollView.content;
        content.removeAllChildren();
        // Ensure Layout component for vertical arrangement
        var layout = content.getComponent(cc.Layout);
        if (!layout) {
            layout = content.addComponent(cc.Layout);
            layout.type = cc.Layout.Type.VERTICAL;
            layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
            layout.spacingY = 8;
            layout.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;
            layout.paddingTop = 8;
            layout.paddingBottom = 8;
        }
        else {
            layout.spacingY = layout.spacingY || 8;
        }
        var ITEM_HEIGHT = 40;
        var MAX_ITEMS = 10;
        // Get current user info
        var currentUser = {
            name: "You",
            score: Info_1.UserInfo.level
        };
        // Find current user position in ranking
        var insertIndex = data.findIndex(function (item) { var _a; return currentUser.score >= ((_a = item.level) !== null && _a !== void 0 ? _a : 0); });
        if (insertIndex === -1)
            insertIndex = data.length; // If not in top, add at end
        // Build top 10 list, insert current user if needed
        var result = [];
        var inserted = false;
        for (var i = 0; i < data.length && result.length < MAX_ITEMS; i++) {
            if (!inserted && i === insertIndex) {
                result.push(__assign(__assign({}, currentUser), { highlight: true }));
                inserted = true;
            }
            if (result.length < MAX_ITEMS) {
                result.push(__assign(__assign({}, data[i]), { highlight: false }));
            }
        }
        // If not inserted and list < MAX_ITEMS, add current user at end
        if (!inserted && result.length < MAX_ITEMS) {
            result.push(__assign(__assign({}, currentUser), { highlight: true }));
        }
        // If list > MAX_ITEMS, remove last item
        if (result.length > MAX_ITEMS) {
            result = result.slice(0, MAX_ITEMS);
        }
        // Render items
        for (var i = 0; i < result.length; i++) {
            var item = result[i];
            Platform._addRankItem(content, item, i + 1, ITEM_HEIGHT, !!item.highlight);
        }
        layout.updateLayout && layout.updateLayout();
        scrollView.scrollToTop(0);
    };
    /**
     * Helper to add a ranking item node to content
     * @param content ScrollView content node
     * @param item Data item {name, score}
     * @param rank Displayed rank number
     * @param height Item height
     * @param highlight Is current user
     */
    Platform._addRankItem = function (content, item, rank, height, highlight) {
        var _a, _b;
        var node = new cc.Node("rank_item_" + rank);
        node.setContentSize(content.width, height);
        var label = node.addComponent(cc.Label);
        label.string = rank + ". " + item.name + " - " + ((_b = (_a = item.score) !== null && _a !== void 0 ? _a : item.level) !== null && _b !== void 0 ? _b : "");
        label.fontSize = 20;
        label.lineHeight = height;
        label.overflow = cc.Label.Overflow.CLAMP;
        // Highlight current user
        if (highlight) {
            label.node.color = cc.Color.YELLOW;
        }
        else {
            label.node.color = new cc.Color(128, 0, 128);
        }
        node.parent = content;
    };
    Platform.hideRank = function () {
        sdk_1.wxsdk.postMessage(WxCommands.RankSmall);
    };
    Platform.getRankList = function (callback, target) {
        console.log("[Platform]#获取排行榜数据");
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            return BKTool_1.default.getRankList(function (errorCode, list) {
                callback && callback.call(target, errorCode, list);
            });
        }
        else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        }
    };
    Platform.uploadScore = function (score) {
        console.log("[Platform]#上传分数");
        if (!score) {
            console.log("score 上传失败：null");
            return;
        }
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            BKTool_1.default.uploadScore(score);
        }
        else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // wxsdk.postMessage(WxCommands., score);
            sdk_1.wxsdk.uploadScore(score);
        }
        else {
            // Toast.make("#[Platform]#uploadScore")
        }
    };
    Platform.bannnerRefreshEnabled = true;
    Platform.onEnterForegroundSignal = new Signal_1.default();
    Platform.isAndroid = false;
    Platform.isIOS = false;
    Platform.configGetSignal = new Signal_1.default();
    return Platform;
}());
exports.default = Platform;

cc._RF.pop();