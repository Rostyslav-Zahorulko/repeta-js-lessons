// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// 1. ДЕСТРУКТУРИЗАЦИЯ

// Деструктуризация - это ...

// __________________________________________________________________________________________________________________________

// 1.1. Деструктуризация объекта

// const client = {
//   name: 'John',
//   age: 45,
//   profession: 'librarian',
//   hobby: ['reading', 'playing football', 'watching TV'],
//   family: {
//     wife: 'Marry',
//     son: 'Simon',
//     daughter: 'Emmily',
//   },
// };

// const {
//   name,
//   age,
//   profession,
//   hobby,
//   family: { wife, son, daughter },
// } = client;

// console.log("client's name: ", name); // John
// console.log("client's age: ", age); // 45
// console.log("client's proffesion: ", profession); // librarian
// console.log("client's hobbies: ", hobby); // ['reading', 'playing football', 'watching TV'],
// console.log("client's wife: ", wife);
// console.log("client's son: ", son);
// console.log("client's daughter: ", daughter);

// const getInfoAboutClient = function () {
//   console.log(
//     `Client's name is ${name}.\nHe is ${age} years old.\nHe is a ${profession}.\nHe likes ${hobby[0]}, ${hobby[1]} and ${hobby[2]}.\nHis wife's name is ${wife}.\nHe also has children: a son named ${son} and a daughter called ${daughter}`,
//   );
// };

// getInfoAboutClient();

// __________________________________________________________________________________________________________________________

// 1.2. Деструктуризация массива

// const teams = ['Golden State', 'Chikago', 'Boston', 'Dallas', 'Los Angeles'];

// console.log('teams:', teams);
// console.log('teams[0]: ', teams[0]);
// console.log('teams[1]: ', teams[1]);
// console.log('teams[2]: ', teams[2]);
// console.log('teams[3]: ', teams[3]);
// console.log('teams[4]: ', teams[4]);

// const [team1, team2, team3, ...rest] = teams;

// console.log('team1: ', team1);
// console.log('team2: ', team2);
// console.log('team3: ', team3);
// console.log('rest: ', rest);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// 2. МЕТОДЫ МАССИВА

// const arr = [3, 5, 7];
// console.log('arr: ', arr); // [3, 5, 7]

// // Метод push() изменяет массив (добавляет в его конец один или несколько элементов) и возвращает его длинну
// console.log(arr.push(9)); // 4
// console.log('arr: ', arr); // [3, 5, 7, 9]

// // Метод unshift() изменяет массив (добавляет один или несколько элементов в начало массива) и возвращает его длинну
// console.log(arr.unshift(1)); // 5
// console.log('arr: ', arr); // [1, 3, 5, 7, 9]

// // Метод pop() удаляет и возвращает последний элемент массива
// console.log(arr.pop()); // 9
// console.log('arr: ', arr); // [1, 3, 5, 7]

// // Метод shift() удаляет первый элемент массива и возвращает его
// console.log(arr.shift()); // 1
// console.log('arr: ', arr); // [3, 5, 7]

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log('arr1: ', arr1); // [1, 2, 3]
// console.log('arr2: ', arr2); // [1, 2, 3]
// console.log('arr1 === arr2: ', arr1 === arr2); // true

// const arr3 = arr1.slice();
// console.log('arr3: ', arr3); // [1, 2, 3]
// console.log('arr1 === arr3: ', arr1 === arr3); // false

// const arr4 = arr1.concat();
// console.log('arr4: ', arr4); // [1, 2, 3]
// console.log('arr1 === arr4: ', arr1 === arr4); // false

// const arr5 = [...arr1];
// console.log('arr5: ', arr5); // [1, 2, 3]
// console.log('arr1 === arr5: ', arr1 === arr5); // false

// const slicedArr = arr1.slice(0, 2);
// console.log('slicedArr: ', slicedArr); // [1, 2]
// console.log('arr1: ', arr1); // [1, 2, 3]

// const arr6 = [4, 5, 6];
// const concatedArr = arr1.concat(arr6);
// console.log('concatedArr: ', concatedArr); // [1, 2, 3, 4, 5, 6]
// console.log('arr1: ', arr1); // [1, 2, 3]
// console.log('arr6: ', arr6); // [4, 5, 6]

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// Питання на заняття QnA (04.11.2020)

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// // Варіант 1. Оригінальний масив залишиться без змін
// const updatedPlayers = players.map(player => {
//   return { ...player, points: player.points + 10 };
// });

// console.table(players);
// console.table(updatedPlayers);

// // Варіант 2. Оригінальний масив залишиться без змін
// const updatedPlayers = players.map(player => {
//   return Object.assign({}, player, { points: player.points + 10 });
// });

// console.table(players);
// console.table(updatedPlayers);

// Варіант 3. Оригінальний масив зміниться
const updatedPlayers = players.map(player => {
  return Object.assign(player, { points: player.points + 10 });
});

console.table(players);
console.table(updatedPlayers);
