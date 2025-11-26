// Если нажали клавишу Esc
function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

function cancelEscKeydown (evt) {
  if (evt.key === 'Escape' || evt.keyCode === 27) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}

export {isEscapeKey, cancelEscKeydown};
