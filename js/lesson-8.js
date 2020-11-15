// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// I. КОНТЕКСТ ИСПОЛНЕНИЯ ФУНКЦИИ (КЛЮЧЕВОЕ СЛОВО THIS)

// https://youtu.be/2HnaMQorU7Y?t=110

// Правило определения контекста исполнения функции: контекст определяет не место создания, а место вызова функции.
// Исключение: если контекст "привязан".

// ____________________________________________________________________________________________________________________

// 1.1. Функия объявлена как метод объекта, вызвана в контексте этого объекта

// https://youtu.be/2HnaMQorU7Y?t=299

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this:', this); // {tag: "Mango", showTag: f}
//     console.log('this.tag:', this.tag); // Mango
//   },
// };

// user.showTag();

// ____________________________________________________________________________________________________________________

// 1.2. Функция объявлена как внешняя функция, вызвана без контекста

// https://youtu.be/2HnaMQorU7Y?t=387

// const foo = function () {
//   console.log('this:', this); // undefined
// };

// foo();

// ____________________________________________________________________________________________________________________

// 1.3. Функция объявлена как внешняя функция, вызвана в контексте объекта

// https://youtu.be/2HnaMQorU7Y?t=519

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

// 1.4. Функция объявлена как метод объекта, вызвана без контекста

// https://youtu.be/2HnaMQorU7Y?t=785

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

// 1.5. Контекст в callback функциях. Функция объявлена как метод объекта, вызвана без контекста

// https://youtu.be/2HnaMQorU7Y?t=1068

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

// https://youtu.be/2HnaMQorU7Y?t=1282

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

// :/

// https://youtu.be/2HnaMQorU7Y?t=1519

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

// У функции есть 3 служебных метода (apply, bind, call), которые позволяют вызвать ее в контектсе какого-нибудь объекта,
// не делая ее его методом.

// Такой-себе вариант - у каждого объекта есть одинаковая функция
// const showTag = function () {
//   console.log('this', this);
//   console.log('this.tag', this.tag);
// };

// const mango = {
//   tag: 'Mango',
//   showTag,
// };

// const poly = {
//   tag: 'Poly',
//   showTag,
// };

// mango.showTag();
// poly.showTag();

// Метод call вызывает функцию "здесь и сейчас"
// const showTag = function (param1, param2, param3) {
//   console.log('this:', this);
//   console.log('this.tag:', this.tag);
//   console.log(param1, param2, param3);
// };

// const mango = {
//   tag: 'Mango',
// };

// const poly = {
//   tag: 'Poly',
// };

// showTag.call(mango, 1, 2, 3);

// showTag.call(poly, 5, 10, 15);

// Метод aplly делает то же, что и call, за одним исключеним - аргументы передаются в функцию массивом

// showTag.apply(mango, [1, 2, 3]);

// showTag.apply(poly, [5, 10, 15]);

// Метод bind (привязка контекста) в отличии от call и apply не вызывает функцию "здесь и сейчас"
// Он создает копию функции с привязанным контекстом и возвращает ее

// const showMangoTag = showTag.bind(mango);

// showMangoTag(1, 2, 3);

// const showPolyTag = showTag.bind(poly);

// showPolyTag(5, 10, 15);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
