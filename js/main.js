import {renderPictures} from './render-content.js';
import {openUploadedPicture, closeUploadedPicture} from './uploaded-model.js';
import {setformSubmit} from './validate.js';
import {getData, sendCorrectAttributes} from './api.js';

const cancelUploadedPicture = document.querySelector('.img-upload__cancel');
const uploadInput = document.querySelector('.img-upload__input');

uploadInput.addEventListener('change', () => {
  openUploadedPicture();
});
cancelUploadedPicture.addEventListener('click', () => {
  closeUploadedPicture();
});

sendCorrectAttributes();
setformSubmit(closeUploadedPicture);
getData()
  .then((picture) => {
    renderPictures(picture);
  });


