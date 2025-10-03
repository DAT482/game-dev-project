
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/WeChatDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFdlQ2hhdERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0Q0M7UUF6Q0csZ0JBQVUsR0FBa0IsSUFBSyxDQUFDO1FBR2xDLG9CQUFjLEdBQWMsSUFBSyxDQUFDO1FBRWxDLDZDQUE2QztRQUNyQyxjQUFRLEdBQUc7WUFDZixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDekMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUM1QyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDckQsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUM5QyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQzNDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDMUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUMzQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1lBQzFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7U0FDOUMsQ0FBQzs7SUF3Qk4sQ0FBQztJQXRCRyx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQUEsaUJBaUJDO1FBaEJHLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTVDLGVBQWU7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07WUFDeEIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFakQsNkJBQTZCO1lBQzdCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBekIsQ0FBeUIsQ0FBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXpCLENBQXlCLENBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUExQixDQUEwQixDQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBRTVFLGtCQUFrQjtZQUNsQixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeENEO1FBREUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0RBQ1M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDYztJQU5qQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEM1QjtJQUFELGVBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBNENqRDtrQkE1Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGwhO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICByYW5rSXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbCE7XG5cbiAgICAvLyBGYWtlIEFQSSBkYXRhIChi4bqhbiBjw7MgdGjhu4MgZmV0Y2ggdOG7qyBzZXJ2ZXIpXG4gICAgcHJpdmF0ZSByYW5rRGF0YSA9IFtcbiAgICAgICAgeyBcInJhbmtcIjogMSwgXCJuYW1lXCI6IFwiS2nDqm5cIiwgXCJsZXZlbFwiOiA1MCB9LFxuICAgICAgICB7IFwicmFua1wiOiAyLCBcIm5hbWVcIjogXCLEkOG7qENcIiwgXCJsZXZlbFwiOiAyMCB9LFxuICAgICAgICB7IFwicmFua1wiOiAzLCBcIm5hbWVcIjogXCJOYXJ1dG9cIiwgXCJsZXZlbFwiOiAxNSB9LFxuICAgICAgICB7IFwicmFua1wiOiA0LCBcIm5hbWVcIjogXCJUcuG6p24gVsSDbiAgS2hp4bq/dFwiLCBcImxldmVsXCI6IDEzIH0sXG4gICAgICAgIHsgXCJyYW5rXCI6IDUsIFwibmFtZVwiOiBcIkRVTElFVUFOXCIsIFwibGV2ZWxcIjogMTIgfSxcbiAgICAgICAgeyBcInJhbmtcIjogNiwgXCJuYW1lXCI6IFwibmFtZTZcIiwgXCJsZXZlbFwiOiAxMSB9LFxuICAgICAgICB7IFwicmFua1wiOiA3LCBcIm5hbWVcIjogXCJRdWFuZ1wiLCBcImxldmVsXCI6IDcgfSxcbiAgICAgICAgeyBcInJhbmtcIjogOCwgXCJuYW1lXCI6IFwiVMO0IMSQ4bqvY1wiLCBcImxldmVsXCI6IDYgfSxcbiAgICAgICAgeyBcInJhbmtcIjogOSwgXCJuYW1lXCI6IFwiSHV54buBblwiLCBcImxldmVsXCI6IDMgfSxcbiAgICAgICAgeyBcInJhbmtcIjogMTAsIFwibmFtZVwiOiBcIlBow7NuZ1wiLCBcImxldmVsXCI6IDIgfVxuICAgIF07XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5sb2FkUmFua0xpc3QoKTtcbiAgICB9XG5cbiAgICBsb2FkUmFua0xpc3QoKSB7XG4gICAgICAgIC8vIENsZWFyIGNvbnRlbnQgY8WpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgLy8gTG9vcCBk4buvIGxp4buHdVxuICAgICAgICB0aGlzLnJhbmtEYXRhLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJhbmtJdGVtUHJlZmFiKTtcblxuICAgICAgICAgICAgLy8gVMOsbSBjw6FjIExhYmVsIHRyb25nIHByZWZhYlxuICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gaXRlbS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYWJlbHMuZmluZChsID0+IGwubm9kZS5uYW1lID09PSBcImxibFJhbmtcIikhLnN0cmluZyA9IFN0cmluZyhwbGF5ZXIucmFuayk7XG4gICAgICAgICAgICBsYWJlbHMuZmluZChsID0+IGwubm9kZS5uYW1lID09PSBcImxibE5hbWVcIikhLnN0cmluZyA9IHBsYXllci5uYW1lO1xuICAgICAgICAgICAgbGFiZWxzLmZpbmQobCA9PiBsLm5vZGUubmFtZSA9PT0gXCJsYmxMZXZlbFwiKSEuc3RyaW5nID0gXCJMdi5cIiArIHBsYXllci5sZXZlbDtcblxuICAgICAgICAgICAgLy8gQWRkIHbDoG8gY29udGVudFxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==