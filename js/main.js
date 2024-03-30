import {getPictures} from './data.js';
import {renderPictures} from './render-content.js';
import {openUploadedPicture, closeUploadedPicture} from './uploaded-model.js';

const formElement = document.querySelector('.img-filters__form');
formElement.action = 'https://31.javascript.htmlacademy.pro/kekstagram';
formElement.method = 'POST';
formElement.enctype = 'multipart/form-data';

renderPictures(getPictures());

const cancelUploadedPicture = document.querySelector('.img-upload__cancel');
const uploadInput = document.querySelector('.img-upload__input');

uploadInput.addEventListener('change', () => {
  openUploadedPicture();

});

cancelUploadedPicture.addEventListener('click', () => {
  closeUploadedPicture();

});

