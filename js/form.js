import {isEscapeKey} from './util.js';
import {validateComment, validateHashtags} from './validate-form.js';

const imgUploadInput = document.querySelector('.img-upload__input');
const formModal = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeImgElement = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const textDescriptionInput = form.querySelector('.text__description');
const textHashtagsInput = form.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__form',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__field-wrapper--error'
});

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
}

function openForm () {
  formModal.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  closeImgElement.addEventListener('click', closeForm);
  document.addEventListener('keydown', onDocumentKeydown);
  textDescriptionInput.addEventListener('keydown', cancelEscKeydown);
  textHashtagsInput.addEventListener('keydown', cancelEscKeydown);
}

function closeForm () {
  formModal.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  textDescriptionInput.removeEventListener('keydown', cancelEscKeydown);
  textHashtagsInput.removeEventListener('keydown', cancelEscKeydown);
  imgUploadInput.value = '';
}

function cancelEscKeydown (event) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    event.preventDefault();
    event.stopPropagation();
  }
}

pristine.addValidator(textDescriptionInput, validateComment, 'Максимальная длинна комментария 140 символов');
pristine.addValidator(textHashtagsInput, validateHashtags, 'Неверный хэштэг');

form.addEventListener('submit', (event) => {
  const valid = pristine.validate();

  if (valid === false) {
    event.preventDefault();
  }
});

export {openForm, imgUploadInput};
