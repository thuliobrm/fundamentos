// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
//   for(let i = 0; i < groceryList.length; i++){
//     console.log(groceryList[i])
//   }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
//   for(let index of names){
//     console.log(index)
//   }
let soma = 0;
const impares = [];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0]
let menorNumero = numbers[0]
for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index]
  if (maiorNumero < numbers[index]) {
    maiorNumero = numbers[index]
  }
  if (numbers[index] % 2 !== 0) {
    impares.push(numbers[index])
  }
  if (menorNumero > numbers[index]) {
    menorNumero = numbers[index]
  }
}
console.log("O menor número do array é: " + menorNumero)
console.log("O maior número do array é: " + maiorNumero)
if (impares.length > 0) {
  console.log("Numeros impares do array: " + impares)
} else {
  console.log("Nenhum valor impar encontrado")
}
let mediaAritimatica = soma / numbers.length

console.log("A soma dos numeros do array é: " + soma)
console.log("A média dos numeros é: " + mediaAritimatica)

if (mediaAritimatica > 20) {
  console.log("Valor maior que 20")
}
else {
  console.log("Valor menor ou igual a 20")
}

let listaDeNumeros = [];
for(let i = 1; i <= 25; i++) {
  listaDeNumeros.push(i)
}
for(let numero of listaDeNumeros){
  console.log("Divisão de cada elemento do array: " + numero / 2)
}
console.log(listaDeNumeros);



