//let x = "";
//console.log(x);
//x = "oi";



//1) DECLARA A FUNÇÃO E O QUE ELA FAZ
//Não precisa tipar, ele entende que é string
function imprimeTexto(texto)
{
    console.log(texto);
}


//2)EXECUTA-SE A FUNÇÃO  
imprimeTexto("oi");
imprimeTexto("outro texto");


//2º FORMA
function soma()
{
    return 2 + 2;
}
console.log(soma());


//3º FORMA - FUNÇÃO DENTRO DE FUNÇÃO
imprimeTexto(soma());


//VANTAGENS
//1- LEITURA DO CODIGO FACILITADA
//2- REAPROVEITAMENTO DE CODIGO
//3- FACILIOTA A MANUTENÇÃO