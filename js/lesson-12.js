// __________________________________________________________________________________________________________________________

// 3.7. Array.prototype.reduce()

// https://youtu.be/iHlSuOdsKkU?t=21

/*
 * Поэлементно перебирает оригинальный массив
 * Возвращает, что угодно
 * Заменяет все на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((accumulator, number) => accumulator + number, 0);

// accumulator = 0 -> return 0 + 5
// accumulator = 5 -> return 5 + 10
// accumulator = 15 -> return 15 + 15
// accumulator = 30 -> return 30 + 20
// accumulator = 50 -> return 50 + 20

// console.log(total); // 75

// Примеры использования:

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const values = Object.values(salary);
// console.log(values); // [100, 50, 150]
// const totalSalary = values.reduce((acc, value) => acc + value, 0);
// console.log(totalSalary);

// или

// const totalSalary = Object.values(salary).reduce(
//   (acc, value) => acc + value,
//   0,
// );

// console.log(totalSalary);

/*
 * Считаем общее количество часов в игре
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (acc, player) => acc + player.timePlayed,
//   0,
// );

// То же самое, но реализовано через деструктуризацию

// const totalTimePlayed = players.reduce(
//   (acc, { timePlayed }) => acc + timePlayed,
//   0,
// );

// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { Label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (acc, product) => acc + product.price * product.quantity,
//   0,
// );

// То же самое, но реализовано через деструктуризацию

// const totalAmount = cart.reduce(
//     (acc, { price, quantity }) => acc + price * quantity,
//   0,
// );

// console.log(totalAmount);

/*
 * Собираем все теги из твиттов
 */

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);

//   console.log(acc);

//   return acc;
// }, []);

// Альтернативний варінат
// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// console.log(allTags);

/*
 * Ведем статистику тегов
 */

//  Грязная функция
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log('ACC:', acc);
//   console.log('TAG: ', tag);

//   if (acc.hasOwnProperty(tag)) {
//     console.log('Такое свойство есть, увеличиваем значение');

//     acc[tag] += 1;

//     return acc;
//   }

//   console.log('Такого свойства нет, добавляем в объект');
//   acc[tag] = 1;

//   return acc;

//   // То же самое, но реализовано через тернарный оператор
//   // acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
//   // return acc;
// }, {});

// console.log(tagsStats); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// Чистая функция
// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(tagsStats); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

// __________________________________________________________________________________________________________________________

// 3.8. Array.prototype.sort()

// https://youtu.be/iHlSuOdsKkU?t=1976

/*
 * Сортирует и ИЗМЕНЯЕТ оригинальный массив
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(numbers); // [1, 2, 3, 6, 9]

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort((previous, next) => previous - next);
// console.log(numbers); // [1, 2, 3, 6, 9]

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort((previous, next) => next - previous);
// console.log(numbers); // [9, 6, 3, 2, 1]

// const letters = ['b', 'B', 'a', 'A'];
// console.log('b'.charCodeAt(0)); // 98
// console.log('B'.charCodeAt(0)); // 66
// console.log('a'.charCodeAt(0)); // 97
// console.log('A'.charCodeAt(0)); // 65

// letters.sort();
// console.log(letters); // ["A", "B", "a", "b"]

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort((previous, next) => previous - next);
// console.log(letters); // ["b", "B", "a", "A"]

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort((previous, next) => next - previous);
// console.log(letters); // ["b", "B", "a", "A"]

/*
 * Как сделать копию массива, чтобы не сортировать оригинальный
 */

// const numbers = [1, 9, 6, 2, 3];

// 1-й вариант
// const copy = numbers.slice();

// console.log(copy); // [1, 9, 6, 2, 3]
// console.log(numbers === copy); // false

// 2-й вариант
// const copy = numbers.concat();

// console.log(copy); // [1, 9, 6, 2, 3]
// console.log(numbers === copy); // false

// 3-й вариант
// const copy = [...numbers];

// console.log(copy); // [1, 9, 6, 2, 3]
// console.log(numbers === copy); // false

// const copy = [...numbers].sort();
// console.log(numbers); // [1, 9, 6, 2, 3]
// console.log(copy); // [1, 2, 3, 6, 9]

/*
 * Кастомная сортировка сложных типов
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// Сортировка по возрастанию значения свойства
// const sortedByWorstPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => prevPlayer.points - nextPlayer.points,
// );
// console.table(players); // Оригинальный массив не изменился
// console.table(sortedByWorstPlayers); // Отсортированая копия оригинального массива

// Сортировка по убыванию значения свойства
// const sortedByTopPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => nextPlayer.points - prevPlayer.points,
// );
// console.table(players); // Оригинальный массив не изменился
// console.table(sortedByTopPlayers); // Отсортированая копия оригинального массива

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// IV. ЧЕЙНИНГ (ЦЕПОЧКА ВЫЗОВОВ) МЕТОДОВ

// https://youtu.be/iHlSuOdsKkU?t=2584

// const numbers = [1, 5, 2, 4, 3];

// Вызов методов с использованием промежуточных переменных

// const greaterThanTwo = numbers.filter(number => number > 2);
// console.log(greaterThanTwo); // [5, 4, 3]

// const multByTwo = greaterThanTwo.map(number => number * 2);
// console.log(multByTwo); // [10, 8, 6]

// const sorted = multByTwo.sort((prev, next) => prev - next);
// console.log(sorted); // [6, 8, 10]

// Чейнинг в действии

// const result = numbers
//   .filter(number => number > 2)
//   .map(number => number * 2)
//   .sort((prev, next) => prev - next);

// console.log(result); // [6, 8, 10]

// Пример: сортируем по рангу игроков, которые онлайн

// const players = [
//   { id: 'id-1', name: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', name: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', name: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', name: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

console.table(players);
// Оригинальный массив не изменился, потому что метод sort() был вызван на результате вызова метода filter()

console.table(onlineAndSorted);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
