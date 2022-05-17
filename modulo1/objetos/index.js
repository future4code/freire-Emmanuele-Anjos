//exercicio de interpretação de cod
//1)
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //será impresso: matheus nachtergaele (equivalente ao primeiro índice)
console.log(filme.elenco[filme.elenco.length - 1]) //será impresso o último elemento da array ("Virginia Cavendish")
console.log(filme.transmissoesHoje[2]) //será impresso: canal brasil, 19h (equivalente ao terceiro índice)*/

// exercicio 2

/*const cachorro = {
  nome: "Juca",
  idade: 3,
  raca: "SRD",
};

const gato = { ...cachorro, nome: "Juba" };

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") };

console.log(cachorro);
console.log(gato);
console.log(tartaruga);*/

//a) será impresso jubo

//b) a sintaxe dos três pontos antes do nome de um objeto altera o elemento prévio, substituindo-o por um novo adicionado posteriormente.

//exercicio 3

/*function minhaFuncao(objeto, propriedade) {
  return objeto[propriedade];
}

const pessoa = {
  nome: "Caio",
  idade: 23,
  backender: false,
};

console.log(minhaFuncao(pessoa, "backender"));
console.log(minhaFuncao(pessoa, "altura"));*/

//a) será impresso falso e undefined
//b) o valor "altura" não existe pois não foi definido na função, por isso o valor "undefined" será ipresso no console.

//exercicio de escrita de código

//1)

const person = {
  name: "Samara",
  surname: ["Sami", "Sam", "Sasa"],
};

console.log(`Eu sou ${person.name}, mas pode me chamar de ${person.surname}`);

const newSurname = {
  ...person,
  surname: ["Sa", "Sami sam", "Sama"],
};
console.log(
  `Eu sou ${newSurname.name}, mas pode me chamar de ${newSurname.surname}`
);

//2)

const pessoa1 = {
  nome: "rossi",
  idade: 24,
  profissao: "dev",
};

const pessoa2 = {
  nome: "fernando",
  idade: 24,
  profissao: "tatuador",
};

let pessoas = [pessoa1, pessoa2];
function pessoasLog() {
  return array.push(pessoas);
}
console.log(pessoas);

//3)

let carrinho = [];

let fruta1 = {
  nome: "kiwi",
  disponivel: true,
};

let fruta2 = {
  nome: "morango",
  disponivel: true,
};

let fruta3 = {
  nome: "manga",
  disponivel: true,
};

function sacola(array, objeto) {
  return array.push(objeto);
}

sacola(carrinho, fruta1);
sacola(carrinho, fruta2);
sacola(carrinho, fruta3);
console.log(carrinho);
