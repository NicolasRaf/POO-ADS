import prompt from "prompt-sync";
let input = prompt();

export function getNumber(text: string): number {
    const response = Number(input(text));

    if (isNaN(response)) {
        console.log("Entrada Invalída!\n");
        return getNumber(text);
    }

    return response;
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
    input("\nPress Enter para continuar...");
}

export function getText(text: string) {
    return input(text);
}