// FATORIAL DE 10
let fatorial = 10;
let multiplicacao = 1;

for(let i = fatorial; i >= 1; i --){
  multiplicacao = multiplicacao * i
}
console.log(multiplicacao)

/*
Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque
por outras para verificar se seu algoritmo está funcionando corretamente.
*/

let word = "trybe"
let word2 = ""

for(let i = word.length - 1; i >= 0 ; i --){
  word2 = word2 + word[i]
}
console.log(word2)

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for(let i = 1; i < array.length; i++){
  let palavraAtual = array[i];
  if(palavraAtual.length > maiorPalavra.length){
    maiorPalavra = palavraAtual;
  }
  if(palavraAtual.length < menorPalavra.length){
    menorPalavra = palavraAtual;
  }
}
console.log(maiorPalavra)
console.log(menorPalavra)

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.


