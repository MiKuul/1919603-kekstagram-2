import {isEscapeKey} from './util.js';
import {renderComments} from './render-picture-window-comments.js';

const pictureWindow = document.querySelector('.big-picture');
const closeButtonElement = pictureWindow.querySelector('.big-picture__cancel');
const commentsLoader = pictureWindow.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');

// Временные переменные для обеспечения работоспособности функций openPictureWindow,
// loadingComments и удаления обработчика по клику
let temporaryСommentsArr = [];
let temporaryCommentsСount = 5;

// Закрытие окна по нажатию клавиши Esc
function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureWindow();
  }
}

// Открытие и Отрисовка карточки в большом окне
function openPictureWindow (url, description, likes, comments) {
  pictureWindow.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  temporaryСommentsArr = comments;

  pictureWindow.querySelector('img').src = url;
  pictureWindow.querySelector('.likes-count').textContent = likes;
  pictureWindow.querySelector('.social__caption').textContent = description;
  pictureWindow.querySelector('.social__comment-total-count').textContent = temporaryСommentsArr.length;

  if (temporaryСommentsArr.length <= 5) {
    renderComments(temporaryСommentsArr);
    pictureWindow.querySelector('.social__comment-shown-count').textContent = temporaryСommentsArr.length;
  } else {
    const slicedArr = temporaryСommentsArr.slice(0, 5);
    renderComments(slicedArr);
    pictureWindow.querySelector('.social__comment-shown-count').textContent = 5;
  }

  commentsLoader.addEventListener('click', loadingComments);
}

// Загрузка новых комментариев
function loadingComments () {
  temporaryCommentsСount += 5;
  if (temporaryСommentsArr.length - temporaryCommentsСount <= 0) {
    const slicedArr = temporaryСommentsArr.slice(0, temporaryСommentsArr.length);
    renderComments(slicedArr);
    pictureWindow.querySelector('.social__comment-shown-count').textContent = temporaryСommentsArr.length;
  } else {
    const slicedArr = temporaryСommentsArr.slice(0, temporaryCommentsСount);
    renderComments(slicedArr);
    pictureWindow.querySelector('.social__comment-shown-count').textContent = temporaryCommentsСount;
  }
}

// Закрытие большого окна карточки и удаление обработчиков
function closePictureWindow () {
  pictureWindow.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', loadingComments);
  temporaryCommentsСount = 5;
}

closeButtonElement.addEventListener('click', closePictureWindow);

export {openPictureWindow};
