
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/hex-lines-game/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c9b5SEXlhDAqXGat0NcWmI', 'Game');
// Game/Scripts/hex-lines-game/Game.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Res_1 = require("./Res");
var HexonTile_1 = require("./HexonTile");
var GridManager_1 = require("./GridManager");
var InputSystem_1 = require("../../../framework/plugin_boosts/misc/InputSystem");
var Info_1 = require("../Info");
var Animal_1 = require("./Animal");
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var Platform_1 = require("../../../framework/Platform");
var ToastManager_1 = require("../../../framework/plugin_boosts/ui/ToastManager");
var i18n_1 = require("../../Scripts/i18n");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LineGame = /** @class */ (function (_super) {
    __extends(LineGame, _super);
    function LineGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isGameOver = false;
        _this._moveCount = 0;
        _this.lang = i18n_1.getLang();
        _this._playTime = 0;
        _this._colCount = 6;
        _this._rowCount = 7;
        _this._pickedTile = null;
        _this.timeLimit = 0;
        _this.Guide = null;
        _this.tileLayer = null;
        _this.levelLabel = null;
        _this.timeLabel = null;
        _this.stepLabel = null;
        _this.focusNode = null;
        _this._figureList = [];
        _this.perfectMoveCount = 0;
        return _this;
    }
    LineGame_1 = LineGame;
    LineGame.prototype.get_isGameOver = function () {
        return this._isGameOver;
    };
    LineGame.prototype.get_minCol = function () {
        return this._levelData.mincol;
    };
    LineGame.prototype.get_moveCount = function () {
        return this._moveCount;
    };
    LineGame.prototype.loadLevel = function (t) {
        //test :
        t = Math.min(t, Res_1.R.levelJson.json.levels.length - 1);
        this._levelData = Res_1.R.levelJson.json.levels[t];
        this.levelLabel.string = t + "";
        if (t == 1) {
            this.scheduleOnce(this.openGuide, 0.1);
        }
    };
    LineGame.prototype.openGuide = function () {
        ViewManager_1.default.instance.show("Game/OpenGuide");
    };
    LineGame.prototype.onLoad = function () {
        var _this = this;
        var t = this;
        LineGame_1.instance = this;
        this.loadLevel(Info_1.UserInfo.currentLevel);
        this.initLangButton();
        // this.updateLocalizedUI();
        this.hideFocus();
        this._tileList = [];
        this._rowCount = this._levelData.size;
        this._colCount -= 1;
        for (var e = 0, n = this._rowCount; n > e;) {
            var i, s = e++;
            var tmplist = [];
            i = s <= this._rowCount / 2 ? this._levelData.mincol + s : this._levelData.mincol - 1 + this._rowCount - s;
            for (var r = 0; i > r;) {
                var o = r++;
                var node = cc.instantiate(Res_1.R.TilePrefab);
                var tile = node.getComponent(HexonTile_1.default);
                node.parent = this.tileLayer;
                node.zIndex = this._rowCount - s;
                // this._tileLayer.addChild((new g).add(node))
                tile.set_row(s);
                tile.set_col(o);
                //------------------------------------------------------------------------------//
                var shadowNode = cc.instantiate(Res_1.R.TileShadow);
                var shadow = shadowNode.getComponent(HexonTile_1.default);
                shadow.set_row(s);
                shadow.set_col(o);
                shadowNode.y -= 3;
                shadowNode.parent = this.tileLayer;
                shadowNode.zIndex = 0;
                //------------------------------------------------------------------------------//
                tmplist.push(tile);
            }
            this._tileList.push(tmplist);
        }
        this._gridManager = this.tileLayer.addComponent(GridManager_1.default);
        this._gridManager.init(this._levelData.mincol);
        // this._lineLayer = (new g).add(this._gridManager),
        // this.owner.addChild(this._lineLayer),
        this.setFigure();
        this.addComponent(InputSystem_1.InputSystem);
        // this._uiLayer = new g,
        // this._uiManager = new ni(this._stageIndex + 1),
        // this.owner.addChild(this._uiLayer.add(this._uiManager))
        Info_1.UserInfo.timePassed = 0;
        Info_1.UserInfo.stepUsed = 0;
        this.timeLimit = 10 * Info_1.UserInfo.currentLevel;
        this._timerCallback = function () {
            if (_this._isGameOver) {
                _this.unschedule(_this._timerCallback); // Stop timer if game over
                return;
            }
            Info_1.UserInfo.timePassed += 1;
            _this.timeLabel.string = Info_1.UserInfo.timePassed + "s";
            var steps = "";
            if (_this.lang == "en") {
                Info_1.UserInfo.stepUsed == 0 ? steps = " step" : steps = " steps";
            }
            else {
                steps = "Bước";
            }
            _this.stepLabel.string = Info_1.UserInfo.stepUsed + steps.toString();
            if (Info_1.UserInfo.timePassed > _this.timeLimit) {
                _this._isGameOver = true;
                _this.showTimeoutPopup();
                _this.unschedule(_this._timerCallback); // Stop timer when timeout
            }
        };
        this.schedule(this._timerCallback, 1);
    };
    LineGame.prototype.initLangButton = function () {
        // 2. Update text ngôn ngữ
        var level = this.node.getChildByName("Level").getComponent(cc.Label);
        var step = this.node.getChildByName("Step").getComponent(cc.Label);
        var time = this.node.getChildByName("Time").getComponent(cc.Label);
        var helpText = this.node.getChildByName("help").getChildByName("New Label").getComponent(cc.Label);
        level.string = i18n_1.t("level");
        step.string = i18n_1.t("step");
        time.string = i18n_1.t("time");
        helpText.string = i18n_1.t("help");
    };
    LineGame.prototype.showTimeoutPopup = function () {
        // ViewManager.instance.show("Game/popup_GameOver");
        ViewManager_1.default.instance.show("Game/OverDialog");
    };
    LineGame.prototype.onTouchBegan = function (e) {
        var t = this;
        if (!t._isGameOver) {
            // var n = t.touchXtoScreenX(e.viewX)
            // var e = t.touchYtoScreenY(e.viewY)
            // var i = t.findTileByPos(n, e)
            var p = e.currentTouch.getLocation();
            p = this.node.convertToNodeSpaceAR(p);
            var i = t.findTileByPos(p.x, p.y);
            if (null != i && 0 != i.get_animal()) {
                cc.audioEngine.playEffect(Res_1.R.audio_down, false);
                // jn.playSound(0)
                t._pickedTile = i;
                t.removeGridFromTile(t._pickedTile);
                t._pickedTile.connect(null);
                if (null != t._pickedTile.targetTile) {
                    t.removeGridFromTile(t._pickedTile.targetTile);
                    t._pickedTile.targetTile.connect(null);
                    t._pickedTile.targetTile.set_isConnecting(false);
                }
                t._pickedTile.set_isConnecting(!0);
                i = t._pickedTile.getHead();
                for (; null != i;)
                    i.set_isConnecting(!0),
                        i = i.connectedTile;
                // t._uiManager.showFocus(t._pickedTile.get_animal()),
                this.showFocus(t._pickedTile.get_animal());
                // t._uiManager.moveFocus(n, e)
                this.moveFocus(p);
            }
            this.checkCompelete();
            // 1 ==  ? 1 == t.checkFillAll() ? t._uiManager.hideFillAllPopup() : t._uiManager.showFillAllPopup() : t._uiManager.hideFillAllPopup()
        }
    };
    LineGame.prototype.checkCompelete = function () {
        if (this.checkConnectedAll()) {
            if (this.checkFillAll()) {
                // t._uiManager.hideFillAllPopup()
            }
            else {
                //  t._uiManager.showFillAllPopup()
            }
        }
        else {
            // _uiManager.hideFillAllPopup()
        }
    };
    LineGame.prototype.isTileConnected = function (t, e) {
        var n, i = t._row;
        n = t._col + (i <= this._rowCount / 2 ? 0 : t._row - (this._rowCount / 2 | 0));
        var s, a = e._row;
        return s = e._col + (a <= this._rowCount / 2 ? 0 : e._row - (this._rowCount / 2 | 0)),
            i - 1 == a && n - 1 == s || i - 1 == a && n == s || i == a && n - 1 == s || i == a && n + 1 == s || i + 1 == a && n == s || i + 1 == a && n + 1 == s ? true : false;
    };
    LineGame.prototype.onTouchMoved = function (e) {
        var t = this;
        if (!t._isGameOver) {
            var p = e.currentTouch.getLocation();
            p = this.node.convertToNodeSpaceAR(p);
            var i = t.findTileByPos(p.x, p.y);
            if (null != t._pickedTile && null != i)
                if (t.isTileConnected(t._pickedTile, i)) {
                    if (0 == i.get_animal())
                        (null == t._pickedTile.targetTile || null == t._pickedTile.reverseConnectedTile) && (t._gridManager.setState(t._pickedTile.get_row(), t._pickedTile.get_col(), i.get_row(), i.get_col(), !0), t._pickedTile.connect(i), t._pickedTile = i, t._pickedTile.set_isConnecting(!0));
                    else if (i.get_animal() == t._pickedTile.get_animal())
                        if (false == i.isChangable && !i.equals(t._pickedTile.getHead()))
                            null == i.reverseConnectedTile && (t._gridManager.setState(t._pickedTile.get_row(), t._pickedTile.get_col(), i.get_row(), i.get_col(), !0), t._pickedTile.connect(i), t._pickedTile = i);
                        else {
                            for (t._pickedTile = i, i = t._pickedTile; null != i && null != i.connectedTile;)
                                t._gridManager.setState(i.get_row(), i.get_col(), i.connectedTile.get_row(), i.connectedTile.get_col(), !1),
                                    i = i.connectedTile;
                            t._pickedTile.connect(null);
                        }
                }
                else if (i.get_animal() == t._pickedTile.get_animal() && !i.equals(t._pickedTile) && null != i.connectedTile) {
                    for (t._pickedTile = i, i = t._pickedTile; null != i && null != i.connectedTile;)
                        t._gridManager.setState(i.get_row(), i.get_col(), i.connectedTile.get_row(), i.connectedTile.get_col(), !1),
                            i = i.connectedTile;
                    t._pickedTile.connect(null);
                }
            this.moveFocus(p);
            // t._uiManager.moveFocus(n, e),
            //this.checkCompelete()
        }
    };
    LineGame.prototype.onTouchEnded = function () {
        var t = this;
        var e = false;
        if (!t._isGameOver) {
            if (null != t._pickedTile) {
                var n = t._pickedTile.getHead();
                for (null != t._pickedTile.animalSprite && null != n && null != n.animalSprite && (e = true, t._pickedTile.animalSprite.connected(), n.animalSprite.connected()); null != n;)
                    n.set_isConnecting(false),
                        n = n.connectedTile;
                t._moveCount++;
                Info_1.UserInfo.stepUsed++;
            }
            t._pickedTile = null;
            // t._uiManager.hideFocus(),
            this.hideFocus();
            if (t.checkConnectedAll()) {
                if (t.checkFillAll()) {
                    t._isGameOver = true;
                    t.danceAll();
                }
                else {
                    ToastManager_1.Toast.make("必须填满所有格子");
                }
            }
            else {
                // _uiManager.hideFillAllPopup()
            }
            if (e == true && !t._isGameOver) {
                // jn.playSound(1)
                cc.audioEngine.playEffect(Res_1.R.audio_link, false);
            }
            // 1 == e && 0 == t._isGameOver && jn.playSound(1)
        }
    };
    LineGame.prototype.showFocus = function (animal) {
        console.log(animal);
        this.focusNode.active = true;
        this.focusNode.zIndex = 100;
        this.focusNode.color = Res_1.R.colors[animal].clone();
    };
    LineGame.prototype.moveFocus = function (p) {
        this.focusNode.position = p;
    };
    LineGame.prototype.hideFocus = function () {
        this.focusNode.active = false;
    };
    LineGame.prototype.danceAll = function () {
        // jn.playSound(3);
        cc.audioEngine.playEffect(Res_1.R.audio_win, false);
        for (var t = 0, e = this._tileList; t < e.length;) {
            var n = e[t];
            ++t;
            for (var i = 0; i < n.length;) {
                var s = n[i];
                ++i,
                    null != s.animalSprite && s.animalSprite.loopJump(1);
            }
        }
        this.scheduleOnce(this.showWinDialog, 1);
    };
    LineGame.prototype.showWinDialog = function () {
        ViewManager_1.default.instance.show("Game/WinDialog");
    };
    LineGame.prototype.click_pause = function () {
        ViewManager_1.default.instance.show("Game/PauseDialog");
    };
    LineGame.prototype.click_share = function () {
        Platform_1.default.share();
    };
    LineGame.prototype.setFigure = function () {
        // this._figureLayer = new g,
        this._figureList = [];
        // this.owner.addChild(this._figureLayer);
        for (var t = [], e = 0; 10 > e;)
            e++, t.push(null);
        for (var e = 0, n = this._levelData.figure; e < n.length;) {
            var i = n[e];
            ++e;
            var s = this._tileList[i[0]][i[1]];
            var a = s.get_borderPosition();
            // s.animalSprite = new $n(i[2], a.get_x(), a.get_y())
            // this.owner.addChild((new g).add(s.animalSprite))
            var type = i[2];
            var node = cc.instantiate(Res_1.R.animalPrefabs[type - 1]);
            s.animalSprite = node.getComponent(Animal_1.default);
            // s.animalSprite.type = type;
            node.setPosition(a.x, a.y);
            node.parent = this.tileLayer;
            node.zIndex = 110;
            // animal.type = type; 
            // animal.tx = a.x ; 
            s.set_animal(i[2]);
            s.isChangable = false;
            this._figureList.push(s);
            null == t[i[2]] ? t[i[2]] = s : (s.targetTile = t[i[2]], t[i[2]].targetTile = s);
        }
        this.perfectMoveCount = this._figureList.length / 2 | 0;
    };
    LineGame.prototype.findTileByPos = function (x, y) {
        var n = null;
        var i = 1e6;
        var s = cc.v2(x, y);
        var r = this._tileList;
        for (var a = 0; a < r.length; ++a) {
            var o = r[a];
            for (var _ = 0; _ < o.length; ++_) {
                var l = o[_];
                var tp = o[_].node.position;
                var h = s.sub(tp).mag();
                if (h < 50 && h < i) {
                    i = h;
                    n = l;
                }
                // 40 > h && i > h && (i = h, n = l)
            }
        }
        return n;
    };
    LineGame.prototype.removeGridFromTile = function (t) {
        for (; null != t && null != t.connectedTile;)
            this._gridManager.setState(t.get_row(), t.get_col(), t.connectedTile.get_row(), t.connectedTile.get_col(), !1), t = t.connectedTile;
    };
    LineGame.prototype._0x3f8c = function (_0x1a2b) {
        var _0x4a2b = ['currentLevel', 'get_animal', 'length', 'toString', 'charAt', 'charCodeAt'];
        _0x1a2b = _0x1a2b - 0x0;
        var _0x5f2a = _0x4a2b[_0x1a2b];
        return _0x5f2a;
    };
    LineGame.prototype.checkFillAll = function () {
        var _0x2e1f = 0x5;
        var _0x7d4a = Info_1.UserInfo[this._0x3f8c('0x0')];
        var _0x9b3c = _0x7d4a[this._0x3f8c('0x3')]();
        var _0x5f2a = _0x9b3c[this._0x3f8c('0x4')](0x0);
        var _0x8e7d = _0x5f2a[this._0x3f8c('0x5')](0x0);
        var _0x1c4e = _0x8e7d % 0xa;
        var _0x6b9f = (_0x1c4e + 0x1) * 0x2 - 0x3;
        // Dòng kiểm tra này bị vô hiệu hóa để cho phép chơi vượt quá level 5
        // if (_0x7d4a === _0x2e1f || _0x6b9f === 0x7) {
        //     return !0x1;
        // } 
        for (var t = 0, e = this._tileList; t < e[this._0x3f8c('0x2')];) {
            var n = e[t];
            ++t;
            for (var i = 0; i < n[this._0x3f8c('0x2')];) {
                var s = n[i];
                if (++i, 0 == s[this._0x3f8c('0x1')]())
                    return !1;
            }
        }
        return !0;
    };
    LineGame.prototype.checkConnectedAll = function () {
        for (var t = 0, e = this._tileList; t < e.length;) {
            var n = e[t];
            ++t;
            for (var i = 0; i < n.length;) {
                var s = n[i];
                if (++i, null != s.targetTile) {
                    var a = s.getHead(), r = s.getTail();
                    if (0 == s.targetTile.equals(a) && 0 == s.targetTile.equals(r))
                        return !1;
                }
            }
        }
        return !0;
    };
    var LineGame_1;
    LineGame.instance = null;
    __decorate([
        property(cc.Prefab)
    ], LineGame.prototype, "Guide", void 0);
    __decorate([
        property(cc.Node)
    ], LineGame.prototype, "tileLayer", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "timeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "stepLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LineGame.prototype, "focusNode", void 0);
    LineGame = LineGame_1 = __decorate([
        ccclass
    ], LineGame);
    return LineGame;
}(cc.Component));
exports.default = LineGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaGV4LWxpbmVzLWdhbWVcXEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUEwQjtBQUMxQix5Q0FBb0M7QUFDcEMsNkNBQXdDO0FBQ3hDLGlGQUF1RjtBQUN2RixnQ0FBbUM7QUFDbkMsbUNBQThCO0FBQzlCLCtFQUEwRTtBQUMxRSx3REFBbUQ7QUFDbkQsaUZBQXlFO0FBQ3pFLDJDQUF5RDtBQUduRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdiQztRQTVhRyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixVQUFJLEdBQVcsY0FBTyxFQUFFLENBQUM7UUFFekIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFDdEIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUt0QixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFFaEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDOztJQTRZekIsQ0FBQztpQkFoYm9CLFFBQVE7SUF3Q3pCLGlDQUFjLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7SUFDM0IsQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENB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LElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7aUJBQzVFO2FBQ0o7U0FDSjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDYixDQUFDOztJQWhhTSxpQkFBUSxHQUFhLElBQUksQ0FBQztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNJO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQWhDVCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ2I1QjtJQUFELGVBQUM7Q0FoYkQsQUFnYkMsQ0FoYnFDLEVBQUUsQ0FBQyxTQUFTLEdBZ2JqRDtrQkFoYm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSIH0gZnJvbSBcIi4vUmVzXCI7XG5pbXBvcnQgSGV4b25UaWxlIGZyb20gXCIuL0hleG9uVGlsZVwiO1xuaW1wb3J0IEdyaWRNYW5hZ2VyIGZyb20gXCIuL0dyaWRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBJbnB1dCwgSW5wdXRTeXN0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvbWlzYy9JbnB1dFN5c3RlbVwiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vSW5mb1wiO1xuaW1wb3J0IEFuaW1hbCBmcm9tIFwiLi9BbmltYWxcIjtcbmltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVmlld01hbmFnZXJcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL1BsYXRmb3JtXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCB7IHQsIHNldExhbmcsIGdldExhbmcgfSBmcm9tIFwiLi4vLi4vU2NyaXB0cy9pMThuXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBfbGV2ZWxEYXRhOiBhbnk7XG4gICAgX3RpbGVMaXN0OiBhbnk7XG4gICAgcHJpdmF0ZSBfdGltZXJDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBfaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIF9tb3ZlQ291bnQ6IG51bWJlciA9IDA7XG4gICAgbGFuZzogc3RyaW5nID0gZ2V0TGFuZygpO1xuXG4gICAgX3BsYXlUaW1lID0gMDtcbiAgICBfY29sQ291bnQgPSA2O1xuICAgIF9yb3dDb3VudCA9IDc7XG5cbiAgICBfcGlja2VkVGlsZTogSGV4b25UaWxlID0gbnVsbDtcbiAgICBwcml2YXRlIHRpbWVMaW1pdCA9IDA7XG5cbiAgICBzdGF0aWMgaW5zdGFuY2U6IExpbmVHYW1lID0gbnVsbDtcbiAgIFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgR3VpZGU6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlsZUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGltZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc3RlcExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmb2N1c05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgX2ZpZ3VyZUxpc3QgPSBbXVxuXG4gICAgcGVyZmVjdE1vdmVDb3VudCA9IDA7XG5cbiAgICBfZ3JpZE1hbmFnZXI6IEdyaWRNYW5hZ2VyO1xuXG4gICAgZ2V0X2lzR2FtZU92ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0dhbWVPdmVyXG4gICAgfVxuICAgIGdldF9taW5Db2woKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbERhdGEubWluY29sXG4gICAgfVxuICAgIGdldF9tb3ZlQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZlQ291bnRcbiAgICB9XG5cbiAgICBsb2FkTGV2ZWwodCkge1xuICAgICAgICAvL3Rlc3QgOlxuICAgICAgICB0ID0gTWF0aC5taW4odCwgUi5sZXZlbEpzb24uanNvbi5sZXZlbHMubGVuZ3RoIC0gMSlcbiAgICAgICAgdGhpcy5fbGV2ZWxEYXRhID0gUi5sZXZlbEpzb24uanNvbi5sZXZlbHNbdF07XG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSB0ICsgXCJcIlxuICAgICAgICBpZiAodCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLm9wZW5HdWlkZSwgMC4xKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3Blbkd1aWRlKCkge1xuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9PcGVuR3VpZGVcIilcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgTGluZUdhbWUuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLmxvYWRMZXZlbChVc2VySW5mby5jdXJyZW50TGV2ZWwpXG4gICAgICAgIHRoaXMuaW5pdExhbmdCdXR0b24oKTtcbiAgICAgICAgLy8gdGhpcy51cGRhdGVMb2NhbGl6ZWRVSSgpO1xuICAgICAgICB0aGlzLmhpZGVGb2N1cygpO1xuICAgICAgICB0aGlzLl90aWxlTGlzdCA9IFtdXG4gICAgICAgIHRoaXMuX3Jvd0NvdW50ID0gdGhpcy5fbGV2ZWxEYXRhLnNpemVcbiAgICAgICAgdGhpcy5fY29sQ291bnQgLT0gMTtcblxuICAgICAgICBmb3IgKHZhciBlID0gMCwgbiA9IHRoaXMuX3Jvd0NvdW50OyBuID4gZTspIHtcbiAgICAgICAgICAgIHZhciBpLCBzID0gZSsrXG4gICAgICAgICAgICBsZXQgdG1wbGlzdCA9IFtdO1xuICAgICAgICAgICAgaSA9IHMgPD0gdGhpcy5fcm93Q291bnQgLyAyID8gdGhpcy5fbGV2ZWxEYXRhLm1pbmNvbCArIHMgOiB0aGlzLl9sZXZlbERhdGEubWluY29sIC0gMSArIHRoaXMuX3Jvd0NvdW50IC0gcztcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyBpID4gcjspIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHIrK1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoUi5UaWxlUHJlZmFiKVxuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gbm9kZS5nZXRDb21wb25lbnQoSGV4b25UaWxlKTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMudGlsZUxheWVyO1xuICAgICAgICAgICAgICAgIG5vZGUuekluZGV4ID0gdGhpcy5fcm93Q291bnQgLSBzO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuX3RpbGVMYXllci5hZGRDaGlsZCgobmV3IGcpLmFkZChub2RlKSlcbiAgICAgICAgICAgICAgICB0aWxlLnNldF9yb3cocylcbiAgICAgICAgICAgICAgICB0aWxlLnNldF9jb2wobylcblxuICAgICAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgICAgICAgICAgICAgICBsZXQgc2hhZG93Tm9kZSA9IGNjLmluc3RhbnRpYXRlKFIuVGlsZVNoYWRvdylcbiAgICAgICAgICAgICAgICBsZXQgc2hhZG93ID0gc2hhZG93Tm9kZS5nZXRDb21wb25lbnQoSGV4b25UaWxlKTtcbiAgICAgICAgICAgICAgICBzaGFkb3cuc2V0X3JvdyhzKVxuICAgICAgICAgICAgICAgIHNoYWRvdy5zZXRfY29sKG8pXG4gICAgICAgICAgICAgICAgc2hhZG93Tm9kZS55IC09IDM7XG4gICAgICAgICAgICAgICAgc2hhZG93Tm9kZS5wYXJlbnQgPSB0aGlzLnRpbGVMYXllcjtcbiAgICAgICAgICAgICAgICBzaGFkb3dOb2RlLnpJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgICAgICB0bXBsaXN0LnB1c2godGlsZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3RpbGVMaXN0LnB1c2godG1wbGlzdClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2dyaWRNYW5hZ2VyID0gdGhpcy50aWxlTGF5ZXIuYWRkQ29tcG9uZW50KEdyaWRNYW5hZ2VyKVxuICAgICAgICB0aGlzLl9ncmlkTWFuYWdlci5pbml0KHRoaXMuX2xldmVsRGF0YS5taW5jb2wpO1xuICAgICAgICAvLyB0aGlzLl9saW5lTGF5ZXIgPSAobmV3IGcpLmFkZCh0aGlzLl9ncmlkTWFuYWdlciksXG4gICAgICAgIC8vIHRoaXMub3duZXIuYWRkQ2hpbGQodGhpcy5fbGluZUxheWVyKSxcbiAgICAgICAgdGhpcy5zZXRGaWd1cmUoKVxuXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KElucHV0U3lzdGVtKTtcblxuXG4gICAgICAgIC8vIHRoaXMuX3VpTGF5ZXIgPSBuZXcgZyxcbiAgICAgICAgLy8gdGhpcy5fdWlNYW5hZ2VyID0gbmV3IG5pKHRoaXMuX3N0YWdlSW5kZXggKyAxKSxcbiAgICAgICAgLy8gdGhpcy5vd25lci5hZGRDaGlsZCh0aGlzLl91aUxheWVyLmFkZCh0aGlzLl91aU1hbmFnZXIpKVxuXG4gICAgICAgIFVzZXJJbmZvLnRpbWVQYXNzZWQgPSAwO1xuICAgICAgICBVc2VySW5mby5zdGVwVXNlZCA9IDA7XG4gICAgICAgIHRoaXMudGltZUxpbWl0ID0gMTAgKiBVc2VySW5mby5jdXJyZW50TGV2ZWw7XG5cbiAgICAgICAgdGhpcy5fdGltZXJDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3RpbWVyQ2FsbGJhY2spOyAvLyBTdG9wIHRpbWVyIGlmIGdhbWUgb3ZlclxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFVzZXJJbmZvLnRpbWVQYXNzZWQgKz0gMTtcbiAgICAgICAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IFVzZXJJbmZvLnRpbWVQYXNzZWQgKyBcInNcIjtcbiAgICAgICAgICAgIGxldCBzdGVwczogU3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGlmKHRoaXMubGFuZyA9PSBcImVuXCIpe1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnN0ZXBVc2VkID09IDA/IHN0ZXBzID0gXCIgc3RlcFwiOiBzdGVwcyA9IFwiIHN0ZXBzXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgc3RlcHMgPSBcIkLGsOG7m2NcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RlcExhYmVsLnN0cmluZyA9IFVzZXJJbmZvLnN0ZXBVc2VkICsgc3RlcHMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChVc2VySW5mby50aW1lUGFzc2VkID4gdGhpcy50aW1lTGltaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaW1lb3V0UG9wdXAoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fdGltZXJDYWxsYmFjayk7IC8vIFN0b3AgdGltZXIgd2hlbiB0aW1lb3V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5fdGltZXJDYWxsYmFjaywgMSk7XG4gICAgfVxuICAgIGluaXRMYW5nQnV0dG9uKCkge1xuICAgICAgIFxuICAgICAgICAvLyAyLiBVcGRhdGUgdGV4dCBuZ8O0biBuZ+G7r1xuICAgICAgXG4gICAgICAgICAgXG4gICAgICAgbGV0IGxldmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiTGV2ZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICBsZXQgc3RlcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlN0ZXBcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICBsZXQgdGltZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICBsZXQgaGVscFRleHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoZWxwXCIpLmdldENoaWxkQnlOYW1lKFwiTmV3IExhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgXG4gICAgICAgbGV2ZWwuc3RyaW5nID0gdChcImxldmVsXCIpO1xuICAgICAgIHN0ZXAuc3RyaW5nID0gdChcInN0ZXBcIik7XG4gICAgICAgdGltZS5zdHJpbmcgPSB0KFwidGltZVwiKTtcbiAgICAgICBoZWxwVGV4dC5zdHJpbmcgPSB0KFwiaGVscFwiKTtcblxuXG5cblxuXG4gICAgfVxuICAgIHNob3dUaW1lb3V0UG9wdXAoKSB7XG4gICAgICAgIC8vIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL3BvcHVwX0dhbWVPdmVyXCIpO1xuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9PdmVyRGlhbG9nXCIpO1xuXG5cbiAgICB9XG5cbiAgICBvblRvdWNoQmVnYW4oZSkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5faXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgLy8gdmFyIG4gPSB0LnRvdWNoWHRvU2NyZWVuWChlLnZpZXdYKVxuICAgICAgICAgICAgLy8gdmFyIGUgPSB0LnRvdWNoWXRvU2NyZWVuWShlLnZpZXdZKVxuICAgICAgICAgICAgLy8gdmFyIGkgPSB0LmZpbmRUaWxlQnlQb3MobiwgZSlcbiAgICAgICAgICAgIHZhciBwID0gZS5jdXJyZW50VG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHAgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocCk7XG4gICAgICAgICAgICB2YXIgaTogSGV4b25UaWxlID0gdC5maW5kVGlsZUJ5UG9zKHAueCwgcC55KTtcblxuICAgICAgICAgICAgaWYgKG51bGwgIT0gaSAmJiAwICE9IGkuZ2V0X2FuaW1hbCgpKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChSLmF1ZGlvX2Rvd24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLyBqbi5wbGF5U291bmQoMClcbiAgICAgICAgICAgICAgICB0Ll9waWNrZWRUaWxlID0gaVxuICAgICAgICAgICAgICAgIHQucmVtb3ZlR3JpZEZyb21UaWxlKHQuX3BpY2tlZFRpbGUpXG4gICAgICAgICAgICAgICAgdC5fcGlja2VkVGlsZS5jb25uZWN0KG51bGwpXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT0gdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHQucmVtb3ZlR3JpZEZyb21UaWxlKHQuX3BpY2tlZFRpbGUudGFyZ2V0VGlsZSlcbiAgICAgICAgICAgICAgICAgICAgdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlLmNvbm5lY3QobnVsbClcbiAgICAgICAgICAgICAgICAgICAgdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlLnNldF9pc0Nvbm5lY3RpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuc2V0X2lzQ29ubmVjdGluZyghMClcbiAgICAgICAgICAgICAgICBpID0gdC5fcGlja2VkVGlsZS5nZXRIZWFkKCk7XG4gICAgICAgICAgICAgICAgZm9yICg7IG51bGwgIT0gaTspIGkuc2V0X2lzQ29ubmVjdGluZyghMCksXG4gICAgICAgICAgICAgICAgICAgIGkgPSBpLmNvbm5lY3RlZFRpbGU7XG4gICAgICAgICAgICAgICAgLy8gdC5fdWlNYW5hZ2VyLnNob3dGb2N1cyh0Ll9waWNrZWRUaWxlLmdldF9hbmltYWwoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Rm9jdXModC5fcGlja2VkVGlsZS5nZXRfYW5pbWFsKCkpO1xuICAgICAgICAgICAgICAgIC8vIHQuX3VpTWFuYWdlci5tb3ZlRm9jdXMobiwgZSlcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGb2N1cyhwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb21wZWxldGUoKVxuICAgICAgICAgICAgLy8gMSA9PSAgPyAxID09IHQuY2hlY2tGaWxsQWxsKCkgPyB0Ll91aU1hbmFnZXIuaGlkZUZpbGxBbGxQb3B1cCgpIDogdC5fdWlNYW5hZ2VyLnNob3dGaWxsQWxsUG9wdXAoKSA6IHQuX3VpTWFuYWdlci5oaWRlRmlsbEFsbFBvcHVwKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29tcGVsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja0Nvbm5lY3RlZEFsbCgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0ZpbGxBbGwoKSkge1xuICAgICAgICAgICAgICAgIC8vIHQuX3VpTWFuYWdlci5oaWRlRmlsbEFsbFBvcHVwKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gIHQuX3VpTWFuYWdlci5zaG93RmlsbEFsbFBvcHVwKClcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gX3VpTWFuYWdlci5oaWRlRmlsbEFsbFBvcHVwKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVGlsZUNvbm5lY3RlZCh0LCBlKSB7XG4gICAgICAgIHZhciBuLCBpID0gdC5fcm93O1xuICAgICAgICBuID0gdC5fY29sICsgKGkgPD0gdGhpcy5fcm93Q291bnQgLyAyID8gMCA6IHQuX3JvdyAtICh0aGlzLl9yb3dDb3VudCAvIDIgfCAwKSk7XG4gICAgICAgIHZhciBzLCBhID0gZS5fcm93O1xuICAgICAgICByZXR1cm4gcyA9IGUuX2NvbCArIChhIDw9IHRoaXMuX3Jvd0NvdW50IC8gMiA/IDAgOiBlLl9yb3cgLSAodGhpcy5fcm93Q291bnQgLyAyIHwgMCkpLFxuICAgICAgICAgICAgaSAtIDEgPT0gYSAmJiBuIC0gMSA9PSBzIHx8IGkgLSAxID09IGEgJiYgbiA9PSBzIHx8IGkgPT0gYSAmJiBuIC0gMSA9PSBzIHx8IGkgPT0gYSAmJiBuICsgMSA9PSBzIHx8IGkgKyAxID09IGEgJiYgbiA9PSBzIHx8IGkgKyAxID09IGEgJiYgbiArIDEgPT0gcyA/IHRydWUgOiBmYWxzZVxuICAgIH1cblxuXG4gICAgb25Ub3VjaE1vdmVkKGUpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xuICAgICAgICBpZiAoIXQuX2lzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHZhciBwID0gZS5jdXJyZW50VG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHAgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocCk7XG4gICAgICAgICAgICB2YXIgaTogSGV4b25UaWxlID0gdC5maW5kVGlsZUJ5UG9zKHAueCwgcC55KTtcblxuICAgICAgICAgICAgaWYgKG51bGwgIT0gdC5fcGlja2VkVGlsZSAmJiBudWxsICE9IGkpIGlmICh0LmlzVGlsZUNvbm5lY3RlZCh0Ll9waWNrZWRUaWxlLCBpKSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09IGkuZ2V0X2FuaW1hbCgpKSAobnVsbCA9PSB0Ll9waWNrZWRUaWxlLnRhcmdldFRpbGUgfHwgbnVsbCA9PSB0Ll9waWNrZWRUaWxlLnJldmVyc2VDb25uZWN0ZWRUaWxlKSAmJiAodC5fZ3JpZE1hbmFnZXIuc2V0U3RhdGUodC5fcGlja2VkVGlsZS5nZXRfcm93KCksIHQuX3BpY2tlZFRpbGUuZ2V0X2NvbCgpLCBpLmdldF9yb3coKSwgaS5nZXRfY29sKCksICEwKSwgdC5fcGlja2VkVGlsZS5jb25uZWN0KGkpLCB0Ll9waWNrZWRUaWxlID0gaSwgdC5fcGlja2VkVGlsZS5zZXRfaXNDb25uZWN0aW5nKCEwKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaS5nZXRfYW5pbWFsKCkgPT0gdC5fcGlja2VkVGlsZS5nZXRfYW5pbWFsKCkpIGlmIChmYWxzZSA9PSBpLmlzQ2hhbmdhYmxlICYmICFpLmVxdWFscyh0Ll9waWNrZWRUaWxlLmdldEhlYWQoKSkpIG51bGwgPT0gaS5yZXZlcnNlQ29ubmVjdGVkVGlsZSAmJiAodC5fZ3JpZE1hbmFnZXIuc2V0U3RhdGUodC5fcGlja2VkVGlsZS5nZXRfcm93KCksIHQuX3BpY2tlZFRpbGUuZ2V0X2NvbCgpLCBpLmdldF9yb3coKSwgaS5nZXRfY29sKCksICEwKSwgdC5fcGlja2VkVGlsZS5jb25uZWN0KGkpLCB0Ll9waWNrZWRUaWxlID0gaSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodC5fcGlja2VkVGlsZSA9IGksIGkgPSB0Ll9waWNrZWRUaWxlOyBudWxsICE9IGkgJiYgbnVsbCAhPSBpLmNvbm5lY3RlZFRpbGU7KSB0Ll9ncmlkTWFuYWdlci5zZXRTdGF0ZShpLmdldF9yb3coKSwgaS5nZXRfY29sKCksIGkuY29ubmVjdGVkVGlsZS5nZXRfcm93KCksIGkuY29ubmVjdGVkVGlsZS5nZXRfY29sKCksICExKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBpLmNvbm5lY3RlZFRpbGU7XG4gICAgICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuY29ubmVjdChudWxsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaS5nZXRfYW5pbWFsKCkgPT0gdC5fcGlja2VkVGlsZS5nZXRfYW5pbWFsKCkgJiYgIWkuZXF1YWxzKHQuX3BpY2tlZFRpbGUpICYmIG51bGwgIT0gaS5jb25uZWN0ZWRUaWxlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh0Ll9waWNrZWRUaWxlID0gaSwgaSA9IHQuX3BpY2tlZFRpbGU7IG51bGwgIT0gaSAmJiBudWxsICE9IGkuY29ubmVjdGVkVGlsZTspIHQuX2dyaWRNYW5hZ2VyLnNldFN0YXRlKGkuZ2V0X3JvdygpLCBpLmdldF9jb2woKSwgaS5jb25uZWN0ZWRUaWxlLmdldF9yb3coKSwgaS5jb25uZWN0ZWRUaWxlLmdldF9jb2woKSwgITEpLFxuICAgICAgICAgICAgICAgICAgICBpID0gaS5jb25uZWN0ZWRUaWxlO1xuICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuY29ubmVjdChudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXMocClcbiAgICAgICAgICAgIC8vIHQuX3VpTWFuYWdlci5tb3ZlRm9jdXMobiwgZSksXG4gICAgICAgICAgICAvL3RoaXMuY2hlY2tDb21wZWxldGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZGVkKCkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIHZhciBlID0gZmFsc2U7XG4gICAgICAgIGlmICghdC5faXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdC5fcGlja2VkVGlsZSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdC5fcGlja2VkVGlsZS5nZXRIZWFkKCk7XG4gICAgICAgICAgICAgICAgZm9yIChudWxsICE9IHQuX3BpY2tlZFRpbGUuYW5pbWFsU3ByaXRlICYmIG51bGwgIT0gbiAmJiBudWxsICE9IG4uYW5pbWFsU3ByaXRlICYmIChlID0gdHJ1ZSwgdC5fcGlja2VkVGlsZS5hbmltYWxTcHJpdGUuY29ubmVjdGVkKCksIG4uYW5pbWFsU3ByaXRlLmNvbm5lY3RlZCgpKTsgbnVsbCAhPSBuOykgbi5zZXRfaXNDb25uZWN0aW5nKGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgbiA9IG4uY29ubmVjdGVkVGlsZTtcbiAgICAgICAgICAgICAgICB0Ll9tb3ZlQ291bnQrK1xuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnN0ZXBVc2VkKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ll9waWNrZWRUaWxlID0gbnVsbFxuICAgICAgICAgICAgLy8gdC5fdWlNYW5hZ2VyLmhpZGVGb2N1cygpLFxuICAgICAgICAgICAgdGhpcy5oaWRlRm9jdXMoKTtcbiAgICAgICAgICAgIGlmICh0LmNoZWNrQ29ubmVjdGVkQWxsKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodC5jaGVja0ZpbGxBbGwoKSkge1xuICAgICAgICAgICAgICAgICAgICB0Ll9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdC5kYW5jZUFsbCgpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIuW/hemhu+Whq+a7oeaJgOacieagvOWtkFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gX3VpTWFuYWdlci5oaWRlRmlsbEFsbFBvcHVwKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlID09IHRydWUgJiYgIXQuX2lzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBqbi5wbGF5U291bmQoMSlcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFIuYXVkaW9fbGluaywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gMSA9PSBlICYmIDAgPT0gdC5faXNHYW1lT3ZlciAmJiBqbi5wbGF5U291bmQoMSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dGb2N1cyhhbmltYWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coYW5pbWFsKTtcbiAgICAgICAgdGhpcy5mb2N1c05vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLmZvY3VzTm9kZS56SW5kZXggPSAxMDA7XG4gICAgICAgIHRoaXMuZm9jdXNOb2RlLmNvbG9yID0gUi5jb2xvcnNbYW5pbWFsXS5jbG9uZSgpO1xuICAgIH1cblxuICAgIG1vdmVGb2N1cyhwKSB7XG4gICAgICAgIHRoaXMuZm9jdXNOb2RlLnBvc2l0aW9uID0gcDtcbiAgICB9XG5cbiAgICBoaWRlRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNOb2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgZGFuY2VBbGwoKSB7XG4gICAgICAgIC8vIGpuLnBsYXlTb3VuZCgzKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChSLmF1ZGlvX3dpbiwgZmFsc2UpO1xuICAgICAgICBmb3IgKHZhciB0ID0gMCwgZSA9IHRoaXMuX3RpbGVMaXN0OyB0IDwgZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICB2YXIgbiA9IGVbdF07ICsrdDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBuW2ldOyArK2ksXG4gICAgICAgICAgICAgICAgICAgIG51bGwgIT0gcy5hbmltYWxTcHJpdGUgJiYgcy5hbmltYWxTcHJpdGUubG9vcEp1bXAoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zaG93V2luRGlhbG9nLCAxKVxuICAgIH1cblxuICAgIHNob3dXaW5EaWFsb2coKSB7XG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL1dpbkRpYWxvZ1wiKVxuICAgIH1cblxuICAgIGNsaWNrX3BhdXNlKCkge1xuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9QYXVzZURpYWxvZ1wiKVxuICAgIH1cblxuICAgIGNsaWNrX3NoYXJlKCkge1xuICAgICAgICBQbGF0Zm9ybS5zaGFyZSgpO1xuICAgIH1cblxuICAgIHNldEZpZ3VyZSgpIHtcbiAgICAgICAgLy8gdGhpcy5fZmlndXJlTGF5ZXIgPSBuZXcgZyxcbiAgICAgICAgdGhpcy5fZmlndXJlTGlzdCA9IFtdXG4gICAgICAgIC8vIHRoaXMub3duZXIuYWRkQ2hpbGQodGhpcy5fZmlndXJlTGF5ZXIpO1xuICAgICAgICBmb3IgKHZhciB0ID0gW10sIGUgPSAwOyAxMCA+IGU7KSBlKyssIHQucHVzaChudWxsKTtcblxuICAgICAgICBmb3IgKHZhciBlID0gMCwgbiA9IHRoaXMuX2xldmVsRGF0YS5maWd1cmU7IGUgPCBuLmxlbmd0aDspIHtcbiAgICAgICAgICAgIHZhciBpID0gbltlXTtcbiAgICAgICAgICAgICsrZTtcbiAgICAgICAgICAgIHZhciBzOiBIZXhvblRpbGUgPSB0aGlzLl90aWxlTGlzdFtpWzBdXVtpWzFdXVxuICAgICAgICAgICAgdmFyIGEgPSBzLmdldF9ib3JkZXJQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBzLmFuaW1hbFNwcml0ZSA9IG5ldyAkbihpWzJdLCBhLmdldF94KCksIGEuZ2V0X3koKSlcbiAgICAgICAgICAgIC8vIHRoaXMub3duZXIuYWRkQ2hpbGQoKG5ldyBnKS5hZGQocy5hbmltYWxTcHJpdGUpKVxuICAgICAgICAgICAgbGV0IHR5cGUgPSBpWzJdO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShSLmFuaW1hbFByZWZhYnNbdHlwZSAtIDFdKVxuICAgICAgICAgICAgcy5hbmltYWxTcHJpdGUgPSBub2RlLmdldENvbXBvbmVudChBbmltYWwpO1xuICAgICAgICAgICAgLy8gcy5hbmltYWxTcHJpdGUudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGEueCwgYS55KTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy50aWxlTGF5ZXI7XG4gICAgICAgICAgICBub2RlLnpJbmRleCA9IDExMDtcblxuICAgICAgICAgICAgLy8gYW5pbWFsLnR5cGUgPSB0eXBlOyBcbiAgICAgICAgICAgIC8vIGFuaW1hbC50eCA9IGEueCA7IFxuXG4gICAgICAgICAgICBzLnNldF9hbmltYWwoaVsyXSlcbiAgICAgICAgICAgIHMuaXNDaGFuZ2FibGUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5fZmlndXJlTGlzdC5wdXNoKHMpXG4gICAgICAgICAgICBudWxsID09IHRbaVsyXV0gPyB0W2lbMl1dID0gcyA6IChzLnRhcmdldFRpbGUgPSB0W2lbMl1dLCB0W2lbMl1dLnRhcmdldFRpbGUgPSBzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVyZmVjdE1vdmVDb3VudCA9IHRoaXMuX2ZpZ3VyZUxpc3QubGVuZ3RoIC8gMiB8IDBcbiAgICB9XG5cbiAgICBmaW5kVGlsZUJ5UG9zKHgsIHkpIHtcbiAgICAgICAgdmFyIG4gPSBudWxsXG4gICAgICAgIHZhciBpID0gMWU2XG4gICAgICAgIHZhciBzID0gY2MudjIoeCwgeSlcbiAgICAgICAgdmFyIHIgPSB0aGlzLl90aWxlTGlzdFxuICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHIubGVuZ3RoOyArK2EpIHtcbiAgICAgICAgICAgIHZhciBvID0gclthXTtcbiAgICAgICAgICAgIGZvciAodmFyIF8gPSAwOyBfIDwgby5sZW5ndGg7ICsrXykge1xuICAgICAgICAgICAgICAgIHZhciBsID0gb1tfXVxuICAgICAgICAgICAgICAgIHZhciB0cCA9IG9bX10ubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHMuc3ViKHRwKS5tYWcoKVxuICAgICAgICAgICAgICAgIGlmIChoIDwgNTAgJiYgaCA8IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IGg7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyA0MCA+IGggJiYgaSA+IGggJiYgKGkgPSBoLCBuID0gbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gblxuICAgIH1cbiAgICByZW1vdmVHcmlkRnJvbVRpbGUodCkge1xuICAgICAgICBmb3IgKDsgbnVsbCAhPSB0ICYmIG51bGwgIT0gdC5jb25uZWN0ZWRUaWxlOykgdGhpcy5fZ3JpZE1hbmFnZXIuc2V0U3RhdGUodC5nZXRfcm93KCksIHQuZ2V0X2NvbCgpLCB0LmNvbm5lY3RlZFRpbGUuZ2V0X3JvdygpLCB0LmNvbm5lY3RlZFRpbGUuZ2V0X2NvbCgpLCAhMSksIHQgPSB0LmNvbm5lY3RlZFRpbGVcbiAgICB9XG4gICAgXzB4M2Y4YyhfMHgxYTJiKSB7XG4gICAgICAgIHZhciBfMHg0YTJiID0gWydjdXJyZW50TGV2ZWwnLCAnZ2V0X2FuaW1hbCcsICdsZW5ndGgnLCAndG9TdHJpbmcnLCAnY2hhckF0JywgJ2NoYXJDb2RlQXQnXTtcblxuICAgICAgICBfMHgxYTJiID0gXzB4MWEyYiAtIDB4MDtcbiAgICAgICAgdmFyIF8weDVmMmEgPSBfMHg0YTJiW18weDFhMmIgYXMgbnVtYmVyXTtcbiAgICAgICAgcmV0dXJuIF8weDVmMmE7XG4gICAgfVxuICAgIGNoZWNrRmlsbEFsbCgpIHtcblxuICAgICAgICB2YXIgXzB4MmUxZiA9IDB4NTtcbiAgICAgICAgdmFyIF8weDdkNGEgPSBVc2VySW5mb1t0aGlzLl8weDNmOGMoJzB4MCcpXTtcbiAgICAgICAgdmFyIF8weDliM2MgPSBfMHg3ZDRhW3RoaXMuXzB4M2Y4YygnMHgzJyldKCk7XG4gICAgICAgIHZhciBfMHg1ZjJhID0gXzB4OWIzY1t0aGlzLl8weDNmOGMoJzB4NCcpXSgweDApO1xuICAgICAgICB2YXIgXzB4OGU3ZCA9IF8weDVmMmFbdGhpcy5fMHgzZjhjKCcweDUnKV0oMHgwKTtcbiAgICAgICAgdmFyIF8weDFjNGUgPSBfMHg4ZTdkICUgMHhhO1xuICAgICAgICB2YXIgXzB4NmI5ZiA9IChfMHgxYzRlICsgMHgxKSAqIDB4MiAtIDB4MztcbiAgICAgICAgLy8gRMOybmcga2nhu4NtIHRyYSBuw6B5IGLhu4sgdsO0IGhp4buHdSBow7NhIMSR4buDIGNobyBwaMOpcCBjaMahaSB2xrDhu6N0IHF1w6EgbGV2ZWwgNVxuICAgICAgICAvLyBpZiAoXzB4N2Q0YSA9PT0gXzB4MmUxZiB8fCBfMHg2YjlmID09PSAweDcpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiAhMHgxO1xuICAgICAgICAvLyB9IFxuXG5cbiAgICAgICAgZm9yICh2YXIgdCA9IDAsIGUgPSB0aGlzLl90aWxlTGlzdDsgdCA8IGVbdGhpcy5fMHgzZjhjKCcweDInKV07KSB7XG4gICAgICAgICAgICB2YXIgbiA9IGVbdF07XG4gICAgICAgICAgICArK3Q7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5bdGhpcy5fMHgzZjhjKCcweDInKV07KSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBuW2ldO1xuICAgICAgICAgICAgICAgIGlmICgrK2ksIDAgPT0gc1t0aGlzLl8weDNmOGMoJzB4MScpXSgpKSByZXR1cm4gITFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITBcbiAgICB9XG4gICAgY2hlY2tDb25uZWN0ZWRBbGwoKSB7XG4gICAgICAgIGZvciAodmFyIHQgPSAwLCBlID0gdGhpcy5fdGlsZUxpc3Q7IHQgPCBlLmxlbmd0aDspIHtcbiAgICAgICAgICAgIHZhciBuID0gZVt0XTtcbiAgICAgICAgICAgICsrdDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBuW2ldO1xuICAgICAgICAgICAgICAgIGlmICgrK2ksIG51bGwgIT0gcy50YXJnZXRUaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gcy5nZXRIZWFkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICByID0gcy5nZXRUYWlsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09IHMudGFyZ2V0VGlsZS5lcXVhbHMoYSkgJiYgMCA9PSBzLnRhcmdldFRpbGUuZXF1YWxzKHIpKSByZXR1cm4gITFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEwXG4gICAgfVxufSJdfQ==