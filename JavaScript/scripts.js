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

let weekDay = "domingo"

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe")
}
else {
  console.log("FINALMENTE, descanso merecido UwU")
}

let status = "aprovado";
switch (status) {
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


