// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// I. РАСПРОСТРАНЕНИЕ СОБЫТИЙ

// youtu.be/4mAC_HZ2Iwg?t=1

// Распространение событий включает 3 фазы: затопление (погружение), таргетинг (целевая фаза), всплытие
// Обрабатывают события, как правило, на этапе их всплытия

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// II. ВСПЛЫТИЕ СОБЫТИЙ

// https://youtu.be/4mAC_HZ2Iwg?t=206

// Принцип всплытия: когда на элементе происходит событие, обработчики сначала срабатывают на нем,
// потом на его родителе, затем выше и так далее, вверх по цепочке предков

// Всплывают почти все события. Не всплывают такие события, как, например, focus и blur
// Обычно всплытие события происходит до самого Window
// Всплытие можно остановить, вызвав на объекте события метод stopPropagation()
// У такого подхода есть одно "но": на текущем элементе событие все равно будет обработано
// Для того чтобы не только прекратить всплытие, но и остановить его обработку на текущем элементе,
// нужно на объекте события вызвать метод stopImmediatePropagation()
// Прекращать всплытие событий без крайней надобности настоятельно не рекомендуется

// event.target - ссылка на элемент, на котором произошло событие. При всплытии не изменяется
// event.currentTarget - ссылка на элемент, на котором было обработано событие. При всплытии изменяется

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// IІІ. ДЕЛЕГИРОВАНИЕ СОБЫТИЙ

// https://youtu.be/4mAC_HZ2Iwg?t=971

// Делегирование событий (ДС) - это важный паттерн, реализация которого осуществляется благодаря механизму всплытия событий
// ДС позволяет писать меньше кода, экономить память, ускорять работу интерфейса
// ДС применяется тогда, когда нужно слушать события, происходящие на однотипных элементах коллекции
// В таком случае обработчик события вешается не на каждый элемент коллекции, а на их общего предка (чаще всего родителя)

// __________________________________________________________________________________________________________________________

// 3.1. Пример

// https://youtu.be/4mAC_HZ2Iwg?t=1178

// Кроме всего прочего, речь идет о свойствах nodeName и dataset

const refs = {
  tagsList: document.querySelector('.js-tags'),
  activeTagOutput: document.querySelector('.js-active-tag'),
};

refs.tagsList.addEventListener('click', handleOnTagsListClick);

function handleOnTagsListClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const tagBtn = event.target;
  const tagBtnDataValue = event.target.dataset.value;

  setActiveTag(tagBtn);
  updateOutput(tagBtnDataValue);
}

function setActiveTag(nextActiveTagBtn) {
  const currentActiveTagBtn = refs.tagsList.querySelector('.tags__btn--active');

  //   console.log('currentActiveTagBtn: ', currentActiveTagBtn);
  //   console.log('nextActiveTagBtn: ', nextActiveTagBtn);
  //   console.log(currentActiveTagBtn === nextActiveTagBtn);

  if (currentActiveTagBtn) {
    currentActiveTagBtn.classList.remove('tags__btn--active');
  }

  // Так сделал я
  if (currentActiveTagBtn !== nextActiveTagBtn) {
    nextActiveTagBtn.classList.add('tags__btn--active');
  }

  // Так у Репеты
  //   nextActiveTagBtn.classList.add('tags__btn--active');
}

function updateOutput(value) {
  refs.activeTagOutput.textContent = value;
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// IV. РАЗБОР ДОМАШНЕГО ЗАДАНИЯ

// https://youtu.be/4mAC_HZ2Iwg?t=2650

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
