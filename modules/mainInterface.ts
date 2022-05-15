import { UI, grey, white } from "./consts";
import { showMessagesHistory } from "./view";
import { checkAutoriztion } from "./view";
import { Socket } from "./socket";
import { isAutorized } from "./view";


export class Chat {
    input : HTMLInputElement;
    send : HTMLButtonElement;
    chatScroll : HTMLDivElement;
    chat : HTMLDivElement;
    
    constructor () {
        this.input = UI.SEND_TEXT;
        this.send = UI.SEND_BUTTON;
        this.chatScroll = UI.CHAT;
        this.chat = UI.CHAT_WINDOW;
    }
    public listener() {
        isAutorized();
        const socket = new Socket();
        this.send.addEventListener("click", () => {
            if (UI.SEND_TEXT.value && checkAutoriztion()) {
                socket.sendMessage(UI.SEND_TEXT.value);
            }
            UI.SEND_TEXT.value = "";
        });

        let counter : number = 0;
        this.chatScroll.addEventListener("scroll", () => {
            if (UI.CHAT.scrollTop === 0) {
                counter++;
                showMessagesHistory(20 * counter);
            }
        });
    }
    public showModal (show : HTMLBodyElement) : void {
        UI.CONTAINER.style.display = "none";
        show.style.display = "block";
        document.body.style.background = grey;
    }
    public hideModal (hide : HTMLBodyElement) : void {
        UI.CONTAINER.style.display = "flex";
        hide.style.display = "none";
        document.body.style.background = white;
    }
        
}

