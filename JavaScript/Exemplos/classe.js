
//Métodos Construtor
class Retangulo{

    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
}



//Classe
class animal{

    constructor(nome){
        this.nome = nome;
    }

    falar()
    {
        console.log(this.nome + 'emite um barulho.');
    }
}


//Subclasse
//extends = HERANÇA
class cachorro extends animal{

    //Sobrescreveu a função da classe principal - Override
    falar(){
        console.log(this.nome + ' latidos.');
    }

}


let cachorro = new cachorro("dog")
cachorro.falar();