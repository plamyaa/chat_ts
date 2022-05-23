import { isAutorized}  from "./view";
import { Socket } from "./socket";
import { receiveMessages } from "./requests";
import { Autorization, Settings, Confirmation} from "./modalInterface"
import { Chat } from "./mainInterface";

const confirmation = new Confirmation();
const settings = new Settings();
const autorization = new Autorization();
const chat = new Chat();

document.addEventListener("DOMContentLoaded", () => { 
    chat.listener();
    autorization.listener();
    settings.listener();
    confirmation.listener();
    receiveMessages();
    if (isAutorized()) {
        const socket = new Socket();
        socket.listener();
    }
})
