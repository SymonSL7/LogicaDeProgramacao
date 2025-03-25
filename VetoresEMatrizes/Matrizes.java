public class Matrizes {

    public static void main(String[] args) {
        // Criando a matriz de personagens
        String[][] personagemDragonBall = {
            {"Goku", "Saiyajin", "Kamehameha", "Genki Dama"},
            {"Vegeta", "Saiyajin", "Final Flash", "Big Bang Attack"},
            {"Gohan", "Saiyajin", "Masenko", "Kamehameha"},
            {"Piccolo", "Namekuseijin", "Makankosappo", "Explosão de Ki"},
            {"Kuririn", "Terráqueo", "Kienzan", "Genki Dama"},
            {"Yamcha", "Terráqueo", "Kamehameha", "Kikoho"},
            {"Tenshinhan", "Terráqueo", "Kikoho", "Kamehameha"},
            {"Mestre Kame", "Terráqueo", "Kamehameha", "Genki Dama"},
            {"Bulma", "Terráqueo", "Nenhum", "Nenhum"},
            {"Chi-Chi", "Terráqueo", "Nenhum", "Nenhum"},
            {"Videl", "Terráqueo", "Nenhum", "Nenhum"},
            {"Mr. Satan", "Terráqueo", "Nenhum", "Nenhum"},
            {"Dende", "Namekuseijin", "Nenhum", "Nenhum"},
            {"Shenlong", "Dragão", "Nenhum", "Nenhum"}
        };

        // Primeiro loop - Imprime todos os personagens com suas raças e golpes
        for (int i = 0; i < personagemDragonBall.length; i++) {
            System.out.println("O personagem " + personagemDragonBall[i][0] + " é da raça " + personagemDragonBall[i][1] + 
                               " e possui os golpes " + personagemDragonBall[i][2] + " e " + personagemDragonBall[i][3] + ".");
        }

        System.out.println("---------------------------------------------------------------------------------------------------------");

        // Segundo loop - Imprime apenas os Saiyajins
        for (int i = 0; i < personagemDragonBall.length; i++) {
            if (personagemDragonBall[i][1].equals("Saiyajin")) {
                System.out.println("O personagem " + personagemDragonBall[i][0] + " é um " + personagemDragonBall[i][1] + ".");
            }
        }

        System.out.println("---------------------------------------------------------------------------------------------------------");

        // Terceiro loop - Imprime os personagens que possuem o golpe "Kamehameha"
        for (int i = 0; i < personagemDragonBall.length; i++) {
            if (personagemDragonBall[i][2].equals("Kamehameha")) {
                System.out.println("O personagem " + personagemDragonBall[i][0] + " possui o golpe " + personagemDragonBall[i][2] + ".");
            }
        }
    }

}
