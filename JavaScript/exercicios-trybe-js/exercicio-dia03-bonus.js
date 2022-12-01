/*
Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura
de repetição for para escrever os programas abaixo:
Escreva um programa que, dado um valor n qualquer, seja n > 1, i
mprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
*/
let number = 5;
let symbol = "*";
let inputLine = "";

for(let index = 0; index < number; index++){
  inputLine = inputLine + symbol
}
for(let index = 0; index < number; index++){
  console.log(inputLine)
}


// //Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// let number = 5;
// let symbol = "*";
// let inputLine = "";

// for(let index = 0; index < number; index++){
//   inputLine = inputLine + symbol
//   console.log(inputLine)
// }


//Agora inverta o lado do triângulo. Por exemplo: 
//    *(n - 1) espaços em branco 1 asteristico
//   **(n - 2) espaços em branco 2 asteristico
//  ***(n - 3) espaços em branco 3 asteristico
// let number = 5;
// let symbol = "*";
// let spaces = " ";


// for (let index = 0; index < number; index++) {
//   let inputLine = "";
//   for (let index2 = number - index; index2 > 0; index2--) {
//     inputLine += spaces
//   }
//   for(let index3 = 0; index3 <= index; index3++){
//     inputLine += symbol
//   }
//   console.log(inputLine)
// }

// Depois, faça uma pirâmide com n asteriscos de base:

// let number = 5;
// let symbol = "*";
// let spaces = " ";


// for (let index = 0; index < (number + 1) / 2; index++) {
//   let inputLine = "";
//   for (let index2 = number - index; index2 > 0; index2--) {
//     inputLine += spaces
//   }
//   for(let index3 = 0; index3 < index; index3++){
//     inputLine += symbol
//   }
//   for(index4 = 0; index4 <= index; index4++){
//     inputLine += symbol
//   }
//   console.log(inputLine)
// }

//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
const n = 7;
let asteristico = "*";
let nEspacoExt = Math.floor((n - 1) / 2);
let nEspacoInt = [];
let espacoInt = [];
let espacoExt = [];

