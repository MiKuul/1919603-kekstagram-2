// Если нажали клавишу Esc
function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

function cancelEscKeydown (event) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    event.preventDefault();
    event.stopPropagation();
  }
}

export {isEscapeKey, cancelEscKeydown};
