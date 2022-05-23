export const grey : string = "#535353";
export const white : string = "#FFF";

export const UI = {
    PRELOADER : document.querySelector('.preloader') as HTMLDivElement,
    CONTAINER : document.querySelector(".container-shape") as HTMLBodyElement,
    SETTINGS_BUTTON : document.querySelector(".buttons-above__settings") as HTMLButtonElement,
    EXIT_BUTTON : document.querySelector(".buttons-above__exit") as HTMLButtonElement,
    ENTER_CODE : document.querySelector(".modal-autorization__code") as HTMLLinkElement,
    SEND_TEXT : document.querySelector(".message-below__input") as HTMLInputElement,
    SEND_BUTTON : document.querySelector(".message-below__button") as HTMLButtonElement,
    CHAT : document.querySelector(".chat") as HTMLDivElement,
    CHAT_WINDOW : document.querySelector(".chat-window") as HTMLDivElement,
    TEMPLATE : document.querySelector("#template-message") as HTMLTemplateElement,
    MODAL : {
        SETTINGS : {
            TEXT : document.querySelector(".modal-settings__input") as HTMLInputElement,
            SEND_BUTTON : document.querySelector(".modal-settings__button") as HTMLButtonElement,
            EXIT : document.querySelector(".modal-settings__exit") as HTMLButtonElement,
        },
        AUTORIZATION : {
            TEXT : document.querySelector(".modal-autorization__input") as HTMLInputElement,
            SEND_BUTTON : document.querySelector(".modal-autorization__button") as HTMLButtonElement,
            EXIT : document.querySelector(".modal-autorization__exit") as HTMLButtonElement,
        },
        CONFIRMATION : {
            TEXT : document.querySelector(".modal-confirmation__input") as HTMLInputElement,
            SEND_BUTTON : document.querySelector(".modal-confirmation__button") as HTMLButtonElement,
            EXIT : document.querySelector(".modal-confirmation__exit") as HTMLButtonElement,
        }
    },
    MODAL_SETTINGS : document.querySelector(".modal-settings") as HTMLBodyElement,
    MODAL_AUTORIZATION : document.querySelector(".modal-autorization") as HTMLBodyElement,
    MODAL_CONFIRMATION : document.querySelector(".modal-confirmation") as HTMLBodyElement,
    USER_API : "https://mighty-cove-31255.herokuapp.com/api/user" as string,
    MESSAGES_API : "https://mighty-cove-31255.herokuapp.com/api/messages" as string,
    SERVER_API : "wss://mighty-cove-31255.herokuapp.com/websockets?" as string,
}