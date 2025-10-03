
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/LevelDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c94fc8PDtI1o3JM9m3WRKN', 'LevelDialog');
// Game/Scripts/ui/LevelDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Info_1 = require("../Info");
var LevelSelector_1 = require("../../../framework/plugin_boosts/ui/game/LevelSelector");
var i18n_1 = require("../i18n");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelDialog = /** @class */ (function (_super) {
    __extends(LevelDialog, _super);
    function LevelDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelDialog.prototype.onLoad = function () {
    };
    LevelDialog.prototype.start = function () {
    };
    LevelDialog.prototype.onShown = function () {
        this.scheduleOnce(this.refreshLevels, 0.1);
    };
    LevelDialog.prototype.onEnable = function () {
        this.node.getChildByName("btn4").getChildByName("New Label").getComponent(cc.Label).string = i18n_1.t("continue");
        this.selector.currentLevel = Info_1.UserInfo.level;
        this.selector.refresh();
    };
    LevelDialog.prototype.refreshLevels = function () {
        this.selector.scrollToCurrentLevel();
    };
    LevelDialog.prototype.select_level = function (lvnode) {
        this.gotoLevel(lvnode.name);
    };
    LevelDialog.prototype.refreshLevelItem = function (data) {
    };
    LevelDialog.prototype.gotoLevel = function (lv) {
        lv = parseInt(lv);
        console.log("enter level", lv);
        Info_1.UserInfo.currentLevel = lv;
        cc.director.loadScene("Game");
    };
    LevelDialog.prototype.click_continue = function () {
        this.gotoLevel(Info_1.UserInfo.level);
    };
    __decorate([
        property(LevelSelector_1.default)
    ], LevelDialog.prototype, "selector", void 0);
    LevelDialog = __decorate([
        ccclass
    ], LevelDialog);
    return LevelDialog;
}(cc.Component));
exports.default = LevelDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXExldmVsRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBbUM7QUFDbkMsd0ZBQW1GO0FBQ25GLGdDQUE4QztBQUd4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDs7SUE4Q0EsQ0FBQztJQTVDRyw0QkFBTSxHQUFOO0lBR0EsQ0FBQztJQUNELDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBSUQsNkJBQU8sR0FBUDtRQUdJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBQ0QsOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsZUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBRTNCLENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsTUFBTTtRQUVmLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtJQUNyQixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEVBQUU7UUFDUixFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLGVBQVEsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQW5DRDtRQURDLFFBQVEsQ0FBQyx1QkFBYSxDQUFDO2lEQUNBO0lBVlAsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQThDL0I7SUFBRCxrQkFBQztDQTlDRCxBQThDQyxDQTlDd0MsRUFBRSxDQUFDLFNBQVMsR0E4Q3BEO2tCQTlDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uL0luZm9cIjtcbmltcG9ydCBMZXZlbFNlbGVjdG9yIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9nYW1lL0xldmVsU2VsZWN0b3JcIjtcbmltcG9ydCB7IHQsIHNldExhbmcsIGdldExhbmcgfSBmcm9tIFwiLi4vaTE4blwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbERpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkxvYWQoKSB7XG5cblxuICAgIH1cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBAcHJvcGVydHkoTGV2ZWxTZWxlY3RvcilcbiAgICBzZWxlY3RvcjogTGV2ZWxTZWxlY3RvcjtcblxuICAgIG9uU2hvd24oKSB7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMucmVmcmVzaExldmVscywgMC4xKVxuICAgIH1cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuNFwiKS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQoXCJjb250aW51ZVwiKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5jdXJyZW50TGV2ZWwgPSBVc2VySW5mby5sZXZlbDtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5yZWZyZXNoKClcblxuICAgIH1cblxuICAgIHJlZnJlc2hMZXZlbHMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3Iuc2Nyb2xsVG9DdXJyZW50TGV2ZWwoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RfbGV2ZWwobHZub2RlKSB7XG5cbiAgICAgICAgdGhpcy5nb3RvTGV2ZWwobHZub2RlLm5hbWUpXG4gICAgfVxuXG4gICAgcmVmcmVzaExldmVsSXRlbShkYXRhKSB7XG4gICAgfVxuXG4gICAgZ290b0xldmVsKGx2KSB7XG4gICAgICAgIGx2ID0gcGFyc2VJbnQobHYpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgbGV2ZWxcIiwgbHYpO1xuICAgICAgICBVc2VySW5mby5jdXJyZW50TGV2ZWwgPSBsdjtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKVxuICAgIH1cblxuICAgIGNsaWNrX2NvbnRpbnVlKCkge1xuICAgICAgICB0aGlzLmdvdG9MZXZlbChVc2VySW5mby5sZXZlbClcbiAgICB9XG59Il19