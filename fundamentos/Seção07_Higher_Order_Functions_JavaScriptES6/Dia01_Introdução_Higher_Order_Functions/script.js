// .foreach()

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// emailListInData.forEach((email, index, array) => {
//   console.log(
//     `O email ${email} está cadastrado em nosso banco de dados! Você é o número ${
//       index + 1
//     } de um total de ${array.length}`
//   );
// });

// .find()

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyNumbers = numbers.find(
//   (number) => number % 3 === 0 && number % 5 === 0
// );
// console.log(verifyNumbers);

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const verifyNames = names.find((name) => name.length === 5);
// console.log(verifyNames);

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// const verifyMusic = musicas.find((id) => id.id === '31031685');
// console.log(verifyMusic);

// .some()

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((verifyName) => verifyName === name);
// };

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

// .every()

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (obj, age) => {
//   return obj.every((verify) => verify.age >= age);
// };

// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 14));

// Exercícios
// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().replace(' ', '_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };

// console.log(newEmployees(employeeGenerator));

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 5 + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

// console.log(lotteryResult(2, numberChecker));
