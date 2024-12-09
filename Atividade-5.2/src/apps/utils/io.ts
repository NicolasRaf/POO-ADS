import prompt from "prompt-sync";
let input = prompt();

export function getNumber(text: string): number {
    const response = Number(input(text));

    if (isNaN(response)) {
        console.error("Entrada Invalída!\n");
        return getNumber(text);
    }

    return response;
}

export function getNumberInRange(text: string): number {
    const response = Number(input(text));

    

    return response;
}