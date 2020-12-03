// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// МЕТОДЫ МАССИВА

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

// __________________________________________________________________________________________________________________________

// const arr1 = [1, 2, 3];
// console.log('arr1: ', arr1); // [1, 2, 3]

// const arr2 = [1, 2, 3];
// console.log('arr2: ', arr2); // [1, 2, 3]
// console.log('arr1 === arr2: ', arr1 === arr2); // false

// const arr3 = arr1.slice();
// console.log('arr3: ', arr3); // [1, 2, 3]
// console.log('arr1 === arr3: ', arr1 === arr3); // false

// const arr4 = arr1.concat();
// console.log('arr4: ', arr4); // [1, 2, 3]
// console.log('arr1 === arr4: ', arr1 === arr4); // false

// const arr5 = [...arr1];
// console.log('arr5: ', arr5); // [1, 2, 3]
// console.log('arr1 === arr5: ', arr1 === arr5); // false

// const arr6 = arr1;
// console.log('arr6: ', arr6); // [1, 2, 3]
// console.log('arr1 === arr6: ', arr1 === arr6); // true

// const slicedArr = arr1.slice(0, 2);
// console.log('slicedArr: ', slicedArr); // [1, 2]
// console.log('arr1: ', arr1); // [1, 2, 3]

// const arr7 = [4, 5, 6];
// const concatedArr = arr1.concat(arr7);
// console.log('concatedArr: ', concatedArr); // [1, 2, 3, 4, 5, 6]
// console.log('arr1: ', arr1); // [1, 2, 3]
// console.log('arr7: ', arr7); // [4, 5, 6]

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
