//Lista de alunos do 2 termo

//Ricardinho
//Borges
//Miria
//Tiago

//Colchetes []

var ListaAlunos = []

ListaAlunos = ["Ricardinho", "Borges", "Miria", "Tiago"];

console.log(ListaAlunos);

//Comprimento
console.log(ListaAlunos.length)

//Primeiro
console.log(ListaAlunos[0]);

//Último
console.log(ListaAlunos[ListaAlunos.length - 1]);

//Add um novo aluno
ListaAlunos.push("Medina");

console.log(ListaAlunos);

ListaAlunos[4] = "Lucas Medina";

console.log(ListaAlunos);