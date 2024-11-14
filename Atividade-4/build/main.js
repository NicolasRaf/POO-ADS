"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./classes/index");
function printNumberQuestion(num) {
    console.log("\x1b[32m%s\x1b[0m", `\n${num}ª Questão`);
}
function main() {
    console.clear();
    // 3ª Questão 
    printNumberQuestion(3);
    const myHotel = new index_1.Hotel(20);
    console.log(`Quantidade de reservas inicias: ${myHotel.qtdReservetions}`);
    myHotel.addReservation();
    console.log(`Quantidade de reservas atuais: ${myHotel.qtdReservetions}`);
    // 4ª Questão 
    printNumberQuestion(4);
    // let r : Radio = new Radio(); //Desta forma gera um erro por não passar o parâmetro para o construtor
    // r.volume = 10;
    let r = new index_1.Radio(15); // Adicionado valor passado ao construtor
    r.volume = 10;
    console.log(`Volume do Radio: ${r.volume}`);
    // 5ª Questão 
    printNumberQuestion(5);
    let c1 = new index_1.Account("1", 100);
    let c2 = new index_1.Account("2", 100);
    let c3;
    c1 = c2;
    c3 = c1;
    c1.drawCash(10);
    c1.transfer(c2, 50);
    // Todas terão o mesmo objeto de referência
    console.log("Saldo Final!");
    console.log(`Variável 1 --> ${c1.checkBalance()}`);
    console.log(`Variável 2 --> ${c2.checkBalance()}`);
    console.log(`Variável 3 --> ${c3.checkBalance()}`);
    // 6ª Questão 
    printNumberQuestion(6);
    const happyGreeting = new index_1.Greeting("Bom dia", "Ely");
    console.log(happyGreeting.getGreeting()); // print da saudação com os parâmetros passados
    // 7ª Questão 
    printNumberQuestion(7);
    const notTri = new index_1.Triangule(3, 20, 1);
    const equiTri = new index_1.Triangule(5, 5, 5);
    const escTri = new index_1.Triangule(3, 4, 5);
    const isoTri = new index_1.Triangule(5, 7, 5);
    console.log(`Triangulo [3, 20, 1] -->`, notTri.isATriangule());
    console.log(`Triangulo Equilátero[5, 5, 5] -->`, equiTri.isEquilateral());
    console.log(`Triangulo Escaleno[3, 4, 5] -->`, escTri.isScalene());
    console.log(`Triangulo Isoceles[5, 7, 5] -->`, isoTri.isIsoceles());
    // 8ª Questão 
    printNumberQuestion(8);
    const computer = new index_1.Equipament;
    // Testando métodos do computer
    console.log("O equipamento está ligado?", computer.isOn());
    computer.tunrOn();
    console.log("O equipamento está ligado?", computer.isOn());
    computer.tunrOn();
    computer.tunrOff();
    console.log("O equipamento está ligado?", computer.isOn());
    computer.invert();
    console.log("O equipamento está ligado?", computer.isOn());
    // 9ª Questão 
    printNumberQuestion(9);
    let upC1 = new index_1.UpdatedAccount("1", 90);
    let upC2 = new index_1.UpdatedAccount("2", 50);
    console.log("O saque foi realizado?", upC1.drawCash(30)); // true
    console.log(`Saldo atual da Conta 1 --> R$ ${upC1.checkBalance()}`); // 70
    console.log("\nA transferência foi realizada?", upC1.transfer(upC2, 40)); // true
    console.log(`Saldo atual da Conta 1 --> R$ ${upC1.checkBalance()}`); // 20
    console.log(`Saldo atual da Conta 2 --> R$ ${upC2.checkBalance()}`); // 90
    console.log("\nO saque foi realizado?", upC1.drawCash(30)); // false (saldo insuficiente)
    console.log(`Saldo atual da Conta 1 --> R$ ${upC1.checkBalance()}`); // 20
    console.log(`Saldo atual da Conta 2 --> R$ ${upC2.checkBalance()}`); // 90
    // 10ª Questão 
    printNumberQuestion(10);
    const jogador1 = new index_1.Player(10, 5, 100); // Força 10, Nível 5, Pontos 100
    const jogador2 = new index_1.Player(8, 4, 80); // Força 8, Nível 4, Pontos 80
    console.log("Estado inicial:");
    console.log("Player 1:", jogador1.toString());
    console.log("Player 2:", jogador2.toString());
    // Primeiro Ataque
    jogador1.attack(jogador2);
    console.log("\nApós Player 1 atacar Player 2:");
    console.log("Player 1:", jogador1.toString());
    console.log("Player 2:", jogador2.toString());
    // Segundo Ataque
    jogador2.attack(jogador1);
    console.log("\nApós Player 2 atacar Player 1:");
    console.log("Player 1:", jogador1.toString());
    console.log("Player 2:", jogador2.toString());
    console.log("\nEstado Final:");
    console.log("Player 1:", jogador1.toString());
    console.log("Player 2:", jogador2.toString());
    // Verificação de pontos
    if (jogador1.points > jogador2.points) {
        console.log("\nPlayer 1 tem mais points.");
    }
    else if (jogador2.points > jogador1.points) {
        console.log("\nPlayer 2 tem mais points.");
    }
    else {
        console.log("\nOs jogadores têm a mesma quantidade de points.");
    }
}
main();
