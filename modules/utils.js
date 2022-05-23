"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryParse = exports.deleteCookie = exports.tryStringify = exports.configTime = exports.differentEmail = void 0;
var js_cookie_1 = __importDefault(require("js-cookie"));
function differentEmail(messageEmail) {
    return (messageEmail != js_cookie_1.default.get("email")) ? true : false;
}
exports.differentEmail = differentEmail;
function configTime(date) {
    return String(date).slice(16, 21);
}
exports.configTime = configTime;
function tryStringify(obj) {
    try {
        return JSON.stringify(obj);
    }
    catch (error) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
        return null;
    }
}
exports.tryStringify = tryStringify;
function deleteCookie() {
    js_cookie_1.default.remove("myName");
    js_cookie_1.default.remove("email");
    js_cookie_1.default.remove("token");
}
exports.deleteCookie = deleteCookie;
function tryParse(obj) {
    try {
        return JSON.parse(obj);
    }
    catch (error) {
        alert("Error " + error.name + ':' + error.message + '\n' + error.stack);
        return undefined;
    }
}
exports.tryParse = tryParse;
