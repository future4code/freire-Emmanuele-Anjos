```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let ocorrencia = 0;

 for (let i = 0; i < arrayDeNumeros.length; i++ ){
   if (arrayDeNumeros[i] === numeroEscolhido){
     ocorrencia = ocorrencia + 1
   }
 }
 if(ocorrencia === 0){
   return "Numero não encontrado"
 }
}
```
