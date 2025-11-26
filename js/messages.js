import {isEscapeKey} from './util.js';
import {ALERT_SHOW_TIME} from './data.js';

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
const showAlertMessage = (message) => {
  const alertElemet = document.createElement('div');
  alertElemet.style.backgroundColor = 'red';
  alertElemet.style.textAlign = 'center';
  alertElemet.style.padding = '5px 0px';

  alertElemet.textContent = message;

  main.prepend(alertElemet);

  setTimeout(() => {
    alertElemet.remove();
  }, ALERT_SHOW_TIME);
};

export {addInfo, showAlertMessage};
