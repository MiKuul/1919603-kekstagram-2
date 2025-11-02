import {generatePhotoArr} from './main-functions.js';
import {renderPictures} from './render-pictures.js';

const dataArr = generatePhotoArr();

renderPictures(dataArr);
