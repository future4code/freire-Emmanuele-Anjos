// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b
// Exemplo:

function checarDesigualdade(a, b) {
  return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`;
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
  //  Sua lógica aqui
  return `No comparador de igualdade ${a} === ${b} é ${a === b}`;
}
console.log(checarIgualdade(1, 3));

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {
  return `No comparador de tamanho ${a} > ${b} é ${a > b}`;
}
console.log(verificaSeEMaior(321, 2156));

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= true
// d-) 'b'>'a'= false
// e-) 0!==null= true

// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
/*const nomeDoUsuario = prompt("Informe o seu nome");
const anoDeNascimento = Number(prompt("Informe o ano de seu nascimento"));
const nacionalidade = prompt("Informe seu país de origem");
const senhaDoUsuario = prompt("Crie uma senha (mímnimo 6 caracteres)");
const cadastro = () => {
  const usuario = [];
  usuario.push(nomeDoUsuario, anoDeNascimento, nacionalidade, senhaDoUsuario);
  //  Sua lógica aqui
};
if (
  2022 - anoDeNascimento >= 18 &&
  nacionalidade === "brasil" &&
  senhaDoUsuario.length >= 6 //resolver aqui
) {
  console.log("Cadastro realizado com sucesso!");
} else {
  console.log("Dados cadastrais inválidos");
}
//console.log(cadastro(nome, ano, senha, nacionalidade));
cadastro(anoDeNascimento, nacionalidade, senhaDoUsuario);*/

// Exercício 4-----------------------------------------------------------------------------------------------

/*const login = () => {
  const login = "labenu";
  //  Sua lógica aqui
  const senha = prompt("Confirme sua senha");
  if (senha === "labenu") {
    console.log("Usuario logado");
  } else {
    console.log("Senha Inválida");
  }
};*/

//console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------
/*let nome = prompt("Informe seu nome");
let vacina = prompt("Informe a vacina tomada");
let data = "01/06/2022";
let tempo = 0;
const primeiraDose = () => {
  //  Sua lógica aqui

  if (vacina === "coronavac") {
    return (tempo = 28);
  } else if (vacina === "atrazenica") {
    return (tempo = 90);
  } else if (vacina === "pfizer") {
    return (tempo = 90);
  }
};
primeiraDose();
console.log(
  `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
);*/

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------
const nomeVacina = prompt("Informe seu nome");
const segundaDose = () => {
  const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "incompleta" },
    { nome: "Carlos", imunizacao: "incompleta" },
  ];
  //  Sua lógica aqui
  const imuno = usuarios.map((nomeDoUsuario) => {
    return nomeDoUsuario.nome, (nomeDoUsuario.imunizacao = "completa");
  });
};
console.log(segundaDose());

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
  const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "completa" },
    { nome: "Carlos", imunizacao: "incompleta" },
  ];

  //  Sua lógica aqui
  return;
};
console.log(avisoAosAtrasados());

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
  {
    nome: "Artur",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "pfizer",
    imunizacao: "incompleta",
  },
  {
    nome: "Bárbara",
    ano: 1984,
    nacionalidae: "brasileira",
    senha: "labenu",
    vacina: "astrazenica",
    imunizacao: "completa",
  },
  {
    nome: "Carlos",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "coronavac",
    imunizacao: "incompleta",
  },
];

const cadastroDesafio = () => {
  //  Sua lógica aqui
};
console.log(cadastroDesafio());

const loginDesafio = () => {
  //  Sua lógica aqui
};
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
  //  Sua lógica aqui
};
console.log(primeiraDoseDesafio());
const segundaDoseDesafio = (nomeDoUsuario) => {
  //  Sua lógica aqui
};
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
  //  Sua lógica aqui
};
console.log(avisoAosAtrasadosDesafio());
