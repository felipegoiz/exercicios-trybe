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

// const estudantes = [
//   {
//     nome: 'Jorge',
//     sobrenome: 'Silva',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 67 },
//       { name: 'Português', nota: 79 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 65 },
//     ],
//   },
//   {
//     nome: 'Mario',
//     sobrenome: 'Ferreira',
//     idade: 15,
//     turno: 'Tarde',
//     materias: [
//       { name: 'Matemática', nota: 59 },
//       { name: 'Português', nota: 80 },
//       { name: 'Química', nota: 78 },
//       { name: 'Biologia', nota: 92 },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 76 },
//       { name: 'Português', nota: 90 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 80 },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 91 },
//       { name: 'Português', nota: 85 },
//       { name: 'Química', nota: 92 },
//       { name: 'Biologia', nota: 90 },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 70 },
//       { name: 'Português', nota: 70 },
//       { name: 'Química', nota: 60 },
//       { name: 'Biologia', nota: 50 },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 80 },
//       { name: 'Português', nota: 82 },
//       { name: 'Química', nota: 79 },
//       { name: 'Biologia', nota: 75 },
//     ],
//   },
// ];

// const getBestClass = (acc, cur) => (acc.nota > cur.nota ? acc : cur);

// const newVariavel = (students) =>
//   students.map(({ nome, materias }) => ({
//     name: nome,
//     materia: materias.reduce(getBestClass).name,
//   }));

// // const newVariavel = (obj) =>
// //   obj
// //     .filter(({ turno, idade }) => turno === 'Manhã' && idade > 14)
// //     .map(({ nome }) => nome);

// console.log(newVariavel(estudantes));

// Fonte: <https://restcountries.com/v2/all>
// const countries = [
//   {
//     name: 'Afghanistan',
//     region: 'Asia',
//     currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
//     capital: 'Kabul',
//     population: 40218234,
//     area: 652230,
//   },
//   {
//     name: 'Åland Islands',
//     region: 'Europe',
//     currencies: [{ code: 'EUR', name: 'Euro' }],
//     capital: 'Mariehamn',
//     population: 28875,
//     area: 1580,
//   },
//   {
//     name: 'Albania',
//     region: 'Europe',
//     currencies: [{ code: 'ALL', name: 'Albanian lek' }],
//     capital: 'Tirana',
//     population: 2837743,
//     area: 28748,
//   },
//   {
//     name: 'Algeria',
//     region: 'Africa',
//     currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
//     capital: 'Algiers',
//     population: 44700000,
//     area: 2381741,
//   },
//   {
//     name: 'American Samoa',
//     region: 'Oceania',
//     currencies: [{ code: 'USD', name: 'United States Dollar' }],
//     capital: 'Pago Pago',
//     population: 55197,
//     area: 199,
//   },
//   {
//     name: 'Andorra',
//     region: 'Europe',
//     currencies: [{ code: 'EUR', name: 'Euro' }],
//     capital: 'Andorra la Vella',
//     population: 77265,
//     area: 468,
//   },
//   {
//     name: 'Angola',
//     region: 'Africa',
//     currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
//     capital: 'Luanda',
//     population: 32866268,
//     area: 1246700,
//   },
//   {
//     name: 'Anguilla',
//     region: 'Americas',
//     currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
//     capital: 'The Valley',
//     population: 13452,
//     area: 91,
//   },
// ];

// const expectedResult = 120797034;
// const getPopulation = (obj) =>
//   obj.map(({ population }) => population).reduce((acc, cur) => acc + cur, 0);
// console.log(getPopulation(countries));

// // const expectedResult = 4311757;
// const getTotalArea = (obj) =>
//   obj.map(({ area }) => area).reduce((acc, cur) => acc + cur, 0);
// console.log(getTotalArea(countries));

// const expectedResult = {
//   name: 'American Samoa',
//   region: 'Oceania',
//   currencies: [{ code: 'USD', name: 'United States Dollar' }],
//   capital: 'Pago Pago',
//   population: 55197,
//   area: 199
// }
// const longestName = (obj) =>
//   obj.reduce((acc, cur) => (acc.name.length > cur.name.length ? acc : cur));

// console.log(longestName(countries));

// const names = [
//   'Aanemarie',
//   'Adervandes',
//   'Akifusa',
//   'Abegildo',
//   'Adicellia',
//   'Aladonata',
//   'Abeladerco',
//   'Adieidy',
//   'Alarucha',
// ];
// // ...
// const lettersArray = names.join('').toLowerCase().split('');
// const countA = () => {
//   return lettersArray.reduce(
//     (acc, curr) => (curr === 'a' ? (acc += 1) : (acc += 0)),
//     0
//   );
// };

// console.log(countA(names));
// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];
// const expectedResult = [
//  { name: 'Pedro Henrique', average: 7.8 },
//  { name: 'Miguel', average: 9.2 },
//  { name: 'Maria Clara', average: 8.8 },
// ];
const studentAverage = () => {
  return (nameAndAvarege = students.map((student, index) => ({
    name: student,
    avarege:
      grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  })));
};

console.log(studentAverage(students));
