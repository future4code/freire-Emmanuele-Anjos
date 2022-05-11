nome = idade = console.log(typeof nome);
console.log(typeof idade);

// a variavel não possui valor, por isso o resultado se torna indefinido

const seuNome = "Qual o seu nome?";
const suaIdade = "Quantos anos você tem?";
console.log(seuNome, suaIdade);

const respNome = "Sofia";
const respIdade = "22";
console.log(respNome, respIdade);

// exercicio 2

const roupa = "Você está usando roupa hoje?";
const dente = "Você escovou os dentes hoje?";
const exercicio = "Você se exercitou hoje?";

const respRoupa = "Sim";
const respDente = "Sim";
const respExercicio = "Sim";

console.log(roupa, respRoupa);
console.log(dente, respDente);
console.log(exercicio, respExercicio);


// exercicio 3

let a = 10;
let b = 25;
c = b;
b = a;
a = c;
console.log(a, b);

