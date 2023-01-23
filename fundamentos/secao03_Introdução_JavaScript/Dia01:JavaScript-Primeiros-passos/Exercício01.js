// // PRIMEIRO EXERCICIO

// // const myName = "Felipe Goiz";

// // const birthCity = 33;
// // let birthYear = 1989;

// // console.log(myName);
// // console.log(birthCity);
// // console.log(birthYear);

// // birthYear = 2030;

// // console.log(birthYear);

// // SEGUNDO EXERCICIO

// // const base = 5;
// // const heigth = 8;
// // const area = base * heigth;

// // console.log(area);

// // const perimeter = 2 * base + 2 * heigth;

// // console.log(perimeter);

// // TERCEIRO EXERCICIO

// const nota = 70;

// if (nota >= 80 && nota <= 100) {
//   console.log("Parabéns você faz parte do grupo das pessoas aprovadas!");
// }

// else if (nota < 80 && nota >= 60) {
//   console.log("Você está na nossa lista de espera.");
// }

// else {
//   console.log("Infelizmente, você reprovou.");
// }

// QUARTO EXERCICIO

const currentHour = 4;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir.";
  }

else if (currentHour >= 18 && currentHour <22) {
    message = "Rango da noite, vamos jantar :D";
  }

else if (currentHour >= 14 && currentHour <18) {
    message = "Vamos fazer um bolo pro café da tarde?";
  }

else if (currentHour >= 11 && currentHour <14) {
    message = "Hora do almoço!!!";
  }

else if (currentHour >= 6 && currentHour <11) {
    message = "Hmmm, cheiro de café recém-passado.";
  }

  else{
    message = "Volte a domir!"
  }
  
console.log(message);