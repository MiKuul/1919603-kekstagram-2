import {isEscapeKey, cancelEscKeydown} from './util.js';
import {validateComment, validateHashtags} from './validate-form.js';
import {VALIDATE_COMMENT_ERROR, VALIDATE_HASHTAGS_ERROR} from './data.js';
import {minusScale, plusScale, resetScale} from './pitures-scale.js';
import {onEffectRadioButtonClick, resetFilter} from './slider-effects.js';
import {sendData} from './api.js';
import {addInfo} from './messages.js';

const form = document.querySelector('.img-upload__form');
const imgUploadInput = form.querySelector('.img-upload__input');
const formModal = form.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeImgButton = form.querySelector('.img-upload__cancel');
const textDescriptionInput = form.querySelector('.text__description');
const textHashtagsInput = form.querySelector('.text__hashtags');
const minusButton = form.querySelector('.scale__control--smaller');
const plusButton = form.querySelector('.scale__control--bigger');
const effectsList = form.querySelector('.effects__list');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

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

// открытие формы загрузки изображения
function openForm () {
  formModal.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  closeImgButton.addEventListener('click', closeForm);
  textDescriptionInput.addEventListener('keydown', cancelEscKeydown);
  textHashtagsInput.addEventListener('keydown', cancelEscKeydown);
}

// закрытие формы и удаление обработчиков, а так же очистка формы
function closeForm () {
  formModal.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);

  textDescriptionInput.removeEventListener('keydown', cancelEscKeydown);
  textHashtagsInput.removeEventListener('keydown', cancelEscKeydown);

  form.reset();
  resetScale();
  resetFilter();
}

// отправка формы и добавление уведомления об итогах отправки
function setFormSubmit () {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      sendData(new FormData(form))
        .then(() => {
          addInfo(successMessage);
          closeForm();
        })
        .catch (() => {
          addInfo(errorMessage);
        });
    }
  });
}

minusButton.addEventListener('click', minusScale);
plusButton.addEventListener('click', plusScale);
effectsList.addEventListener('change', onEffectRadioButtonClick);

pristine.addValidator(textDescriptionInput, validateComment, VALIDATE_COMMENT_ERROR);
pristine.addValidator(textHashtagsInput, validateHashtags, VALIDATE_HASHTAGS_ERROR);

export {openForm, imgUploadInput, setFormSubmit};
