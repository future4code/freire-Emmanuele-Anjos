// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  //const listaInvertida =
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPares = array.filter((pares) => {
    if (pares % 2 === 0) {
      return true;
    }
  });
  return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let newArrayPares = array.filter((pares) => {
    if (pares % 2 === 0) {
      return true;
    }
  });
  let arrayElevada = newArrayPares.map((numero) => {
    return numero ** 2;
  });
  return arrayElevada;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  array.sort(function (a, b) {
    return b - a;
  });
  return array[0];
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let objeto = {
    maiorNumero: "",
    maiorDivisivelPorMenor: "",
    diferenca: "",
  };
  let menorNumero;
  if (num1 > num2) {
    (objeto.maiorNumero = num1), (menorNumero = num2);
  } else {
    (objeto.maiorNumero = num2), (menorNumero = num1);
  }
  objeto.maiorDivisivelPorMenor = objeto.maiorNumero % menorNumero == 0;
  objeto.diferenca = objeto.maiorNumero - menorNumero;

  return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i++) {
    if (i % 2 == 0) {
      numerosPares.push(i);
    }
  }
  return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores} `;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  pessoa.nome = "ANÔNIMO";
  return pessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
