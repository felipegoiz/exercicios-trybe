// let player = {
//   nome: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3,
//   },
// }

// player.bestInTheWorld = [ 2006, 2007, 2008, 2009, 2010,  2018];

//   console.log('A jogadora '+ player.nome +' '+ player.lastName +' tem '+ player.age +' anos de idade');

  
//   console.log('A jogadora '+ player.nome +' '+ player.lastName + ' foi eleita a melhor do mundo por '+ player.bestInTheWorld.length +' vezes, os anos foram: '+ player.bestInTheWorld);

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let index in names){
//   console.log('olá '+ names[index]);
// }

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let index in car) {
//   console.log(index+':',+ car[index]);
// }

// 🚀 Exercícios - objetos e for/in

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// info ['recorrente'] = 'sim';

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//   nota: 'O último MacPatinhas',
// };
// info2 ['recorrente'] = 'sim';

// for (let index in info){
// }
// if (info.recorrente === info2.recorrente)
//   console.log('Ambos recorrente');
// else{
//   console.log(info[index]+ ' e '+ info2[index]);
// }

  
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    },
  ],
};
console.log('O livro favorito de '+ leitor.nome +' '+ leitor.sobrenome+' se chama ' + leitor.livrosFavoritos[1].titulo+ ' e ela tem '+ leitor.livrosFavoritos.length+ ' livros favoritos.');
// O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos