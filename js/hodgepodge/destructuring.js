// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// ДЕСТРУКТУРИЗАЦИЯ

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// Деструктуризация объекта

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

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// Деструктуризация массива

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
