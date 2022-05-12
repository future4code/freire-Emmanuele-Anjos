//exercicio de interpretação 1

let array;
console.log("a. ", array);

array = null;
console.log("b. ", array); //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("c. ", array.length); //11

let i = 0;
console.log("d. ", array[i]); //3

array[i + 1] = 19;
console.log("e. ", array);

const valor = array[i + 6];
console.log("f. ", valor); //6

//exercicio de interpretação 2

const frase = prompt("Digite uma frase");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
// SUBI NUM ONIBUS EM MIRROCOS 23

//exercicio 1

const emailDoUsuario = prompt("digite seu email");
const nomeDoUsuario = prompt("digite seu nome");
console.log(
  `"o e-mail ${emailDoUsuario} foi cadastrado com sucesso. seja bem-vinda(o), ${nomeDoUsuario}!" `
);

// exercicio 2

const comidasPreferidas = [
  "brócolis",
  "morango",
  "croissant",
  "torta de limão",
  "foccacia",
];
console.log(`Essas são minhas comdas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`);

const userFav = prompt("Digite uma de suas comidas preferidas");
comidasPreferidas.splice(1, 1);
console.log(`
${comidasPreferidas[0]}
${userFav}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}`);

//exercicio 3

let listaDeTarefas = [];
let tarefa1 = prompt("Digite sua primeira tafera diaria");
let tarefa2 = prompt("Digite sua segunda tarefa diaria");
let tarefa3 = prompt("Digite sua terceira tarefa diaria");

listaDeTarefas.push = (tarefa1, tarefa2, tarefa3);
console.log(listaDeTarefas);

let userNum = prompt(
  "Escolha o índece de uma das atividades executadas, digitando de 0 a 2"
);
listaDeTarefas.splice = (userNum, 1);
console.log(listaDeTarefas);
