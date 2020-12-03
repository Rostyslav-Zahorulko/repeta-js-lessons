// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// I. ОПЕРАЦИЯ spread (РАСПЫЛЕНИЕ)

// Распыляет коллекцию элементов (массива, объекта) в другую коллекцию.

// Используется в 3 случаях:

// 1. При вызове функции, когда нужно передать в нее коллекцию элементов отдельными аргументами

const sum = function (a, b, c) {
  console.log('Сумма:', a + b + c);
};

const arr = [1, 2, 3];

sum(...arr);

// 2. При создании нового массива

const array = [1, 2, 3];
const newArray = [...array];

console.log(array); // [1, 2, 3]
console.log(newArray); // [1, 2, 3]

// Созданный массив - копия оригинального
console.log(array === newArray); // false

// Последующие изменения оригинального массива не повлияют на новый массив и наоборот
array.push(4);
console.log('Оригинальный массив:', array); // [1, 2, 3, 4]
console.log('Новый массив:', newArray); // [1, 2, 3]

// С помощью spread можна объединить несколько массивов в один новый
const lastWeekTemperatures = [1, 2, 3, 4, 5, 6, 7];
const thisWeekTemparatures = [8, 9, 10, 11, 12, 13, 14];

// Так делали раньше
const thisMonthTemperatures = lastWeekTemperatures.concat(thisWeekTemparatures);
console.log(thisMonthTemperatures); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// Так делают сейчас
const thisMonthTemp = [...lastWeekTemperatures, ...thisWeekTemparatures];
console.log(thisMonthTemp); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// Порядок распыления важен!
const thisMonthT = [...thisWeekTemparatures, ...lastWeekTemperatures];
console.log(thisMonthT); // [8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7]

// 3. При создании нового объекта

const object = { x: 1, y: 2 };
const newObject = { ...object };

console.log(object); // { x: 1, y: 2 }
console.log(newObject); // { x: 1, y: 2 }

// Созданный объект - копия оригинального
console.log(object === newObject); // false

// Последующие изменения оригинального объекта не повлияют на новый объект и наоборот
object.z = 3;
console.log('Оригинальный объект:', object); // {x: 1, y: 2, z: 3}
console.log('Новый объект:', newObject); // {x: 1, y: 2}

// С помощью spread можна объединить несколько объектов в один новый
const object1 = { x: 1, y: 2 };
const object2 = { x: 2, z: 3 };

// Так делали раньше
const object3 = Object.assign({}, object1, object2);
console.log(object3); // {x: 2, y: 2, z: 3

// Так делают сейчас
const newObj = { ...object1, ...object2 };
console.log(newObj); // {x: 2, y: 2, z: 3}

// Порядок распыления важен!
const newO = { ...object2, ...object1 };
console.log(newO); // {x: 1, z: 3, y: 2}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// II. ОПЕРАЦИЯ rest (СБОР)

// Используется в 2 случаях:

// 1. При вызове функции, когда нужно передать набор элементов в один параметр

const fn = function (...rest) {
  console.log(rest); // [1, 2, 3, 4, 5]
};

fn(1, 2, 3, 4, 5);

// 2. При деструктуризации для хранения остатка элементов

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// III. ДЕСТРУКТУРИЗАЦИЯ

// https://youtu.be/MzSwkMUv-9U?t=1230

// Используется для того, чтобы ...

// ...
// ... В СВОБОДНОЕ ВРЕМЯ НУЖНО ОБЯЗАТЕЛЬНО ЗАКОНСПЕКТИРОВАТЬ!!!
// ...

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
