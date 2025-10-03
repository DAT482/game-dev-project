
(function () {
var scripts = [{"deps":{"./assets/framework/network/Message":53,"./assets/framework/network/MessageBase":40,"./assets/framework/network/MessageDispatch":35,"./assets/framework/network/MessageHandler":30,"./assets/framework/network/MessageType":52,"./assets/framework/network/Socket":50,"./assets/framework/network/ConnectManager":38,"./assets/framework/qqsdk/SoundHelper":31,"./assets/framework/qqsdk/BKTool":51,"./assets/framework/wxsdk/GameConfigs":32,"./assets/framework/wxsdk/MoreGameComponent":37,"./assets/framework/wxsdk/MoreGameDialog":43,"./assets/framework/wxsdk/MoreGameItem":44,"./assets/framework/wxsdk/MoreGameManager":42,"./assets/framework/wxsdk/MoreGameStyle":45,"./assets/framework/wxsdk/WxRankDialog":46,"./assets/framework/wxsdk/sdk":49,"./assets/framework/wxsdk/AddToMyFav":48,"./assets/migration/use_v2.0.x_cc.Toggle_event":1,"./assets/Game/Scripts/i18n":3,"./assets/Game/Scripts/Info":47,"./assets/Game/Scripts/hex-lines-game/Consts":39,"./assets/Game/Scripts/hex-lines-game/Game":41,"./assets/Game/Scripts/hex-lines-game/GridManager":10,"./assets/Game/Scripts/hex-lines-game/HexonTile":6,"./assets/Game/Scripts/hex-lines-game/Res":12,"./assets/Game/Scripts/hex-lines-game/Animal":14,"./assets/Game/Scripts/hex-lines-game/base/com":2,"./assets/Game/Scripts/hex-lines-game/ds/IntMap":5,"./assets/Game/Scripts/ui/DCParticleSystem":4,"./assets/Game/Scripts/ui/DailyGetDialog":9,"./assets/Game/Scripts/ui/GameOver":7,"./assets/Game/Scripts/ui/GetDialog":8,"./assets/Game/Scripts/ui/HbDialog":11,"./assets/Game/Scripts/ui/LevelDialog":15,"./assets/Game/Scripts/ui/LevelupDialog":16,"./assets/Game/Scripts/ui/LuckyDialog":13,"./assets/Game/Scripts/ui/OpenGuide":21,"./assets/Game/Scripts/ui/OverDialog":19,"./assets/Game/Scripts/ui/PauseDialog":20,"./assets/Game/Scripts/ui/ShopDialog":24,"./assets/Game/Scripts/ui/ShopItemTemplate":22,"./assets/Game/Scripts/ui/WeChatDialog":23,"./assets/Game/Scripts/ui/WinDialog":25,"./assets/Game/Scripts/ui/popup_GameOver":26,"./assets/Game/Scripts/ui/DCBackground":27,"./assets/Game/Scripts/Main":17,"./assets/framework/Platform":18,"./assets/framework/plugin_boosts/gamesys/InfiniteBackground":59,"./assets/framework/plugin_boosts/gamesys/LocalLifeSystem":54,"./assets/framework/plugin_boosts/gamesys/LocalTimeSystem":29,"./assets/framework/plugin_boosts/gamesys/PoolManager":55,"./assets/framework/plugin_boosts/gamesys/PsFx":57,"./assets/framework/plugin_boosts/gamesys/PsFxPlayer":56,"./assets/framework/plugin_boosts/gamesys/PsSpawner":62,"./assets/framework/plugin_boosts/gamesys/Device":58,"./assets/framework/plugin_boosts/libs/easing":33,"./assets/framework/plugin_boosts/misc/ClickAudio":60,"./assets/framework/plugin_boosts/misc/ClickAudioManager":34,"./assets/framework/plugin_boosts/misc/DataCenter":61,"./assets/framework/plugin_boosts/misc/FrameSwitch":69,"./assets/framework/plugin_boosts/misc/InputSystem":66,"./assets/framework/plugin_boosts/misc/JoyStick":63,"./assets/framework/plugin_boosts/misc/Net":87,"./assets/framework/plugin_boosts/misc/Signal":67,"./assets/framework/plugin_boosts/misc/SpriteFrameCache":70,"./assets/framework/plugin_boosts/misc/BoostsAction":71,"./assets/framework/plugin_boosts/ui/DCPandoraPoint":65,"./assets/framework/plugin_boosts/ui/DCSprite":64,"./assets/framework/plugin_boosts/ui/DCToggle":68,"./assets/framework/plugin_boosts/ui/DCUI":77,"./assets/framework/plugin_boosts/ui/LoadingManager":72,"./assets/framework/plugin_boosts/ui/MessageBoxComponent":75,"./assets/framework/plugin_boosts/ui/MessageBoxManager":73,"./assets/framework/plugin_boosts/ui/PandoraPoint":78,"./assets/framework/plugin_boosts/ui/ToastComponent":80,"./assets/framework/plugin_boosts/ui/ToastManager":81,"./assets/framework/plugin_boosts/ui/UIComponent":76,"./assets/framework/plugin_boosts/ui/UIFunctions":79,"./assets/framework/plugin_boosts/ui/View":74,"./assets/framework/plugin_boosts/ui/ViewManager":82,"./assets/framework/plugin_boosts/ui/DCLabel":84,"./assets/framework/plugin_boosts/ui/game/LevelSelector":28,"./assets/framework/plugin_boosts/utils/EventManager":86,"./assets/framework/plugin_boosts/utils/Intersection":85,"./assets/framework/plugin_boosts/utils/Common":36,"./assets/framework/plugin_boosts/gamesys/FSM":83},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/base/com.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/i18n.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":77,"../Info":47},"path":"preview-scripts/assets/Game/Scripts/ui/DCParticleSystem.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/ds/IntMap.js"},{"deps":{"./Consts":39,"./Game":41,"./Res":12},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/HexonTile.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/GameOver.js"},{"deps":{"../../../framework/plugin_boosts/ui/View":74,"../Info":47,"../../../framework/plugin_boosts/ui/ViewManager":82,"../../../framework/Platform":18},"path":"preview-scripts/assets/Game/Scripts/ui/GetDialog.js"},{"deps":{"../Info":47,"../../../framework/plugin_boosts/ui/View":74,"../../../framework/Platform":18},"path":"preview-scripts/assets/Game/Scripts/ui/DailyGetDialog.js"},{"deps":{"./ds/IntMap":5,"./Game":41,"./Res":12},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/GridManager.js"},{"deps":{"../../../framework/Platform":18,"../../../framework/plugin_boosts/ui/ViewManager":82,"../../../framework/plugin_boosts/ui/ToastManager":81,"../hex-lines-game/Res":12,"../Info":47,"../../../framework/plugin_boosts/gamesys/Device":58,"../../../framework/plugin_boosts/ui/View":74},"path":"preview-scripts/assets/Game/Scripts/ui/HbDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Res.js"},{"deps":{"../../../framework/plugin_boosts/ui/ToastManager":81,"../../../framework/plugin_boosts/ui/ViewManager":82,"../../../framework/plugin_boosts/ui/View":74,"../Info":47,"../../../framework/Platform":18,"../../../framework/plugin_boosts/gamesys/Device":58,"../hex-lines-game/Res":12,"../../../framework/plugin_boosts/ui/UIFunctions":79,"../Main":17,"../i18n":3},"path":"preview-scripts/assets/Game/Scripts/ui/LuckyDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Animal.js"},{"deps":{"../Info":47,"../../../framework/plugin_boosts/ui/game/LevelSelector":28,"../i18n":3},"path":"preview-scripts/assets/Game/Scripts/ui/LevelDialog.js"},{"deps":{"../Info":47,"../../../framework/plugin_boosts/ui/View":74,"../../../framework/Platform":18},"path":"preview-scripts/assets/Game/Scripts/ui/LevelupDialog.js"},{"deps":{"../../framework/plugin_boosts/ui/ViewManager":82,"./Info":47,"../../framework/Platform":18,"../../framework/plugin_boosts/gamesys/Device":58,"./hex-lines-game/Res":12,"../../framework/plugin_boosts/ui/ToastManager":81,"./i18n":3},"path":"preview-scripts/assets/Game/Scripts/Main.js"},{"deps":{"./wxsdk/sdk":49,"./qqsdk/BKTool":51,"./plugin_boosts/misc/Signal":67,"./plugin_boosts/misc/SpriteFrameCache":70,"./plugin_boosts/utils/EventManager":86,"./plugin_boosts/ui/ToastManager":81,"../../assets/Game/Scripts/Info":47},"path":"preview-scripts/assets/framework/Platform.js"},{"deps":{"../i18n":3},"path":"preview-scripts/assets/Game/Scripts/ui/OverDialog.js"},{"deps":{"../../../framework/Platform":18},"path":"preview-scripts/assets/Game/Scripts/ui/PauseDialog.js"},{"deps":{"../../Scripts/i18n":3},"path":"preview-scripts/assets/Game/Scripts/ui/OpenGuide.js"},{"deps":{"../../../framework/plugin_boosts/misc/Signal":67},"path":"preview-scripts/assets/Game/Scripts/ui/ShopItemTemplate.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/WeChatDialog.js"},{"deps":{"./ShopItemTemplate":22,"../../../framework/plugin_boosts/misc/SpriteFrameCache":70,"../hex-lines-game/Res":12,"../../../framework/Platform":18,"../Info":47,"../../../framework/plugin_boosts/ui/ToastManager":81,"../../../framework/plugin_boosts/ui/UIFunctions":79,"../../../framework/plugin_boosts/gamesys/Device":58,"../Main":17},"path":"preview-scripts/assets/Game/Scripts/ui/ShopDialog.js"},{"deps":{"../Info":47,"../i18n":3,"../../../framework/Platform":18,"../hex-lines-game/Consts":39,"../../../framework/plugin_boosts/ui/ViewManager":82},"path":"preview-scripts/assets/Game/Scripts/ui/WinDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/popup_GameOver.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":77,"../../../framework/plugin_boosts/misc/SpriteFrameCache":70,"../Info":47},"path":"preview-scripts/assets/Game/Scripts/ui/DCBackground.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/game/LevelSelector.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalTimeSystem.js"},{"deps":{"./Message":53,"./MessageType":52,"./MessageDispatch":35},"path":"preview-scripts/assets/framework/network/MessageHandler.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/SoundHelper.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/GameConfigs.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/libs/easing.js"},{"deps":{"./ClickAudio":60},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudioManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageDispatch.js"},{"deps":{"../misc/SpriteFrameCache":70},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Common.js"},{"deps":{"./MoreGameManager":42},"path":"preview-scripts/assets/framework/wxsdk/MoreGameComponent.js"},{"deps":{"./Socket":50},"path":"preview-scripts/assets/framework/network/ConnectManager.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Consts.js"},{"deps":{"./MessageType":52,"./Message":53,"./ConnectManager":38},"path":"preview-scripts/assets/framework/network/MessageBase.js"},{"deps":{"./Res":12,"./HexonTile":6,"./GridManager":10,"../../../framework/plugin_boosts/misc/InputSystem":66,"../Info":47,"./Animal":14,"../../../framework/plugin_boosts/ui/ViewManager":82,"../../../framework/Platform":18,"../../../framework/plugin_boosts/ui/ToastManager":81,"../../Scripts/i18n":3},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Game.js"},{"deps":{"./MoreGameComponent":37,"./GameConfigs":32},"path":"preview-scripts/assets/framework/wxsdk/MoreGameManager.js"},{"deps":{"./MoreGameManager":42,"./MoreGameItem":44},"path":"preview-scripts/assets/framework/wxsdk/MoreGameDialog.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/MoreGameItem.js"},{"deps":{"./MoreGameComponent":37},"path":"preview-scripts/assets/framework/wxsdk/MoreGameStyle.js"},{"deps":{"../Platform":18,"../plugin_boosts/ui/View":74,"../plugin_boosts/misc/Signal":67},"path":"preview-scripts/assets/framework/wxsdk/WxRankDialog.js"},{"deps":{"../../framework/plugin_boosts/misc/DataCenter":61,"./hex-lines-game/Res":12,"../../framework/plugin_boosts/ui/ToastManager":81,"../../framework/plugin_boosts/gamesys/Device":58,"../../framework/Platform":18,"../../framework/wxsdk/MoreGameManager":42},"path":"preview-scripts/assets/Game/Scripts/Info.js"},{"deps":{"../Platform":18},"path":"preview-scripts/assets/framework/wxsdk/AddToMyFav.js"},{"deps":{"../plugin_boosts/utils/EventManager":86,"./GameConfigs":32},"path":"preview-scripts/assets/framework/wxsdk/sdk.js"},{"deps":{"./MessageHandler":30,"./MessageType":52},"path":"preview-scripts/assets/framework/network/Socket.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/BKTool.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageType.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/Message.js"},{"deps":{"../utils/EventManager":86,"../misc/Signal":67},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalLifeSystem.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PoolManager.js"},{"deps":{"./PsFx":57,"./Device":58},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFxPlayer.js"},{"deps":{"./Device":58},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFx.js"},{"deps":{"../../qqsdk/SoundHelper":31},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/Device.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/InfiniteBackground.js"},{"deps":{"../gamesys/Device":58},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudio.js"},{"deps":{"../utils/EventManager":86},"path":"preview-scripts/assets/framework/plugin_boosts/misc/DataCenter.js"},{"deps":{"./PsFx":57,"./PoolManager":55},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsSpawner.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/JoyStick.js"},{"deps":{"./DCUI":77,"../misc/SpriteFrameCache":70},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCSprite.js"},{"deps":{"./DCUI":77,"./PandoraPoint":78},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCPandoraPoint.js"},{"deps":{"./JoyStick":63},"path":"preview-scripts/assets/framework/plugin_boosts/misc/InputSystem.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Signal.js"},{"deps":{"./DCUI":77},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCToggle.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/FrameSwitch.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/SpriteFrameCache.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/BoostsAction.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/LoadingManager.js"},{"deps":{"./ViewManager":82},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxManager.js"},{"deps":{"./UIComponent":76,"./ViewManager":82,"./UIFunctions":79},"path":"preview-scripts/assets/framework/plugin_boosts/ui/View.js"},{"deps":{"./View":74,"./MessageBoxManager":73},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIComponent.js"},{"deps":{"../misc/DataCenter":61},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCUI.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/PandoraPoint.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIFunctions.js"},{"deps":{"./UIFunctions":79},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastComponent.js"},{"deps":{"./ToastComponent":80},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastManager.js"},{"deps":{"./View":74},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ViewManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/FSM.js"},{"deps":{"./DCUI":77},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCLabel.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Intersection.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/EventManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Net.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    