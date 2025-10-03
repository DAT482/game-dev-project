"use strict";
cc._RF.push(module, 'a1e1eTbi1ZBTbYrU7Ko52g5', 'OverDialog');
// Game/Scripts/ui/OverDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var i18n_1 = require("../i18n");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.onEnable = function () {
        i18n_1.getLang();
        this.node.getChildByName("frame3").getChildByName("NoButton").getChildByName("label").getComponent(cc.Label).string = i18n_1.t("no_button");
        this.node.getChildByName("frame3").getChildByName("YesButton").getChildByName("label").getComponent(cc.Label).string = i18n_1.t("yes_button");
        this.node.getChildByName("frame3").getChildByName("label").getComponent(cc.Label).string = i18n_1.t("timeout_message");
        this.node.getChildByName("banner").getChildByName("label").getComponent(cc.Label).string = i18n_1.t("game_status");
    };
    NewClass.prototype.onYes = function () {
        cc.director.loadScene("Game");
    };
    NewClass.prototype.onNo = function () {
        cc.director.loadScene("Main");
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();