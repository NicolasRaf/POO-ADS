"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumber = getNumber;
exports.getNumberInRange = getNumberInRange;
exports.pressEnter = pressEnter;
exports.getText = getText;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let input = (0, prompt_sync_1.default)();
function getNumber(text) {
    const response = Number(input(text));
    if (isNaN(response)) {
        console.log("Entrada Invalída!\n");
        return getNumber(text);
    }
    return response;
}
function getNumberInRange(text, min, max) {
    const response = getNumber(text);
    if (response < min || response > max) {
        console.log("Número fora dos limites!\n");
        return getNumberInRange(text, min, max);
    }
    return response;
}
function pressEnter() {
    console.log();
    input("Press Enter para continuar...");
}
function getText(text) {
    return input(text);
}
