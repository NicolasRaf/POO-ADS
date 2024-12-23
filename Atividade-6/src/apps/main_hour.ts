import { Hour } from "../classes";

function main() {
    console.clear();

    const hour1: Hour = new Hour(10, 30, 45);
    const hour2: Hour = new Hour(23, 59, 59);

    console.log("Hora 1:");
    console.log("Horas:", hour1.getHours());
    console.log("Minutos:", hour1.getMinutes());
    console.log("Segundos:", hour1.getSeconds());

    console.log("\nHora 2:");
    console.log("Horas:", hour2.getHours());
    console.log("Minutos:", hour2.getMinutes());
    console.log("Segundos:", hour2.getSeconds());

    console.log("\nHora formatada (Hora 1):");
    console.log(hour1.consultHour());

    console.log("\nHora formatada (Hora 2):");
    console.log(hour2.consultHour());

    console.log("\nCriando uma nova hora...");
    const hour3: Hour = new Hour(0, 0, 0);

    console.log("Hora 3:");
    console.log("Horas:", hour3.getHours());
    console.log("Minutos:", hour3.getMinutes());
    console.log("Segundos:", hour3.getSeconds());
    console.log("Hora formatada:", hour3.consultHour());
}

main();
