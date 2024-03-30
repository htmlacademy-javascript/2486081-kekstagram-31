import {minusScale, plusScale} from './scale.model';
import {isEscapeKey} from './util.js';
import {getEffect} from './effect-model.js';
import {getValidate} from './validate.js';

const hashtagsElement = document.querySelector('.text__hashtags');
const descriptionElement = document.querySelector('.text__description');
const uploadedPicture = document.querySelector('.img-upload__overlay');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadedPicture();
  }
};

function blockEscapeKey (element) {
  element.addEventListener('focus', () => document.removeEventListener('keydown', onDocumentKeydown));
  element.addEventListener('blur', () => document.addEventListener('keydown', onDocumentKeydown));
}

function closeUploadedPicture() {
  uploadedPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openUploadedPicture() {
  uploadedPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  minusScale();
  plusScale();
  blockEscapeKey(hashtagsElement);
  blockEscapeKey(descriptionElement);
  getEffect();
  getValidate();
}
export {openUploadedPicture, closeUploadedPicture};
