//exercícios de interpretação de cod.

//1)
//a. O map irá imprimir todos os itens da variável em forma de array, juntamente a seus índices.

//2)
//a. Será impresso um único array contendo apenas os elementos contidos em "nome", junto a seus índices e lenght.

//3)
//a. O filter imprimirá no console todos os ítens que não contenham o nome "Chijo".

// exercícios de escrita de código

//1)
//a.
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];
const nomeDosDogs = pets.map((pets, indice, array) => {
  return pets.nome;
});
console.log(nomeDosDogs);

//b.
const apenasSalsichas = pets.filter((pets, indice, array) => {
  return pets.raca === "Salsicha";
});
console.log(apenasSalsichas);

//c.
const apenasPoodle = pets.filter((pets, indice, array) => {
  return pets.raca === "Poodle";
});
console.log(apenasPoodle);

const descontoPoodles = apenasPoodle.map((pets) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!"`;
});
console.log(descontoPoodles);

//3)

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];
//a.
const nomeDosProdutos = produtos.map((produtos, indice, array) => {
  return produtos.nome;
});
console.log(nomeDosProdutos);
//b.
const precoEDesconto = produtos.map((produtos, indice, array) => {
  const objetoDesconto = {
    nomeDosProdutos: produtos.nome,
    precoComDesconto: produtos.preco * 0.95,
  };
  return objetoDesconto;
});
console.log(precoEDesconto);

//c.
const apenasBebidas = produtos.filter((produtos, indice, array) => {
  return produtos.categoria === "Bebidas";
});
console.log(apenasBebidas);

//d.
const apenasYpe = produtos.filter((produtos, indice, array) => {
  return produtos.nome === "Ypê";
});
console.log(apenasYpe);
