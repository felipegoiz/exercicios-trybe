// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
  
// };

// customerInfo(order);
// const orderModifier = (order) => {
//   order.name = 'Luiz Silva'
//   order.payment = 50;
//   const pizzas = Object.keys(order.order.pizza);
//   console.log(`Olá ${order['name']}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment},00.`);
// };

// orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

let newKey = 'turno';
const lastName = 'noite';

const newObject = (object, key, value) => {
  object[key] = value;
}

newObject(lesson2, newKey, lastName);
// console.log(lesson2);

const allKeys = (objeto) => {
  let showKeys = Object.keys(objeto);
  return showKeys;
};

// console.log(allKeys(lesson2));

const sizeObject = (size) => {
  let showSize = Object.keys(size).length;
  return showSize;
};

// console.log(sizeObject(lesson1));

const valueObject = (objeto) => {
  let showObj = Object.values(objeto);
  return showObj;
};

let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
// console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;
  const keys = Object.keys(obj);
  for (index in keys) {
    total += obj[keys[index]].numeroEstudantes;
  }
  return total;
};
// console.log(getNumberOfStudents(allLessons));


const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const values = Object.values(obj);
  for (index in values) {
    if (values[index].professor === name) {
      allLessons.push(values[index].materia)
      allStudent += values[index].numeroEstudantes;
    }
  }
  return { aulas: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));




// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: