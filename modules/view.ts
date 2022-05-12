import { grey, white } from "./consts";
import Cookies from "js-cookie";
import { configTime, differentEmail } from "./utils";
import { UI } from "./consts";
import { tryParse } from "./utils";

export function showModal(show : HTMLBodyElement) : void {
    UI.CONTAINER.style.display = "none";
    show.style.display = "block";
    document.body.style.background = grey;
}
export function hideModal(hide : HTMLBodyElement) : void {
    UI.CONTAINER.style.display = "flex";
    hide.style.display = "none";
    document.body.style.background = white;
}
export function createMessage (formValue : string, name : string, date : Date, email : string) : HTMLDivElement {
    const messageBlock : HTMLDivElement = document.createElement("div");
    messageBlock.classList.add("chat-window__message");
    if (differentEmail(email))
        messageBlock.classList.add("message-he");
    else
        messageBlock.classList.add("message-my");
    messageBlock.append(UI.TEMPLATE.content.cloneNode(true));
    messageBlock.firstElementChild!.textContent = name + ': ' + formValue;
    messageBlock.lastElementChild!.textContent = configTime(date);
    return messageBlock;
}

export function showMessagesHistory(len : number) : void {
    const template : string | null = localStorage.getItem("messagesHistory");
    const messagesHistory : any = tryParse(template!);
    const lenOfMsg : number = messagesHistory.length - 1;
    
    for (let i : number = lenOfMsg - len; i > lenOfMsg - len - 20; i--) {
        let messageWindow = createMessage(messagesHistory[i].text, messagesHistory[i].user.name, new Date(messagesHistory[i].createdAt), messagesHistory[i].user.email)
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
    return true;
}

export function isAutorized() : boolean {
    const email : string | undefined = Cookies.get("email");
    if (!email) {
        UI.EXIT_BUTTON.textContent = "Войти";
        return false;
    }
    else {
        UI.EXIT_BUTTON.textContent = "Выйти";
        return true;
    }
} 