// PRIMEIRO EXERCICIO

// const myName = "Felipe Goiz";

// const birthCity = 33;
// let birthYear = 1989;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// birthYear = 2030;

// console.log(birthYear);

// SEGUNDO EXERCICIO

// const base = 5;
// const heigth = 8;
// const area = base * heigth;

// console.log(area);

// const perimeter = 2 * base + 2 * heigth;

// console.log(perimeter);

// TERCEIRO EXERCICIO

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

// const currentHour = 4;
// let message = "";

// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir.";
//   }

// else if (currentHour >= 18 && currentHour <22) {
//     message = "Rango da noite, vamos jantar :D";
//   }

// else if (currentHour >= 14 && currentHour <18) {
//     message = "Vamos fazer um bolo pro café da tarde?";
//   }

// else if (currentHour >= 11 && currentHour <14) {
//     message = "Hora do almoço!!!";
//   }

// else if (currentHour >= 6 && currentHour <11) {
//     message = "Hmmm, cheiro de café recém-passado.";
//   }

//   else{
//     message = "Volte a domir!"
//   }

// console.log(message);

// QUINTA ATIVIDADE

// const weekday = "quarta-feira";

// if (weekday === "segunda-feira" || weekday === "terça-feira" || weekday === "quarta-feira" || weekday === "quinta-feira" || weekday === "sexta-feira") {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// }

// else {
//   console.log("FINALMENTE, descanso merecido UwU");
// }

// SEXTA ATIVIDADE

// let statusCandidato = "Aprovado";

// switch(statusCandidato) {
//   case "aprovada":
//   console.log("Parabéns, você foi aprovada(o)!");
//   break;

//   case "lista":
//   console.log("Você está na nossa lista de espera");
//   break;

//   case "reprovada":
//   console.log("Você foi reprovada(o)");
//   break;

// default:
//   console.log("Informação incorreta");
// }

// EXERCICIOS - AGORA, A PRATICA #01

// const constanteA = 10;
// const constanteB = -50;
// let operacaoAritimetica = "-";

// if (operacaoAritimetica === "+") {
//   if (constanteA > constanteB) {
//     console.log(constanteA +" é maior que " + constanteB + ".");
//   } else if (constanteA === constanteB) {
//     console.log(constanteA +" é igual a " + constanteB + ".");
//   } else {
//     console.log(constanteB +" é maior que " + constanteA + ".");
//   }
//   let resultadoFinal = constanteA + constanteB;
//   if (resultadoFinal > 0) {
//     console.log("Este valor é um número positivo.")
//   } else if (resultadoFinal < 0) {
//     console.log("Este valor é negativo.")
//   } else {
//     console.log("Zero")
//   }
//   console.log("Esta operação é uma adição e o resultado é " + resultadoFinal + ".");
// }

// else if (operacaoAritimetica === "-") {
//   if (constanteA > constanteB) {
//     console.log(constanteA +" é maior que " + constanteB + ".");
//   } else if (constanteA === constanteB) {
//     console.log(constanteA +" é igual a " + constanteB + ".");
//   } else {
//     console.log(constanteB +" é maior que " + constanteA + ".");
//   }
//   let resultadoFinal = constanteA - constanteB;
//   if (resultadoFinal > 0) {
//     console.log("Este valor é um número positivo.")
//   } else if (resultadoFinal < 0) {
//     console.log("Este valor é negativo.")
//   } else {
//     console.log("Zero")
//   }
//   console.log("Esta operação é uma subtração e o resultado é " + resultadoFinal + ".");
// }

// else if (operacaoAritimetica === "*") {
//   if (constanteA > constanteB) {
//     console.log(constanteA +" é maior que " + constanteB + ".");
//   } else if (constanteA === constanteB) {
//     console.log(constanteA +" é igual a " + constanteB + ".");
//   } else {
//     console.log(constanteB +" é maior que " + constanteA + ".");
//   }
//   let resultadoFinal = constanteA * constanteB;
//   if (resultadoFinal > 0) {
//     console.log("Este valor é um número positivo.")
//   } else if (resultadoFinal < 0) {
//     console.log("Este valor é negativo.")
//   } else {
//     console.log("Zero")
//   }
//   console.log("Esta operação é uma multiplicação e o resultado é " + resultadoFinal + ".");
// }

// else if (operacaoAritimetica === "/") {
//   if (constanteA > constanteB) {
//     console.log(constanteA +" é maior que " + constanteB + ".");
//   } else if (constanteA === constanteB) {
//     console.log(constanteA +" é igual a " + constanteB + ".");
//   } else {
//     console.log(constanteB +" é maior que " + constanteA + ".");
//   }
//   let resultadoFinal = constanteA / constanteB;
//   if (resultadoFinal > 0) {
//     console.log("Este valor é um número positivo.")
//   } else if (resultadoFinal < 0) {
//     console.log("Este valor é negativo.")
//   } else {
//     console.log("Zero")
//   }
//   console.log("Esta operação é uma divisão e o resultado é " + resultadoFinal + ".");
// }

// else if (operacaoAritimetica === "%") {
//   if (constanteA > constanteB) {
//     console.log(constanteA +" é maior que " + constanteB + ".");
//   } else if (constanteA === constanteB) {
//     console.log(constanteA +" é igual a " + constanteB + ".");
//   } else {
//     console.log(constanteB +" é maior que " + constanteA + ".");
//   }
//   let resultadoFinal = constanteA % constanteB;
//   if (resultadoFinal > 0) {
//     console.log("Este valor é um número positivo.")
//   } else if (resultadoFinal < 0) {
//     console.log("Este valor é negativo.")
//   } else {
//     console.log("Zero")
//   }
//   console.log("Esta operação é uma módulo e o resultado é " + resultadoFinal + ".");
// }
// EXERCICIOS - AGORA, A PRATICA #02

// const constanteC = 2;
// const constanteD = 2;
// const constanteE = 100;

// if (constanteC % 2 === 0 || constanteD % 2 === 0 || constanteE % 2 === 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// if (constanteC % 2 !== 0 || constanteD % 2 !== 0 || constanteE % 2 !== 0) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// EXERCICIOS - AGORA, A PRATICA #03

// const custoProduto = 550;
// const valorVenda = 100;
// const lucro = 1000 * (valorVenda - custoProduto * 1.2);

// if (custoProduto < 0 || valorVenda < 0) {
//   console.log("Erro, valor indefinido.");
// } else {
//   if (lucro > 0) {
//     console.log("Você recebeu R$" + lucro + " de lucro.")
//   } else {
//     console.log("Você teve R$" + lucro + " de prejuízo.")
//   }
// }

