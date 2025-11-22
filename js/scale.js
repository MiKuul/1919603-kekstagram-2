import {SCALE_MAX, SCALE_MIN, SCALE_STEP} from './data.js';

const form = document.querySelector('.img-upload__form');
const scaleControlValue = form.querySelector('.scale__control--value');
const previewImage = form.querySelector('.img-upload__preview img');

let scale = 100;

function changeScale () {
  scaleControlValue.setAttribute('value', `${scale}%`);
  previewImage.style.transform = `scale(${scale / 100})`;
}

function minusScale () {
  if (scale > SCALE_MIN) {
    scale -= SCALE_STEP;
    changeScale();
  }
}

function plusScale () {
  if (scale < SCALE_MAX) {
    scale += SCALE_STEP;
    changeScale();
  }
}

function resetScale () {
  scale = 100;
  changeScale();
}

export { minusScale, plusScale, resetScale };
