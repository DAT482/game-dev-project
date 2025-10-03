
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxQbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW9DO0FBQ3BDLGdFQUF3RDtBQUN4RCx5Q0FBb0M7QUFFcEMsMEVBQXFFO0FBQ3JFLHNEQUFpRDtBQUNqRCxtRUFBMkQ7QUFDM0QsdURBQTBEO0FBRTFELElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNYLDRDQUFTLENBQUE7SUFDVCw2Q0FBSSxDQUFBO0lBQ0osdURBQVMsQ0FBQTtJQUNULDZDQUFJLENBQUE7QUFDUixDQUFDLEVBTEksVUFBVSxLQUFWLFVBQVUsUUFLZDtBQUVEO0lBQUE7SUFtZEEsQ0FBQztJQTVjVSxrQkFBUyxHQUFoQjtRQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsVUFBVTtZQUNWLElBQUksUUFBUSxHQUFHLFdBQUssQ0FBQyxRQUFRLENBQUE7WUFDN0IsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFBO2FBQ3pCO2lCQUFNO2dCQUNILE9BQU8sRUFBRSxDQUFBO2FBQ1o7U0FDSjthQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDMUMsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDO1NBQ2hDO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQTtTQUNmO0lBQ0wsQ0FBQztJQUVNLGdCQUFPLEdBQWQ7UUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ25DLE9BQU8sZ0JBQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMzQjthQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxX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Z0JBQU0sRUFBRSxDQUFDO0lBdVhsRCxlQUFDO0NBbmRELEFBbWRDLElBQUE7a0JBbmRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd3hzZGsgfSBmcm9tIFwiLi93eHNkay9zZGtcIjtcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4vcGx1Z2luX2Jvb3N0cy91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCBCS1Rvb2wgZnJvbSBcIi4vcXFzZGsvQktUb29sXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuL3BsdWdpbl9ib29zdHMvZ2FtZXN5cy9EZXZpY2VcIjtcbmltcG9ydCBTcHJpdGVGcmFtZUNhY2hlIGZyb20gXCIuL3BsdWdpbl9ib29zdHMvbWlzYy9TcHJpdGVGcmFtZUNhY2hlXCI7XG5pbXBvcnQgU2lnbmFsIGZyb20gXCIuL3BsdWdpbl9ib29zdHMvbWlzYy9TaWduYWxcIjtcbmltcG9ydCB7IGV2ZW50IH0gZnJvbSBcIi4vcGx1Z2luX2Jvb3N0cy91dGlscy9FdmVudE1hbmFnZXJcIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uL2Fzc2V0cy9HYW1lL1NjcmlwdHMvSW5mb1wiO1xuXG5lbnVtIFd4Q29tbWFuZHMge1xuICAgIEhpZGUgPSA5OSxcbiAgICBOZXh0LFxuICAgIFJhbmtTbWFsbCxcbiAgICBSYW5rLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSB7XG4gICAgc3RhdGljIGJhbm5uZXJSZWZyZXNoRW5hYmxlZCA9IHRydWU7XG4gICAgc3RhdGljIG9uRW50ZXJGb3JlZ3JvdW5kU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xuXG4gICAgc3RhdGljIGlzQW5kcm9pZCA9IGZhbHNlXG4gICAgc3RhdGljIGlzSU9TID0gZmFsc2U7XG5cbiAgICBzdGF0aWMgZ2V0T3BlbklEKCkge1xuICAgICAgICBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xuICAgICAgICAgICAgLy8gd2VjaGF0IFxuICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gd3hzZGsudXNlckluZm9cbiAgICAgICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5vcGVuSUQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlckluZm8ub3BlbklEXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gR2FtZVN0YXR1c0luZm8ub3BlbklkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMTIzXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXROaWNrKCkge1xuICAgICAgICBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gQktUb29sLmdldE5pY2soKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gKHd4c2RrLnVzZXJJbmZvICYmIHd4c2RrLnVzZXJJbmZvLm5pY2tOYW1lKSB8fCBcIuiHquW3slwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCLnjqnlrrboh6rlt7JcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEhlYWQoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuUVFfUExBWSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBCS1Rvb2wuZ2V0SGVhZCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcbiAgICAgICAgICAgIC8vIGF2YXRhclVybDpcImh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1FsSGFpY0daT0Q3ZG85THVYNVc0QVBIWVNyVUJxVmFHVUx1d0lTTFVmMzVJeU9PWVozSVhsN25GNW1XMzZKaWFROXNuemlhd3JBdmtrblg0MVNtZVlhOUFRLzEzMlwiY2l0eTpcIlwiY291bnRyeTpcIlwiZ2VuZGVyOjFsYW5ndWFnZTpcInpoX0NOXCJuaWNrTmFtZTpcIkRhbW9uIFJlbuKBtuKBtuKBtlwicHJvdmluY2U6XCJcIlxuICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gd3hzZGsudXNlckluZm9cbiAgICAgICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby5hdmF0YXJVcmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vdGFuay53ZGZ1bm55LmNvbS9zcGVlZF9sb2dvLzIuanBnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJodHRwczovL3Rhbmsud2RmdW5ueS5jb20vc3BlZWRfbG9nby8xLmpwZ1wiXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9hZEhlYWRRUShzcCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBhYnNvbHV0ZVBhdGggPSBcIkdhbWVTYW5kQm94Oi8vX2hlYWQvXCIgKyBHYW1lU3RhdHVzSW5mby5vcGVuSWQgKyBcIi5qcGdcIjtcbiAgICAgICAgbGV0IGlzRXhpdCA9IEJLLkZpbGVVdGlsLmlzRmlsZUV4aXN0KGFic29sdXRlUGF0aCk7XG4gICAgICAgIGNjLmxvZyhhYnNvbHV0ZVBhdGggKyBcIiBpcyBleGl0IDpcIiArIGlzRXhpdCk7XG4gICAgICAgIC8v5aaC5p6c5oyH5a6a55uu5b2V5Lit5a2Y5Zyo5q2k5Zu+5YOP5bCx55u05o6l5pi+56S65ZCm5YiZ5LuO572R57uc6I635Y+WXG4gICAgICAgIGlmIChpc0V4aXQpIHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKGFic29sdXRlUGF0aCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEJLLk1RUS5BY2NvdW50LmdldEhlYWRFeChHYW1lU3RhdHVzSW5mby5vcGVuSWQsIGZ1bmN0aW9uIChvSWQsIGltZ1BhdGgpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJvcGVuSWQ6XCIgKyBvSWQgKyBcIiBpbWdQYXRoOlwiICsgaW1nUGF0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4ID0gbmV3IGNjLlRleHR1cmUyRCgpO1xuICAgICAgICAgICAgICAgICAgICB0ZXguaW5pdFdpdGhFbGVtZW50KGltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4LmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3Auc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gaW1nUGF0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRTZWxmSGVhZChzcHJpdGUpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkSGVhZFFRKHNwcml0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTcHJpdGVGcmFtZUNhY2hlLmluc3RhbmNlLmdldFNwcml0ZUZyYW1lKFBsYXRmb3JtLmdldEhlYWQoKSkudGhlbihzZiA9PiBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzZilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBleGl0KCkge1xuICAgICAgICBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xuICAgICAgICAgICAgd3gub2ZmU2hvdyhQbGF0Zm9ybS5vbkVudGVyRm9yZWdyb3VuZClcbiAgICAgICAgICAgIHd4Lm9mZkhpZGUoUGxhdGZvcm0ub25FbnRlckJhY2tncm91bmQpXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjb25maWdHZXRTaWduYWw6IFNpZ25hbCA9IG5ldyBTaWduYWwoKTtcblxuICAgIHN0YXRpYyBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5pc0FuZHJvaWQgPSBjYy5zeXMub3MgPT0gXCJBbmRyb2lkXCJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PSBvc1wiLCBjYy5zeXMub3MpO1xuICAgICAgICB0aGlzLmlzSU9TID0gY2Muc3lzLm9zID09IFwiaU9TXCJcbiAgICAgICAgaWYgKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHd4c2RrLmxvZ2luKClcbiAgICAgICAgICAgIHd4c2RrLnJlcXVlc3RDb25maWcoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdHZXRTaWduYWwuZmlyZShkYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIGdldCBjb25mIFxuICAgICAgICAgICAgd3gub25TaG93KFBsYXRmb3JtLm9uRW50ZXJGb3JlZ3JvdW5kKVxuICAgICAgICAgICAgd3gub25IaWRlKFBsYXRmb3JtLm9uRW50ZXJCYWNrZ3JvdW5kKVxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5RUV9QTEFZID09IGNjLnN5cy5wbGF0Zm9ybSkge1xuICAgICAgICAgICAgQktUb29sLmxvZ2luKCk7XG4gICAgICAgICAgICBCSy5vbkVudGVyRm9yZWdyb3VuZChQbGF0Zm9ybS5vbkVudGVyRm9yZWdyb3VuZCk7XG4gICAgICAgICAgICBCSy5vbkVudGVyQmFja2dyb3VuZChQbGF0Zm9ybS5vbkVudGVyQmFja2dyb3VuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcmVxdWVzdFNlcnZlckNvbmZpZ3MobmFtZSwgY2FsbGJhY2ssIHRhcmdldCkge1xuICAgICAgICBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xuICAgICAgICAgICAgd3hzZGsucmVxdWVzdERCKG5hbWUsIGNhbGxiYWNrLCB0YXJnZXQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0R2FtZUlEKCkge1xuICAgICAgICBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICBHYW1lU3RhdHVzSW5mby5nYW1lSWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwic3BlZWRfd2FueWl3YW5cIjtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBnZXRMYXVuY2hPcHRpb25zKCkge1xuICAgICAgICBpZiAoY2Muc3lzLldFQ0hBVF9HQU1FID09IGNjLnN5cy5wbGF0Zm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIHd4LmdldExhdW5jaE9wdGlvbnNTeW5jKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge31cbiAgICB9XG5cblxuXG5cbiAgICBzdGF0aWMgZ2V0Q2l0eSgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hhcmUoY2FsbGJhY2s/LCB0YXJnZXQ/KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMj5byA5aeL5YiG5LqrXCIpXG4gICAgICAgIGlmIChjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICB3eHNkay5vcGVuU2hhcmUoKTtcbiAgICAgICAgICAgIGxldCB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgICAgIFBsYXRmb3JtLm9uRW50ZXJGb3JlZ3JvdW5kU2lnbmFsLm9uKCgpID0+IHtcbiAgICAgICAgICAgICAgICBQbGF0Zm9ybS5vbkVudGVyRm9yZWdyb3VuZFNpZ25hbC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0O1xuICAgICAgICAgICAgICAgIGlmIChkID4gMjMzMykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KF8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy/nlKjmiLflj4rml7bov5Tlm57liIbkuqvlpLHotKUgXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLliIbkuqvlpLHotKUs6K+35bCd6K+V5o2i5YW25a6D576k5YiG5LqrXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuUVFfUExBWSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcbiAgICAgICAgICAgIEJLVG9vbC5zaGFyZSh2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodiA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKHRhcmdldClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwi5YiG5Lqr5aSx6LSlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHdhdGNoX3ZpZGVvKGNhbGxiYWNrLCB0YXJnZXQ/KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMj5byA5aeL55yL6KeG6aKRXCIpXG4gICAgICAgIGlmIChjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICB3eHNkay5sb2FkVmlkZW9BZCgoY29kZSwgaXNFbmRlZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb2RlID09IFwibG9hZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcbiAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm0uYmFubm5lclJlZnJlc2hFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvZGUgPT0gXCJjbG9zZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtLmJhbm5uZXJSZWZyZXNoRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNFbmRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLlv4XpobvnnIvlrozop4bpopEs5omN6IO96I635Y+W5aWW5YqxXCIpXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLlFRX1BMQVkgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICAvL+WFs+mXreiDjOaZr1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xuICAgICAgICAgICAgbGV0IGlzRmluaXNoID0gZmFsc2U7XG4gICAgICAgICAgICBCS1Rvb2wubG9hZFZpZGVvQWQoKHYsIHZpZGVvKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gXCJsb2FkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc2hvdygpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2ID09IFwiZmluaXNoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGaW5pc2ggPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2ID09IFwiY2xvc2VcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRmluaXNoKVxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIuW/hemhu+eci+WujOinhumikSzmiY3og73ojrflj5blpZblirFcIilcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKHRhcmdldClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzaG93QmFubmVyQWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMj5pi+56S6QmFubmVy5bm/5ZGKXCIpXG4gICAgICAgIGlmIChjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICB3eHNkay5zaG93QmFubmVyQWQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuUVFfUExBWSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcbiAgICAgICAgICAgIEJLVG9vbC5zaG93QmFubmVyQWQoKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRCYW5uZXJBZChiID0gMSkge1xuICAgICAgICBpZiAoYiA9PSAwKSByZXR1cm47XG4gICAgICAgIGlmIChjYy5zeXMuUVFfUExBWSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKF8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMj5Yqg6L29QmFubmVy5bm/5ZGKXCIpXG4gICAgICAgICAgICAgICAgQktUb29sLmhpZGVCYW5uZXJBZCgpXG4gICAgICAgICAgICAgICAgQktUb29sLmxvYWRCYW5uZXJBZCh2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdiA9PSBcImxvYWRcIiAmJiBCS1Rvb2wuc2hvd0Jhbm5lckFkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDMwMDAwKVxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5XRUNIQVRfR0FNRSA9PSBjYy5zeXMucGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKF8gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChQbGF0Zm9ybS5iYW5ubmVyUmVmcmVzaEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyPliqDovb1CYW5uZXLlub/lkYpcIilcbiAgICAgICAgICAgICAgICAgICAgd3hzZGsuaGlkZUJhbm5lckFkKClcbiAgICAgICAgICAgICAgICAgICAgd3hzZGsubG9hZEJhbm5lckFkKHYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9PSBcImxvYWRcIiAmJiB3eHNkay5zaG93QmFubmVyQWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA0MDAwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBqdW1wVG8oKSB7XG4gICAgICAgIC8vIHZhciBkZXNHYW1lSWQgPSAxMjM0OyAvL+i3s+i9rOeahGdhbWVpZO+8jOW/hemhu+S4uuaVsOWtl1xuICAgICAgICAvLyB2YXIgZXh0ZW5kSW5mbyA9IFwiXCI7IC8v6aKd5aSW5Y+C5pWw77yM5b+F6aG75Li65a2X56ym5LiyXG4gICAgICAgIC8vIEJLLlFRLnNraXBHYW1lKGRlc0dhbWVJZCwgZXh0ZW5kSW5mbyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dSYW5rRGlhbG9nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltQbGF0Zm9ybV0jc2hvd1JhbmtEaWFsb2dcIik7XG4gICAgICAgIFRvYXN0Lm1ha2UoXCIjW1BsYXRmb3JtXSNzaG93UmFua0RpYWxvZ1wiKVxuXG4gICAgICAgIC8vIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL1JhbmtEaWFsb2dcIilcbiAgICB9XG5cbiAgICAvLyBBbmRyaW9kIOWPkemAgea4uOaIj+W/q+aNt+aWueW8j+WIsOahjOmdolxuXG4gICAgc3RhdGljIG9uRW50ZXJGb3JlZ3JvdW5kKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PW9uRW50ZXJGb3JlZ3JvdW5kPT09PT09PT09PT09PT09PT09PT09XCIpXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLlFRX1BMQVkpIHtcbiAgICAgICAgICAgIC8vb25FbnRlckZvcmVncm91bmRcbiAgICAgICAgICAgIC8vIERldmljZS5yZXN1bWVNdXNpYygpXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVNdXNpYygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVNdXNpYygpXG4gICAgICAgIH1cbiAgICAgICAgUGxhdGZvcm0ub25FbnRlckZvcmVncm91bmRTaWduYWwuZmlyZSgpO1xuICAgICAgICBldmVudC5lbWl0KFwib25FbnRlckZvcmVncm91bmRcIilcbiAgICB9XG5cbiAgICBzdGF0aWMgb25FbnRlckJhY2tncm91bmQoKSB7XG4gICAgICAgIC8vIEJLLm9uRW50ZXJCYWNrZ3JvdW5kKGVudGVyQmFja2dyb3VuZExpc3RlbmVyKTtcbiAgICAgICAgZXZlbnQuZW1pdChcIm9uRW50ZXJCYWNrZ3JvdW5kXCIpXG4gICAgfVxuXG4gICAgc3RhdGljIG9uR2FtZUV4aXQoKSB7XG4gICAgICAgIC8vIEJLLm9uR2FtZUNsb3NlKGdhbWVDbG9zZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvd1NtYWxsUmFuaygpIHtcbiAgICAgICAgd3hzZGsucG9zdE1lc3NhZ2UoV3hDb21tYW5kcy5SYW5rU21hbGwpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBzaG93UmFuayhzY3JvbGxWaWV3KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBGZXRjaCByYW5raW5nIGRhdGEgZnJvbSBBUEkgKGJyb3dzZXIgb3Igc2ltdWxhdG9yKVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFBsYXRmb3JtLmZldGNoUmFua2luZ0RhdGEoKTtcblxuICAgICAgICAgICAgLy8gSWYgbm8gc2Nyb2xsVmlldyBwcm92aWRlZCwganVzdCBsb2cgdGhlIGRhdGFcbiAgICAgICAgICAgIGlmICghc2Nyb2xsVmlldykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmFua2luZyBMaXN0OlwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbmRlciByYW5raW5nIGl0ZW1zIHRvIHRoZSBzY3JvbGxWaWV3XG4gICAgICAgICAgICBQbGF0Zm9ybS5yZW5kZXJSYW5raW5nTGlzdChzY3JvbGxWaWV3LCBkYXRhKTtcblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByYW5raW5nIGxpc3Q6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHJhbmtpbmcgZGF0YSBmcm9tIEFQSS5cbiAgICAgKiBVc2VzIGZldGNoIGluIGJyb3dzZXIsIFhNTEh0dHBSZXF1ZXN0IGluIHNpbXVsYXRvci5cbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgZmV0Y2hSYW5raW5nRGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmZXRjaCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgLy8gQnJvd3NlcjogdXNlIGZldGNoIEFQSVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vNWQ4MjBmMTcxYzhmZjcwMDE0ZWY0MzhkLm1vY2thcGkuaW8vMS9yYW5raW5nLWxpc3RcIik7XG4gICAgICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTaW11bGF0b3I6IHVzZSBYTUxIdHRwUmVxdWVzdFxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly81ZDgyMGYxNzFjOGZmNzAwMTRlZjQzOGQubW9ja2FwaS5pby8xL3JhbmtpbmctbGlzdFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIk5ldHdvcmsgZXJyb3JcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHJhbmtpbmcgZGF0YSB0byB0aGUgc2Nyb2xsVmlldy5cbiAgICAgKiBFYWNoIGl0ZW0gaXMgYSBub2RlIHdpdGggYSBsYWJlbC5cbiAgICAgKi9cbiAgICBzdGF0aWMgcmVuZGVyUmFua2luZ0xpc3Qoc2Nyb2xsVmlldywgZGF0YSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBzY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgLy8gRW5zdXJlIExheW91dCBjb21wb25lbnQgZm9yIHZlcnRpY2FsIGFycmFuZ2VtZW50XG4gICAgbGV0IGxheW91dCA9IGNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XG4gICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0ID0gY29udGVudC5hZGRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICAgICAgbGF5b3V0LnR5cGUgPSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDtcbiAgICAgICAgbGF5b3V0LnJlc2l6ZU1vZGUgPSBjYy5MYXlvdXQuUmVzaXplTW9kZS5DT05UQUlORVI7XG4gICAgICAgIGxheW91dC5zcGFjaW5nWSA9IDg7XG4gICAgICAgIGxheW91dC52ZXJ0aWNhbERpcmVjdGlvbiA9IGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NO1xuICAgICAgICBsYXlvdXQucGFkZGluZ1RvcCA9IDg7XG4gICAgICAgIGxheW91dC5wYWRkaW5nQm90dG9tID0gODtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsYXlvdXQuc3BhY2luZ1kgPSBsYXlvdXQuc3BhY2luZ1kgfHwgODtcbiAgICB9XG5cbiAgICBjb25zdCBJVEVNX0hFSUdIVCA9IDQwO1xuICAgIGNvbnN0IE1BWF9JVEVNUyA9IDEwO1xuXG4gICAgLy8gR2V0IGN1cnJlbnQgdXNlciBpbmZvXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSB7XG4gICAgICAgIG5hbWU6IFwiWW91XCIsXG4gICAgICAgIHNjb3JlOiBVc2VySW5mby5sZXZlbFxuICAgIH07XG5cbiAgICAvLyBGaW5kIGN1cnJlbnQgdXNlciBwb3NpdGlvbiBpbiByYW5raW5nXG4gICAgbGV0IGluc2VydEluZGV4ID0gZGF0YS5maW5kSW5kZXgoaXRlbSA9PiBjdXJyZW50VXNlci5zY29yZSA+PSAoIGl0ZW0ubGV2ZWwgPz8gMCkpO1xuICAgIGlmIChpbnNlcnRJbmRleCA9PT0gLTEpIGluc2VydEluZGV4ID0gZGF0YS5sZW5ndGg7IC8vIElmIG5vdCBpbiB0b3AsIGFkZCBhdCBlbmRcblxuICAgIC8vIEJ1aWxkIHRvcCAxMCBsaXN0LCBpbnNlcnQgY3VycmVudCB1c2VyIGlmIG5lZWRlZFxuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBsZXQgaW5zZXJ0ZWQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoICYmIHJlc3VsdC5sZW5ndGggPCBNQVhfSVRFTVM7IGkrKykge1xuICAgICAgICBpZiAoIWluc2VydGVkICYmIGkgPT09IGluc2VydEluZGV4KSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IC4uLmN1cnJlbnRVc2VyLCBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpbnNlcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPCBNQVhfSVRFTVMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgLi4uZGF0YVtpXSwgaGlnaGxpZ2h0OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG5vdCBpbnNlcnRlZCBhbmQgbGlzdCA8IE1BWF9JVEVNUywgYWRkIGN1cnJlbnQgdXNlciBhdCBlbmRcbiAgICBpZiAoIWluc2VydGVkICYmIHJlc3VsdC5sZW5ndGggPCBNQVhfSVRFTVMpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goeyAuLi5jdXJyZW50VXNlciwgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8vIElmIGxpc3QgPiBNQVhfSVRFTVMsIHJlbW92ZSBsYXN0IGl0ZW1cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IE1BWF9JVEVNUykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgTUFYX0lURU1TKTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgaXRlbXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gcmVzdWx0W2ldO1xuICAgICAgICBQbGF0Zm9ybS5fYWRkUmFua0l0ZW0oY29udGVudCwgaXRlbSwgaSArIDEsIElURU1fSEVJR0hULCAhIWl0ZW0uaGlnaGxpZ2h0KTtcbiAgICB9XG5cbiAgICBsYXlvdXQudXBkYXRlTGF5b3V0ICYmIGxheW91dC51cGRhdGVMYXlvdXQoKTtcbiAgICBzY3JvbGxWaWV3LnNjcm9sbFRvVG9wKDApO1xufVxuXG4vKipcbiAqIEhlbHBlciB0byBhZGQgYSByYW5raW5nIGl0ZW0gbm9kZSB0byBjb250ZW50XG4gKiBAcGFyYW0gY29udGVudCBTY3JvbGxWaWV3IGNvbnRlbnQgbm9kZVxuICogQHBhcmFtIGl0ZW0gRGF0YSBpdGVtIHtuYW1lLCBzY29yZX1cbiAqIEBwYXJhbSByYW5rIERpc3BsYXllZCByYW5rIG51bWJlclxuICogQHBhcmFtIGhlaWdodCBJdGVtIGhlaWdodFxuICogQHBhcmFtIGhpZ2hsaWdodCBJcyBjdXJyZW50IHVzZXJcbiAqL1xuc3RhdGljIF9hZGRSYW5rSXRlbShjb250ZW50LCBpdGVtLCByYW5rLCBoZWlnaHQsIGhpZ2hsaWdodCkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZShcInJhbmtfaXRlbV9cIiArIHJhbmspO1xuICAgIG5vZGUuc2V0Q29udGVudFNpemUoY29udGVudC53aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IGxhYmVsID0gbm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIGxhYmVsLnN0cmluZyA9IGAke3Jhbmt9LiAke2l0ZW0ubmFtZX0gLSAke2l0ZW0uc2NvcmUgPz8gaXRlbS5sZXZlbCA/PyBcIlwifWA7XG4gICAgbGFiZWwuZm9udFNpemUgPSAyMDtcbiAgICBsYWJlbC5saW5lSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGxhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuQ0xBTVA7XG5cbiAgICAvLyBIaWdobGlnaHQgY3VycmVudCB1c2VyXG4gICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICBsYWJlbC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBsYWJlbC5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDEyOCwgMCwgMTI4KTtcbiAgICB9XG5cbiAgICBub2RlLnBhcmVudCA9IGNvbnRlbnQ7XG59XG5cblxuICAgIHN0YXRpYyBoaWRlUmFuaygpIHtcbiAgICAgICAgd3hzZGsucG9zdE1lc3NhZ2UoV3hDb21tYW5kcy5SYW5rU21hbGwpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFJhbmtMaXN0KGNhbGxiYWNrLCB0YXJnZXQ/KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1BsYXRmb3JtXSPojrflj5bmjpLooYzmppzmlbDmja5cIik7XG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLlFRX1BMQVkpIHtcbiAgICAgICAgICAgIHJldHVybiBCS1Rvb2wuZ2V0UmFua0xpc3QoKGVycm9yQ29kZSwgbGlzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCBlcnJvckNvZGUsIGxpc3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB1cGxvYWRTY29yZShzY29yZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltQbGF0Zm9ybV0j5LiK5Lyg5YiG5pWwXCIpO1xuICAgICAgICBpZiAoIXNjb3JlKSB7IGNvbnNvbGUubG9nKFwic2NvcmUg5LiK5Lyg5aSx6LSl77yabnVsbFwiKTsgcmV0dXJuIH1cbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuUVFfUExBWSkge1xuICAgICAgICAgICAgQktUb29sLnVwbG9hZFNjb3JlKHNjb3JlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMuV0VDSEFUX0dBTUUgPT0gY2Muc3lzLnBsYXRmb3JtKSB7XG4gICAgICAgICAgICAvLyB3eHNkay5wb3N0TWVzc2FnZShXeENvbW1hbmRzLiwgc2NvcmUpO1xuICAgICAgICAgICAgd3hzZGsudXBsb2FkU2NvcmUoc2NvcmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUb2FzdC5tYWtlKFwiI1tQbGF0Zm9ybV0jdXBsb2FkU2NvcmVcIilcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==