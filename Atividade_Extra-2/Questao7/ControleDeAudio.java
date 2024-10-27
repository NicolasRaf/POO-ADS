public class ControleDeAudio {
    private int volume = 2;

    public void aumentarVolume() {
        if (volume == 10) {
            System.out.println("O volume já está no máximo!");
            return;
        }
        volume++;
        System.out.println("\nVolume Aumentado!");
        System.out.println("Volume Atual: " + lerVolume());
    }

    public void diminuirVolume() {
        if (volume == 0) {
            System.out.println("O volume já está no mínimo!");
            return;
        }
        volume--;
        System.out.println("\nVolume Diminuído!");
        System.out.println("Volume Atual: " + lerVolume());
    }

    public int lerVolume() {
        return volume;
    }

    public static void main(String[] args) {
        ControleDeAudio myAudio = new ControleDeAudio();
        System.out.println("Volume Inicial: " + myAudio.lerVolume());

        myAudio.aumentarVolume();
        myAudio.diminuirVolume();
    }
}
