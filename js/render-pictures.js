const pictureTemplateFragment = document.querySelector('#picture').content;
const pictureTemplate = pictureTemplateFragment.querySelector('.picture');
const picturesBlock = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function renderPictures (arr) {
  arr.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragment.append(pictureElement);
  });
  picturesBlock.append(fragment);
}

export {renderPictures};
