// настройки эффектов слайдера

const sliderOptionsChromeSepiaEffect = {
  range: {
    min: 0,
    max: 1
  },
  start: 1,
  step: 0.1
};

const sliderOptionsMarvinDefaultEffect = {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 1
};

const sliderOptionsPhobosEffect = {
  range: {
    min: 0,
    max: 3
  },
  start: 3,
  step: 0.1
};

const sliderOptionsHeatEffect = {
  range: {
    min: 1,
    max: 3
  },
  start: 3,
  step: 0.1
};

const effects = {
  none: sliderOptionsMarvinDefaultEffect,
  chrome: sliderOptionsChromeSepiaEffect,
  sepia: sliderOptionsChromeSepiaEffect,
  marvin: sliderOptionsMarvinDefaultEffect,
  phobos: sliderOptionsPhobosEffect,
  heat: sliderOptionsHeatEffect
};

function getChromeStyleFilter (value) {
  return `grayscale(${value})`;
}

function getSepiaStyleFilter (value) {
  return `sepia(${value})`;
}

function getMarvinStyleFilter (value) {
  return `invert(${value}%)`;
}

function getPhobosStyleFilter (value) {
  return `blur(${value}px)`;
}

function getHeatStyleFilter (value) {
  return `brightness(${value})`;
}

const styleFilterByEffects = {
  chrome: getChromeStyleFilter,
  sepia: getSepiaStyleFilter,
  marvin: getMarvinStyleFilter,
  phobos: getPhobosStyleFilter,
  heat: getHeatStyleFilter
};

function getEffectSelector (currentInputId) {
  const selectors = {
    'effect-none': 'effects__preview--none',
    'effect-chrome': 'effects__preview--chrome',
    'effect-sepia': 'effects__preview--sepia',
    'effect-marvin': 'effects__preview--marvin',
    'effect-phobos': 'effects__preview--phobos',
    'effect-heat': 'effects__preview--heat'
  };
  return selectors[currentInputId];
}

export { effects, styleFilterByEffects, getEffectSelector };
