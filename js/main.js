import {generatePictureArr} from './main-functions.js';
import {renderPictures} from './render-pictures.js';
import {openForm, imgUploadInput} from './form.js';

const dataArr = generatePictureArr();

renderPictures(dataArr);

imgUploadInput.addEventListener('change', openForm);
