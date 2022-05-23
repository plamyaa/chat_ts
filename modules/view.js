"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAutorized = exports.checkAutoriztion = exports.showMessagesHistory = exports.createMessage = exports.createDataObject = void 0;
var js_cookie_1 = __importDefault(require("js-cookie"));
var utils_1 = require("./utils");
var consts_1 = require("./consts");
var utils_2 = require("./utils");
var socket_1 = require("./socket");
function createDataObject(messageData) {
    var data = {
        formValue: messageData.text,
        name: messageData.user.name,
        date: new Date(messageData.createdAt),
        email: messageData.user.email,
    };
    return data;
}
exports.createDataObject = createDataObject;
function createMessage(messageData) {
    var data = createDataObject(messageData);
    var message = document.createElement("div");
    message.classList.add("chat-window__message");
    if (utils_1.differentEmail(data.email))
        message.classList.add("message-he");
    else
        message.classList.add("message-my");
    message.append(consts_1.UI.TEMPLATE.content.cloneNode(true));
    message.firstElementChild.textContent = data.name + ': ' + data.formValue;
    message.lastElementChild.textContent = utils_1.configTime(data.date);
    return message;
}
exports.createMessage = createMessage;
function showMessagesHistory(len) {
    var template = localStorage.getItem("messagesHistory");
    var messages = utils_2.tryParse(template);
    var lenOfMsg = messages.length - 1;
    for (var i = lenOfMsg - len; i > lenOfMsg - len - 20; i--) {
        var messageWindow = createMessage(messages[i]);
        consts_1.UI.CHAT_WINDOW.prepend(messageWindow);
        consts_1.UI.CHAT.scrollTop += messageWindow.clientHeight - 48;
    }
}
exports.showMessagesHistory = showMessagesHistory;
function checkAutoriztion() {
    var email = js_cookie_1.default.get("email");
    var token = js_cookie_1.default.get("token");
    var name = js_cookie_1.default.get("myName");
    if (!email) {
        alert("Пожалуйста авторизуйтесь");
        return false;
    }
    else if (!token) {
        alert("Пожалуйста введите токен");
        return false;
    }
    else if (!name) {
        alert("Пожалуйста введите имя в настройках");
        return false;
    }
    var socket = new socket_1.Socket();
    socket.listener();
    return true;
}
exports.checkAutoriztion = checkAutoriztion;
function isAutorized() {
    var token = js_cookie_1.default.get("token");
    if (!token) {
        consts_1.UI.EXIT_BUTTON.textContent = "Войти";
        return false;
    }
    else {
        consts_1.UI.EXIT_BUTTON.textContent = "Выйти";
        return true;
    }
}
exports.isAutorized = isAutorized;
