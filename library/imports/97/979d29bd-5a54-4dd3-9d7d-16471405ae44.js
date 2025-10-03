"use strict";
cc._RF.push(module, '979d2m9WlRN0519FkcUBa5E', 'Main');
// Game/Scripts/Main.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("../../framework/plugin_boosts/ui/ViewManager");
var Info_1 = require("./Info");
var Platform_1 = require("../../framework/Platform");
var Device_1 = require("../../framework/plugin_boosts/gamesys/Device");
var Res_1 = require("./hex-lines-game/Res");
var ToastManager_1 = require("../../framework/plugin_boosts/ui/ToastManager");
var i18n_1 = require("./i18n");
// ...existing code...
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawRedPoint = null;
        _this.skinRedPoint = null;
        _this.img_en = null;
        _this.img_vi = null;
        return _this;
        // update (dt) {}
    }
    Main_1 = Main;
    Main.prototype.onLoad = function () {
        Main_1.instance = this;
        Platform_1.default.login();
        Info_1.UserInfo.init();
        Device_1.default.playMusic(Res_1.R.audio_bgm);
        this.initLangButton();
        this.updateLocalizedUI();
    };
    Main.prototype.initLangButton = function () {
        i18n_1.getLang();
    };
    Main.prototype.onLangSwitch = function () {
        var newLang = i18n_1.getLang() === "en" ? "vi" : "en";
        i18n_1.setLang(newLang);
        this.updateLocalizedUI();
    };
    Main.prototype.updateLocalizedUI = function () {
        // Cập nhật text
        var rankingButton = this.node.getChildByName("main").getChildByName("btn4").getChildByName("New Label").getComponent(cc.Label);
        rankingButton.string = i18n_1.t("rank_button");
        var playBtn = this.node.getChildByName("main").getChildByName("btn3").getChildByName("New Label").getComponent(cc.Label);
        playBtn.string = i18n_1.t("play_button");
        var skinBtn = this.node.getChildByName("main").getChildByName("btn2").getChildByName("New Label").getComponent(cc.Label);
        skinBtn.string = i18n_1.t("skin");
        var challengeBtn = this.node.getChildByName("main").getChildByName("btn1").getChildByName("New Label").getComponent(cc.Label);
        challengeBtn.string = i18n_1.t("challenge");
        var langBtn = this.node.getChildByName("main").getChildByName("Language Button").getChildByName("Background").getComponent(cc.Sprite);
        langBtn.spriteFrame = i18n_1.getLang() === "en" ? this.img_en : this.img_vi;
    };
    Main.prototype.refreshRedpoints = function () {
        if (g.isNextDay(Info_1.UserInfo.freedrawTime)) {
            this.drawRedPoint.active = true;
        }
        else {
            this.drawRedPoint.active = false;
        }
        this.skinRedPoint.active = Info_1.UserInfo.diamond >= 500 && !Info_1.UserInfo.isAllUnlocked();
    };
    Main.prototype.start = function () {
        if (g.isNextDay(Info_1.UserInfo.dailyGetTime)) {
            ViewManager_1.default.instance.show("Game/DailyDialog");
        }
        this.refreshRedpoints();
        if (g.isNextDay(Info_1.UserInfo.luckyVideoWatchTime)) {
            Info_1.UserInfo.luckyVideoWatchTime = new Date().getTime();
            Info_1.UserInfo.luckyVideoWatchCount = 0;
        }
        Platform_1.default.showBannerAd();
    };
    Main.prototype.onButtonClick = function () {
        this.onLangSwitch();
    };
    Main.prototype.click_play = function () {
        ViewManager_1.default.instance.show("Game/LevelDialog");
        // this.node.addChild(this.LevelDialog);
    };
    Main.prototype.toggle_sfx = function (t) {
        Device_1.default.setSoundsEnable(!t.isChecked);
    };
    Main.prototype.click_skin = function () {
        ViewManager_1.default.instance.show("Game/ShopDialog");
    };
    Main.prototype.click_rank = function () {
        ViewManager_1.default.instance.show("wechat/WxRankDialog");
    };
    Main.prototype.onShare = function () {
    };
    Main.prototype.click_share = function () {
        Platform_1.default.share(this.onShare);
    };
    Main.prototype.click_luck = function () {
        ViewManager_1.default.instance.show("Game/LuckyDialog");
    };
    Main.prototype.click_more = function () {
        ToastManager_1.Toast.make("敬请期待");
    };
    var Main_1;
    Main.instance = null;
    __decorate([
        property(cc.Node)
    ], Main.prototype, "drawRedPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "skinRedPoint", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "img_en", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "img_vi", void 0);
    Main = Main_1 = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

cc._RF.pop();