
import Cookies from "js-cookie";
import { configTime, differentEmail } from "./utils";
import { UI } from "./consts";
import { tryParse } from "./utils";
import { Socket } from "./socket"

interface dataObject {
    formValue : string, 
    name : string, 
    date : Date,
    email : string,
}

export function createDataObject(messageData : any) : dataObject {
    const data : dataObject = {
        formValue : messageData.text, 
        name :  messageData.user.name, 
        date :  new Date(messageData.createdAt),
        email :  messageData.user.email,
    }
    return data;
}

export function createMessage (messageData : Object) : HTMLDivElement {
    const data : dataObject = createDataObject(messageData);
    const message: HTMLDivElement = document.createElement("div");
    message.classList.add("chat-window__message");
    if (differentEmail(data.email))
        message.classList.add("message-he");
    else
        message.classList.add("message-my");
    message.append(UI.TEMPLATE.content.cloneNode(true));
    message.firstElementChild!.textContent = data.name + ': ' + data.formValue;
    message.lastElementChild!.textContent = configTime(data.date);
    return message;
}

export function showMessagesHistory(len : number) {
    const template : string | null = localStorage.getItem("messagesHistory");
    const messages : any = tryParse(template!);
    const lenOfMsg : number = messages.length - 1;
    for (let i : number = lenOfMsg - len; i > lenOfMsg - len - 20; i--) {
        let messageWindow = createMessage(messages[i]);
        UI.CHAT_WINDOW.prepend(messageWindow); 
        UI.CHAT.scrollTop += messageWindow.clientHeight - 48;
    }
}

export function checkAutoriztion() : boolean {
    const email : string | undefined = Cookies.get("email");
    const token : string | undefined = Cookies.get("token");
    const name : string | undefined = Cookies.get("myName");
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
    const socket = new Socket();
    socket.listener();
    return true;
}

export function isAutorized() : boolean {
    const token : string | undefined = Cookies.get("token");
    if (!token) {
        UI.EXIT_BUTTON.textContent = "Войти";
        return false;
    }
    else {
        UI.EXIT_BUTTON.textContent = "Выйти";
        return true;
    }
} 
