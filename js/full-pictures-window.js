import {isEscapeKey} from './util.js';
import {renderComments} from './render-picture-window-comments.js';

const pictureWindow = document.querySelector('.big-picture');
const closeButtonElement = pictureWindow.querySelector('.big-picture__cancel');
const commentsLoader = pictureWindow.querySelector('.comments-loader');
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
  pictureWindow.querySelector('.social__comment-total-count').textContent = comments.length;

  let temporaryCommentСount = 5;

  if (comments.length <= 5) {
    renderComments(comments);
    pictureWindow.querySelector('.social__comment-shown-count').textContent = comments.length;
  } else {
    const slicedArr = comments.slice(0, 5);
    renderComments(slicedArr);
    pictureWindow.querySelector('.social__comment-shown-count').textContent = 5;
  }

  commentsLoader.addEventListener('click', () => {
    if (comments.length - temporaryCommentСount < 0) {
      const slicedArr = comments.slice(0, comments.length);
      renderComments(slicedArr);
      pictureWindow.querySelector('.social__comment-shown-count').textContent = comments.length;
    } else {
      const slicedArr = comments.slice(0, temporaryCommentСount);
      renderComments(slicedArr);
      pictureWindow.querySelector('.social__comment-shown-count').textContent = temporaryCommentСount;
      temporaryCommentСount += 5;
    }
  });
}

// Закрытие большого окна карточки
function closePictureWindow () {
  pictureWindow.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButtonElement.addEventListener('click', closePictureWindow);

export {openPictureWindow};
