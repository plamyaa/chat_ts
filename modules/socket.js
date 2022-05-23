"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
var js_cookie_1 = __importDefault(require("js-cookie"));
var view_1 = require("./view");
var consts_1 = require("./consts");
var utils_1 = require("./utils");
var Socket = /** @class */ (function () {
    function Socket() {
        this.token = js_cookie_1.default.get("token");
        this.socket = new WebSocket("" + (consts_1.UI.SERVER_API + this.token));
    }
    Socket.prototype.listener = function () {
        var _this = this;
        this.socket.addEventListener("message", function (event) { return _this.addMessage(event); });
        this.socket.addEventListener("error", (function (error) { return alert(error.message); }));
        this.socket.addEventListener("close", new Socket().listener);
    };
    Socket.prototype.sendMessage = function (message) {
        this.socket.send(utils_1.tryStringify({ text: "" + message }));
    };
    Socket.prototype.addMessage = function (event) {
        var messageData = utils_1.tryParse(event.data);
        consts_1.UI.CHAT_WINDOW.append(view_1.createMessage(messageData));
        consts_1.UI.CHAT.scrollTop += 100000;
    };
    return Socket;
}());
exports.Socket = Socket;
