const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// /*
//  * Увеличиваем количество поинтов каждого игрока
//  */

// const updatedPlayers = players.map(player => {
//   return { ...player, points: player.points + 10 };
// });

// const updatedPlayers = players.map(player => (player.points += 10));

// const updatedPlayers = players.map(player => player.points + 10);

// console.log(players); // Оригинал не изменился
// console.log(updatedPlayers);
