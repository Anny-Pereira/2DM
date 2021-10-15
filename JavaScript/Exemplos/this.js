
// === igualdade no tipo e na escrita

//node = global
//navegador = window


//nesse caso o this representa o window que tem um objeto chamado document
console.log(this.document === window.document);

console.log(this === window);


this.a = 20;
console.log(window.a);



function thisNaoEscrito (){
    console.log(this)
};


function thisEscrito()
{
    'use strict'

    console.log(this);
}


var carro = new Object();
carro.marca = "Fiat" //Propriedade
carro.localizaMarca = function() //Metodo = propriedade qua faz referencia em uma função
{
    return this.marca;
}

console.log(carro.localizaMarca());

