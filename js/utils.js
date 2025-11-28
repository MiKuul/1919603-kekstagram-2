// Если нажали клавишу Esc
function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

// Остановка обработчика Esc
function cancelEscKeydown (evt) {
  if (evt.key === 'Escape' || evt.keyCode === 27) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}

// устранение дребезга
function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {isEscapeKey, cancelEscKeydown, debounce};
