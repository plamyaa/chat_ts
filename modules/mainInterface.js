"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
var consts_1 = require("./consts");
var view_1 = require("./view");
var view_2 = require("./view");
var socket_1 = require("./socket");
var view_3 = require("./view");
var Chat = /** @class */ (function () {
    function Chat() {
        this.input = consts_1.UI.SEND_TEXT;
        this.send = consts_1.UI.SEND_BUTTON;
        this.chatScroll = consts_1.UI.CHAT;
        this.chat = consts_1.UI.CHAT_WINDOW;
    }
    Chat.prototype.listener = function () {
        view_3.isAutorized();
        var socket = new socket_1.Socket();
        this.send.addEventListener("click", function () {
            if (consts_1.UI.SEND_TEXT.value && view_2.checkAutoriztion()) {
                socket.sendMessage(consts_1.UI.SEND_TEXT.value);
            }
            consts_1.UI.SEND_TEXT.value = "";
        });
        var counter = 0;
        this.chatScroll.addEventListener("scroll", function () {
            if (consts_1.UI.CHAT.scrollTop === 0) {
                counter++;
                view_1.showMessagesHistory(20 * counter);
            }
        });
    };
    Chat.prototype.showModal = function (show) {
        consts_1.UI.CONTAINER.style.display = "none";
        show.style.display = "block";
        document.body.style.background = consts_1.grey;
    };
    Chat.prototype.hideModal = function (hide) {
        consts_1.UI.CONTAINER.style.display = "flex";
        hide.style.display = "none";
        document.body.style.background = consts_1.white;
    };
    return Chat;
}());
exports.Chat = Chat;
