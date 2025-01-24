import prompt from "prompt-sync";
let input = prompt();

export function getNumber(text: string): number {
    const response = input(text);

    try {
        if (isNaN(Number(response)) || response === "") {
            throw new Error(`Erro: Caractere inválido!\n`);
        }
        return Number(response);
    } catch (error) {
        const typedError = error as Error;
        console.error(typedError.message); 
        return getNumber(text); 
    }
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

    // Check if the input is a single character
    if (response.length !== 1) {
        console.log("Entrada inválida! Por favor, insira apenas um caractere.\n");
        return getChar(text, validChars);
    }

    // Check if the input is valid
    if (validChars != undefined){
        // Check if the character is in the array of valid characters
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