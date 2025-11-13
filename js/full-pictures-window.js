import {isEscapeKey} from './util.js';
import {renderComments} from './render-picture-window-comments.js';

const pictureWindow = document.querySelector('.big-picture');
const closeButtonElement = pictureWindow.querySelector('.big-picture__cancel');
const commentsLoader = pictureWindow.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const commentShownCount = pictureWindow.querySelector('.social__comment-shown-count');

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

// Заполнение данными открывшееся окно
function fillingPictureData (url, description, likes, comments) {
  pictureWindow.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoader.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  temporaryСommentsArr = comments;

  pictureWindow.querySelector('img').src = url;
  pictureWindow.querySelector('.likes-count').textContent = likes;
  pictureWindow.querySelector('.social__caption').textContent = description;
  pictureWindow.querySelector('.social__comment-total-count').textContent = temporaryСommentsArr.length;

  return temporaryСommentsArr;
}

// Загрузка нужного числа комментариев при открытии окна
function renderRequiredNumberOfComments (arr) {
  if (arr.length <= 5) {
    renderComments(arr);
    commentShownCount.textContent = arr.length;
    commentsLoader.classList.add('hidden');
  } else {
    const slicedArr = arr.slice(0, 5);
    renderComments(slicedArr);
    commentShownCount.textContent = 5;
  }
}

// Загрузка новых комментариев при нажатии на "Загрузить еще"
function loadingComments () {
  temporaryCommentsСount += 5;
  if (temporaryСommentsArr.length - temporaryCommentsСount <= 0) {
    commentsLoader.classList.add('hidden');
    const slicedArr = temporaryСommentsArr.slice(0, temporaryСommentsArr.length);
    renderComments(slicedArr);
    commentShownCount.textContent = temporaryСommentsArr.length;
  } else {
    const slicedArr = temporaryСommentsArr.slice(0, temporaryCommentsСount);
    renderComments(slicedArr);
    commentShownCount.textContent = temporaryCommentsСount;
  }
}

// Открытие и отрисовка карточки в большом окне
function openPictureWindow (url, description, likes, comments) {

  fillingPictureData(url, description, likes, comments);

  renderRequiredNumberOfComments(temporaryСommentsArr);

  commentsLoader.addEventListener('click', loadingComments);
  closeButtonElement.addEventListener('click', closePictureWindow);
}

// Закрытие большого окна карточки и удаление обработчиков
function closePictureWindow () {
  pictureWindow.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', loadingComments);
  temporaryCommentsСount = 5;
}

export {openPictureWindow};
