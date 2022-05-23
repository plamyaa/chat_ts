"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("./view");
var socket_1 = require("./socket");
var requests_1 = require("./requests");
var modalInterface_1 = require("./modalInterface");
var mainInterface_1 = require("./mainInterface");
var confirmation = new modalInterface_1.Confirmation();
var settings = new modalInterface_1.Settings();
var autorization = new modalInterface_1.Autorization();
var chat = new mainInterface_1.Chat();
document.addEventListener("DOMContentLoaded", function () {
    chat.listener();
    autorization.listener();
    settings.listener();
    confirmation.listener();
    requests_1.receiveMessages();
    if (view_1.isAutorized()) {
        var socket = new socket_1.Socket();
        socket.listener();
    }
});
