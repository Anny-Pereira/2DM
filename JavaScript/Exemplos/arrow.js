const soma = function soma(a,b)
{
    return a + b;
}


//Função arrow com return explicito
const soma  = (a,b) => {
    return a + b;
}



//Função arrow com return implicito
const soma  = (a,b) => a + b


//Função arrow sem parametro
let ola = () => 'Olá!';


//Função arrow com apenas um parametro mas que pode ser ignorado
let ola = _ => 'Olá!';
//não é a ausencia de parametro, é um parametro ignorável