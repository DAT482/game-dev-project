
(function () {
var scripts = [{"deps":{"./assets/framework/network/Message":31,"./assets/framework/network/MessageBase":38,"./assets/framework/network/MessageDispatch":39,"./assets/framework/network/MessageHandler":41,"./assets/framework/network/MessageType":37,"./assets/framework/network/Socket":40,"./assets/framework/network/ConnectManager":42,"./assets/framework/qqsdk/SoundHelper":33,"./assets/framework/qqsdk/BKTool":43,"./assets/framework/wxsdk/GameConfigs":32,"./assets/framework/wxsdk/MoreGameComponent":48,"./assets/framework/wxsdk/MoreGameDialog":49,"./assets/framework/wxsdk/MoreGameItem":44,"./assets/framework/wxsdk/MoreGameManager":45,"./assets/framework/wxsdk/MoreGameStyle":47,"./assets/framework/wxsdk/WxRankDialog":46,"./assets/framework/wxsdk/sdk":51,"./assets/framework/wxsdk/AddToMyFav":50,"./assets/migration/use_v2.0.x_cc.Toggle_event":1,"./assets/Game/Scripts/i18n":3,"./assets/Game/Scripts/Info":7,"./assets/Game/Scripts/hex-lines-game/Consts":8,"./assets/Game/Scripts/hex-lines-game/Game":4,"./assets/Game/Scripts/hex-lines-game/GridManager":28,"./assets/Game/Scripts/hex-lines-game/HexonTile":9,"./assets/Game/Scripts/hex-lines-game/Res":10,"./assets/Game/Scripts/hex-lines-game/Animal":12,"./assets/Game/Scripts/hex-lines-game/base/com":2,"./assets/Game/Scripts/hex-lines-game/ds/IntMap":6,"./assets/Game/Scripts/ui/DCParticleSystem":5,"./assets/Game/Scripts/ui/DailyGetDialog":13,"./assets/Game/Scripts/ui/GameOver":11,"./assets/Game/Scripts/ui/GetDialog":16,"./assets/Game/Scripts/ui/HbDialog":14,"./assets/Game/Scripts/ui/LevelDialog":15,"./assets/Game/Scripts/ui/LevelupDialog":19,"./assets/Game/Scripts/ui/LuckyDialog":17,"./assets/Game/Scripts/ui/OpenGuide":87,"./assets/Game/Scripts/ui/OverDialog":86,"./assets/Game/Scripts/ui/PauseDialog":18,"./assets/Game/Scripts/ui/ShopDialog":20,"./assets/Game/Scripts/ui/ShopItemTemplate":22,"./assets/Game/Scripts/ui/WeChatDialog":21,"./assets/Game/Scripts/ui/WinDialog":27,"./assets/Game/Scripts/ui/popup_GameOver":23,"./assets/Game/Scripts/ui/DCBackground":26,"./assets/Game/Scripts/Main":25,"./assets/framework/Platform":24,"./assets/framework/plugin_boosts/gamesys/InfiniteBackground":53,"./assets/framework/plugin_boosts/gamesys/LocalLifeSystem":30,"./assets/framework/plugin_boosts/gamesys/LocalTimeSystem":57,"./assets/framework/plugin_boosts/gamesys/PoolManager":52,"./assets/framework/plugin_boosts/gamesys/PsFx":85,"./assets/framework/plugin_boosts/gamesys/PsFxPlayer":59,"./assets/framework/plugin_boosts/gamesys/PsSpawner":55,"./assets/framework/plugin_boosts/gamesys/Device":56,"./assets/framework/plugin_boosts/libs/easing":34,"./assets/framework/plugin_boosts/misc/ClickAudio":54,"./assets/framework/plugin_boosts/misc/ClickAudioManager":35,"./assets/framework/plugin_boosts/misc/DataCenter":74,"./assets/framework/plugin_boosts/misc/FrameSwitch":60,"./assets/framework/plugin_boosts/misc/InputSystem":58,"./assets/framework/plugin_boosts/misc/JoyStick":63,"./assets/framework/plugin_boosts/misc/Net":70,"./assets/framework/plugin_boosts/misc/Signal":72,"./assets/framework/plugin_boosts/misc/SpriteFrameCache":61,"./assets/framework/plugin_boosts/misc/BoostsAction":73,"./assets/framework/plugin_boosts/ui/DCPandoraPoint":64,"./assets/framework/plugin_boosts/ui/DCSprite":62,"./assets/framework/plugin_boosts/ui/DCToggle":66,"./assets/framework/plugin_boosts/ui/DCUI":65,"./assets/framework/plugin_boosts/ui/LoadingManager":67,"./assets/framework/plugin_boosts/ui/MessageBoxComponent":68,"./assets/framework/plugin_boosts/ui/MessageBoxManager":71,"./assets/framework/plugin_boosts/ui/PandoraPoint":69,"./assets/framework/plugin_boosts/ui/ToastComponent":78,"./assets/framework/plugin_boosts/ui/ToastManager":76,"./assets/framework/plugin_boosts/ui/UIComponent":75,"./assets/framework/plugin_boosts/ui/UIFunctions":77,"./assets/framework/plugin_boosts/ui/View":80,"./assets/framework/plugin_boosts/ui/ViewManager":79,"./assets/framework/plugin_boosts/ui/DCLabel":83,"./assets/framework/plugin_boosts/ui/game/LevelSelector":29,"./assets/framework/plugin_boosts/utils/EventManager":84,"./assets/framework/plugin_boosts/utils/Intersection":81,"./assets/framework/plugin_boosts/utils/Common":36,"./assets/framework/plugin_boosts/gamesys/FSM":82},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/base/com.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/i18n.js"},{"deps":{"./Res":10,"./HexonTile":9,"./GridManager":28,"../Info":7,"./Animal":12,"../../Scripts/i18n":3,"../../../framework/Platform":24,"../../../framework/plugin_boosts/ui/ToastManager":76,"../../../framework/plugin_boosts/ui/ViewManager":79,"../../../framework/plugin_boosts/misc/InputSystem":58},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Game.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":65,"../Info":7},"path":"preview-scripts/assets/Game/Scripts/ui/DCParticleSystem.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/ds/IntMap.js"},{"deps":{"../../framework/plugin_boosts/misc/DataCenter":74,"./hex-lines-game/Res":10,"../../framework/plugin_boosts/ui/ToastManager":76,"../../framework/plugin_boosts/gamesys/Device":56,"../../framework/Platform":24,"../../framework/wxsdk/MoreGameManager":45},"path":"preview-scripts/assets/Game/Scripts/Info.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Consts.js"},{"deps":{"./Consts":8,"./Game":4,"./Res":10},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/HexonTile.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Res.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/GameOver.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Animal.js"},{"deps":{"../Info":7,"../../../framework/plugin_boosts/ui/View":80,"../../../framework/Platform":24},"path":"preview-scripts/assets/Game/Scripts/ui/DailyGetDialog.js"},{"deps":{"../../../framework/Platform":24,"../../../framework/plugin_boosts/ui/ViewManager":79,"../../../framework/plugin_boosts/ui/ToastManager":76,"../hex-lines-game/Res":10,"../Info":7,"../../../framework/plugin_boosts/gamesys/Device":56,"../../../framework/plugin_boosts/ui/View":80},"path":"preview-scripts/assets/Game/Scripts/ui/HbDialog.js"},{"deps":{"../Info":7,"../../../framework/plugin_boosts/ui/game/LevelSelector":29,"../i18n":3},"path":"preview-scripts/assets/Game/Scripts/ui/LevelDialog.js"},{"deps":{"../../../framework/plugin_boosts/ui/View":80,"../Info":7,"../../../framework/plugin_boosts/ui/ViewManager":79,"../../../framework/Platform":24},"path":"preview-scripts/assets/Game/Scripts/ui/GetDialog.js"},{"deps":{"../../../framework/plugin_boosts/ui/ToastManager":76,"../../../framework/plugin_boosts/ui/ViewManager":79,"../../../framework/plugin_boosts/ui/View":80,"../Info":7,"../../../framework/Platform":24,"../../../framework/plugin_boosts/gamesys/Device":56,"../hex-lines-game/Res":10,"../../../framework/plugin_boosts/ui/UIFunctions":77,"../Main":25,"../i18n":3},"path":"preview-scripts/assets/Game/Scripts/ui/LuckyDialog.js"},{"deps":{"../../../framework/Platform":24},"path":"preview-scripts/assets/Game/Scripts/ui/PauseDialog.js"},{"deps":{"../Info":7,"../../../framework/plugin_boosts/ui/View":80,"../../../framework/Platform":24},"path":"preview-scripts/assets/Game/Scripts/ui/LevelupDialog.js"},{"deps":{"./ShopItemTemplate":22,"../../../framework/plugin_boosts/misc/SpriteFrameCache":61,"../hex-lines-game/Res":10,"../../../framework/Platform":24,"../Info":7,"../../../framework/plugin_boosts/ui/ToastManager":76,"../../../framework/plugin_boosts/ui/UIFunctions":77,"../../../framework/plugin_boosts/gamesys/Device":56,"../Main":25},"path":"preview-scripts/assets/Game/Scripts/ui/ShopDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/WeChatDialog.js"},{"deps":{"../../../framework/plugin_boosts/misc/Signal":72},"path":"preview-scripts/assets/Game/Scripts/ui/ShopItemTemplate.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/popup_GameOver.js"},{"deps":{"./wxsdk/sdk":51,"./plugin_boosts/ui/ToastManager":76,"./qqsdk/BKTool":43,"./plugin_boosts/misc/SpriteFrameCache":61,"./plugin_boosts/misc/Signal":72,"./plugin_boosts/utils/EventManager":84,"../../assets/Game/Scripts/Info":7},"path":"preview-scripts/assets/framework/Platform.js"},{"deps":{"./Info":7,"./i18n":3,"../../framework/Platform":24,"./hex-lines-game/Res":10,"../../framework/plugin_boosts/ui/ViewManager":79,"../../framework/plugin_boosts/gamesys/Device":56,"../../framework/plugin_boosts/ui/ToastManager":76},"path":"preview-scripts/assets/Game/Scripts/Main.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":65,"../../../framework/plugin_boosts/misc/SpriteFrameCache":61,"../Info":7},"path":"preview-scripts/assets/Game/Scripts/ui/DCBackground.js"},{"deps":{"../Info":7,"../../../framework/Platform":24,"../../../framework/plugin_boosts/ui/ViewManager":79,"../hex-lines-game/Consts":8},"path":"preview-scripts/assets/Game/Scripts/ui/WinDialog.js"},{"deps":{"./ds/IntMap":6,"./Game":4,"./Res":10},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/GridManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/game/LevelSelector.js"},{"deps":{"../utils/EventManager":84,"../misc/Signal":72},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalLifeSystem.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/Message.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/GameConfigs.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/SoundHelper.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/libs/easing.js"},{"deps":{"./ClickAudio":54},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudioManager.js"},{"deps":{"../misc/SpriteFrameCache":61},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Common.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageType.js"},{"deps":{"./MessageType":37,"./Message":31,"./ConnectManager":42},"path":"preview-scripts/assets/framework/network/MessageBase.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageDispatch.js"},{"deps":{"./MessageHandler":41,"./MessageType":37},"path":"preview-scripts/assets/framework/network/Socket.js"},{"deps":{"./Message":31,"./MessageType":37,"./MessageDispatch":39},"path":"preview-scripts/assets/framework/network/MessageHandler.js"},{"deps":{"./Socket":40},"path":"preview-scripts/assets/framework/network/ConnectManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/BKTool.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/MoreGameItem.js"},{"deps":{"./MoreGameComponent":48,"./GameConfigs":32},"path":"preview-scripts/assets/framework/wxsdk/MoreGameManager.js"},{"deps":{"../Platform":24,"../plugin_boosts/ui/View":80,"../plugin_boosts/misc/Signal":72},"path":"preview-scripts/assets/framework/wxsdk/WxRankDialog.js"},{"deps":{"./MoreGameComponent":48},"path":"preview-scripts/assets/framework/wxsdk/MoreGameStyle.js"},{"deps":{"./MoreGameManager":45},"path":"preview-scripts/assets/framework/wxsdk/MoreGameComponent.js"},{"deps":{"./MoreGameManager":45,"./MoreGameItem":44},"path":"preview-scripts/assets/framework/wxsdk/MoreGameDialog.js"},{"deps":{"../Platform":24},"path":"preview-scripts/assets/framework/wxsdk/AddToMyFav.js"},{"deps":{"../plugin_boosts/utils/EventManager":84,"./GameConfigs":32},"path":"preview-scripts/assets/framework/wxsdk/sdk.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PoolManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/InfiniteBackground.js"},{"deps":{"../gamesys/Device":56},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudio.js"},{"deps":{"./PsFx":85,"./PoolManager":52},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsSpawner.js"},{"deps":{"../../qqsdk/SoundHelper":33},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/Device.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalTimeSystem.js"},{"deps":{"./JoyStick":63},"path":"preview-scripts/assets/framework/plugin_boosts/misc/InputSystem.js"},{"deps":{"./PsFx":85,"./Device":56},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFxPlayer.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/FrameSwitch.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/SpriteFrameCache.js"},{"deps":{"./DCUI":65,"../misc/SpriteFrameCache":61},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCSprite.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/JoyStick.js"},{"deps":{"./DCUI":65,"./PandoraPoint":69},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCPandoraPoint.js"},{"deps":{"../misc/DataCenter":74},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCUI.js"},{"deps":{"./DCUI":65},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCToggle.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/LoadingManager.js"},{"deps":{"./View":80,"./MessageBoxManager":71},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/PandoraPoint.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Net.js"},{"deps":{"./ViewManager":79},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Signal.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/BoostsAction.js"},{"deps":{"../utils/EventManager":84},"path":"preview-scripts/assets/framework/plugin_boosts/misc/DataCenter.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIComponent.js"},{"deps":{"./ToastComponent":78},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIFunctions.js"},{"deps":{"./UIFunctions":77},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastComponent.js"},{"deps":{"./View":80},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ViewManager.js"},{"deps":{"./UIComponent":75,"./ViewManager":79,"./UIFunctions":77},"path":"preview-scripts/assets/framework/plugin_boosts/ui/View.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Intersection.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/FSM.js"},{"deps":{"./DCUI":65},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCLabel.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/EventManager.js"},{"deps":{"./Device":56},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFx.js"},{"deps":{"../i18n":3},"path":"preview-scripts/assets/Game/Scripts/ui/OverDialog.js"},{"deps":{"../../Scripts/i18n":3},"path":"preview-scripts/assets/Game/Scripts/ui/OpenGuide.js"}];
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
    