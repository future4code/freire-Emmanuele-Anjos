/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo Blackjack!");

let game = confirm("Quer iniciar uma nova rodada?");

if (game === true) {
  //console.log("Iniciou uma nova rodada! ♧");
  let userCard1 = comprarCarta();
  let userCard2 = comprarCarta();
  let cardPc1 = comprarCarta();
  let cardPc2 = comprarCarta();

  let userScore = userCard1.valor + userCard2.valor;
  let machineScore = cardPc1.valor + cardPc2.valor;

  console.log(
    `Usuário - cartas: ${userCard1.texto} ${userCard2.texto}  - pontuação ${userScore}`
  );
  console.log(
    `Computador - cartas: ${cardPc1.texto} ${cardPc2.texto} - pontuação ${machineScore}`
  );

  if (userScore > machineScore) {
    console.log("O usuário venceu!");
  } else if (userScore < machineScore) {
    console.log("O computador venceu!");
  } else if (userScore === machineScore) {
    console.log("Empate");
  }
} else {
  console.log("O jogo acabou.. 🤡");
}
