
(function () {
var scripts = [{"deps":{"./assets/migration/use_v2.0.x_cc.Toggle_event":1,"./assets/framework/wxsdk/MoreGameStyle":2,"./assets/Game/Scripts/hex-lines-game/base/com":3,"./assets/framework/plugin_boosts/gamesys/LocalLifeSystem":4,"./assets/Game/Scripts/Info":5,"./assets/Game/Scripts/hex-lines-game/Game":6,"./assets/framework/plugin_boosts/ui/game/LevelSelector":7,"./assets/Game/Scripts/ui/DailyGetDialog":8,"./assets/Game/Scripts/hex-lines-game/ds/IntMap":9,"./assets/framework/plugin_boosts/misc/ClickAudio":10,"./assets/framework/plugin_boosts/libs/easing":11,"./assets/framework/plugin_boosts/utils/EventManager":12,"./assets/Game/Scripts/ui/GameOver":13,"./assets/Game/Scripts/hex-lines-game/HexonTile":14,"./assets/Game/Scripts/ui/DCParticleSystem":15,"./assets/Game/Scripts/hex-lines-game/GridManager":16,"./assets/Game/Scripts/ui/LuckyDialog":17,"./assets/Game/Scripts/ui/GetDialog":18,"./assets/Game/Scripts/hex-lines-game/Animal":19,"./assets/Game/Scripts/ui/LevelDialog":20,"./assets/Game/Scripts/hex-lines-game/Res":21,"./assets/Game/Scripts/ui/HbDialog":22,"./assets/Game/Scripts/ui/LevelupDialog":23,"./assets/Game/Scripts/ui/OpenGuide":24,"./assets/Game/Scripts/ui/ShopItemTemplate":25,"./assets/Game/Scripts/ui/ShopDialog":26,"./assets/Game/Scripts/ui/OverDialog":27,"./assets/framework/Platform":28,"./assets/Game/Scripts/ui/DCBackground":29,"./assets/Game/Scripts/ui/popup_GameOver":30,"./assets/Game/Scripts/Main":31,"./assets/Game/Scripts/ui/PauseDialog":32,"./assets/Game/Scripts/ui/WeChatDialog":33,"./assets/framework/plugin_boosts/gamesys/InfiniteBackground":34,"./assets/Game/Scripts/ui/WinDialog":35,"./assets/framework/plugin_boosts/gamesys/PsSpawner":36,"./assets/framework/plugin_boosts/gamesys/PsFx":37,"./assets/framework/plugin_boosts/gamesys/PsFxPlayer":38,"./assets/framework/plugin_boosts/gamesys/PoolManager":39,"./assets/framework/plugin_boosts/misc/FrameSwitch":40,"./assets/framework/plugin_boosts/misc/DataCenter":41,"./assets/framework/plugin_boosts/gamesys/LocalTimeSystem":42,"./assets/framework/plugin_boosts/gamesys/Device":43,"./assets/framework/plugin_boosts/ui/DCPandoraPoint":44,"./assets/framework/plugin_boosts/ui/DCToggle":45,"./assets/framework/plugin_boosts/misc/Signal":46,"./assets/framework/plugin_boosts/misc/InputSystem":47,"./assets/framework/plugin_boosts/misc/JoyStick":48,"./assets/framework/plugin_boosts/ui/MessageBoxComponent":49,"./assets/framework/plugin_boosts/misc/Net":50,"./assets/framework/plugin_boosts/ui/DCSprite":51,"./assets/framework/plugin_boosts/ui/LoadingManager":52,"./assets/framework/plugin_boosts/misc/BoostsAction":53,"./assets/framework/plugin_boosts/ui/UIComponent":54,"./assets/framework/plugin_boosts/ui/ToastComponent":55,"./assets/framework/plugin_boosts/ui/DCUI":56,"./assets/framework/plugin_boosts/misc/ClickAudioManager":57,"./assets/framework/plugin_boosts/misc/SpriteFrameCache":58,"./assets/framework/plugin_boosts/ui/UIFunctions":59,"./assets/framework/plugin_boosts/ui/MessageBoxManager":60,"./assets/framework/plugin_boosts/ui/DCLabel":61,"./assets/framework/plugin_boosts/ui/PandoraPoint":62,"./assets/framework/plugin_boosts/utils/Intersection":63,"./assets/framework/plugin_boosts/ui/ViewManager":64,"./assets/framework/plugin_boosts/ui/ToastManager":65,"./assets/framework/plugin_boosts/gamesys/FSM":66,"./assets/framework/plugin_boosts/utils/Common":67,"./assets/framework/plugin_boosts/ui/View":68,"./assets/framework/network/Message":69,"./assets/framework/qqsdk/SoundHelper":70,"./assets/framework/network/MessageHandler":71,"./assets/framework/network/MessageBase":72,"./assets/framework/wxsdk/MoreGameDialog":73,"./assets/framework/wxsdk/MoreGameManager":74,"./assets/framework/network/MessageDispatch":75,"./assets/framework/network/ConnectManager":76,"./assets/framework/wxsdk/MoreGameComponent":77,"./assets/framework/qqsdk/BKTool":78,"./assets/framework/network/MessageType":79,"./assets/Game/Scripts/i18n":80,"./assets/framework/wxsdk/GameConfigs":81,"./assets/framework/wxsdk/WxRankDialog":82,"./assets/framework/wxsdk/sdk":83,"./assets/framework/wxsdk/MoreGameItem":84,"./assets/framework/network/Socket":85,"./assets/Game/Scripts/hex-lines-game/Consts":86,"./assets/framework/wxsdk/AddToMyFav":87},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{"./MoreGameComponent":77},"path":"preview-scripts/assets/framework/wxsdk/MoreGameStyle.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/base/com.js"},{"deps":{"../utils/EventManager":12,"../misc/Signal":46},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalLifeSystem.js"},{"deps":{"../../framework/plugin_boosts/misc/DataCenter":41,"./hex-lines-game/Res":21,"../../framework/plugin_boosts/ui/ToastManager":65,"../../framework/plugin_boosts/gamesys/Device":43,"../../framework/Platform":28,"../../framework/wxsdk/MoreGameManager":74},"path":"preview-scripts/assets/Game/Scripts/Info.js"},{"deps":{"./Res":21,"./HexonTile":14,"./GridManager":16,"../../../framework/plugin_boosts/misc/InputSystem":47,"../Info":5,"./Animal":19,"../../../framework/plugin_boosts/ui/ViewManager":64,"../../../framework/Platform":28,"../../../framework/plugin_boosts/ui/ToastManager":65,"../../Scripts/i18n":80},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Game.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/game/LevelSelector.js"},{"deps":{"../Info":5,"../../../framework/plugin_boosts/ui/View":68,"../../../framework/Platform":28},"path":"preview-scripts/assets/Game/Scripts/ui/DailyGetDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/ds/IntMap.js"},{"deps":{"../gamesys/Device":43},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudio.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/libs/easing.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/EventManager.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/GameOver.js"},{"deps":{"./Consts":86,"./Game":6,"./Res":21},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/HexonTile.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":56,"../Info":5},"path":"preview-scripts/assets/Game/Scripts/ui/DCParticleSystem.js"},{"deps":{"./ds/IntMap":9,"./Game":6,"./Res":21},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/GridManager.js"},{"deps":{"../../../framework/plugin_boosts/ui/ToastManager":65,"../../../framework/plugin_boosts/ui/ViewManager":64,"../../../framework/plugin_boosts/ui/View":68,"../Info":5,"../../../framework/Platform":28,"../../../framework/plugin_boosts/gamesys/Device":43,"../hex-lines-game/Res":21,"../../../framework/plugin_boosts/ui/UIFunctions":59,"../Main":31,"../i18n":80},"path":"preview-scripts/assets/Game/Scripts/ui/LuckyDialog.js"},{"deps":{"../../../framework/plugin_boosts/ui/View":68,"../Info":5,"../../../framework/plugin_boosts/ui/ViewManager":64,"../../../framework/Platform":28},"path":"preview-scripts/assets/Game/Scripts/ui/GetDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Animal.js"},{"deps":{"../Info":5,"../../../framework/plugin_boosts/ui/game/LevelSelector":7,"../i18n":80},"path":"preview-scripts/assets/Game/Scripts/ui/LevelDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Res.js"},{"deps":{"../../../framework/Platform":28,"../../../framework/plugin_boosts/ui/ViewManager":64,"../../../framework/plugin_boosts/ui/ToastManager":65,"../hex-lines-game/Res":21,"../Info":5,"../../../framework/plugin_boosts/gamesys/Device":43,"../../../framework/plugin_boosts/ui/View":68},"path":"preview-scripts/assets/Game/Scripts/ui/HbDialog.js"},{"deps":{"../Info":5,"../../../framework/plugin_boosts/ui/View":68,"../../../framework/Platform":28},"path":"preview-scripts/assets/Game/Scripts/ui/LevelupDialog.js"},{"deps":{"../../Scripts/i18n":80},"path":"preview-scripts/assets/Game/Scripts/ui/OpenGuide.js"},{"deps":{"../../../framework/plugin_boosts/misc/Signal":46},"path":"preview-scripts/assets/Game/Scripts/ui/ShopItemTemplate.js"},{"deps":{"./ShopItemTemplate":25,"../../../framework/plugin_boosts/misc/SpriteFrameCache":58,"../hex-lines-game/Res":21,"../../../framework/Platform":28,"../Info":5,"../../../framework/plugin_boosts/ui/ToastManager":65,"../../../framework/plugin_boosts/ui/UIFunctions":59,"../../../framework/plugin_boosts/gamesys/Device":43,"../Main":31},"path":"preview-scripts/assets/Game/Scripts/ui/ShopDialog.js"},{"deps":{"../i18n":80},"path":"preview-scripts/assets/Game/Scripts/ui/OverDialog.js"},{"deps":{"./wxsdk/sdk":83,"./plugin_boosts/ui/ToastManager":65,"./qqsdk/BKTool":78,"./plugin_boosts/misc/SpriteFrameCache":58,"./plugin_boosts/misc/Signal":46,"./plugin_boosts/utils/EventManager":12,"../../assets/Game/Scripts/Info":5},"path":"preview-scripts/assets/framework/Platform.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":56,"../../../framework/plugin_boosts/misc/SpriteFrameCache":58,"../Info":5},"path":"preview-scripts/assets/Game/Scripts/ui/DCBackground.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/popup_GameOver.js"},{"deps":{"../../framework/plugin_boosts/ui/ViewManager":64,"./Info":5,"../../framework/Platform":28,"../../framework/plugin_boosts/gamesys/Device":43,"./hex-lines-game/Res":21,"../../framework/plugin_boosts/ui/ToastManager":65,"./i18n":80},"path":"preview-scripts/assets/Game/Scripts/Main.js"},{"deps":{"../../../framework/Platform":28},"path":"preview-scripts/assets/Game/Scripts/ui/PauseDialog.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/ui/WeChatDialog.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/InfiniteBackground.js"},{"deps":{"../Info":5,"../../../framework/Platform":28,"../../../framework/plugin_boosts/ui/ViewManager":64,"../hex-lines-game/Consts":86,"../i18n":80},"path":"preview-scripts/assets/Game/Scripts/ui/WinDialog.js"},{"deps":{"./PsFx":37,"./PoolManager":39},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsSpawner.js"},{"deps":{"./Device":43},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFx.js"},{"deps":{"./PsFx":37,"./Device":43},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFxPlayer.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PoolManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/FrameSwitch.js"},{"deps":{"../utils/EventManager":12},"path":"preview-scripts/assets/framework/plugin_boosts/misc/DataCenter.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalTimeSystem.js"},{"deps":{"../../qqsdk/SoundHelper":70},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/Device.js"},{"deps":{"./DCUI":56,"./PandoraPoint":62},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCPandoraPoint.js"},{"deps":{"./DCUI":56},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCToggle.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Signal.js"},{"deps":{"./JoyStick":48},"path":"preview-scripts/assets/framework/plugin_boosts/misc/InputSystem.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/JoyStick.js"},{"deps":{"./View":68,"./MessageBoxManager":60},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Net.js"},{"deps":{"./DCUI":56,"../misc/SpriteFrameCache":58},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCSprite.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/LoadingManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/BoostsAction.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIComponent.js"},{"deps":{"./UIFunctions":59},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastComponent.js"},{"deps":{"../misc/DataCenter":41},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCUI.js"},{"deps":{"./ClickAudio":10},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudioManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/SpriteFrameCache.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIFunctions.js"},{"deps":{"./ViewManager":64},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxManager.js"},{"deps":{"./DCUI":56},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCLabel.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/PandoraPoint.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Intersection.js"},{"deps":{"./View":68},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ViewManager.js"},{"deps":{"./ToastComponent":55},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/FSM.js"},{"deps":{"../misc/SpriteFrameCache":58},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Common.js"},{"deps":{"./UIComponent":54,"./ViewManager":64,"./UIFunctions":59},"path":"preview-scripts/assets/framework/plugin_boosts/ui/View.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/Message.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/SoundHelper.js"},{"deps":{"./Message":69,"./MessageType":79,"./MessageDispatch":75},"path":"preview-scripts/assets/framework/network/MessageHandler.js"},{"deps":{"./MessageType":79,"./Message":69,"./ConnectManager":76},"path":"preview-scripts/assets/framework/network/MessageBase.js"},{"deps":{"./MoreGameManager":74,"./MoreGameItem":84},"path":"preview-scripts/assets/framework/wxsdk/MoreGameDialog.js"},{"deps":{"./MoreGameComponent":77,"./GameConfigs":81},"path":"preview-scripts/assets/framework/wxsdk/MoreGameManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageDispatch.js"},{"deps":{"./Socket":85},"path":"preview-scripts/assets/framework/network/ConnectManager.js"},{"deps":{"./MoreGameManager":74},"path":"preview-scripts/assets/framework/wxsdk/MoreGameComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/BKTool.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageType.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/i18n.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/GameConfigs.js"},{"deps":{"../Platform":28,"../plugin_boosts/ui/View":68,"../plugin_boosts/misc/Signal":46},"path":"preview-scripts/assets/framework/wxsdk/WxRankDialog.js"},{"deps":{"../plugin_boosts/utils/EventManager":12,"./GameConfigs":81},"path":"preview-scripts/assets/framework/wxsdk/sdk.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/MoreGameItem.js"},{"deps":{"./MessageHandler":71,"./MessageType":79},"path":"preview-scripts/assets/framework/network/Socket.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Consts.js"},{"deps":{"../Platform":28},"path":"preview-scripts/assets/framework/wxsdk/AddToMyFav.js"}];
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
    