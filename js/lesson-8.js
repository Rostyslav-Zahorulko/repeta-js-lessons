// I. КОНТЕКСТ ИСПОЛНЕНИЯ ФУНКЦИИ (КЛЮЧЕВОЕ СЛОВО THIS)

// Правило определения контекста исполнения функции: контекст определяет не место создания, а место вызова функции.
// Исключение: если контекст "привязан".

// ____________________________________________________________________________________________________________________

// 1.1. Функция как метод объекта. В контексте объекта
//      Функия объявлена как метод объекта, вызвана в контексте этого объекта

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this:', this); // {tag: "Mango", showTag: f}
//     console.log('this.tag:', this.tag); // Mango
//   },
// };

// user.showTag();

// ____________________________________________________________________________________________________________________

// 1.2. Вызов без контекста
//      Функция объявлена как самостоятельная функция, вызвана без контекста

// const foo = function () {
//   console.log('this:', this); // undefined
// };

// foo();

// ____________________________________________________________________________________________________________________

// 1.3. Как метод объекта, но объявлена как внешняя функция. В контексте объекта
//      Функция объявлена как самостоятельная функция, вызвана в контексте объекта

// const showTag = function () {
//   console.log('this:', this); // {tag: "Mango", showTag: f}
//   console.log('this.tag:', this.tag); // Mango
// };

// const user = {
//   tag: 'Mango',
// };

// user.showTag = showTag;

// user.showTag();

// ____________________________________________________________________________________________________________________

// 1.4. Вызов без контекста, но объявлена как метод объекта
//      Функция объявлена как метод объекта, вызвана без контекста

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this:', this); // undefined
//     console.log('this.tag:', this.tag); // Uncaught TypeError
//   },
// };

// const outerShowTag = user.showTag;

// outerShowTag();

// ____________________________________________________________________________________________________________________

// 1.5. Контекст в callback функциях
//      Функция объявлена как метод объекта, вызвана без контекста

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this:', this); // undefined
//     console.log('this.tag:', this.tag); // Uncaught TypeError
//   },
// };

// const invokeAction = function (action) {
//   action();
// };

// invokeAction(user.showTag);

// ____________________________________________________________________________________________________________________

// :)

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('this:', this); // undefined
//     console.log('this.color:', (this.color = color)); // Uncaught TypeError
//   };

//   const sweater = {
//     color: 'teal',
//   };

//   sweater.changeColor = changeColor;

//   return sweater.changeColor;
// };

// const changeColor = makeChangeColor();

// changeColor('blue');

// ____________________________________________________________________________________________________________________

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('this:', this); // {color: 'blue',  changeColor: f}
//     console.log('this.color:', (this.color = color)); // orange
//   };

//   return changeColor;
// };

// const hat = {
//   color: 'blue',
//   changeColor: makeChangeColor(),
// };

// hat.changeColor('orange');

// ____________________________________________________________________________________________________________________

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// II. МЕТОДЫ ФУНКЦИЙ CALL, APPLY, BIND

// https://youtu.be/2HnaMQorU7Y?t=1863
