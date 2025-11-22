import {isEscapeKey} from './util.js';
import {validateComment, validateHashtags} from './validate-form.js';
import {VALIDATE_COMMENT_ERROR, VALIDATE_HASHTAGS_ERROR} from './data.js';
import { minusScale, plusScale, resetScale } from './scale.js';
import { onEffectRadioButtonClick, resetFilter } from './slider-effects.js';

const form = document.querySelector('.img-upload__form');
const imgUploadInput = form.querySelector('.img-upload__input');
const formModal = form.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeImgElement = form.querySelector('.img-upload__cancel');
const textDescriptionInput = form.querySelector('.text__description');
const textHashtagsInput = form.querySelector('.text__hashtags');
const minusButton = form.querySelector('.scale__control--smaller');
const plusButton = form.querySelector('.scale__control--bigger');
const effectsList = form.querySelector('.effects__list');

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
  resetScale();
  resetFilter();
}

function closeForm () {
  formModal.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  textDescriptionInput.removeEventListener('keydown', cancelEscKeydown);
  textHashtagsInput.removeEventListener('keydown', cancelEscKeydown);
  form.reset();
}

function cancelEscKeydown (event) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    event.preventDefault();
    event.stopPropagation();
  }
}

form.addEventListener('submit', (event) => {
  const valid = pristine.validate();

  if (valid === false) {
    event.preventDefault();
  }
});

minusButton.addEventListener('click', minusScale);
plusButton.addEventListener('click', plusScale);
effectsList.addEventListener('change', onEffectRadioButtonClick);

pristine.addValidator(textDescriptionInput, validateComment, VALIDATE_COMMENT_ERROR);
pristine.addValidator(textHashtagsInput, validateHashtags, VALIDATE_HASHTAGS_ERROR);

export {openForm, imgUploadInput};
