// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// І. СОЗДАНИЕ И УДАЛЕНИЕ СЛУШАТЕЛЯ СОБЫТИЙ

// https://youtu.be/Q37hHgUYXeU

const targetBtnRef = document.querySelector('.js-target-btn');
const addEventListenerBtnRef = document.querySelector('.js-add-listener');
const removeEventListenerBtnRef = document.querySelector('.js-remove-listener');

function sayHi() {
  console.log('hi!');
}

addEventListenerBtnRef.addEventListener('click', () => {
  targetBtnRef.addEventListener('click', sayHi);
});

removeEventListenerBtnRef.addEventListener('click', () => {
  targetBtnRef.removeEventListener('click', sayHi);
});

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// II. ОБЪЕКТ СОБЫТИЯ

// https://youtu.be/Q37hHgUYXeU?t=574

// В каждый переданый в addEventListener колбек по умолчанию будет приходить объект события
// Это служебный объект, который создается браузером, и хранит служебные свойства
// Ссылка на него записывается в переменную с именем event, evt или e
// Свойство event.target - ссылка на элемент, на котором произошло событие

targetBtnRef.addEventListener('click', event => {
  console.dir(event);
  console.dir(event.target);
});

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// III. СОБЫТИЯ ФОРМ (SUBMIT)

// https://youtu.be/Q37hHgUYXeU?t=828

const formRef = document.querySelector('.js-register-form');
// console.log(formRef);

formRef.addEventListener('submit', event => {
  event.preventDefault();
  // Предотвращает дефолтное поведение браузера при текущем событии
  // В нашем случае он перестанет перезагружать страницу при отправке формы

  console.dir(event); // объект события
  console.dir(event.target); // элемент, на котором произошло событие (в нашем случае - форма)
  console.dir(event.target.elements); // свойство, в котором собраны все интерактивные элементы формы

  /*
  // Хороший вариант

  const formElements = event.target.elements;

  const formData = {
    name: formElements.name.value,
    email: formElements.email.value,
    password: formElements.password.value,
    subscription: formElements.subscription.value,
  };

  console.log(formData);
*/

  // Очень хороший вариант

  const formData = new FormData(event.target);
  // console.log(formData);

  const submittedData = {};

  formData.forEach((value, key) => {
    // console.log('value: ', value);
    // console.log('key: ', key);

    submittedData[key] = value;
  });

  console.log(submittedData);
});

// __________________________________________________________________________________________________________________________

// 3.1. Как собрать элементы формы

// https://youtu.be/Q37hHgUYXeU?t=1130

// N.B. Применение хорошего и очень хорошего вариантов смотри в коде выше

// Похой вариант - с помощью многих querySelector'ов

// Хороший вариант - с помощью свойства event.target.elements, в котором собраны все интерактивные элементы формы
// Используется, если нужно "достучатся" к какому-нибудь элементу формы

// Очень хороший вариант - с помощью конструктора FormData
// Используется, если нужно собрать все значение элементов формы при submit'е в один объект
// Он вызывается с помощью оператора new
// Его аргумент - ссылка на элемент формы (event.target)
// У этого конструктора есть метод forEach(), который работает немного иначе чем одноименный метод
// В колбек функцию этого метода приходят значение и ключ

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// IV. СОБЫТИЯ ИНПУТОВ (INPUT, CHANGE, FOCUS, BLUR)

// https://youtu.be/Q37hHgUYXeU?t=1892

// Событие input происходит каждый раз при изменении значения инпута (при каждом нажатии клавиши)

const inputRef = document.querySelector('.js-input');
// console.log(inputRef);

const licenseRef = document.querySelector('.js-license');
// console.log(licenseRef);

const regBtnRef = document.querySelector('.js-button');
// console.dir(regBtnRef);

const nameLabelRef = document.querySelector('.js-button > span');
// console.log(nameLabelRef);

function handleInputChange(event) {
  console.log(event); // объект события
  console.log(event.target); // элемент, на котором произошло событие (в нашем случае - инпут)
  console.log(event.target.value); // введенные в инпут данные

  nameLabelRef.textContent = event.target.value;
}

function handleLicenseChange(event) {
  console.dir(event); // объект события
  console.log(event.target); // элемент, на котором произошло событие (в нашем случае - чекбокс)
  console.log(event.target.checked);

  regBtnRef.disabled = !event.target.checked;
}

function handleInputFocus() {
  console.log('Фокус получен');
}

function handleInputBlur() {
  console.log('Фокус потерян');
}

inputRef.addEventListener('input', handleInputChange);
licenseRef.addEventListener('change', handleLicenseChange);
inputRef.addEventListener('focus', handleInputFocus);
inputRef.addEventListener('blur', handleInputBlur);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// V. СОБЫТИЯ КЛАВИАТУРЫ (KEYPRESS, KEYDOWN, KEYUP)

// https://youtu.be/Q37hHgUYXeU?t=2865

// keypress - срабатывает только тогда, когда была нажата символьная клавиша
// keydown, keyup - используются, если нужно обработать нажатие служебных клавиш (esc, alt, ctrl и т. д.);
// реагируют также на нажатие служебных клавиш

// Объект события клавиатуры имеет 2 важных свойства: key и code

// window.addEventListener('keypress', event => {
//   console.log(event); // объект события
//   console.log('event.key: ', event.key); // в свойстве хранится символ, который был сгенерирован при нажатии клавиши
//   console.log('event.code: ', event.code); // в свойстве хранится физическое представление клавиши клавиатуры,
//   // вне зависимости от раскладки клавиатуры, региона и т. д.
// });

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// VI. СОБЫТИЯ МЫШКИ (MOUSEENTER, MOUSELEAVE, MOUSEOVER, MOUSEOUT, MOUSEMOVE)

// https://youtu.be/Q37hHgUYXeU?t=3541

// События mouseenter и mouseleave "игнорят" детей

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', event => {
//   console.log('Enter');
//   event.target.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', event => {
//   console.log('Leave');
//   event.target.classList.remove('box--active');
// });

// События mouseover и mouseout "чувствуют" детей

// boxRef.addEventListener('mouseover', event => {
//   console.log('Over');
//   event.target.classList.add('box--active');
// });

// boxRef.addEventListener('mouseout', event => {
//   console.log('Out');
//   event.target.classList.remove('box--active');
// });

// Событие mousemove - болтливое событие (chatty event)

// boxRef.addEventListener('mousemove', event => {
//   console.log('Move');
// });

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// VII. МАСТЕРСКАЯ: МОДАЛЬНОЕ ОКНО

// https://youtu.be/Q37hHgUYXeU?t=4150

/*
 * Открытие и закрытие по клику по соответствующим кнопкам
 * Закрытие по клику по бекдропу
 * Закрытие при нажатии на ESC
 */

/*
 * Механизм:
 *
 * 1. При нажатии на кнопку "Открыть модалку" на body вешается класс show-modal.
 *    Как результат, у div с классом backdrop и div с классом modal изменяются определенные стили
 *    Для реализации этого нужно:
 *    - найти кнопку открытия модалки с помощью querySelector
 *    - повесить на нее слушатель события
 *    - добавить на body класс show-modal с помощью classList.add()
 *
 * 2. При нажатии на кнопку "Закрыть модалку" с body снимается класс show-modal.
 *    Как результат, у div с классом backdrop и div с классом modal происходит "откат" стилей
 *    Для реализации этого нужно:
 *    - найти кнопку закрытия модалки с помощью querySelector
 *    - повесить на нее слушатель события
 *    - убрать с body класс show-modal с помощью classList.remove()
 *
 * 3. При клике по бекдропу, когда модалка открыта, она закрывается.
 *    Для реализации этого нужно:
 *    - найти бекдроп с помощью querySelector
 *    - повесить на него слушатель события
 *    - в теле функции обработки клика по бекдропу (колбек функции слушателя события на бекдропе)
 *      прописать вызов функции обработки закрытия модалки (колбек функции слушателя события на кнопке закрытия модалки)
 *      по условию: event.target === event.currentTarget
 *
 * 4. При нажатии на ESC, когда модалка открыта, она закрывается
 *    Для реализации этого нужно:
 *    - в теле функции обработки открытия модалки (колбек функции слушателя события на кнопке открытия модалки)
 *      повесить на window слушатель события
 *    - в теле его колбек функции прописать вызов функции обработки закрытия модалки
 *      (колбек функции слушателя события на кнопке закрытия модалки)
 *      по условию: event.code === 'Escape'
 *    - в теле функции обработки закрытия модалки (колбек функции слушателя события на кнопке закрытия модалки)
 *      снять с window слушатель события
 */

const openModalBtnRef = document.querySelector('[data-action="open-modal"]');
const closeModalBtnRef = document.querySelector('[data-action="close-modal"]');
const backdropRef = document.querySelector('.js-backdrop');

openModalBtnRef.addEventListener('click', handleModalOpening);
closeModalBtnRef.addEventListener('click', handleModalClosing);
backdropRef.addEventListener('click', handleBackdropClicking);

function handleModalOpening() {
  window.addEventListener('keydown', handleEscapePressing);
  document.body.classList.add('show-modal');
}

function handleModalClosing() {
  window.removeEventListener('keydown', handleEscapePressing);
  document.body.classList.remove('show-modal');
}

function handleBackdropClicking(event) {
  // console.log('target: ', event.target); // элемент, на котором произошло событие
  // console.log('currentTarget: ', event.currentTarget); // элемент, на котором хранится обработчик события (в нашем случае - бекдроп)
  if (event.target === event.currentTarget) {
    handleModalClosing();
  }
}

function handleEscapePressing(event) {
  // console.log('event.code: ', event.code);
  if (event.code === 'Escape') {
    handleModalClosing();
  }
}
