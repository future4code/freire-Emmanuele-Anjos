// exercicio de interpretação 1
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2;
console.log("a. ", resultado);
//false

resultado = bool1 && bool2 && bool3;
console.log("b. ", resultado);
//false

resultado = !resultado && (bool1 || bool2);
console.log("c. ", resultado);
//true
console.log("d. ", typeof resultado);

// exercicio de interpretação 2

let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));
// será impresso a junção dos dois números, pois não é possível calcular string.

const soma = primeiroNumero + segundoNumero;
console.log(soma);
//solução: transformar string em number.

// exercicio 1

let idade1 = prompt("quantos anos você tem?");
let idade2 = prompt("quantos anos possui o seu melhor amigo?");
console.log(idade1);
console.log(idade2);

let maior = idade1 > idade2;

console.log("sua idade é maior que a do seu melhor amigo?", maior);

// exercicio 2

let num1 = prompt("insira um número par");
const restDaDivisao = num1 % 2;
console.log("resultado:", restDaDivisao); //todo número inserido resulta em zero.
// quando inserido um número impar o resultado se torna 1

/* 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
a) A idade do usuário em meses
b) A idade do usuário em dias
c) A idade do usuário em horas */

// exercicio 4

let pergunta1 = prompt("escolha um número");
let pergunta2 = prompt("insira um segundo número");
const maior2 = pergunta1 > pergunta2;
console.log("o primeiro numero é maior que o segundo número", maior2);
const igualdade = pergunta1 === pergunta2;
console.log("o primeiro numero é igual ao segundo número", igualdade);
const divisao = pergunta1 !== pergunta2;
console.log("o primeiro numero é divisivel pelo segundo", divisao);
const divisao2 = pergunta2 !== pergunta1;
console.log("o segundo numero é divisivel pelo primeiro", divisao2);
