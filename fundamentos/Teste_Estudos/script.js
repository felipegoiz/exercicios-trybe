// let number = 5;
// const symbol= '*';
// let line = '';

// for (let index = 0; index < number; index +=1) {
//   line += symbol;
// };

let word = ['felipegoiz', 'felipe', 'jessica'];
let sizeWord = 0

for(let index = 0; index<word.length; index+=1){
  if(word[index].length>sizeWord){
  sizeWord = word[index];
}
}
console.log(sizeWord);