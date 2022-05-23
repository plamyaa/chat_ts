"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = exports.white = exports.grey = void 0;
exports.grey = "#535353";
exports.white = "#FFF";
exports.UI = {
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
            EXIT: document.querySelector(".modal-settings__exit"),
        },
        AUTORIZATION: {
            TEXT: document.querySelector(".modal-autorization__input"),
            SEND_BUTTON: document.querySelector(".modal-autorization__button"),
            EXIT: document.querySelector(".modal-autorization__exit"),
        },
        CONFIRMATION: {
            TEXT: document.querySelector(".modal-confirmation__input"),
            SEND_BUTTON: document.querySelector(".modal-confirmation__button"),
            EXIT: document.querySelector(".modal-confirmation__exit"),
        }
    },
    MODAL_SETTINGS: document.querySelector(".modal-settings"),
    MODAL_AUTORIZATION: document.querySelector(".modal-autorization"),
    MODAL_CONFIRMATION: document.querySelector(".modal-confirmation"),
    USER_API: "https://mighty-cove-31255.herokuapp.com/api/user",
    MESSAGES_API: "https://mighty-cove-31255.herokuapp.com/api/messages",
    SERVER_API: "wss://mighty-cove-31255.herokuapp.com/websockets?",
};
