// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let index = 0; index<numbers.length;index+=1){
//   console.log(numbers[index]);
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;
// for (let index = 0 ; index < numbers.length ; index += 1){
//   result += numbers[index];
// }
// console.log(result);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;
// for (let index = 0 ; index < numbers.length ; index += 1){
//   result += numbers[index];
// }
// console.log(result/10);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;
// for (let index = 0 ; index < numbers.length ; index += 1){
//   result += numbers[index];
// }
// let media = result / numbers.length;
// console.log(media);
// if(media>20){
//   console.log("valor maior que 20.")
// } else{
//   console.log("valor menor ou igual a 20.")
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maioNumero = numbers[0];

// for(let index = 1; index<numbers.length;index+=1){
//   if (numbers[index]> maioNumero){
//     maioNumero = numbers[index];
//   }
// }
// console.log(maioNumero);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbOdd = 0;

// for(let index = 0; index<numbers.length;index+=1){
//   if (numbers[index] % 2 !== 0){
//     numbOdd += 1;
//   } 
// }
// if(numbOdd === 0){
//   console.log("Nenhum valor ímpar encontrado");
// } else{
//   console.log(numbOdd);
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];
for(let index = 1; index<numbers.length;index+=1){
    if (numbers[index] < menorNumero){
      menorNumero = numbers[index];
    }
  }
  console.log(menorNumero);