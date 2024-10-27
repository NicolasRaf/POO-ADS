var ControleDeAudio = /** @class */ (function () {
    function ControleDeAudio() {
        this.volume = 2;
    }
    ControleDeAudio.prototype.aumentarVolume = function () {
        if (this.volume === 10) {
            console.log("O volume já está no maxímo!");
            return;
        }
        this.volume++;
        console.log("\nVolume Aumentado!");
        console.log("Volume Atual: ".concat(this.lerVolume()));
    };
    ControleDeAudio.prototype.diminuirVolume = function () {
        if (this.volume === 0) {
            console.log("O volume já está no minímo!");
            return;
        }
        this.volume--;
        console.log("\nVolume Diminuido!");
        console.log("Volume Atual: ".concat(this.lerVolume()));
    };
    ControleDeAudio.prototype.lerVolume = function () {
        return this.volume;
    };
    return ControleDeAudio;
}());
function main() {
    console.clear();
    var myAudio = new ControleDeAudio();
    console.log("Volume Inicial: ".concat(myAudio.lerVolume()));
    myAudio.aumentarVolume();
    myAudio.diminuirVolume();
}
main();
