const currentHour = 21;
let message = null
if (currentHour >= 22) {
  console.log(message = "Não devemos comer nada, é hora de dormir")
}
else if (currentHour >= 18 && currentHour < 22) {
  console.log(message = "Rango da noite, vamos jantar")
}
else if (currentHour >= 14 && currentHour < 18) {
  console.log(message = "Vamos fazer um bolo pro café da tarde?")
}
else if (currentHour >= 11 && currentHour <= 14) {
  console.log(message = "Hora do almoçoooo!!!")
}
else {
  currentHour >= 4 && currentHour <= 11
  console.log(message = "Hmmm, cheiro de café recém-passado” na variável")
}

let weekDay = "segunda-feira"

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe")
}
else {
  console.log("FINALMENTE, descanso merecido UwU")
}

switch(weekDay){
  case "segunda-feira":
    console.log("Oba, começou a semana na Trybe");
    break;
  case "terça-feira":
  case "quarta-feira":
  case "quinta-feira":
  case "sexta-feira":  
    console.log("Oba, mais um dia de aprendizado na Trybe");
    break;
  default:
    console.log("FINALMENTE, descanso merecido UwU");
    break;
}

// let numero1 = 10;
// let numero2 = 20;

// let operador = "2";

// switch (operador) {
//   case "+":
//     console.log(numero1 + numero2);
//     break;
//   case "-":
//     console.log(numero1 - numero2);
//     break;
//   case "*":
//     console.log(numero1 * numero2);
//     break;
//   case "/":
//     console.log(numero1 / numero2);
//     break;
//   case "%":
//     console.log(numero1 % numero2);
//     break;
//   default:
//     console.log("Operador invalido");
//     break;
// }

function calculadora(numero1, numero2, operador){
  switch (operador) {
    case "+":
      console.log(numero1 + numero2);
      break;
    case "-":
      console.log(numero1 - numero2);
      break;
    case "*":
      console.log(numero1 * numero2);
      break;
    case "/":
      console.log(numero1 / numero2);
      break;
    case "%":
      console.log(numero1 % numero2);
      break;
    default:
      console.log("Operador invalido");
      break;
  }
}
calculadora(10, 20, "%")


















let estatus = "aprovado";
switch (estatus) {
  case "aprovado":
    console.log("Parabéns, você foi aprovado!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera!");
    break;

  case "reprovado":
    console.log("Você foi reprovado!");
    break;

  default:
    console.log("Informação incorreta")
}


