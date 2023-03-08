// const primeNumbers = [17, 23, 37];

// const [firstNumber, secondNumber, thirdNumber] = primeNumbers;

// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(primeNumbers[0], primeNumbers[2]); // 54
// sum(firstNumber, thirdNumber);
// Produza o mesmo resultado acima, porém utilizando array destructuring

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// // console.log(comida, animal, bebida); // arroz gato água

// [animal, bebida, comida] = [comida, animal, bebida];
// console.log(comida, animal, bebida); // arroz gato água
// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// // [, , , ...numerosPares] = numerosPares;
// [n1] = numerosPares;

// console.log(n1); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian
// console.log(person); // Brazilian

// const getNationality = ({ firstName, nationality = 'Brazilian', age = 30 }) =>
//   `${firstName} is ${nationality} and have ${age} years`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
//   age: 31,
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));

// const multiply = (number, value = 1) => number * value;
// // Escreva aqui a sua função
// console.log(multiply(8));

// const myList = [5, 2, 3, 4];

// const swap = ([...myList]) => myList.reverse();
// console.log(swap(myList));

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo
// const toObject = ([nome, modelo, ano]) => ({
//   nome,
//   modelo,
//   ano,
// });
// console.log(toObject(palio));

// // escreva greet abaixo
// const greet = (name, saudation = 'Hi') => {
//   return `${saudation} ${name}`;
// };
// // Retornos esperados:
// console.log(greet('John')); // 'Hi John'
// console.log(greet('John', 'Good morning')); // 'Good morning John'
// console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// const student1 = {
//   name: `Claudia`,
//   lastName: `Farias`,
//   age: 23,
// };

// const student2 = {
//   name: `Vitor`,
//   age: 20,
// };

// // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
// const getLastName = (student) => {
//   const { lastName } = student;
//   return lastName;
// };

// console.log(getLastName(student1));
// console.log(getLastName(student2));

// const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

// // Escreva seu código aqui
// const [s1, [s2, s3], [s4, s5]] = moreStudents;

// console.log(s1, s2, s3, s4, s5);

const adult = [
  {
    weight: 100,
    height: 1.85,
  },
  {
    weight: 90,
    height: 1.72,
  },
  {
    weight: 79,
    height: 1.99,
  },
];

// IMC = Índice de Massa Corporal

function IMC(person) {
  return parseFloat((person.weight / Math.pow(person.height, 2)).toFixed(2));
}

console.log(adult.map(IMC));
