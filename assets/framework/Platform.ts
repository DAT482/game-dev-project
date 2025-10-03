import { wxsdk } from "./wxsdk/sdk";
import { Toast } from "./plugin_boosts/ui/ToastManager";
import BKTool from "./qqsdk/BKTool";
import Device from "./plugin_boosts/gamesys/Device";
import SpriteFrameCache from "./plugin_boosts/misc/SpriteFrameCache";
import Signal from "./plugin_boosts/misc/Signal";
import { event } from "./plugin_boosts/utils/EventManager";
import { UserInfo } from "../../assets/Game/Scripts/Info";

enum WxCommands {
    Hide = 99,
    Next,
    RankSmall,
    Rank,
}

export default class Platform {
    static bannnerRefreshEnabled = true;
    static onEnterForegroundSignal = new Signal();

    static isAndroid = false
    static isIOS = false;

    static getOpenID() {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // wechat 
            let userInfo = wxsdk.userInfo
            if (userInfo && userInfo.openID) {
                return userInfo.openID
            } else {
                return ""
            }
        } else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return GameStatusInfo.openId;
        } else {
            return "123"
        }
    }

    static getNick() {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return BKTool.getNick();
        } else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            return (wxsdk.userInfo && wxsdk.userInfo.nickName) || "自已"
        } else {
            return "玩家自已"
        }
    }

    static getHead() {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            return BKTool.getHead();
        } else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/QlHaicGZOD7do9LuX5W4APHYSrUBqVaGULuwISLUf35IyOOYZ3IXl7nF5mW36JiaQ9snziawrAvkknX41SmeYa9AQ/132"city:""country:""gender:1language:"zh_CN"nickName:"Damon Ren⁶⁶⁶"province:""
            let userInfo = wxsdk.userInfo
            if (userInfo && userInfo.avatarUrl) {
                return userInfo.avatarUrl
            } else {
                return "https://tank.wdfunny.com/speed_logo/2.jpg"
            }
        }
        return "https://tank.wdfunny.com/speed_logo/1.jpg"
    }

    private static loadHeadQQ(sp) {
        let self = this;
        let absolutePath = "GameSandBox://_head/" + GameStatusInfo.openId + ".jpg";
        let isExit = BK.FileUtil.isFileExist(absolutePath);
        cc.log(absolutePath + " is exit :" + isExit);
        //如果指定目录中存在此图像就直接显示否则从网络获取
        if (isExit) {
            cc.loader.load(absolutePath, function (err, texture) {
                if (err == null) {
                    sp.spriteFrame = new cc.SpriteFrame(texture);
                }
            });
        } else {
            BK.MQQ.Account.getHeadEx(GameStatusInfo.openId, function (oId, imgPath) {
                cc.log("openId:" + oId + " imgPath:" + imgPath);
                var image = new Image();
                image.onload = function () {
                    var tex = new cc.Texture2D();
                    tex.initWithElement(image);
                    tex.handleLoadedTexture();
                    sp.spriteFrame = new cc.SpriteFrame(tex);
                }
                image.src = imgPath;
            });
        }
    }

    static loadSelfHead(sprite) {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            this.loadHeadQQ(sprite);
        } else {
            SpriteFrameCache.instance.getSpriteFrame(Platform.getHead()).then(sf => sprite.spriteFrame = sf)
        }
    }

    static exit() {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wx.offShow(Platform.onEnterForeground)
            wx.offHide(Platform.onEnterBackground)
        } else if (cc.sys.QQ_PLAY == cc.sys.platform) {

        }
    }

    static configGetSignal: Signal = new Signal();

    static login() {
        this.isAndroid = cc.sys.os == "Android"
        console.log("================= os", cc.sys.os);
        this.isIOS = cc.sys.os == "iOS"
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wxsdk.login()
            wxsdk.requestConfig(data => {
                this.configGetSignal.fire(data)
            })
            // get conf 
            wx.onShow(Platform.onEnterForeground)
            wx.onHide(Platform.onEnterBackground)
        } else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            BKTool.login();
            BK.onEnterForeground(Platform.onEnterForeground);
            BK.onEnterBackground(Platform.onEnterBackground);
        }
    }

    static requestServerConfigs(name, callback, target) {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wxsdk.requestDB(name, callback, target)
        }
    }

    static getGameID() {
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            GameStatusInfo.gameId;
        }
        return "speed_wanyiwan";
    }


    static getLaunchOptions() {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            return wx.getLaunchOptionsSync()
        }
        return {}
    }




    static getCity() {
        return ""
    }

    static share(callback?, target?) {
        console.log("######开始分享")
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wxsdk.openShare();
            let t = new Date().getTime()
            Platform.onEnterForegroundSignal.on(() => {
                Platform.onEnterForegroundSignal.clear();
                let d = new Date().getTime() - t;
                if (d > 2333) {
                    setTimeout(_ => {
                        if (callback)
                            callback.call(target)
                    }, 500)
                } else {
                    //用户及时返回分享失败 
                    Toast.make("分享失败,请尝试换其它群分享")
                }
            })
        } else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            BKTool.share(v => {
                if (v == "success") {
                    callback && callback.call(target)
                } else {
                    // Toast.make("分享失败")
                }
            })
        } else {
            callback && callback.call(target)
        }
    }

    static watch_video(callback, target?) {
        console.log("######开始看视频")
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wxsdk.loadVideoAd((code, isEnded) => {
                if (code == "load") {
                    cc.audioEngine.pauseMusic();
                    Platform.bannnerRefreshEnabled = false;
                }
                else if (code == "close") {
                    Platform.bannnerRefreshEnabled = true;
                    if (!isEnded)
                        Toast.make("必须看完视频,才能获取奖励")
                    else
                        callback && callback.call(target)
                }
            })
        } else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            //关闭背景
            cc.audioEngine.pauseMusic();
            let isFinish = false;
            BKTool.loadVideoAd((v, video) => {
                if (v == "load") {
                    video.show()
                } else if (v == "finish") {
                    isFinish = true;

                } else if (v == "close") {
                    if (!isFinish)
                        Toast.make("必须看完视频,才能获取奖励")
                    else
                        callback && callback.call(target)
                }
            });
        } else {
            callback && callback.call(target)
        }
    }

    static showBannerAd() {
        console.log("######显示Banner广告")
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            wxsdk.showBannerAd();
        } else if (cc.sys.QQ_PLAY == cc.sys.platform) {
            BKTool.showBannerAd();
        } else {

        }
    }

    static initBannerAd(b = 1) {
        if (b == 0) return;
        if (cc.sys.QQ_PLAY == cc.sys.platform) {
            setInterval(_ => {
                console.log("######加载Banner广告")
                BKTool.hideBannerAd()
                BKTool.loadBannerAd(v => {
                    v == "load" && BKTool.showBannerAd();
                })
            }, 30000)
        } else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            setInterval(_ => {
                if (Platform.bannnerRefreshEnabled) {
                    console.log("######加载Banner广告")
                    wxsdk.hideBannerAd()
                    wxsdk.loadBannerAd(v => {
                        v == "load" && wxsdk.showBannerAd();
                    })
                }
            }, 40000)
        }
    }

    static jumpTo() {
        // var desGameId = 1234; //跳转的gameid，必须为数字
        // var extendInfo = ""; //额外参数，必须为字符串
        // BK.QQ.skipGame(desGameId, extendInfo);
    }

    static showRankDialog() {
        console.log("[Platform]#showRankDialog");
        Toast.make("#[Platform]#showRankDialog")

        // ViewManager.instance.show("Game/RankDialog")
    }

    // Andriod 发送游戏快捷方式到桌面

    static onEnterForeground() {
        console.log("=====================onEnterForeground=====================")
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            //onEnterForeground
            // Device.resumeMusic()
            cc.audioEngine.resumeMusic()
        } else {
            cc.audioEngine.resumeMusic()
        }
        Platform.onEnterForegroundSignal.fire();
        event.emit("onEnterForeground")
    }

    static onEnterBackground() {
        // BK.onEnterBackground(enterBackgroundListener);
        event.emit("onEnterBackground")
    }

    static onGameExit() {
        // BK.onGameClose(gameCloseListener);
    }

    static showSmallRank() {
        wxsdk.postMessage(WxCommands.RankSmall);
    }

    static async showRank(scrollView) {
        try {
            // Fetch ranking data from API (browser or simulator)
            const data = await Platform.fetchRankingData();

            // If no scrollView provided, just log the data
            if (!scrollView) {
                console.log("Ranking List:", data);
                return;
            }

            // Render ranking items to the scrollView
            Platform.renderRankingList(scrollView, data);

        } catch (err) {
            console.error("Error fetching ranking list:", err.message);
        }
    }

    /**
     * Fetch ranking data from API.
     * Uses fetch in browser, XMLHttpRequest in simulator.
     */
    static async fetchRankingData() {
        let data = [];
        if (typeof fetch !== "undefined") {
            // Browser: use fetch API
            const response = await fetch("https://5d820f171c8ff70014ef438d.mockapi.io/1/ranking-list");
            data = await response.json();
             
            
        } else {
            // Simulator: use XMLHttpRequest
            await new Promise<void>((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "https://5d820f171c8ff70014ef438d.mockapi.io/1/ranking-list", true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            try {
                                data = JSON.parse(xhr.responseText);
                                resolve();
                            } catch (e) {
                                reject(e);
                            }
                        } else {
                            reject(new Error("Network error"));
                        }
                    }
                };
                xhr.send();
            });
        }
        return data;
    }

    /**
     * Render ranking data to the scrollView.
     * Each item is a node with a label.
     */
    static renderRankingList(scrollView, data) {
    const content = scrollView.content;
    content.removeAllChildren();

    // Ensure Layout component for vertical arrangement
    let layout = content.getComponent(cc.Layout);
    if (!layout) {
        layout = content.addComponent(cc.Layout);
        layout.type = cc.Layout.Type.VERTICAL;
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        layout.spacingY = 8;
        layout.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;
        layout.paddingTop = 8;
        layout.paddingBottom = 8;
    } else {
        layout.spacingY = layout.spacingY || 8;
    }

    const ITEM_HEIGHT = 40;
    const MAX_ITEMS = 10;

    // Get current user info
    const currentUser = {
        name: "You",
        score: UserInfo.level
    };

    // Find current user position in ranking
    let insertIndex = data.findIndex(item => currentUser.score >= ( item.level ?? 0));
    if (insertIndex === -1) insertIndex = data.length; // If not in top, add at end

    // Build top 10 list, insert current user if needed
    let result = [];
    let inserted = false;
    for (let i = 0; i < data.length && result.length < MAX_ITEMS; i++) {
        if (!inserted && i === insertIndex) {
            result.push({ ...currentUser, highlight: true });
            inserted = true;
        }
        if (result.length < MAX_ITEMS) {
            result.push({ ...data[i], highlight: false });
        }
    }

    // If not inserted and list < MAX_ITEMS, add current user at end
    if (!inserted && result.length < MAX_ITEMS) {
        result.push({ ...currentUser, highlight: true });
    }

    // If list > MAX_ITEMS, remove last item
    if (result.length > MAX_ITEMS) {
        result = result.slice(0, MAX_ITEMS);
    }

    // Render items
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        Platform._addRankItem(content, item, i + 1, ITEM_HEIGHT, !!item.highlight);
    }

    layout.updateLayout && layout.updateLayout();
    scrollView.scrollToTop(0);
}

/**
 * Helper to add a ranking item node to content
 * @param content ScrollView content node
 * @param item Data item {name, score}
 * @param rank Displayed rank number
 * @param height Item height
 * @param highlight Is current user
 */
static _addRankItem(content, item, rank, height, highlight) {
    const node = new cc.Node("rank_item_" + rank);
    node.setContentSize(content.width, height);

    const label = node.addComponent(cc.Label);
    label.string = `${rank}. ${item.name} - ${item.score ?? item.level ?? ""}`;
    label.fontSize = 20;
    label.lineHeight = height;
    label.overflow = cc.Label.Overflow.CLAMP;

    // Highlight current user
    if (highlight) {
        label.node.color = cc.Color.YELLOW;
    }
    else{
        label.node.color = new cc.Color(128, 0, 128);
    }

    node.parent = content;
}


    static hideRank() {
        wxsdk.postMessage(WxCommands.RankSmall)
    }

    static getRankList(callback, target?) {
        console.log("[Platform]#获取排行榜数据");
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            return BKTool.getRankList((errorCode, list) => {
                callback && callback.call(target, errorCode, list);
            })
        } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {

        }
    }

    static uploadScore(score) {
        console.log("[Platform]#上传分数");
        if (!score) { console.log("score 上传失败：null"); return }
        if (cc.sys.platform == cc.sys.QQ_PLAY) {
            BKTool.uploadScore(score);
        } else if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            // wxsdk.postMessage(WxCommands., score);
            wxsdk.uploadScore(score)
        } else {
            // Toast.make("#[Platform]#uploadScore")
        }
    }

}