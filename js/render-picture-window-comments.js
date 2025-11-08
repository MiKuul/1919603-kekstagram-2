// Рендерим комментарии к карточке в большом окне

const pictureWindow = document.querySelector('.big-picture');
const templateComment = pictureWindow.querySelector('.social__comment');
const commentsListElement = pictureWindow.querySelector('.social__comments');
const commentsListFragment = document.createDocumentFragment();

function renderComments (comments) {
  commentsListElement.innerHTML = '';
  comments.forEach((comment) => {
    const element = templateComment.cloneNode(true);
    element.querySelector('.social__picture').src = comment.avatar;
    element.querySelector('.social__picture').alt = comment.name;
    element.querySelector('.social__text').textContent = comment.message;

    commentsListFragment.append(element);
  });

  commentsListElement.append(commentsListFragment);
}

export { renderComments };
