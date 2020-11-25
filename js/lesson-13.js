// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// I. ПАРС HTML. ТЕГИ И ЭЛЕМЕНТЫ

// HTML парсер преобразовывает HTML документ в объектную модель документа (DOM)
// HTML теги стают DOM элементами - самыми обычными JS объектами
// Парсинг HTML документа и рисование DOM дерева происходит построчно

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// II. ПОИСК ЭЛЕМЕНТОВ

// Для поиска элементов в DOM используются методы
// element.querySelector(selector) и element.querySelectorAll(selector)
// Искать можно, используя любой CSS селектор: тега, идентификатора, класса, атрибута, ребенка, потомка, соседа и т. д.

const titleRef = document.querySelector('h2');
console.log(titleRef);

const listItemsRef = document.querySelectorAll('.list-item');
console.log(listItemsRef);
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// III. CВОЙСТВА ЭЛЕМЕНТОВ

// https://youtu.be/-qfbP5mM9MM?t=1169

// __________________________________________________________________________________________________________________________

// 3.1. Node.textContent

// https://youtu.be/-qfbP5mM9MM?t=1173

// Это свойство есть у всех элементов, у которых есть текстовое содержимое
// Используется, чтобы узнать или изменить текстовое содержимое элемента

console.log(titleRef.textContent); // JavaScript is awesome!

titleRef.textContent = 'JavaScript is awesome! :)';

console.log(titleRef.textContent); // JavaScript is awesome! :)

// __________________________________________________________________________________________________________________________

// 3.2. Свойства элементов

// https://youtu.be/-qfbP5mM9MM?t=1270

// Большинство атрибутов тегов в результате парсинга преобразовываются в свойства элементов (объектов),
// значения которых можно узнать или изменить

const imageRef = document.querySelector('img');
console.dir(imageRef);

console.log(imageRef.alt); // It's me

imageRef.alt = "Yeah! It's really me";

console.log(imageRef.alt); // Yeah! It's really me

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// IV. АТРИБУТЫ ЭЛЕМЕНТОВ

// https://youtu.be/-qfbP5mM9MM?t=1539

// Для работы с атрибутами есть ряд специальных методов:
// element.hasAttribute(name) - проверяет наличие атрибута, возвращает true или false
// element.getAttribute(name) - получает значение атрибута и возвращает его
// element.setAttribute(name, value) - устанавливает значение атрибута
// element.removeAttribute(name) - удаляет атрибут
// element.attributes - возвращает коллекцию всех атрибутов элемента

console.log(imageRef.hasAttribute('alt')); // true
console.log(imageRef.getAttribute('alt')); // Yeah! It's really me
imageRef.setAttribute('alt', "No doubt! It's me");
console.log(imageRef.getAttribute('alt')); // No doubt! It's me
console.log(imageRef); // <img src=​"./​images/​lesson-13/​conquistador.jpg" alt=​"No doubt! It's me" width=​"300px">
console.log(imageRef.attributes); // NamedNodeMap {0: src, 1: alt, 2: width, src: src, alt: alt, width: width, length: 3}​

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
