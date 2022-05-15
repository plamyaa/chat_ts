import Cookies from "js-cookie";

export function differentEmail(messageEmail : string) : boolean {
    return (messageEmail != Cookies.get("email")) ? true : false;
}

export function configTime(date : Date){
    return String(date).slice(16, 21);
}

export function tryStringify(obj: object) : string | null {
    try {
        return JSON.stringify(obj);
    }
    catch (error : any) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
        return null;
    }
}

export function deleteCookie() : void {
    Cookies.remove("myName");
    Cookies.remove("email");
    Cookies.remove("token");
}

export function tryParse(obj : string) : string | undefined {
    try {
        return JSON.parse(obj);
    }
    catch (error : any) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
        return undefined;
    }
}