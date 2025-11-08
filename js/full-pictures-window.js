import {isEscapeKey} from './util.js';
import {renderComments} from './render-picture-window-comments.js';

const pictureWindow = document.querySelector('.big-picture');
const closeButtonElement = pictureWindow.querySelector('.big-picture__cancel');
const commentsCounterElement = pictureWindow.querySelector('.social__comment-count');
const commentsLoaderElement = pictureWindow.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');

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

  pictureWindow.querySelector('img').src = url;
  pictureWindow.querySelector('.likes-count').textContent = likes;
  pictureWindow.querySelector('.social__caption').textContent = description;

  commentsCounterElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');

  renderComments(comments);
}

// Закрытие большого окна карточки
function closePictureWindow () {
  pictureWindow.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButtonElement.addEventListener('click', closePictureWindow);

export {openPictureWindow};
