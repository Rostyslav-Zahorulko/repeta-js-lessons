// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// Питання на заняття QnA (04.11.2020)

/*
    Привіт! Не можу зрозуміти, чому Array.prototype.map() вважається чистою функцією.
    Адже цей метод може як змінювати передані дані, так і залишати їх без змін.
    Все залежить від бажання програміста.

    Приклад із відео Репети.
    Маємо: масив об'єктів (користувачів).
    Хочемо: додати кожному користувачеві 10 балів.
*/

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

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
