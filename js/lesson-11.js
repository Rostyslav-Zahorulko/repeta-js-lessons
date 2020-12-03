// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// І. ИМПЕРАТИВНЫЙ И ДЕКЛАРАТИВНЫЙ КОД

// Императивный код - это набор пошаговых инструкций для машины, который говорит ей, что необходимо сделать
// (аналог: рецепт приготовления блюда)

// Декларативный код - это указание того, какой результат необходимо получить на выходе
// (аналог: блюдо из ресторанного меню)

// Декларативность кода - это сокрытие императивного кода в какой-то функции
// Т. е., "под капотом" декларативного кода много императивного кода

// Единственнная проблема с императивным кодом - он плохо читается - нужно вникать в то, что написано
// Декларативный код читается лучше

// __________________________________________________________________________________________________________________________

// 1.1. Пример императивного кода:

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers);

// __________________________________________________________________________________________________________________________

// 1.2. Пример декларативного кода:

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);

// console.log(filteredNumbers);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// II. ГРЯЗНЫЕ И ЧИСТЫЕ ФУНКЦИИ

// __________________________________________________________________________________________________________________________

// 2.1. Грязные функции (функции с побочными эффектами) - функции, которые изменяют получаемые аргументы

// Пример грязной функции:

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers, 2);

// // Произошла мутация исходных данных
// console.log(numbers); // [2, 4, 6, 8, 10]

// __________________________________________________________________________________________________________________________

// 2.2. Чистые функции - функции, которые не изменяют получаемые аргументы

// Пример чистой функции:

// const pureMultiply = (array, value) => {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * value);
//   }

//   return result;
// };

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошла мутация исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]

// // Функция вернула новый массив с измененными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// III. ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА

// https://youtu.be/Z9LFnw_YeDs?t=393

// У каждого массива есть набор методов, записанных в свойстве prototype класса Array
// Синтаксис: array.method(callback[currentValue, index, array]);

/*
    array.method((item, idx, array) => {
    // Логика, которая будет исполняться на каждой итерации
    });
*/

// Все параметры, кроме item, необязательны. Поэтому:
/*
    array.method(item => {
    // Логика, которая будет исполняться на каждой итерации
    });
*/

// __________________________________________________________________________________________________________________________

// 3.1. Array.prototype.forEach()

// https://youtu.be/Z9LFnw_YeDs?t=458

/*
 * Поэлементно перебирает оригинальный массив (до конца)
 * Ничего не возвращает
 * Заменяет классический for, если не нужно прервать цикл или изменить инкремент
 */

// const numbers = [1, 5, 10, 15, 20];

// numbers.forEach(function (number) {
//   console.log(number);
// });

// __________________________________________________________________________________________________________________________

// 3.2. Array.prototype.map()

// https://youtu.be/Z9LFnw_YeDs?t=700

/*
 * Поэлементно перебирает оригинальный массив (до конца)
 * Возвращает новый массив такой же длинны
 */

// const numbers = [1, 5, 10, 15, 20];

// const mappedNumbers = numbers.map(function (element) {
//   return element * 2;
// });

// console.log(numbers); // [1, 5, 10, 15, 20]
// console.log(mappedNumbers); // [2, 10, 20, 30, 40]

// Примеры использования:

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

/*
 * Получаем массив имен всех игроков
 */

// const playersNames = players.map(player => player.name);
// console.log(playersNames); // ["Mango", "Poly", "Kiwi", "Ajax", "Chelsy"]

/*
 * Увеличиваем количество поинтов каждого игрока
 */

// const updatedPlayers = players.map(player => {
//   return { ...player, points: player.points + player.points * 0.1 };
// });

// console.table(players); // Оригинал не изменился
// console.table(updatedPlayers);

/*
 * Увеличивает количество часов игрока по id (получаем )
 */

// const playerIdtoUpdate = 'player-3';

// const updatedPlayer = players.map(player => {
//   if (player.id === playerIdtoUpdate) {
//     return { ...player, timePlayed: player.timePlayed + 50 };
//   } else {
//     return player;
//   }
// });

// console.table(players); // Оригинал не изменился
// console.table(updatedPlayer);

// __________________________________________________________________________________________________________________________

// 3.3. Array.prototype.filter()

// https://youtu.be/Z9LFnw_YeDs?t=1642

/*
 * Поэлементно перебирает оригинальный массив (до конца)
 * Возвращает новый массив
 * Добавляет в возвращаемый массив элементы, которые удовлетворяют условие
 * Если ни один элемент не удовлетворяет условие, возвращает пустой массив
 */

// const numbers = [1, 5, 10, 15, 20];

// const filteredNumbers = numbers.filter(function (element) {
//   return element > 10;
// });

// console.log(numbers); // [1, 5, 10, 15, 20]
// console.log(filteredNumbers); // [15, 20]

// Примеры использования:

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

/*
 * Получаем массив всех онлайн игроков
 */

// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);

/*
 * Получаем массив всех оффлайн игроков
 */

// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

/*
 * Получаем массив всех хардкорных игроков (количество часов в игре у которых больше 250)
 */

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcorePlayers);

// __________________________________________________________________________________________________________________________

// 3.4. Array.prototype.find()

// https://youtu.be/Z9LFnw_YeDs?t=2200

/*
 * Поэлементно перебирает оригинальный массив (до первого true)
 * Возвращает первый элемент, удовлетворяющий условие
 * Если ни один элемент не удовлетворяет условие, возвращает undefined
 */

// const numbers = [1, 5, 10, 15, 20];

// const number = numbers.find(function (element) {
//   return element === 15;
// });

// console.log(numbers); // [1, 5, 10, 15, 20]
// console.log(number); // 15

// // Примеры использования:

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// /*
//  * Ищем игрока по id
//  */

// const playerIdToFind = 'player-3';

// const player = players.find(player => player.id === playerIdToFind);
// console.log(player);

// __________________________________________________________________________________________________________________________

// 3.5. Array.prototype.every()

// https://youtu.be/Z9LFnw_YeDs?t=2589

/*
 * Поэлементно перебирает оригинальный массив (до первого false)
 * Возвращает true, если все элементы массива удовлетворяют условие
 * Иначе возвращает false
 */

// Примеры использования:

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Проверяем, все ли игроки онлайн
 */

// const isAllPlayersOnline = players.every(player => player.online);
// console.log('Все игроки онлайн: ', isAllPlayersOnline); // false

/*
 * Проверяем, все ли игроки наиграли 100 часов
 */

// const allHardcorePlayers = players.every(player => player.timePlayed > 100);
// console.log('Все игроки наиграли 100 часов: ', allHardcorePlayers); // true

// __________________________________________________________________________________________________________________________

// 3.6. Array.prototype.some()

// https://youtu.be/Z9LFnw_YeDs?t=2921

/*
 * Поэлементно перебирает оригинальный массив (до первого true)
 * Возвращает true, если хотя бы один элемент массива удовлетворяют условие
 * Иначе возвращает false
 */

// Примеры использования:

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

/*
 * Проверяем, есть ли игроки онлайн
 */

// const isAnyPlayerOnline = players.some(player => player.online);
// console.log('Есть ли игроки онлай: ', isAnyPlayerOnline); // true

/*
 * Проверяем, есть ли игроки, наигравшие 500 часов
 */

// const anyHardcorePlayers = players.every(player => player.timePlayed > 500);
// console.log('Есть ли игроки, наигравшие 500 часов: ', anyHardcorePlayers); // false

// __________________________________________________________________________________________________________________________
