
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/WxRankDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcV3hSYW5rRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsaURBQTRDO0FBRzVDLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVDQztRQXJDRyxnQkFBVSxHQUFrQixJQUFLLENBQUM7UUFFMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixpQkFBVyxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDOztJQWtDdkMsQ0FBQztJQWhDRzs7T0FFRztJQUNILDhCQUFPLEdBQVAsVUFBUSxRQUFRLEVBQUUsTUFBTTtRQUF4QixpQkFZQztRQVhHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV0QyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWix3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDdEI7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNLLCtCQUFRLEdBQWhCO1FBQ0ksa0JBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNILGtDQUFXLEdBQVg7UUFDSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBcENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0RBQ1U7SUFGakIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVDaEM7SUFBRCxtQkFBQztDQXZDRCxBQXVDQyxDQXZDeUMsRUFBRSxDQUFDLFNBQVMsR0F1Q3JEO2tCQXZDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vUGxhdGZvcm1cIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuLi9wbHVnaW5fYm9vc3RzL3VpL1ZpZXdcIjtcbmltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi4vcGx1Z2luX2Jvb3N0cy91aS9WaWV3TWFuYWdlclwiO1xuaW1wb3J0IENvbW1vbiBmcm9tIFwiLi4vcGx1Z2luX2Jvb3N0cy91dGlscy9Db21tb25cIjtcbmltcG9ydCBTaWduYWwgZnJvbSBcIi4uL3BsdWdpbl9ib29zdHMvbWlzYy9TaWduYWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4UmFua0RpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGwhO1xuXG4gICAgcHJpdmF0ZSBmaXJzdDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBjbG9zZVNpZ25hbCA9IG5ldyBTaWduYWwoKTtcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBWaWV3IGlzIHNob3duXG4gICAgICovXG4gICAgb25TaG93bihjYWxsYmFjaywgdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuY2xvc2VTaWduYWwub24oY2FsbGJhY2ssIHRhcmdldCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3QpIHtcbiAgICAgICAgICAgIC8vIE9ubHkgZGVsYXkgdGhlIGZpcnN0IHRpbWUgdG8gZW5zdXJlIFBsYXRmb3JtIGlzIHJlYWR5XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUmFuaygpO1xuICAgICAgICAgICAgfSwgMC4xKTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlblJhbmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gc2hvd2luZyB0aGUgcmFua2luZyBib2FyZFxuICAgICAqL1xuICAgIHByaXZhdGUgb3BlblJhbmsoKSB7XG4gICAgICAgIFBsYXRmb3JtLnNob3dSYW5rKHRoaXMuc2Nyb2xsVmlldyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xpY2sgdGhlIGNsb3NlIGJ1dHRvblxuICAgICAqL1xuICAgIGNsaWNrX2Nsb3NlKCkge1xuICAgICAgICBQbGF0Zm9ybS5oaWRlUmFuaygpO1xuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKCk7XG4gICAgICAgIHRoaXMuY2xvc2VTaWduYWwuZmlyZSgpO1xuICAgIH1cbn0iXX0=