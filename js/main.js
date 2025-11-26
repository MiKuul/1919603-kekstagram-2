import {renderPictures} from './render-pictures.js';
import {openForm, imgUploadInput, setFormSubmit} from './form.js';
import {getData} from './api.js';
import {showAlertMessage} from './messages.js';

getData()
  .then((pictures) => {
    renderPictures(pictures);
  })
  .catch((err) => {
    showAlertMessage(err.message);
  });

setFormSubmit();

imgUploadInput.addEventListener('change', openForm);
