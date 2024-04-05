import {minusScale, plusScale} from './scale.js';
import {isEscapeKey} from './util.js';
import {getEffect} from './effects.js';
import {hashtagsElement, descriptionElement} from './validate.js';

const uploadedPicture = document.querySelector('.img-upload__overlay');

const blockEscapeKey = (element) => {
  element.addEventListener('focus', () => document.removeEventListener('keydown', onDocumentKeydown));
  element.addEventListener('blur', () => document.addEventListener('keydown', onDocumentKeydown));
};

const closeUploadedPicture = () => {
  document.querySelector('#upload-select-image').reset();
  uploadedPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openUploadedPicture = () => {
  uploadedPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  minusScale();
  plusScale();
  blockEscapeKey(hashtagsElement);
  blockEscapeKey(descriptionElement);
  getEffect();
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadedPicture();
  }
}

export {openUploadedPicture, closeUploadedPicture};
