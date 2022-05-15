import Cookies from 'js-cookie';
import { createMessage } from './view';
import { UI } from './consts';
import { tryStringify, tryParse } from './utils';

interface SocketInterface {
    socket : WebSocket;
    token : string | undefined;
    sendMessage(message : string) : void ;
}

export class Socket implements SocketInterface{
    socket : WebSocket;
    token : string | undefined;

    constructor (){
        this.token = Cookies.get("token");
        this.socket = new WebSocket(`${UI.SERVER_API + this.token!}`);
    }
    public listener () : void {
        this.socket.addEventListener("message", (event : any) => this.addMessage(event));
        this.socket.addEventListener("error", ((error : any) => alert(error.message)));
        this.socket.addEventListener("close", new Socket().listener);
    }
    public sendMessage(message : string) : void {
        this.socket.send(tryStringify({ text: `${message}` })!);
    }
    private addMessage(event : any) : void {
        const messageData : string | undefined = tryParse(event.data);
        UI.CHAT_WINDOW.append(createMessage(messageData!));
        UI.CHAT.scrollTop += 100000;
    }

}