
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/WinDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d78f0lU+VOW7rncsSfgC5s', 'WinDialog');
// Game/Scripts/ui/WinDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Info_1 = require("../Info");
var Platform_1 = require("../../../framework/Platform");
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var Consts_1 = require("../hex-lines-game/Consts");
var i18n_1 = require("../i18n");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WinDialog = /** @class */ (function (_super) {
    __extends(WinDialog, _super);
    function WinDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ps = null;
        _this.levelLabel = null;
        _this.stepLabel = null;
        _this.timeLabel = null;
        _this.percentLabel = null;
        _this.diamondLabel = null;
        _this.diamondNode = null;
        return _this;
    }
    WinDialog.prototype.onLoad = function () { };
    WinDialog.prototype.start = function () { };
    WinDialog.prototype.onEnable = function () {
    };
    WinDialog.prototype.onShown = function () {
        this.ps.resetSystem();
        Platform_1.default.showSmallRank();
        var string = "";
        string = i18n_1.t("level") + " %s";
        this.node.getChildByName("frame3").getChildByName("labelfullMessage").getComponent(cc.Label).string = i18n_1.t("titleWin");
        this.node.getChildByName("frame3").getChildByName("labelStep").getComponent(cc.Label).string = i18n_1.t("step");
        this.node.getChildByName("banner").getChildByName("New Label").getComponent(cc.Label).string = i18n_1.t("completed");
        this.node.getChildByName("btn3").getChildByName("New Label").getComponent(cc.Label).string = i18n_1.t("continue");
        this.node.getChildByName("btn2").getChildByName("New Label").getComponent(cc.Label).string = i18n_1.t("skin");
        this.node.getChildByName("btn1").getChildByName("New Label").getComponent(cc.Label).string = i18n_1.t("challenge");
        this.node.getChildByName("frame3").getChildByName("labelDiamond").getComponent(cc.Label).string = i18n_1.t("reward");
        this.node.getChildByName("frame3").getChildByName("labelCompliment").getComponent(cc.Label).string = i18n_1.t("compiment");
        this.node.getChildByName("frame3").getChildByName("radius_rect").getChildByName("New Label").getComponent(cc.Label).string = i18n_1.t("rank_button");
        this.levelLabel.string = cc.js.formatStr(string, Info_1.UserInfo.currentLevel);
        this.stepLabel.string = Info_1.UserInfo.stepUsed.toString();
        this.timeLabel.string = Info_1.UserInfo.timePassed.toString() + "s";
        var p = g.decreaseFomula(0.99, 0.3, Info_1.UserInfo.timePassed + Info_1.UserInfo.stepUsed, Info_1.UserInfo.currentLevel + 50);
        this.percentLabel.string = (p * 100).toFixed(0) + "%";
        this.diamondNode.active = false;
        if (Info_1.UserInfo.level == Info_1.UserInfo.currentLevel) {
            var lv_1 = Info_1.UserInfo.level;
            var choise_1 = Info_1.UserInfo.getChoice(Info_1.ChoiceType.Levelup);
            if (choise_1 > 0 && Math.random() > 0.5 && lv_1 >= 3) {
                this.scheduleOnce(function (_) {
                    ViewManager_1.default.instance.show("Game/LevelupDialog", lv_1, p);
                }, 1);
                this.diamondNode.active = false;
            }
            else {
                this.diamondNode.active = true;
                p = Math.min(p, 1);
                var diamond = Math.floor(Math.max(30 * p, 10));
                this.diamondLabel.string = diamond.toString();
                Info_1.UserInfo.addDiamond(diamond);
            }
            Info_1.UserInfo.level = lv_1 + 1;
            Platform_1.default.uploadScore(Info_1.UserInfo.level);
            Info_1.UserInfo.save();
        }
        var choise = Info_1.UserInfo.getChoice(Info_1.ChoiceType.HB);
        if (choise == 1) {
            if (Info_1.UserInfo.level >= 3) {
                if (!Info_1.UserInfo.isUnlock(Consts_1.default.FreeSkinId)) {
                    ViewManager_1.default.instance.show("Game/HbDialog");
                }
            }
        }
    };
    WinDialog.prototype.click_rank = function () {
        ViewManager_1.default.instance.show("wechat/WxRankDialog");
    };
    WinDialog.prototype.click_shop = function () {
        ViewManager_1.default.instance.show("Game/ShopDialog");
    };
    WinDialog.prototype.click_next = function () {
        Info_1.UserInfo.currentLevel = Info_1.UserInfo.currentLevel + 1;
        cc.director.loadScene("Game");
    };
    WinDialog.prototype.click_home = function () {
        cc.director.loadScene("Main");
    };
    WinDialog.prototype.click_share = function () {
        Platform_1.default.share();
    };
    __decorate([
        property(cc.ParticleSystem)
    ], WinDialog.prototype, "ps", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "stepLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "timeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "percentLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "diamondLabel", void 0);
    __decorate([
        property(cc.Node)
    ], WinDialog.prototype, "diamondNode", void 0);
    WinDialog = __decorate([
        ccclass
    ], WinDialog);
    return WinDialog;
}(cc.Component));
exports.default = WinDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFdpbkRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStDO0FBQy9DLHdEQUFtRDtBQUNuRCwrRUFBMEU7QUFDMUUsbURBQThDO0FBQzlDLGdDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWtIQztRQTlHRyxRQUFFLEdBQXNCLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7O0lBNEZoQyxDQUFDO0lBekZHLDBCQUFNLEdBQU4sY0FBVyxDQUFDO0lBQ1oseUJBQUssR0FBTCxjQUFVLENBQUM7SUFDRCw0QkFBUSxHQUFsQjtJQUdBLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QixrQkFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUN4QixNQUFNLEdBQU0sUUFBQyxDQUFDLE9BQU8sQ0FBQyxRQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLFFBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLFFBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRzlHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMs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UUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1U7SUF0QlgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWtIN0I7SUFBRCxnQkFBQztDQWxIRCxBQWtIQyxDQWxIc0MsRUFBRSxDQUFDLFNBQVMsR0FrSGxEO2tCQWxIb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbmZvLCBDaG9pY2VUeXBlIH0gZnJvbSBcIi4uL0luZm9cIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL1BsYXRmb3JtXCI7XG5pbXBvcnQgVmlld01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1ZpZXdNYW5hZ2VyXCI7XG5pbXBvcnQgQ29uc3RzIGZyb20gXCIuLi9oZXgtbGluZXMtZ2FtZS9Db25zdHNcIjtcbmltcG9ydCB7IHQsIHNldExhbmcsIGdldExhbmcgfSBmcm9tIFwiLi4vaTE4blwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luRGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxuICAgIHBzOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWxMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHN0ZXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpbWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHBlcmNlbnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGRpYW1vbmRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZGlhbW9uZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBvbkxvYWQoKSB7IH1cbiAgICBzdGFydCgpIHsgfVxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcblxuXG4gICAgfVxuXG4gICAgb25TaG93bigpIHtcbiAgICAgICAgdGhpcy5wcy5yZXNldFN5c3RlbSgpO1xuICAgICAgICBQbGF0Zm9ybS5zaG93U21hbGxSYW5rKCk7XG4gICAgICAgIGxldCBzdHJpbmc6IFN0cmluZyA9IFwiXCI7XG4gICAgICAgIHN0cmluZyA9IGAke3QoXCJsZXZlbFwiKX0gJXNgO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmcmFtZTNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbGZ1bGxNZXNzYWdlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdChcInRpdGxlV2luXCIpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmcmFtZTNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFN0ZXBcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0KFwic3RlcFwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFubmVyXCIpLmdldENoaWxkQnlOYW1lKFwiTmV3IExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuM1wiKS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQoXCJjb250aW51ZVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuMlwiKS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQoXCJza2luXCIpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG4xXCIpLmdldENoaWxkQnlOYW1lKFwiTmV3IExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdChcImNoYWxsZW5nZVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZnJhbWUzXCIpLmdldENoaWxkQnlOYW1lKFwibGFiZWxEaWFtb25kXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdChcInJld2FyZFwiKTtcblxuXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lM1wiKS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsQ29tcGxpbWVudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQoXCJjb21waW1lbnRcIik7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYW1lM1wiKS5nZXRDaGlsZEJ5TmFtZShcInJhZGl1c19yZWN0XCIpLmdldENoaWxkQnlOYW1lKFwiTmV3IExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdChcInJhbmtfYnV0dG9uXCIpO1xuXG5cblxuXG5cblxuXG5cblxuICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gY2MuanMuZm9ybWF0U3RyKHN0cmluZywgVXNlckluZm8uY3VycmVudExldmVsKVxuICAgICAgICB0aGlzLnN0ZXBMYWJlbC5zdHJpbmcgPSBVc2VySW5mby5zdGVwVXNlZC50b1N0cmluZygpXG4gICAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IFVzZXJJbmZvLnRpbWVQYXNzZWQudG9TdHJpbmcoKSArIFwic1wiO1xuICAgICAgICBsZXQgcCA9IGcuZGVjcmVhc2VGb211bGEoMC45OSwgMC4zLCBVc2VySW5mby50aW1lUGFzc2VkICsgVXNlckluZm8uc3RlcFVzZWQsIFVzZXJJbmZvLmN1cnJlbnRMZXZlbCArIDUwKVxuICAgICAgICB0aGlzLnBlcmNlbnRMYWJlbC5zdHJpbmcgPSAocCAqIDEwMCkudG9GaXhlZCgwKSArIFwiJVwiXG5cbiAgICAgICAgdGhpcy5kaWFtb25kTm9kZS5hY3RpdmUgPSBmYWxzZVxuXG4gICAgICAgIGlmIChVc2VySW5mby5sZXZlbCA9PSBVc2VySW5mby5jdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgICAgIGxldCBsdiA9IFVzZXJJbmZvLmxldmVsXG4gICAgICAgICAgICBsZXQgY2hvaXNlID0gVXNlckluZm8uZ2V0Q2hvaWNlKENob2ljZVR5cGUuTGV2ZWx1cCk7XG4gICAgICAgICAgICBpZiAoY2hvaXNlID4gMCAmJiBNYXRoLnJhbmRvbSgpID4gMC41ICYmIGx2ID49IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvTGV2ZWx1cERpYWxvZ1wiLCBsdiwgcClcbiAgICAgICAgICAgICAgICB9LCAxKVxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZE5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWFtb25kTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHAgPSBNYXRoLm1pbihwLCAxKTtcbiAgICAgICAgICAgICAgICBsZXQgZGlhbW9uZCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMzAgKiBwLCAxMCkpXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFtb25kTGFiZWwuc3RyaW5nID0gZGlhbW9uZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmFkZERpYW1vbmQoZGlhbW9uZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBVc2VySW5mby5sZXZlbCA9IGx2ICsgMVxuICAgICAgICAgICAgUGxhdGZvcm0udXBsb2FkU2NvcmUoVXNlckluZm8ubGV2ZWwpO1xuICAgICAgICAgICAgVXNlckluZm8uc2F2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaG9pc2UgPSBVc2VySW5mby5nZXRDaG9pY2UoQ2hvaWNlVHlwZS5IQik7XG4gICAgICAgIGlmIChjaG9pc2UgPT0gMSkge1xuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLmxldmVsID49IDMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLmlzVW5sb2NrKENvbnN0cy5GcmVlU2tpbklkKSkge1xuICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9IYkRpYWxvZ1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrX3JhbmsoKSB7XG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJ3ZWNoYXQvV3hSYW5rRGlhbG9nXCIpXG4gICAgfVxuXG4gICAgY2xpY2tfc2hvcCgpIHtcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvU2hvcERpYWxvZ1wiKTtcbiAgICB9XG5cbiAgICBjbGlja19uZXh0KCkge1xuICAgICAgICBVc2VySW5mby5jdXJyZW50TGV2ZWwgPSBVc2VySW5mby5jdXJyZW50TGV2ZWwgKyAxO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpXG4gICAgfVxuXG4gICAgY2xpY2tfaG9tZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblwiKVxuICAgIH1cblxuICAgIGNsaWNrX3NoYXJlKCkge1xuICAgICAgICBQbGF0Zm9ybS5zaGFyZSgpO1xuICAgIH1cbn0iXX0=