// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Manga', 'Abacate', 'Banana'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Laranja', 'Maçã', 'Uva'];

// const fruitSalad = (fruit, additional) => {
//   const fruitSalads = [...fruit, ...additional];
//   return fruitSalads;
//   // Escreva sua função aqui
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// const sum = (...args) =>
//   args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88

// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// const {
//   name,
//   age,
//   homeWorld: { name: nomeDoPlaneta },
//   description: { jedi },
// } = character;
// console.log(age);
// console.log(
//   `O nome do character é ${name} ele tem ${age} anos e vive em ${nomeDoPlaneta} a classe de luta dele é: ${
//     jedi ? 'é um jedi' : 'ele não é jedi'
//   }`
// );

// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: turma, c: materia } = student;

// console.log(name);
// console.log(turma);
// console.log(materia);

// const productS = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller }) => {
//   return `Promoção!${name} Samsung por ${price}, isso você só encontra nas ${seller}`;
// };
// console.log(printProductDetails(productS));

// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const todosDados = { ...user, ...jobInfos };

// const { name, age, nationality, profession, squad, squadInitials } = todosDados;

// console.log(todosDados);

// console.log(
//   `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
// );

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
// });

// const sum = (...valores) => valores.reduce((acc, val) => acc + val, 0);

// console.log(sum(2, 3, 4));
// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo
// const personLikes = ({ name, age, likes }) =>
//   `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// // <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// // Retornos esperados:
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
  // bornIn: nascido em
];

// escreva filterPeople abaixo

const filterPeople = (arr) => {
  return arr.filter(
    ({ nationality, bornIn }) =>
      nationality === 'Australian' && (bornIn > 1900) & (bornIn <= 2000)
  );
};
console.log(filterPeople(people));

// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
//   // measurementUnit: unidade de medida
// ];
// // escreva shipLength abaixo
// const shipLength = ({ name, length, measurementUnit }) => {
//   return `${name} is ${length} ${measurementUnit} long`;
// };
// // retorno esperado
// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// const yearSeasons = {
//   spring: ['March', 'April', 'May'],
//   summer: ['June', 'July', 'August'],
//   autumn: ['September', 'October', 'November'],
//   winter: ['December', 'January', 'February'],
// };
// // yearSeasons: estações do ano.
// const { spring, summer, autumn, winter } = yearSeasons;
// const year = [...winter, ...spring, ...summer, ...autumn];

// console.log(year);
