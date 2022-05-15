import { isAutorized} from "./view";
import { UI } from "./consts";
import { deleteCookie } from "./utils";
import Cookies from "js-cookie";
import {sendEmail} from "./requests"
import { Chat } from "./mainInterface";
import { getResponse } from "./requests";


export class Autorization {
    mainButton: HTMLButtonElement;
    window : HTMLBodyElement;
    sendButton : HTMLButtonElement;
    exitButton : HTMLButtonElement;
    toConfirmation : HTMLLinkElement;
    input : HTMLInputElement;

    constructor () {
        this.mainButton = UI.EXIT_BUTTON;
        this.window = UI.MODAL_AUTORIZATION;
        this.sendButton = UI.MODAL.AUTORIZATION.SEND_BUTTON;
        this.exitButton = UI.MODAL.AUTORIZATION.EXIT;
        this.toConfirmation = UI.ENTER_CODE;
        this.input = UI.MODAL.AUTORIZATION.TEXT
    }
   
    public listener () {
        const chat = new Chat();
        this.sendButton.addEventListener("click", () => {
            if (UI.MODAL.AUTORIZATION.TEXT.value.includes("@")){
                const email : string = UI.MODAL.AUTORIZATION.TEXT.value;
                Cookies.set("email", email)
                chat.hideModal(UI.MODAL_AUTORIZATION);
                chat.showModal(UI.MODAL_CONFIRMATION);
                sendEmail(email);
                UI.MODAL.AUTORIZATION.TEXT.value = "";
            }
            else {
                alert("Введите корректный email");
            }
        });

        this.mainButton.addEventListener("click", () => {
            if (isAutorized()) {
                deleteCookie();
                this.mainButton.textContent = "Войти";
            }
            chat.showModal(UI.MODAL_AUTORIZATION);
        });

        this.exitButton.addEventListener("click", () => chat.hideModal(UI.MODAL_AUTORIZATION));

        this.toConfirmation.addEventListener("click",  () => {
            chat.hideModal(UI.MODAL_AUTORIZATION);
            chat.showModal(UI.MODAL_CONFIRMATION);
        });
    }
}

export class Confirmation {
    window : HTMLBodyElement;
    sendButton : HTMLButtonElement;
    exitButton : HTMLButtonElement;
    input : HTMLInputElement;
    constructor () {
        this.window = UI.MODAL_CONFIRMATION;
        this.sendButton = UI.MODAL.CONFIRMATION.SEND_BUTTON;
        this.exitButton = UI.MODAL.CONFIRMATION.EXIT;
        this.input = UI.MODAL.CONFIRMATION.TEXT;
    }
    public listener () {
        const chat = new Chat();
        this.sendButton.addEventListener("click", () => {
            if (UI.MODAL.CONFIRMATION.TEXT.value) {
                const token : string = UI.MODAL.CONFIRMATION.TEXT.value;
                Cookies.set("token", token);
                chat.hideModal(UI.MODAL_CONFIRMATION);
                chat.showModal(UI.MODAL_SETTINGS);
            }
            else {
                alert("Введите токен");
            }
            UI.MODAL.CONFIRMATION.TEXT.value = "";
        });
        this.exitButton.addEventListener("click", () => chat.hideModal(UI.MODAL_CONFIRMATION));
    }
}

export class Settings {
    mainButton: HTMLButtonElement;
    window : HTMLBodyElement;
    sendButton : HTMLButtonElement;
    exitButton : HTMLButtonElement;
    input : HTMLInputElement;
    constructor() {
        this.mainButton = UI.SETTINGS_BUTTON;
        this.window = UI.MODAL_SETTINGS;
        this.sendButton = UI.MODAL.SETTINGS.SEND_BUTTON;
        this.exitButton = UI.MODAL.SETTINGS.EXIT;
        this.input = UI.MODAL.SETTINGS.TEXT;
    }
    public listener() {
        const chat = new Chat();
        UI.MODAL.SETTINGS.SEND_BUTTON.addEventListener("click", () => {
            if (UI.MODAL.SETTINGS.TEXT.value) {
                const name : string = UI.MODAL.SETTINGS.TEXT.value;
                Cookies.set("myName", name);
                chat.hideModal(UI.MODAL_SETTINGS);
                getResponse(name);
            }
            else {
                alert("Введите имя");
            }
            UI.MODAL.SETTINGS.TEXT.value = "";
        });
        this.mainButton.addEventListener("click", () => chat.showModal(UI.MODAL_SETTINGS));
        this.exitButton.addEventListener("click", () => chat.hideModal(UI.MODAL_SETTINGS));
    }
}
