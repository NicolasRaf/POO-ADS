class Professor {
  name: string;
  payment: number;
  language: string;

  constructor(name: string, payment: number, language: string) {
    this.name = name;
    this.payment = payment;
    this.language = language;
  }
}

function main() {
  console.clear();

  const Ely = new Professor("Ely", 120.56, "TypeScript");

    const message: string = `${Ely.name}\nMy payment time is ${Ely.payment} and\nmy preffered   
    language is ${Ely.language}`;

    console.log(message);
}

main();
