
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/LuckyDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a94275+JmtMx6iZb18iwKTe', 'LuckyDialog');
// Game/Scripts/ui/LuckyDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ToastManager_1 = require("../../../framework/plugin_boosts/ui/ToastManager");
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var View_1 = require("../../../framework/plugin_boosts/ui/View");
var Info_1 = require("../Info");
var Platform_1 = require("../../../framework/Platform");
var Device_1 = require("../../../framework/plugin_boosts/gamesys/Device");
var Res_1 = require("../hex-lines-game/Res");
var UIFunctions_1 = require("../../../framework/plugin_boosts/ui/UIFunctions");
var Main_1 = require("../Main");
var i18n_1 = require("../i18n");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LuckyDialog = /** @class */ (function (_super) {
    __extends(LuckyDialog, _super);
    function LuckyDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._canRotate = true;
        _this.sprites = [];
        _this.labels = [];
        _this.btn_freedraw = null;
        _this.btn_videodraw = null;
        _this.freedrawTip = null;
        _this.drawLabel = null;
        // click_draw()
        // {
        // }
        _this.pool = [];
        return _this;
    }
    LuckyDialog_1 = LuckyDialog;
    LuckyDialog.prototype.start = function () { };
    LuckyDialog.prototype.share_succ = function () {
        this.startDraw();
        Info_1.UserInfo.freedrawTime = new Date().getTime();
        Info_1.UserInfo.save();
        Main_1.default.instance.refreshRedpoints();
        this.onShown();
    };
    LuckyDialog.prototype.click_freeedraw = function () {
        if (g.isNextDay(Info_1.UserInfo.freedrawTime)) {
            this.share_succ();
        }
    };
    LuckyDialog.prototype.onEnable = function () {
        this.node.getChildByName("banner").getChildByName("New Label").getComponent(cc.Label).string = i18n_1.t("luckydraw");
    };
    LuckyDialog.prototype.onLoad = function () {
        for (var i = 0; i < Res_1.R.luckyConfig.json.length; i++) {
            var cfg = Res_1.R.luckyConfig.json[i];
            var chance = parseFloat(cfg.chance);
            for (var j = 0; j < chance * 2; j++) {
                this.pool.push(i);
            }
        }
        this.pool.shuffle();
        console.log(this.pool);
    };
    LuckyDialog.prototype.startDraw = function () {
        var id = g.getRandomInArray(this.pool);
        this.startWheel(id);
        Device_1.default.playEffect(Res_1.R.audio_draw);
    };
    // 5次
    LuckyDialog.prototype.click_videodraw = function () {
        var _this = this;
        if (Info_1.UserInfo.luckyVideoWatchCount >= LuckyDialog_1.MaxVideoCount) {
            if (g.isNextDay(Info_1.UserInfo.luckyVideoWatchTime)) {
                Info_1.UserInfo.luckyVideoWatchCount = 0;
                Info_1.UserInfo.luckyVideoWatchTime = new Date().getTime();
            }
            else {
                // Platform.share(_=>{
                //     this.startDraw()
                // })
                return;
            }
        }
        else {
            Platform_1.default.watch_video(function (_) {
                Info_1.UserInfo.luckyVideoWatchCount++;
                _this.startDraw();
            });
        }
        //video 流量主开通后
        // Platform.watch_video(_=>{
        //     this.startDraw()
        //     UserInfo.luckyVideoWatchCount += 1;
        //     UserInfo.save();
        //     this.onShown()
        //     // Toast.make("还剩" +  (5- UserInfo.luckyVideoWatchCount) +"次机会")
        // });
    };
    LuckyDialog.prototype.calculateAngle = function (index) {
        var angle = -(index - 1) * 60 - 30 - 4 * 360 - this.wheelSp.node.rotation % 360;
        return angle;
    };
    LuckyDialog.prototype.onShown = function () {
        if (Info_1.UserInfo.luckyVideoWatchCount >= LuckyDialog_1.MaxVideoCount) {
            this.drawLabel.string = "已用完";
            UIFunctions_1.default.setButtonEnabled(this.btn_videodraw, false);
        }
        else {
            this.drawLabel.string = "看视频抽奖";
            UIFunctions_1.default.setButtonEnabled(this.btn_videodraw, true);
        }
        if (g.isGreaterDate(new Date(), new Date(Info_1.UserInfo.freedrawTime))) {
            //free draw 
            this.btn_freedraw.interactable = true;
            this.btn_freedraw.node.opacity = 255;
            this.freedrawTip.active = false;
        }
        else {
            this.btn_freedraw.interactable = false;
            this.btn_freedraw.node.opacity = 100;
            this.freedrawTip.active = true;
        }
        for (var i = 0; i < Res_1.R.luckyConfig.json.length; i++) {
            var cfg = Res_1.R.luckyConfig.json[i];
            this.labels[i].string = cfg.gold_reward + "";
        }
    };
    LuckyDialog.prototype.startWheel = function (id) {
        console.log("target wheel:", id);
        var angle = this.calculateAngle(id);
        if (!this._canRotate) {
            ToastManager_1.Toast.make('正在给您挑选奖品...');
            return;
        }
        this._canRotate = false;
        var stage3 = cc.rotateBy(Math.abs(angle / 400), angle);
        var callFunc = cc.callFunc(function () {
            this._canRotate = true;
            this.showRes(id);
        }.bind(this));
        var sequence = cc.sequence(stage3, callFunc);
        this.wheelSp.node.runAction(sequence.easing(cc.easeQuadraticActionInOut()));
    };
    LuckyDialog.prototype.showRes = function (id) {
        var cfg = Res_1.R.luckyConfig.json[id];
        var gold = !isNaN((Number(cfg.gold_reward)));
        if (gold) {
            this.getComponent(View_1.default).hide();
            ViewManager_1.default.instance.show("Game/GetDialog", cfg.gold_reward);
        }
        else {
            //神秘
            ToastManager_1.Toast.make("恭喜你抽中了 " + cfg.gold_reward);
            Info_1.UserInfo.unlock(g.randomInt(0, 6));
            // Device.playEffect(R.audio_unlock);
        }
    };
    LuckyDialog.prototype.update = function (dt) {
    };
    LuckyDialog.prototype.click_close = function () {
        if (!this._canRotate) {
            ToastManager_1.Toast.make('正在给您挑选奖品...');
            return;
        }
        this.getComponent(View_1.default).hide();
    };
    var LuckyDialog_1;
    LuckyDialog.MaxVideoCount = 5;
    __decorate([
        property(cc.Sprite)
    ], LuckyDialog.prototype, "wheelSp", void 0);
    __decorate([
        property([cc.Sprite])
    ], LuckyDialog.prototype, "sprites", void 0);
    __decorate([
        property([cc.Label])
    ], LuckyDialog.prototype, "labels", void 0);
    __decorate([
        property(cc.Button)
    ], LuckyDialog.prototype, "btn_freedraw", void 0);
    __decorate([
        property(cc.Button)
    ], LuckyDialog.prototype, "btn_videodraw", void 0);
    __decorate([
        property(cc.Node)
    ], LuckyDialog.prototype, "freedrawTip", void 0);
    __decorate([
        property(cc.Label)
    ], LuckyDialog.prototype, "drawLabel", void 0);
    LuckyDialog = LuckyDialog_1 = __decorate([
        ccclass
    ], LuckyDialog);
    return LuckyDialog;
}(cc.Component));
exports.default = LuckyDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXEx1Y2t5RGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBeUU7QUFDekUsK0VBQTBFO0FBQzFFLGlFQUE0RDtBQUM1RCxnQ0FBbUM7QUFDbkMsd0RBQW1EO0FBQ25ELDBFQUFxRTtBQUNyRSw2Q0FBMEM7QUFDMUMsK0VBQTBFO0FBQzFFLGdDQUEyQjtBQUMzQixnQ0FBcUM7QUFFL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFvTUM7UUE1TEcsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFHbEIsYUFBTyxHQUFlLEVBQUUsQ0FBQTtRQUd4QixZQUFNLEdBQWMsRUFBRSxDQUFBO1FBR3RCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBSTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFJMUIsZUFBZTtRQUNmLElBQUk7UUFFSixJQUFJO1FBRUosVUFBSSxHQUFHLEVBQUUsQ0FBQTs7SUFnS2IsQ0FBQztvQkFwTW9CLFdBQVc7SUFHNUIsMkJBQUssR0FBTCxjQUFVLENBQUM7SUFvQ1gsZ0NBQVUsR0FBVjtRQUVJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixlQUFRLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDNUMsZUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2YsY0FBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUVJLElBQUksQ0FBQyxDQUFDLFNBQVMs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QUFPO09BQ2EsV0FBVyxDQW9NL0I7SUFBRCxrQkFBQztDQXBNRCxBQW9NQyxDQXBNd0MsRUFBRSxDQUFDLFNBQVMsR0FvTXBEO2tCQXBNb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1RvYXN0TWFuYWdlclwiO1xuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9WaWV3TWFuYWdlclwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1ZpZXdcIjtcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uL0luZm9cIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL1BsYXRmb3JtXCI7XG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy9nYW1lc3lzL0RldmljZVwiO1xuaW1wb3J0IHsgUiB9IGZyb20gXCIuLi9oZXgtbGluZXMtZ2FtZS9SZXNcIjtcbmltcG9ydCBVSUZ1bmN0aW9ucyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVUlGdW5jdGlvbnNcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi9NYWluXCI7XG5pbXBvcnQgeyBnZXRMYW5nLCB0IH0gZnJvbSBcIi4uL2kxOG5cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMdWNreURpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBcbiAgICBzdGFydCAoKSB7fVxuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICB3aGVlbFNwOmNjLlNwcml0ZVxuXG4gICAgX2NhblJvdGF0ZSA9IHRydWU7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZV0pXG4gICAgc3ByaXRlczpjYy5TcHJpdGVbXSA9IFtdXG5cbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcbiAgICBsYWJlbHM6Y2MuTGFiZWxbXSA9IFtdXG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bl9mcmVlZHJhdzpjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5fdmlkZW9kcmF3OmNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmcmVlZHJhd1RpcDpjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGRyYXdMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBzdGF0aWMgTWF4VmlkZW9Db3VudCA9IDU7XG5cbiAgICAvLyBjbGlja19kcmF3KClcbiAgICAvLyB7XG5cbiAgICAvLyB9XG5cbiAgICBwb29sID0gW11cbiAgICBcblxuICAgIHNoYXJlX3N1Y2MoKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGFydERyYXcoKTtcbiAgICAgICAgVXNlckluZm8uZnJlZWRyYXdUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgVXNlckluZm8uc2F2ZSgpXG4gICAgICAgIE1haW4uaW5zdGFuY2UucmVmcmVzaFJlZHBvaW50cygpXG4gICAgICAgIHRoaXMub25TaG93bigpO1xuICAgIH1cblxuICAgIGNsaWNrX2ZyZWVlZHJhdygpXG4gICAge1xuICAgICAgICBpZiAoZy5pc05leHREYXkoVXNlckluZm8uZnJlZWRyYXdUaW1lKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zaGFyZV9zdWNjKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhbm5lclwiKS5nZXRDaGlsZEJ5TmFtZShcIk5ldyBMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHQoXCJsdWNreWRyYXdcIik7XG5cbiAgICB9XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgO2kgPCBSLmx1Y2t5Q29uZmlnLmpzb24ubGVuZ3RoOyBpICsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY2ZnID0gUi5sdWNreUNvbmZpZy5qc29uW2ldO1xuICAgICAgICAgICAgbGV0IGNoYW5jZSA9IHBhcnNlRmxvYXQoY2ZnLmNoYW5jZSlcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwIDsgaiA8IGNoYW5jZSAqIDIgOyBqKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb29sLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb29sLnNodWZmbGUoKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBvb2wpO1xuICAgIH1cblxuICAgIHN0YXJ0RHJhdygpXG4gICAge1xuICAgICAgICBsZXQgaWQgPSBnLmdldFJhbmRvbUluQXJyYXkodGhpcy5wb29sKVxuICAgICAgICB0aGlzLnN0YXJ0V2hlZWwoaWQpXG4gICAgICAgIERldmljZS5wbGF5RWZmZWN0KFIuYXVkaW9fZHJhdyk7XG4gICAgfVxuXG4gICAgLy8gNeasoVxuICAgIGNsaWNrX3ZpZGVvZHJhdygpXG4gICAge1xuICAgICAgICBpZiAoVXNlckluZm8ubHVja3lWaWRlb1dhdGNoQ291bnQgPj0gTHVja3lEaWFsb2cuTWF4VmlkZW9Db3VudClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoZy5pc05leHREYXkoVXNlckluZm8ubHVja3lWaWRlb1dhdGNoVGltZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVXNlckluZm8ubHVja3lWaWRlb1dhdGNoQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmx1Y2t5VmlkZW9XYXRjaFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vIFBsYXRmb3JtLnNoYXJlKF89PntcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zdGFydERyYXcoKVxuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFBsYXRmb3JtLndhdGNoX3ZpZGVvKF89PntcbiAgICAgICAgICAgICAgICBVc2VySW5mby5sdWNreVZpZGVvV2F0Y2hDb3VudCArKyBcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RHJhdygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vdmlkZW8g5rWB6YeP5Li75byA6YCa5ZCOXG4gICAgICAgIC8vIFBsYXRmb3JtLndhdGNoX3ZpZGVvKF89PntcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhcnREcmF3KClcbiAgICAgICAgLy8gICAgIFVzZXJJbmZvLmx1Y2t5VmlkZW9XYXRjaENvdW50ICs9IDE7XG4gICAgICAgIC8vICAgICBVc2VySW5mby5zYXZlKCk7XG4gICAgICAgIC8vICAgICB0aGlzLm9uU2hvd24oKVxuICAgICAgICAvLyAgICAgLy8gVG9hc3QubWFrZShcIui/mOWJqVwiICsgICg1LSBVc2VySW5mby5sdWNreVZpZGVvV2F0Y2hDb3VudCkgK1wi5qyh5py65LyaXCIpXG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuXG4gICAgY2FsY3VsYXRlQW5nbGUoaW5kZXg6bnVtYmVyKXsvL+WlluWTgeeahGluZGV45LuOMOW8gOWni1xuICAgICAgICBsZXQgYW5nbGUgPSAtKGluZGV4LTEpICogNjAgLSAzMCAgLSAgNCAqIDM2MCAtICB0aGlzLndoZWVsU3Aubm9kZS5yb3RhdGlvbiAlMzYwIFxuICAgICAgICByZXR1cm4gYW5nbGVcbiAgICB9XG5cbiAgICBvblNob3duKClcbiAgICB7XG4gICAgICAgIGlmIChVc2VySW5mby5sdWNreVZpZGVvV2F0Y2hDb3VudCA+PSAgTHVja3lEaWFsb2cuTWF4VmlkZW9Db3VudClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kcmF3TGFiZWwuc3RyaW5nID0gXCLlt7LnlKjlroxcIlxuICAgICAgICAgICAgVUlGdW5jdGlvbnMuc2V0QnV0dG9uRW5hYmxlZCh0aGlzLmJ0bl92aWRlb2RyYXcsZmFsc2UpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5kcmF3TGFiZWwuc3RyaW5nID0gXCLnnIvop4bpopHmir3lpZZcIlxuICAgICAgICAgICAgVUlGdW5jdGlvbnMuc2V0QnV0dG9uRW5hYmxlZCh0aGlzLmJ0bl92aWRlb2RyYXcsdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZy5pc0dyZWF0ZXJEYXRlKG5ldyBEYXRlKCksICBuZXcgRGF0ZShVc2VySW5mby5mcmVlZHJhd1RpbWUpKSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vZnJlZSBkcmF3IFxuICAgICAgICAgICAgdGhpcy5idG5fZnJlZWRyYXcuaW50ZXJhY3RhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5idG5fZnJlZWRyYXcubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5mcmVlZHJhd1RpcC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuYnRuX2ZyZWVkcmF3LmludGVyYWN0YWJsZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmJ0bl9mcmVlZHJhdy5ub2RlLm9wYWNpdHkgPSAxMDA7XG4gICAgICAgICAgICB0aGlzLmZyZWVkcmF3VGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMCA7IGk8IFIubHVja3lDb25maWcuanNvbi5sZW5ndGg7IGkgKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjZmcgPSBSLmx1Y2t5Q29uZmlnLmpzb25baV1cbiAgICAgICAgICAgIHRoaXMubGFiZWxzW2ldLnN0cmluZyA9IGNmZy5nb2xkX3Jld2FyZCArXCJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRXaGVlbChpZClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IHdoZWVsOlwiICxpZCk7XG4gICAgICAgIGxldCBhbmdsZSA9IHRoaXMuY2FsY3VsYXRlQW5nbGUoaWQpXG4gICAgICAgIGlmICghdGhpcy5fY2FuUm90YXRlKXtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoJ+ato+WcqOe7meaCqOaMkemAieWlluWTgS4uLicpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2FuUm90YXRlID0gZmFsc2VcblxuICAgICAgICBsZXQgc3RhZ2UzID0gY2Mucm90YXRlQnkoTWF0aC5hYnMoYW5nbGUvNDAwKSxhbmdsZSlcbiAgICAgICAgbGV0IGNhbGxGdW5jID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuX2NhblJvdGF0ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuc2hvd1JlcyhpZClcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICBsZXQgc2VxdWVuY2UgPSBjYy5zZXF1ZW5jZShzdGFnZTMsY2FsbEZ1bmMpXG4gICAgICAgIHRoaXMud2hlZWxTcC5ub2RlLnJ1bkFjdGlvbihzZXF1ZW5jZS5lYXNpbmcoY2MuZWFzZVF1YWRyYXRpY0FjdGlvbkluT3V0KCkpKVxuICAgIH1cblxuICAgIHNob3dSZXMoaWQpXG4gICAge1xuICAgICAgICBsZXQgY2ZnID0gUi5sdWNreUNvbmZpZy5qc29uW2lkXVxuICAgICAgICBsZXQgZ29sZCA9ICFpc05hTigoTnVtYmVyKGNmZy5nb2xkX3Jld2FyZCkpKVxuICAgICAgICBpZihnb2xkKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKClcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL0dldERpYWxvZ1wiLGNmZy5nb2xkX3Jld2FyZClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy/npZ7np5hcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCLmga3llpzkvaDmir3kuK3kuoYgXCIgKyBjZmcuZ29sZF9yZXdhcmQpO1xuICAgICAgICAgICAgVXNlckluZm8udW5sb2NrKGcucmFuZG9tSW50KDAsNikpO1xuICAgICAgICAgICAgLy8gRGV2aWNlLnBsYXlFZmZlY3QoUi5hdWRpb191bmxvY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG5cbiAgICB9XG5cbiAgICBjbGlja19jbG9zZSgpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMuX2NhblJvdGF0ZSl7XG4gICAgICAgICAgICBUb2FzdC5tYWtlKCfmraPlnKjnu5nmgqjmjJHpgInlpZblk4EuLi4nKTtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKClcbiAgICB9XG5cblxufSJdfQ==