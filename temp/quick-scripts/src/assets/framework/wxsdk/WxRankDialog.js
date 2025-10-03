"use strict";
cc._RF.push(module, '80fd3Nn4dFF45QylMONs3ro', 'WxRankDialog');
// framework/wxsdk/WxRankDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("../Platform");
var View_1 = require("../plugin_boosts/ui/View");
var Signal_1 = require("../plugin_boosts/misc/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WxRankDialog = /** @class */ (function (_super) {
    __extends(WxRankDialog, _super);
    function WxRankDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.first = true;
        _this.closeSignal = new Signal_1.default();
        return _this;
    }
    /**
     * Called when the View is shown
     */
    WxRankDialog.prototype.onShown = function (callback, target) {
        var _this = this;
        this.closeSignal.on(callback, target);
        if (this.first) {
            // Only delay the first time to ensure Platform is ready
            this.scheduleOnce(function () {
                _this.openRank();
            }, 0.1);
            this.first = false;
        }
        else {
            this.openRank();
        }
    };
    /**
     * Perform showing the ranking board
     */
    WxRankDialog.prototype.openRank = function () {
        Platform_1.default.showRank(this.scrollView);
    };
    /**
     * Click the close button
     */
    WxRankDialog.prototype.click_close = function () {
        Platform_1.default.hideRank();
        this.getComponent(View_1.default).hide();
        this.closeSignal.fire();
    };
    __decorate([
        property(cc.ScrollView)
    ], WxRankDialog.prototype, "scrollView", void 0);
    WxRankDialog = __decorate([
        ccclass
    ], WxRankDialog);
    return WxRankDialog;
}(cc.Component));
exports.default = WxRankDialog;

cc._RF.pop();