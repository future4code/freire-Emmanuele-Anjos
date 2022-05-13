//exercicio de interpretação 1
//a) será impresso o resultado da multiplicação dos valores
function minhaFuncao(variavel) {
  return variavel * 5;
}

console.log(minhaFuncao(2)); //10
console.log(minhaFuncao(10)); //50
//b) se retirado o console.log, nada será impresso na tela

//-------------------------//

//exercicio de interpretação 2
//a)
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function (texto) {
  return texto.toLowerCase().includes("cenoura");
};

const resposta = outraFuncao(textoDoUsuario);
console.log(resposta);
//a) a função do programa é converter letras maiusculas em minusculas (lowercase) procurar pro uma palavra especifica (cenoura), e com o boolean acusar verdadeiro ou falso.

//b)
//i.   Eu gosto de cenoura --> o resultado será true.
//ii.  CENOURA é bom pra vista --> CENOURA será convertido em lowerCase e o resultado será true.
//iii. Cenouras crescem na terra --> Cenoura será convertido em lowerCase e o resultado será true.
