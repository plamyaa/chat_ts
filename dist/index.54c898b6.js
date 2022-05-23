// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bPl0s":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6e2aeb5054c898b6";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8EffO":[function(require,module,exports) {
var _view = require("./view");
var _socket = require("./socket");
var _requests = require("./requests");
var _modalInterface = require("./modalInterface");
var _mainInterface = require("./mainInterface");
const confirmation = new _modalInterface.Confirmation();
const settings = new _modalInterface.Settings();
const autorization = new _modalInterface.Autorization();
const chat = new _mainInterface.Chat();
document.addEventListener("DOMContentLoaded", ()=>{
    chat.listener();
    autorization.listener();
    settings.listener();
    confirmation.listener();
    _requests.receiveMessages();
    if (_view.isAutorized()) {
        const socket = new _socket.Socket();
        socket.listener();
    }
});

},{"./modalInterface":"cyYR0","./requests":"10S0h","./view":"6y8y8","./socket":"dqoPl","./mainInterface":"9Jb7h"}],"cyYR0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Autorization", ()=>Autorization
);
parcelHelpers.export(exports, "Confirmation", ()=>Confirmation
);
parcelHelpers.export(exports, "Settings", ()=>Settings
);
var _view = require("./view");
var _consts = require("./consts");
var _utils = require("./utils");
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _requests = require("./requests");
var _mainInterface = require("./mainInterface");
class Autorization {
    constructor(){
        this.mainButton = _consts.UI.EXIT_BUTTON;
        this.window = _consts.UI.MODAL_AUTORIZATION;
        this.sendButton = _consts.UI.MODAL.AUTORIZATION.SEND_BUTTON;
        this.exitButton = _consts.UI.MODAL.AUTORIZATION.EXIT;
        this.toConfirmation = _consts.UI.ENTER_CODE;
        this.input = _consts.UI.MODAL.AUTORIZATION.TEXT;
    }
    listener() {
        const chat = new _mainInterface.Chat();
        this.sendButton.addEventListener("click", ()=>{
            if (_consts.UI.MODAL.AUTORIZATION.TEXT.value.includes("@")) {
                const email = _consts.UI.MODAL.AUTORIZATION.TEXT.value;
                _jsCookieDefault.default.set("email", email);
                chat.hideModal(_consts.UI.MODAL_AUTORIZATION);
                chat.showModal(_consts.UI.MODAL_CONFIRMATION);
                _requests.sendEmail(email);
                _consts.UI.MODAL.AUTORIZATION.TEXT.value = "";
            } else alert("Введите корректный email");
        });
        this.mainButton.addEventListener("click", ()=>{
            if (_view.isAutorized()) {
                _utils.deleteCookie();
                this.mainButton.textContent = "Войти";
            }
            chat.showModal(_consts.UI.MODAL_AUTORIZATION);
        });
        this.exitButton.addEventListener("click", ()=>chat.hideModal(_consts.UI.MODAL_AUTORIZATION)
        );
        this.toConfirmation.addEventListener("click", ()=>{
            chat.hideModal(_consts.UI.MODAL_AUTORIZATION);
            chat.showModal(_consts.UI.MODAL_CONFIRMATION);
        });
    }
}
class Confirmation {
    constructor(){
        this.window = _consts.UI.MODAL_CONFIRMATION;
        this.sendButton = _consts.UI.MODAL.CONFIRMATION.SEND_BUTTON;
        this.exitButton = _consts.UI.MODAL.CONFIRMATION.EXIT;
        this.input = _consts.UI.MODAL.CONFIRMATION.TEXT;
    }
    listener() {
        const chat = new _mainInterface.Chat();
        this.sendButton.addEventListener("click", ()=>{
            if (_consts.UI.MODAL.CONFIRMATION.TEXT.value) {
                const token = _consts.UI.MODAL.CONFIRMATION.TEXT.value;
                _jsCookieDefault.default.set("token", token);
                chat.hideModal(_consts.UI.MODAL_CONFIRMATION);
                chat.showModal(_consts.UI.MODAL_SETTINGS);
            } else alert("Введите токен");
            _consts.UI.MODAL.CONFIRMATION.TEXT.value = "";
        });
        this.exitButton.addEventListener("click", ()=>chat.hideModal(_consts.UI.MODAL_CONFIRMATION)
        );
    }
}
class Settings {
    constructor(){
        this.mainButton = _consts.UI.SETTINGS_BUTTON;
        this.window = _consts.UI.MODAL_SETTINGS;
        this.sendButton = _consts.UI.MODAL.SETTINGS.SEND_BUTTON;
        this.exitButton = _consts.UI.MODAL.SETTINGS.EXIT;
        this.input = _consts.UI.MODAL.SETTINGS.TEXT;
    }
    listener() {
        const chat = new _mainInterface.Chat();
        _consts.UI.MODAL.SETTINGS.SEND_BUTTON.addEventListener("click", ()=>{
            if (_consts.UI.MODAL.SETTINGS.TEXT.value) {
                const name = _consts.UI.MODAL.SETTINGS.TEXT.value;
                _jsCookieDefault.default.set("myName", name);
                chat.hideModal(_consts.UI.MODAL_SETTINGS);
                _requests.getResponse(name);
            } else alert("Введите имя");
            _consts.UI.MODAL.SETTINGS.TEXT.value = "";
        });
        this.mainButton.addEventListener("click", ()=>chat.showModal(_consts.UI.MODAL_SETTINGS)
        );
        this.exitButton.addEventListener("click", ()=>chat.hideModal(_consts.UI.MODAL_SETTINGS)
        );
    }
}

},{"./view":"6y8y8","./consts":"fMcMF","js-cookie":"c8bBu","./requests":"10S0h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils":"kxMhL","./mainInterface":"9Jb7h"}],"6y8y8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDataObject", ()=>createDataObject
);
parcelHelpers.export(exports, "createMessage", ()=>createMessage
);
parcelHelpers.export(exports, "showMessagesHistory", ()=>showMessagesHistory
);
parcelHelpers.export(exports, "checkAutoriztion", ()=>checkAutoriztion
);
parcelHelpers.export(exports, "isAutorized", ()=>isAutorized
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _utils = require("./utils");
var _consts = require("./consts");
var _socket = require("./socket");
function createDataObject(messageData) {
    const data = {
        formValue: messageData.text,
        name: messageData.user.name,
        date: new Date(messageData.createdAt),
        email: messageData.user.email
    };
    return data;
}
function createMessage(messageData) {
    const data = createDataObject(messageData);
    const message = document.createElement("div");
    message.classList.add("chat-window__message");
    if (_utils.differentEmail(data.email)) message.classList.add("message-he");
    else message.classList.add("message-my");
    message.append(_consts.UI.TEMPLATE.content.cloneNode(true));
    message.firstElementChild.textContent = data.name + ': ' + data.formValue;
    message.lastElementChild.textContent = _utils.configTime(data.date);
    return message;
}
function showMessagesHistory(len) {
    const template = localStorage.getItem("messagesHistory");
    const messages = _utils.tryParse(template);
    const lenOfMsg = messages.length - 1;
    for(let i = lenOfMsg - len; i > lenOfMsg - len - 20; i--){
        let messageWindow = createMessage(messages[i]);
        _consts.UI.CHAT_WINDOW.prepend(messageWindow);
        _consts.UI.CHAT.scrollTop += messageWindow.clientHeight - 48;
    }
}
function checkAutoriztion() {
    const email = _jsCookieDefault.default.get("email");
    const token = _jsCookieDefault.default.get("token");
    const name = _jsCookieDefault.default.get("myName");
    if (!email) {
        alert("Пожалуйста авторизуйтесь");
        return false;
    } else if (!token) {
        alert("Пожалуйста введите токен");
        return false;
    } else if (!name) {
        alert("Пожалуйста введите имя в настройках");
        return false;
    }
    const socket = new _socket.Socket();
    socket.listener();
    return true;
}
function isAutorized() {
    const token = _jsCookieDefault.default.get("token");
    if (!token) {
        _consts.UI.EXIT_BUTTON.textContent = "Войти";
        return false;
    } else {
        _consts.UI.EXIT_BUTTON.textContent = "Выйти";
        return true;
    }
}

},{"./consts":"fMcMF","js-cookie":"c8bBu","./utils":"kxMhL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./socket":"dqoPl"}],"fMcMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "grey", ()=>grey
);
parcelHelpers.export(exports, "white", ()=>white
);
parcelHelpers.export(exports, "UI", ()=>UI
);
const grey = "#535353";
const white = "#FFF";
const UI = {
    CONTAINER: document.querySelector(".container-shape"),
    SETTINGS_BUTTON: document.querySelector(".buttons-above__settings"),
    EXIT_BUTTON: document.querySelector(".buttons-above__exit"),
    ENTER_CODE: document.querySelector(".modal-autorization__code"),
    SEND_TEXT: document.querySelector(".message-below__input"),
    SEND_BUTTON: document.querySelector(".message-below__button"),
    CHAT: document.querySelector(".chat"),
    CHAT_WINDOW: document.querySelector(".chat-window"),
    TEMPLATE: document.querySelector("#template-message"),
    MODAL: {
        SETTINGS: {
            TEXT: document.querySelector(".modal-settings__input"),
            SEND_BUTTON: document.querySelector(".modal-settings__button"),
            EXIT: document.querySelector(".modal-settings__exit")
        },
        AUTORIZATION: {
            TEXT: document.querySelector(".modal-autorization__input"),
            SEND_BUTTON: document.querySelector(".modal-autorization__button"),
            EXIT: document.querySelector(".modal-autorization__exit")
        },
        CONFIRMATION: {
            TEXT: document.querySelector(".modal-confirmation__input"),
            SEND_BUTTON: document.querySelector(".modal-confirmation__button"),
            EXIT: document.querySelector(".modal-confirmation__exit")
        }
    },
    MODAL_SETTINGS: document.querySelector(".modal-settings"),
    MODAL_AUTORIZATION: document.querySelector(".modal-autorization"),
    MODAL_CONFIRMATION: document.querySelector(".modal-confirmation"),
    USER_API: "https://mighty-cove-31255.herokuapp.com/api/user",
    MESSAGES_API: "https://mighty-cove-31255.herokuapp.com/api/messages",
    SERVER_API: "ws://mighty-cove-31255.herokuapp.com/websockets?"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c8bBu":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    /* eslint-disable no-var */ function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)target[key] = source[key];
        }
        return target;
    }
    /* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
        read: function(value) {
            if (value[0] === '"') value = value.slice(1, -1);
            return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(value) {
            return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    };
    /* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter1, defaultAttributes) {
        function set(key, value, attributes) {
            if (typeof document === 'undefined') return;
            attributes = assign({}, defaultAttributes, attributes);
            if (typeof attributes.expires === 'number') attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
            if (attributes.expires) attributes.expires = attributes.expires.toUTCString();
            key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var stringifiedAttributes = '';
            for(var attributeName in attributes){
                if (!attributes[attributeName]) continue;
                stringifiedAttributes += '; ' + attributeName;
                if (attributes[attributeName] === true) continue;
                // Considers RFC 6265 section 5.2:
                // ...
                // 3.  If the remaining unparsed-attributes contains a %x3B (";")
                //     character:
                // Consume the characters of the unparsed-attributes up to,
                // not including, the first %x3B (";") character.
                // ...
                stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
            }
            return document.cookie = key + '=' + converter1.write(value, key) + stringifiedAttributes;
        }
        function get(key) {
            if (typeof document === 'undefined' || arguments.length && !key) return;
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all.
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var jar = {};
            for(var i = 0; i < cookies.length; i++){
                var parts = cookies[i].split('=');
                var value = parts.slice(1).join('=');
                try {
                    var foundKey = decodeURIComponent(parts[0]);
                    jar[foundKey] = converter1.read(value, foundKey);
                    if (key === foundKey) break;
                } catch (e) {}
            }
            return key ? jar[key] : jar;
        }
        return Object.create({
            set: set,
            get: get,
            remove: function(key, attributes) {
                set(key, '', assign({}, attributes, {
                    expires: -1
                }));
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({}, this.attributes, attributes));
            },
            withConverter: function(converter) {
                return init(assign({}, this.converter, converter), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter1)
            }
        });
    }
    var api = init(defaultConverter, {
        path: '/'
    });
    /* eslint-enable no-var */ return api;
});

},{}],"kxMhL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "differentEmail", ()=>differentEmail
);
parcelHelpers.export(exports, "configTime", ()=>configTime
);
parcelHelpers.export(exports, "tryStringify", ()=>tryStringify
);
parcelHelpers.export(exports, "deleteCookie", ()=>deleteCookie
);
parcelHelpers.export(exports, "tryParse", ()=>tryParse
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
function differentEmail(messageEmail) {
    return messageEmail != _jsCookieDefault.default.get("email") ? true : false;
}
function configTime(date) {
    return String(date).slice(16, 21);
}
function tryStringify(obj) {
    try {
        return JSON.stringify(obj);
    } catch (error) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
        return null;
    }
}
function deleteCookie() {
    _jsCookieDefault.default.remove("myName");
    _jsCookieDefault.default.remove("email");
    _jsCookieDefault.default.remove("token");
}
function tryParse(obj) {
    try {
        return JSON.parse(obj);
    } catch (error) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
        return undefined;
    }
}

},{"js-cookie":"c8bBu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqoPl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Socket", ()=>Socket
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _view = require("./view");
var _consts = require("./consts");
var _utils = require("./utils");
class Socket {
    constructor(){
        this.token = _jsCookieDefault.default.get("token");
        this.socket = new WebSocket(`${_consts.UI.SERVER_API + this.token}`);
    }
    listener() {
        this.socket.addEventListener("message", (event)=>this.addMessage(event)
        );
        this.socket.addEventListener("error", (error)=>alert(error.message)
        );
        this.socket.addEventListener("close", new Socket().listener);
    }
    sendMessage(message) {
        this.socket.send(_utils.tryStringify({
            text: `${message}`
        }));
    }
    addMessage(event) {
        const messageData = _utils.tryParse(event.data);
        _consts.UI.CHAT_WINDOW.append(_view.createMessage(messageData));
        _consts.UI.CHAT.scrollTop += 100000;
    }
}

},{"js-cookie":"c8bBu","./consts":"fMcMF","./utils":"kxMhL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./view":"6y8y8"}],"10S0h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getResponse", ()=>getResponse
);
parcelHelpers.export(exports, "sendEmail", ()=>sendEmail
);
parcelHelpers.export(exports, "receiveMessages", ()=>receiveMessages
);
var _jsCookie = require("js-cookie");
var _jsCookieDefault = parcelHelpers.interopDefault(_jsCookie);
var _view = require("./view");
var _consts = require("./consts");
var _utils = require("./utils");
async function getResponse(myName) {
    const json = _utils.tryStringify({
        name: myName
    });
    const token = _jsCookieDefault.default.get("token");
    try {
        fetch(_consts.UI.USER_API, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: json
        });
    } catch (error) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
    }
}
async function sendEmail(eMail) {
    const json = _utils.tryStringify({
        email: eMail
    });
    try {
        fetch(_consts.UI.USER_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: json
        });
    } catch (error) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
    }
}
async function receiveMessages() {
    try {
        const response = await fetch(_consts.UI.MESSAGES_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;'
            }
        });
        const json = await response.json();
        const messagesHistory = _utils.tryStringify(json.messages);
        localStorage.setItem("messagesHistory", `${messagesHistory}`);
        _view.showMessagesHistory(0);
        _consts.UI.CHAT.scrollTop += 10000;
    } catch (error) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
    }
}

},{"js-cookie":"c8bBu","./consts":"fMcMF","./utils":"kxMhL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./view":"6y8y8"}],"9Jb7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chat", ()=>Chat
);
var _consts = require("./consts");
var _view = require("./view");
var _socket = require("./socket");
class Chat {
    constructor(){
        this.input = _consts.UI.SEND_TEXT;
        this.send = _consts.UI.SEND_BUTTON;
        this.chatScroll = _consts.UI.CHAT;
        this.chat = _consts.UI.CHAT_WINDOW;
    }
    listener() {
        _view.isAutorized();
        const socket = new _socket.Socket();
        this.send.addEventListener("click", ()=>{
            if (_consts.UI.SEND_TEXT.value && _view.checkAutoriztion()) socket.sendMessage(_consts.UI.SEND_TEXT.value);
            _consts.UI.SEND_TEXT.value = "";
        });
        let counter = 0;
        this.chatScroll.addEventListener("scroll", ()=>{
            if (_consts.UI.CHAT.scrollTop === 0) {
                counter++;
                _view.showMessagesHistory(20 * counter);
            }
        });
    }
    showModal(show) {
        _consts.UI.CONTAINER.style.display = "none";
        show.style.display = "block";
        document.body.style.background = _consts.grey;
    }
    hideModal(hide) {
        _consts.UI.CONTAINER.style.display = "flex";
        hide.style.display = "none";
        document.body.style.background = _consts.white;
    }
}

},{"./consts":"fMcMF","./view":"6y8y8","./socket":"dqoPl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bPl0s","8EffO"], "8EffO", "parcelRequire94c2")

//# sourceMappingURL=index.54c898b6.js.map
