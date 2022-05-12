import Cookies from 'js-cookie';
import { createMessage } from './view';
import { UI } from './consts';
import { tryStringify, tryParse } from './utils';

let token = Cookies.get("token");
let socket : WebSocket = new WebSocket(`${UI.SERVER_API + token}`);
export function joinOnline() : void {
    socket = new WebSocket(`${UI.SERVER_API + token}`);
    socket.addEventListener("message", (event : any) => {
        const messageData : any = tryParse(event.data);
        UI.CHAT_WINDOW.append(createMessage(messageData.text, messageData.user.name, new Date(messageData.createdAt), messageData.user.email));
        UI.CHAT.scrollTop += 100000;
    });
    socket.addEventListener("error", ((error : any) => alert(error.message)));
    socket.addEventListener("close", joinOnline);
}

export function sendMessage(message : string) : void {
    socket.send(tryStringify({ text: `${message}` })!);
}