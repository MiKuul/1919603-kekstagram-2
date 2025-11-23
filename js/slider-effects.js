import { Effects, StyleFilterByEffects, getEffectSelector } from './slider-settings.js';
import {EFFECT_LEVEL_MAX} from './data.js';

const form = document.querySelector('.img-upload__form');
const sliderInputWrapper = form.querySelector('.img-upload__effect-level');
const levelInput = form.querySelector('.effect-level__value');
const sliderElement = form.querySelector('.effect-level__slider');
const effectRadioButtons = form.querySelectorAll('.effects__radio');
const imgPreview = form.querySelector('.img-upload__preview').firstElementChild;
const selectorImg = imgPreview.classList;
levelInput.value = EFFECT_LEVEL_MAX;

function getUpdateSliderOptions (effect, slider) {
  return slider.noUiSlider.updateOptions(Effects[effect]);
}

function resetFilter () {
  imgPreview.style.removeProperty('filter');
  sliderInputWrapper.classList.add('hidden');
  imgPreview.className = '';
  imgPreview.classList.add('effects__preview--none');
}

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

function onEffectRadioButtonClick (evt) {
  const currentRadioButton = evt.target.closest('.effects__radio');
  if (currentRadioButton) {
    const effectButtonValue = currentRadioButton.value;
    imgPreview.classList.replace(selectorImg, getEffectSelector(effectButtonValue));
    getUpdateSliderOptions(effectButtonValue, sliderElement);
  }
}

sliderElement.noUiSlider.on('update', () => {
  levelInput.value = sliderElement.noUiSlider.get();
  effectRadioButtons.forEach((item) => {
    if (item.checked) {
      if (item.value !== 'none') {
        sliderInputWrapper.classList.remove('hidden');
        imgPreview.style.filter = StyleFilterByEffects[item.value](levelInput.value);
      } else {
        resetFilter();
      }
    }
  });
});

export { onEffectRadioButtonClick, resetFilter };
