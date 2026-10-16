//Laço de repetição
//let nomes = ["Ana Clara", "Denise Martins", "Raissa Giovanele", "Roger Alcantara"];

//nomes.forEach(nome => {
    //console.log(nomes)
//});

//Enquanto
//Enqunato a condição for verdadeira, o laço continuará se repetindo
//let nome = prompt("Digite o nome do usuário:")
//while(nome !== "Thiago"){
   //console.log ("Insira o nome correto:");
    //nome = prompt("Digite o nome do usuário novamente:")
//}

let tarefas = ["Estudar", "Lavar louça", "Ir para a aula", "Ler um livro", "Viajar", "Jogar lixo fora"];

let opcao = Number(prompt("Escolha uma opção: 1 - Cadastrar tarefa 2 - Listar tarefa 3 - Buscar tarefa 4 - Atualizar tarefa 5 - Excluir tarefa 6 - Filtrar tarefa 7 - Adicionar tarefa no inicio 8 - Remover primeira tarefa 9 - Remover ultima tarefa 0 - Sair"));

while (opcao !== 0) {

switch (opcao) {

case 1:

let nova = prompt("Escreve a nova tarefa:");
tarefas.push(nova);

alert("Tarefa criada com sucesso!");
break;

case 2:

tarefas.forEach(tarefa => alert(tarefa));
break;

case 3:

let busca = prompt("Qual tarefa queres buscar?");
alert(tarefas.includes(busca) ? "Tarefa encontrada!" : "Tarefa não encontrada");
break;

case 4:

let antiga = prompt("Qual tarefa queres atualizar?");
let indiceAtualizar = tarefas.indexOf(antiga);

if (indiceAtualizar !== -1) {
tarefas[indiceAtualizar] = prompt("Escreve o novo nome:");

alert("Tarefa atualizada!");
}
break;

case 5:

let excluir = prompt("Qual tarefa queres excluir?");
let indiceExcluir = tarefas.findIndex(tarefa => tarefa === excluir);

if (indiceExcluir !== -1) {
tarefas.splice(indiceExcluir, 1);

alert("Tarefa excluída!");
}
break;

case 6:

let textoFiltro = prompt("Escreve o texto para filtrar:");
tarefas.filter(tarefa => 
tarefa.toLowerCase().includes(textoFiltro.toLowerCase()))
.forEach(tarefa => alert(tarefa));
break;

case 7:

tarefas.unshift(prompt("Escreve a tarefa para o início:"));
alert("Adicionada no início!");

