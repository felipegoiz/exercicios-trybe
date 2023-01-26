// Calculadora Fatorial

// const n = 6;

// let resultado = 1;
// for (let index = 1; index <= n; index += 1) {
//   resultado *= index
// };
// console.log(resultado)

// const nomes = 'Tryber';
// let resultado = '';
// for (let index = 0; index < nomes.length; index += 1) {
//   resultado += nomes[nomes.length - 1 - index];
// };
// console.log(resultado);

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);
