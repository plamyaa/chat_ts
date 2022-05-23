"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = exports.Confirmation = exports.Autorization = void 0;
var view_1 = require("./view");
var consts_1 = require("./consts");
var utils_1 = require("./utils");
var js_cookie_1 = __importDefault(require("js-cookie"));
var requests_1 = require("./requests");
var mainInterface_1 = require("./mainInterface");
var requests_2 = require("./requests");
var Autorization = /** @class */ (function () {
    function Autorization() {
        this.mainButton = consts_1.UI.EXIT_BUTTON;
        this.window = consts_1.UI.MODAL_AUTORIZATION;
        this.sendButton = consts_1.UI.MODAL.AUTORIZATION.SEND_BUTTON;
        this.exitButton = consts_1.UI.MODAL.AUTORIZATION.EXIT;
        this.toConfirmation = consts_1.UI.ENTER_CODE;
        this.input = consts_1.UI.MODAL.AUTORIZATION.TEXT;
    }
    Autorization.prototype.listener = function () {
        var _this = this;
        var chat = new mainInterface_1.Chat();
        this.sendButton.addEventListener("click", function () {
            if (consts_1.UI.MODAL.AUTORIZATION.TEXT.value.includes("@")) {
                var email = consts_1.UI.MODAL.AUTORIZATION.TEXT.value;
                js_cookie_1.default.set("email", email);
                chat.hideModal(consts_1.UI.MODAL_AUTORIZATION);
                chat.showModal(consts_1.UI.MODAL_CONFIRMATION);
                requests_1.sendEmail(email);
                consts_1.UI.MODAL.AUTORIZATION.TEXT.value = "";
            }
            else {
                alert("Введите корректный email");
            }
        });
        this.mainButton.addEventListener("click", function () {
            if (view_1.isAutorized()) {
                utils_1.deleteCookie();
                _this.mainButton.textContent = "Войти";
            }
            chat.showModal(consts_1.UI.MODAL_AUTORIZATION);
        });
        this.exitButton.addEventListener("click", function () { return chat.hideModal(consts_1.UI.MODAL_AUTORIZATION); });
        this.toConfirmation.addEventListener("click", function () {
            chat.hideModal(consts_1.UI.MODAL_AUTORIZATION);
            chat.showModal(consts_1.UI.MODAL_CONFIRMATION);
        });
    };
    return Autorization;
}());
exports.Autorization = Autorization;
var Confirmation = /** @class */ (function () {
    function Confirmation() {
        this.window = consts_1.UI.MODAL_CONFIRMATION;
        this.sendButton = consts_1.UI.MODAL.CONFIRMATION.SEND_BUTTON;
        this.exitButton = consts_1.UI.MODAL.CONFIRMATION.EXIT;
        this.input = consts_1.UI.MODAL.CONFIRMATION.TEXT;
    }
    Confirmation.prototype.listener = function () {
        var chat = new mainInterface_1.Chat();
        this.sendButton.addEventListener("click", function () {
            if (consts_1.UI.MODAL.CONFIRMATION.TEXT.value) {
                var token = consts_1.UI.MODAL.CONFIRMATION.TEXT.value;
                js_cookie_1.default.set("token", token);
                chat.hideModal(consts_1.UI.MODAL_CONFIRMATION);
                chat.showModal(consts_1.UI.MODAL_SETTINGS);
            }
            else {
                alert("Введите токен");
            }
            consts_1.UI.MODAL.CONFIRMATION.TEXT.value = "";
        });
        this.exitButton.addEventListener("click", function () { return chat.hideModal(consts_1.UI.MODAL_CONFIRMATION); });
    };
    return Confirmation;
}());
exports.Confirmation = Confirmation;
var Settings = /** @class */ (function () {
    function Settings() {
        this.mainButton = consts_1.UI.SETTINGS_BUTTON;
        this.window = consts_1.UI.MODAL_SETTINGS;
        this.sendButton = consts_1.UI.MODAL.SETTINGS.SEND_BUTTON;
        this.exitButton = consts_1.UI.MODAL.SETTINGS.EXIT;
        this.input = consts_1.UI.MODAL.SETTINGS.TEXT;
    }
    Settings.prototype.listener = function () {
        var chat = new mainInterface_1.Chat();
        consts_1.UI.MODAL.SETTINGS.SEND_BUTTON.addEventListener("click", function () {
            if (consts_1.UI.MODAL.SETTINGS.TEXT.value) {
                var name_1 = consts_1.UI.MODAL.SETTINGS.TEXT.value;
                js_cookie_1.default.set("myName", name_1);
                chat.hideModal(consts_1.UI.MODAL_SETTINGS);
                requests_2.getResponse(name_1);
            }
            else {
                alert("Введите имя");
            }
            consts_1.UI.MODAL.SETTINGS.TEXT.value = "";
        });
        this.mainButton.addEventListener("click", function () { return chat.showModal(consts_1.UI.MODAL_SETTINGS); });
        this.exitButton.addEventListener("click", function () { return chat.hideModal(consts_1.UI.MODAL_SETTINGS); });
    };
    return Settings;
}());
exports.Settings = Settings;
