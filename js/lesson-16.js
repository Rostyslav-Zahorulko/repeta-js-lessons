// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// I. БОЛТЛИВЫЕ СОБЫТИЯ (CHATTY EVENTS). ПАТТЕРНЫ THROTTLE И DEBOUNCE

// https://youtu.be/wz7jwzorJvQ?t=73

// Болтливые события (БС) - события, которые происходят слишком часто
// Среди них: scroll, mousemove, input (иногда)
// Функция, которая отвечает за обработку такого события (callback функция слушалеля события),
// вызывается слишком часто, что бьет по производительности (притормаживет исполнение остального кода),
// т. к. JS - синхронный (однопоточный) язык

// __________________________________________________________________________________________________________________________

// 1.1. Событие mousemove

// https://youtu.be/wz7jwzorJvQ?t=150

/*
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCallbackCounter = 0;

window.addEventListener('mousemove', event => {
  mouseMoveCallbackCounter += 1;

  coordsOutputRef.textContent = `Количество вызовов callback функции 💩: ${mouseMoveCallbackCounter},
  X: ${event.clientX}, Y: ${event.clientY}`;
});
*/

// __________________________________________________________________________________________________________________________

// 1.2. Событие input

// https://youtu.be/wz7jwzorJvQ?t=228

/*
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

let inputCallbackCounter = 0;

inputRef.addEventListener('input', event => {
  inputCallbackCounter += 1;

  outputRef.textContent = `Количество вызовов callback функции 💩: ${inputCallbackCounter},
  Значение: ${event.target.value}`;
});
*/

// __________________________________________________________________________________________________________________________

// 1.3. Паттерны Throttle и Debounce

// https://youtu.be/wz7jwzorJvQ?t=262

// Это дополнительный JS код, который притормаживает вызов callback функций слушателей болтливых событий
// Он не приостанавливает создание самих событий в браузере, а уменьшает количество вызовов callback функций

// К таким событиям как mousemove или scroll применяется Throttle
// Этот паттерн заставляет calback функцию вызываться не чаще чем 1 раз в n милисекунд

// Можно так:

/*
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCallbackCounter = 0;

function handleMousemove(event) {
  mouseMoveCallbackCounter += 1;

  coordsOutputRef.textContent = `Количество вызовов callback функции: ${mousemoveCallbackCounter},
  X: ${event.clientX}, Y: ${event.clientY}`;
}

window.addEventListener('mousemove', _.throttle(handleMousemove, 200));
*/

// Или так:

const coordsOutputRef = document.querySelector('.js-coords');
let mousemoveCallbackCounter = 0;

const throttledMousemoveCallback = _.throttle(event => {
  mousemoveCallbackCounter += 1;

  coordsOutputRef.textContent = `Количество вызовов callback функции: ${mousemoveCallbackCounter},
  X: ${event.clientX}, Y: ${event.clientY}`;
}, 200);

window.addEventListener('mousemove', throttledMousemoveCallback);

// Вызов callback функций слушателей таких болтливых событий, как, например, input,
// происходит каждый раз, когда происходит событие
// Debounce останавливает вызов callback функции слушателя события на время, пока происходит событие
// Callback функция будет вызвана только по прошествии (спустя) n милисекунд с момента окончания события,
// если не произойдет новое событие
// Debounce полезен, когда нужно реализовать "живой поиск"
// С его помощью ограничивают количество запросов на сервер

// Можно так:

/*
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

let inputCallbackCounter = 0;

function handleInput(event) {
  inputCallbackCounter += 1;

  outputRef.textContent = `Количество вызовов callback функции: ${inputCallbackCounter},
  Значение: ${event.target.value}`;
}

inputRef.addEventListener('input', _.debounce(handleInput, 300));
*/

// Или так:

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

let inputCallbackCounter = 0;

const debouncedInputCallback = _.debounce(event => {
  inputCallbackCounter += 1;

  outputRef.textContent = `Количество вызовов callback функции: ${inputCallbackCounter},
  Значение: ${event.target.value}`;
}, 300);

inputRef.addEventListener('input', debouncedInputCallback);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// II. НАБЛЮДАТЕЛЬ ЗА ПЕРЕСЕЧЕНИЕМ (INTERSECTION OBSERVER API)

// https://youtu.be/wz7jwzorJvQ?t=1122

// Intersection Observer API - это современный API (набор методов), который позволяет следить за
// изменением пересечения элемента с его родителем или вьюпортом (областью видимости документа)

// Observer (наблюдатель) - экземпляр класса IntersectionObserver, который отслеживает вхождение Target в Root
// Root (корень) - элемент, вхождение Target в который отслеживает Observer. По умолчанию, это вьюпорт
// Target (цель) - элемент, вхождение которого в Root отслеживает Observer

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`Box ${entry.target.textContent} пересекает Root`);

      observer.disconnect(); // метод для прекращения отслеживания вхождения
    }
  });
};

const options = {
  rootMargin: '50px',
};

const io = new IntersectionObserver(onEntry, options);

const boxRef = document.querySelector('.js-box');

io.observe(boxRef); // метод для указания элемента, за которым нужно наблюдать

// __________________________________________________________________________________________________________________________

// 2.1. Полифил Intersection Observer

// https://youtu.be/wz7jwzorJvQ?t=2200

// Полифил - это реализация функционала на old-school конструкциях
// Используется, если фича не поддерживается браузером пользователя
// Подключается в index.html перед скриптом, в котором используется фича

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// III. МАСТЕРСКАЯ: ЛЕНИВАЯ ЗАГРУЗКА ИЗОБРАЖЕНИЙ

// https://youtu.be/wz7jwzorJvQ?t=2519

// Для ленивой загрузки изображений используют Intersection Observer
// Идея состоит в том, чтобы загружать изображения не все сразу, а по отдельности -
// только тогда, когда они будут входить во вьюпорт (пересекатся с ним)
// Вхождение изображений во вьюпорт можно отследить несколькими способами

// __________________________________________________________________________________________________________________________

// 3.1. Intersection Observer с unobserve (один на все изображения)

// https://youtu.be/wz7jwzorJvQ?t=2944

const images = document.querySelectorAll('.feed img');

const lazyLoad = targets => {
  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log(entry.target);

        const image = entry.target;
        const src = image.dataset.lazy;

        image.src = src;
        image.classList.add('appear');

        observer.unobserve(image);
      }
    });
  };

  const options = {
    rootMargin: '100px',
  };

  const io = new IntersectionObserver(onEntry, options);

  targets.forEach(target => io.observe(target));
};

lazyLoad(images);

// __________________________________________________________________________________________________________________________

// 3.2. Intersection Observer с disconnect (по одному на каждое изображение)

// https://youtu.be/wz7jwzorJvQ?t=3463

/*
const images = document.querySelectorAll('.feed img');

const lazyLoad = target => {
  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log(entry.target);

        const image = entry.target;
        const src = image.dataset.lazy;

        image.src = src;
        image.classList.add('appear');

        observer.disconnect();
      }
    });
  };

  const options = {
    rootMargin: '100px',
  };

  const io = new IntersectionObserver(onEntry, options);

  io.observe(target);
};

images.forEach(image => lazyLoad(image));
*/
