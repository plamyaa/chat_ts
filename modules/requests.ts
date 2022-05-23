import Cookies from 'js-cookie';
import { showMessagesHistory } from './view';
import { UI } from "./consts"
import { tryStringify } from './utils';

export async function getResponse (myName : string) : Promise<void> {
    const json : string | null = tryStringify({ name: myName });
    const token : string | undefined = Cookies.get("token");
    try {
        fetch(UI.USER_API, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: json,
        });
    }
    catch (error : any) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
    }
}

export async function sendEmail(eMail : string) : Promise<void> {
    const json : string | null = tryStringify({ email: eMail });
    try {
        fetch(UI.USER_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: json,
        });
    }
    catch (error : any) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
    }
};

export async function receiveMessages() : Promise<void> {
    try {
        const response : Response = await fetch(UI.MESSAGES_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;'
            }
        });
        const json : any =  await response.json();
        const messagesHistory : string | null = tryStringify(json.messages);
        localStorage.setItem("messagesHistory", `${messagesHistory}`);
        showMessagesHistory(0);
        UI.CHAT.scrollTop += 10000;
        UI.PRELOADER.style.display = "none";
    }
    catch(error : any) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
    }
} 