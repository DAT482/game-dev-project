"use strict";
cc._RF.push(module, 'bbeadJqtzFD6oTwtVkisN9j', 'WeChatDialog');
// Game/Scripts/ui/WeChatDialog.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.rankItemPrefab = null;
        // Fake API data (bạn có thể fetch từ server)
        _this.rankData = [
            { "rank": 1, "name": "Kiên", "level": 50 },
            { "rank": 2, "name": "ĐỨC", "level": 20 },
            { "rank": 3, "name": "Naruto", "level": 15 },
            { "rank": 4, "name": "Trần Văn  Khiết", "level": 13 },
            { "rank": 5, "name": "DULIEUAN", "level": 12 },
            { "rank": 6, "name": "name6", "level": 11 },
            { "rank": 7, "name": "Quang", "level": 7 },
            { "rank": 8, "name": "Tô Đắc", "level": 6 },
            { "rank": 9, "name": "Huyền", "level": 3 },
            { "rank": 10, "name": "Phóng", "level": 2 }
        ];
        return _this;
    }
    NewClass.prototype.start = function () {
        this.loadRankList();
    };
    NewClass.prototype.loadRankList = function () {
        var _this = this;
        // Clear content cũ
        this.scrollView.content.removeAllChildren();
        // Loop dữ liệu
        this.rankData.forEach(function (player) {
            var item = cc.instantiate(_this.rankItemPrefab);
            // Tìm các Label trong prefab
            var labels = item.getComponentsInChildren(cc.Label);
            labels.find(function (l) { return l.node.name === "lblRank"; }).string = String(player.rank);
            labels.find(function (l) { return l.node.name === "lblName"; }).string = player.name;
            labels.find(function (l) { return l.node.name === "lblLevel"; }).string = "Lv." + player.level;
            // Add vào content
            _this.scrollView.content.addChild(item);
        });
    };
    __decorate([
        property(cc.ScrollView)
    ], NewClass.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "rankItemPrefab", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();