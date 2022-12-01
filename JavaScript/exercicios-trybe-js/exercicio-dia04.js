//Escreva os códigos abaixo no seu VSCode para acompanhar os resultados.
// let diasDaSemana = {
//   1:'domingo',
//   2:'segunda',
//   3:'terça',
//   4:'quarta',
//   5:'quinta',
//   6:'sexta',
//   7:'sábado',
// };
// console.log(diasDaSemana['1'])

// let conta = {
//   agencia: '0000',
//   banco: {
//     cod: '012',
//     id: 4,
//     nome:'TrybeBank',  
//   },
// };

// let infoDoBanco = 'banco';
// console.log(conta);
// console.log(conta[infoDoBanco]['nome']);

// console.log(conta.agencia);

// let usuario = {
//   id: 99,
//   email: 'jakeperalta@gmail.com',
//   infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//       rua: 'Smith Street',
//       bairro: 'Brooklyn',
//       cidade: 'Nova Iorque',
//       estado: 'Nova Iorque',
//     },
//   },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//Objetos com array.

// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador.nome); // Zoey

/*
Vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos! 😉
Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
*/
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3,    
//   } 
// }
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// // console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade')
// console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes');
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')

/*
Para fixar
No exemplo acima, utilizamos o for/of para percorrer o nosso iterável e nos retornar o valor dos índices.
Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?

Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
*/
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for(let index in names){
//   console.log('Olá ' +  names[index])
// }

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for(let index in car){
//   console.log(index, car[index])
// }

/*
Que tal praticar um pouco?
Desenvolva cada exercício a seguir utilizando FUNÇÕES
*/

function adicao(a, b){
  return a + b;

}
console.log(adicao(5, 10))

function subtracao(a, b){
  return a - b
}
console.log(subtracao(10, 5))

function multiplicacao(a, b){
  return a * b
}
console.log(multiplicacao(20, 20))

function divisao(a, b){
  return a / b
}
console.log(divisao(100, 25))

function modulo(a, b){
  return a % b
}
console.log(modulo(100, 25))

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function compareTwo (number1, number2){
  if(number1 > number2){
    return number1 + ' é maior numero';
  }else{
    return number2 + ' é maior numero';
  } 
}
console.log(compareTwo(1000, 600))

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function compareTrhee(number1, number2, number3){
  if(number1 > number2 && number1 > number3){
    return number1 + ' É o maior numero'
  }else if(number2 > number1 && number2 > number3){
    return number2 + ' É o maior numero'
  }else{
    return number3 + ' É o maior numero'
  }
}
console.log(compareTrhee(200, 300, 800))

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
 
function boolean(on, off){
  if(on >= 1){
    return 'Positive';
  }else if(off < 0){
    return 'Negative'
}
}
console.log(boolean(1, -1))
/*
Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false,
caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo
*/
function triangulo(ang1, ang2, ang3){
  if((ang1 + ang2 + ang3) === 180){
    return true
  }else{
  return false
}
}

console.log(triangulo(30,60,100))


