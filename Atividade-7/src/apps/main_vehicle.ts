import { Vehicle, Car, ElectricCar } from "../models";

function main() {
    console.clear();

    const vehicle: Vehicle = new Vehicle("ABC1234", 2020);
    const myCar: Car = new Car("XYZ5678", 2022, "Sedan");
    const electricCar: ElectricCar = new ElectricCar("ELEC123", 2023, "Model X", 350);

    console.log("Veículo:");
    console.log(` Placa: ${vehicle.plate}\n Ano: ${vehicle.year}`);

    console.log("\nCarro:");
    console.log(` Placa: ${myCar.plate}\n Ano: ${myCar.year}\n Modelo: ${myCar.model}`);

    console.log("\nCarro Elétrico:");
    console.log(` Placa: ${electricCar.plate}\n Ano: ${electricCar.year}\n Modelo: ${electricCar.model}\n Autonomia: ${electricCar.batteryLife} km`);
}

main();
