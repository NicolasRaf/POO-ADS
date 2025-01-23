import prompt from "prompt-sync";
let input = prompt();

export function getNumber(text: string): number {
    const response = input(text);   

    if (isNaN(Number(response)) || response === "") {
        console.log("Entrada Invalída!\n");
        return getNumber(text);
    }

    return Number(response);
}

export function getNumberInRange(text: string, min:number, max: number): number {
    const response = getNumber(text);

    if (response < min || response > max){
        console.log("Número fora dos limites!\n");
        return getNumberInRange(text, min, max);
    }

    return response;
}

export function pressEnter(): void {
    console.log();
    input("Press Enter para continuar...");
}

export function getText(text: string) {
    return input(text);
}

export function getChar(text: string, validChars?: string[]): string {
    const response = input(text);

    if (response.length !== 1) {
        console.log("Entrada inválida! Por favor, insira apenas um caractere.\n");
        return getChar(text, validChars);
    }

    if (validChars != undefined){
        if (!validChars.includes(response.toLowerCase()) && !validChars.includes(response.toUpperCase()) ) {
            console.log(`Caractere inválido! Por favor, insira um dos seguintes: ${validChars}\n`);
            return getChar(text, validChars);
        }
    }
    return response;
}


export function getTextFiltred(text: string, filter: string) {
    const response = input(text);

    if (response.toLowerCase() === filter) {
        console.log("Entrada Inválida!\n");
        return getTextFiltred(text, filter);
    }

    return response;
}