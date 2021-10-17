/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(valor)
{
    if (valor) {
        return true;
    }

    return  false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true, true, true, true,true,true, true, true, true, true);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = new Object();
carro.marca = "Ford";
carro.modelo = "EcoSport";
carro.placa = "GET1463";
carro.ano = 2017;
carro.cor = "Branco";
carro.quantasPortas;
carro.assentos = 5;
carro.quantidadePessoas = 0;


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (cor) =>
{
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function()
{
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => carro.modelo;

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => carro.marca;


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () =>{
    return ("Esse carro é um " + carro.marca + " " + carro.modelo);
}


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function (numeroPessoas)
{
    let quantPessoas = carro.quantidadePessoas += numeroPessoas;
    
    if (quantPessoas === carro.assentos || quantPessoas > carro.assentos) {
        return "O carro já está lotado!";    
    }

    else if (quantPessoas <= 5) {
        return ("Já temos  " + quantPessoas + " pessoas no carro!");
    }

    else if (quantPessoas === (carro.assentos - 1)) {
        return ("Só cabe mais " + " pessoa!");
        
    }

    else if (numeroPessoas > 5) {
        return ("Não é possível adicionar mais pessoas!");
    }

    return ("Já temos " + quantPessoas + " pessoas no carro!");
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor());


// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho");

// E agora, qual a cor do carro?
console.log(carro.obterCor(0));


// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo");

// E agora, qual a cor do carro?
console.log(carro.obterCor());


// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.
console.log(carro.addPessoas(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.addPessoas(4));

// Faça o carro encher.
for (let index = 0; index < carro.assentos.length; index++) {
    carro.addPessoas(1);
    
}
console.log(carro.quantidadePessoas);

// Tire 4 pessoas do carro.
console.log(carro.addPessoas(-4));

// Adicione 10 pessoas no carro.
console.log(carro.addPessoas(10));

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);