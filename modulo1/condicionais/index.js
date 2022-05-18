//exercicios de interpretação de código
//1)
//a. o código realiza um teste de comparação.
//b. números que divididos por dois resultem em zero.
//c. para números que divididos por dois não resultem em zero.

//2)
//a. o código serve para logar valores.
//b. será impresso o valor equivalente a maçã, 2.25.
//c. seria impresso o valor default.

//3)
//a. a primeira linha é uma constante que pede ao usuário que através do prompt atribua um valor a mesma, que será convertido em number e usado na execução do código.
//b. se inserio o número 10 a resporta ipressa seria "Esse número passou no teste", se inserido -10 a resposta seria "false".
//c. o erro ocorre pois a variante "let mensagem" não está definida.

//exercícios de escrita de código
//1)
let usuarioIdade = Number(prompt("Quantos anos você tem?"));
{
  if (usuarioIdade >= 18) {
    console.log("Você pode dirigir!");
  } else {
    console.log("Você não pode dirigir");
  }
}

//2)
let turno1 = prompt(
  "Digite a letra referente a seu turno: M (matutino), V (vespertino), N (noturno)."
).toUpperCase();
{
  if (turno1 === "M") {
    console.log("Bom dia!");
  } else if (turno1 === "V") {
    console.log("Boa tarde!");
  } else if (turno1 === "N") {
    console.log("Boa noite!");
  } else {
    console.log("Valor inserido inexistente.");
  }
}

//3)

let turno2 = prompt(
  "Digite a letra referente a seu turno: M (matutino), V (vespertino), N (noturno)."
).toUpperCase();
switch (turno2) {
  case "M":
    console.log("Bom dia!");
    break;
  case "V":
    console.log("Boa tarde!");
    break;
  case "N":
    console.log("Boa noite!");
    break;
  default:
    console.log("Valor inserido inexistente");
    break;
}

//4)

const cinema = prompt("Digite o gênero do filme que você gostaria de ver");
const valor = Number(prompt("Insira o valor desejado"));
if (cinema === "fantasia" && valor <= 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}

//Desafio
//1)
const cinema2 = prompt("Digite o gênero do filme que você gostaria de ver");
let lanchinho = prompt(
  "Nos conte qual lanchinho você irá comprar pra te acompanhar!"
);
const valor2 = Number(prompt("Insira o valor desejado"));
if (cinema2 === "fantasia" && valor <= 15) {
  console.log(`Bom filme! E aproveite o(a) ${lanchinho} :)`);
} else {
  console.log("Escolha outro filme :(");
}
