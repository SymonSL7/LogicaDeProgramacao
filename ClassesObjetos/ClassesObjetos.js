class formaDeBolo {

    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }

    assar(){
        console.log(`Assando o bolo de ${this.saborDaMassa}`);
    }

}

let boloFesta = new formaDeBolo("Chocolate","Nutella");
let boloPremium = new formaDeBolo("Morango","Chocolate Branco");

boloFesta.escrever();
boloPremium.escrever();
boloPremium.assar();
