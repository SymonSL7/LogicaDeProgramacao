import java.util.ArrayList;
import java.util.List;

public class Vetores {

    public static void main(String[] args) {
        
        List<String> dragonBall = new ArrayList<String>();
        dragonBall.add("Goku");
        dragonBall.add("Vegeta");
        dragonBall.add("Gohan");
        dragonBall.add("Piccolo");
        dragonBall.add("Kuririn");
        dragonBall.add("Yamcha");
        dragonBall.add("Tenshinhan");

        for (String personagem : dragonBall) {
            System.out.println(personagem);
        }


    }
}