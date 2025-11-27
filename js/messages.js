import {isEscapeKey} from './utils.js';
import {ERROR_SHOW_TIME} from './data.js';

const body = document.querySelector('body');
const main = document.querySelector('main');

// закрытие информационных окошек и удаление обработчиков
function onCloseInfo (evt) {
  evt.stopPropagation();
  const target = evt.target;
  const info = document.querySelector('.info');

  if (target.classList.contains('info') ||
    isEscapeKey(evt) ||
    target.classList.contains('success__button') ||
    target.classList.contains('error__button')) {

    info.remove();
    body.removeEventListener('click', onCloseInfo);
    body.removeEventListener('keydown', onCloseInfo);
  }
}

// добавление окна с информацией об итоге загрузки изображения
function addInfo (template) {
  const infoNode = template.cloneNode(true);
  body.append(infoNode);
  body.addEventListener('click', onCloseInfo);
  body.addEventListener('keydown', onCloseInfo);
}

// окно предупреждения об ошибке загрузки данных
const showErrorMessage = (message) => {
  const error = document.createElement('div');
  error.style.backgroundColor = 'red';
  error.style.textAlign = 'center';
  error.style.padding = '5px 0px';

  error.textContent = message;

  main.prepend(error);

  setTimeout(() => {
    error.remove();
  }, ERROR_SHOW_TIME);
};

export {addInfo, showErrorMessage};
