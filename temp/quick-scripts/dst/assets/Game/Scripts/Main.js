
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLCtCQUFrQztBQUNsQyxxREFBZ0Q7QUFDaEQsdUVBQWtFO0FBQ2xFLDRDQUF5QztBQUN6Qyw4RUFBc0U7QUFDdEUsK0JBQTZDO0FBQzdDLHNCQUFzQjtBQUNoQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQStHQztRQTNHRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQW1CLElBQUksQ0FBQzs7UUFtRzlCLGlCQUFpQjtJQUNyQixDQUFDO2FBL0dvQixJQUFJO0lBYXJCLHFCQUFNLEdBQU47UUFDSSxNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixrQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLGVBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixnQkFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDQSw2QkFBYyxHQUFkO1FBQ0csY0FBTyxFQUFFLENBQUM7SUFHZCxDQUFDO0lBQ0EsMkJBQVksR0FBWjtRQUNHLElBQU0sT0FBTyxHQUFHLGNBQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakQsY0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxD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QztDQS9HRCxBQStHQyxDQS9HaUMsRUFBRSxDQUFDLFNBQVMsR0ErRzdDO2tCQS9Hb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVmlld01hbmFnZXJcIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4vSW5mb1wiO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvUGxhdGZvcm1cIjtcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL2dhbWVzeXMvRGV2aWNlXCI7XG5pbXBvcnQgeyBSIH0gZnJvbSBcIi4vaGV4LWxpbmVzLWdhbWUvUmVzXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCB7IHQsIHNldExhbmcsIGdldExhbmcgfSBmcm9tIFwiLi9pMThuXCI7XG4vLyAuLi5leGlzdGluZyBjb2RlLi4uXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgaW5zdGFuY2U6IE1haW4gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRyYXdSZWRQb2ludDogY2MuTm9kZSA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2tpblJlZFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgaW1nX2VuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGltZ192aTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBNYWluLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgUGxhdGZvcm0ubG9naW4oKTtcbiAgICAgICAgVXNlckluZm8uaW5pdCgpO1xuICAgICAgICBEZXZpY2UucGxheU11c2ljKFIuYXVkaW9fYmdtKTtcbiAgICAgICAgIHRoaXMuaW5pdExhbmdCdXR0b24oKTtcbiAgICAgICAgdGhpcy51cGRhdGVMb2NhbGl6ZWRVSSgpO1xuICAgIH1cbiAgICAgaW5pdExhbmdCdXR0b24oKSB7XG4gICAgICAgIGdldExhbmcoKTtcbiAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgIG9uTGFuZ1N3aXRjaCgpIHtcbiAgICAgICAgY29uc3QgbmV3TGFuZyA9IGdldExhbmcoKSA9PT0gXCJlblwiID8gXCJ2aVwiIDogXCJlblwiO1xuICAgICAgICBzZXRMYW5nKG5ld0xhbmcpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsaXplZFVJKCk7XG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsaXplZFVJKCkge1xuICAgICAgICAvLyBD4bqtcCBuaOG6rXQgdGV4dFxuICAgICAgICAgICAgbGV0IHJhbmtpbmdCdXR0b24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYWluXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuNFwiKS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgcmFua2luZ0J1dHRvbi5zdHJpbmcgPSB0KFwicmFua19idXR0b25cIik7XG4gICAgICAgIGxldCBwbGF5QnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWFpblwiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bjNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIHBsYXlCdG4uc3RyaW5nID0gdChcInBsYXlfYnV0dG9uXCIpO1xuICAgICAgICBsZXQgc2tpbkJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1haW5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG4yXCIpLmdldENoaWxkQnlOYW1lKFwiTmV3IExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBza2luQnRuLnN0cmluZyA9IHQoXCJza2luXCIpO1xuICAgICAgICBsZXQgY2hhbGxlbmdlQnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWFpblwiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIikuZ2V0Q2hpbGRCeU5hbWUoXCJOZXcgTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGNoYWxsZW5nZUJ0bi5zdHJpbmcgPSB0KFwiY2hhbGxlbmdlXCIpO1xuICAgICAgICBsZXQgbGFuZ0J0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1haW5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJMYW5ndWFnZSBCdXR0b25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBcbiAgICAgICAgICAgIGxhbmdCdG4uc3ByaXRlRnJhbWUgPSBnZXRMYW5nKCkgPT09IFwiZW5cIiA/IHRoaXMuaW1nX2VuIDogdGhpcy5pbWdfdmk7XG4gICAgfVxuICAgIHJlZnJlc2hSZWRwb2ludHMoKSB7XG4gICAgICAgIGlmIChnLmlzTmV4dERheShVc2VySW5mby5mcmVlZHJhd1RpbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdSZWRQb2ludC5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdSZWRQb2ludC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNraW5SZWRQb2ludC5hY3RpdmUgPSBVc2VySW5mby5kaWFtb25kID49IDUwMCAmJiAhVXNlckluZm8uaXNBbGxVbmxvY2tlZCgpXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICAgICAgaWYgKGcuaXNOZXh0RGF5KFVzZXJJbmZvLmRhaWx5R2V0VGltZSkpIHtcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL0RhaWx5RGlhbG9nXCIpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZnJlc2hSZWRwb2ludHMoKTtcblxuICAgICAgICBpZiAoZy5pc05leHREYXkoVXNlckluZm8ubHVja3lWaWRlb1dhdGNoVGltZSkpIHtcbiAgICAgICAgICAgIFVzZXJJbmZvLmx1Y2t5VmlkZW9XYXRjaFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgICAgVXNlckluZm8ubHVja3lWaWRlb1dhdGNoQ291bnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgUGxhdGZvcm0uc2hvd0Jhbm5lckFkKCk7XG4gICAgfVxuICAgIG9uQnV0dG9uQ2xpY2soKXtcbiAgICAgICAgdGhpcy5vbkxhbmdTd2l0Y2goKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGNsaWNrX3BsYXkoKSB7XG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL0xldmVsRGlhbG9nXCIpXG4gICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLkxldmVsRGlhbG9nKTtcbiAgICB9XG5cbiAgICB0b2dnbGVfc2Z4KHQpIHtcbiAgICAgICAgRGV2aWNlLnNldFNvdW5kc0VuYWJsZSghdC5pc0NoZWNrZWQpXG4gICAgfVxuXG4gICAgY2xpY2tfc2tpbigpIHtcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvU2hvcERpYWxvZ1wiKVxuICAgIH1cblxuICAgIGNsaWNrX3JhbmsoKSB7XG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJ3ZWNoYXQvV3hSYW5rRGlhbG9nXCIpXG4gICAgfVxuXG4gICAgb25TaGFyZSgpIHtcblxuICAgIH1cblxuICAgIGNsaWNrX3NoYXJlKCkge1xuICAgICAgICBQbGF0Zm9ybS5zaGFyZSh0aGlzLm9uU2hhcmUpO1xuICAgIH1cblxuICAgIGNsaWNrX2x1Y2soKSB7XG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL0x1Y2t5RGlhbG9nXCIpXG4gICAgfVxuXG5cbiAgICBjbGlja19tb3JlKCkge1xuICAgICAgICBUb2FzdC5tYWtlKFwi5pWs6K+35pyf5b6FXCIpXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==