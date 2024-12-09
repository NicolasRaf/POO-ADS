"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumber = getNumber;
exports.getNumberInRange = getNumberInRange;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let input = (0, prompt_sync_1.default)();
function getNumber(text) {
    const response = Number(input(text));
    if (isNaN(response)) {
        console.error("Entrada Invalída!\n");
        return getNumber(text);
    }
    return response;
}
function getNumberInRange(text) {
    const response = Number(input(text));
    return response;
}
