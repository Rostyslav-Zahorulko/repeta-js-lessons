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

// console.log(name, age, profession, hobby, wife, son, daughter);

// const getInfoAboutClient = function () {
//   console.log(
//     `Client's name is ${name}. He is ${age} years old. He is a ${profession}. He likes ${hobby[0]}, ${hobby[1]} and ${hobby[2]}. His wife's name is ${wife}. He also has children: a son named ${son} and a daughter called ${daughter}`,
//   );
// };

// getInfoAboutClient();

// // ************************************************************************************

// const teams = ['Golden State', 'Chikago', 'Boston', 'Dallas', 'Los Angeles'];

// console.log(teams[0]);
// console.log(teams[1]);
// console.log(teams[2]);

// const [team1, team2, team3, ...rest] = teams;
// console.log(team1, team2, team3, rest);
// console.log(teams);

// // ************************************************************************************

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1;
// console.log(arr3);

// arr1.concat(arr2);

// console.log(arr1);
// console.log(arr3);

// const arr = [3, 5, 7];
// console.log(arr);

// // Метод push() изменяет массив (добавляет в его конец один или несколько элементов) и возвращает его длинну
// console.log(arr.push(9));
// console.log(arr);

// // Метод unshift() изменяет массив (добавляет один или несколько элементов в начало массива) и возвращает его длинну
// console.log(arr.unshift(1));
// console.log(arr);

// // // Метод pop() удаляет и возвращает последний элемент массива
// console.log(arr.pop());
// console.log(arr);

// // // Метод shift() удаляет первый элемент массива и возвращает его
// console.log(arr.shift());
// console.log(arr);

// const arr1 = [1, 2, 3];
// console.log(arr1);

// const arr2 = arr1.slice();
// console.log(arr2);

// console.log(arr1 === arr2);

// arr1.push(4);
// console.log(arr1);

// console.log(arr2);

// **********************************************************************************

// function list(names) {
//   let namesArr = [];

//   for (const name of names) {
//     console.log(name.name);

//     namesArr.push(name.name);

//     console.log(namesArr);
//   }
//   return namesArr.join(' & ');
// }

// const simpsonsFamily = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];

// console.log(list(simpsonsFamily));

// **********************************************************************************

// function list(names) {
//   let namesArr = [];

//   for (const name of names) {
//     console.log(name.name);

//     namesArr.push(name.name);

//     console.log(namesArr);
//   }
//   return namesArr.join(' & ');
// }

// const simpsonsFamily = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];

// console.log(list(simpsonsFamily));

// _______________________________________

// const test = function (fruit) {
//   return fruit.isFresh;
// }

// test(element);

// _______________________________________
