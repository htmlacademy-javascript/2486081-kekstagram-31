import {minusScale, plusScale, valueScale} from './scale.js';
import {isEscapeKey, DEFAULT_VALUE_SCALE} from './util.js';
import {changesEffects} from './effects.js';
import {hashtagsElement, descriptionElement, pristine} from './validate.js';
import {preview, uploadYourPicture, fileChooser} from './chooser-file.js';


const uploadedPicture = document.querySelector('.img-upload__overlay');
const cancelUploadedPicture = document.querySelector('.img-upload__cancel');


const blockEscapeKey = (element) => {
  element.addEventListener('focus', () => document.removeEventListener('keydown', onDocumentKeydown));
  element.addEventListener('blur', () => document.addEventListener('keydown', onDocumentKeydown));
};

const closeUploadedPicture = () => {
  pristine.reset();
  preview.style = 'none';
  valueScale.setAttribute('value', DEFAULT_VALUE_SCALE);
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
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
  changesEffects();
  const file = fileChooser.files[0];
  uploadYourPicture(file);
};

function onDocumentKeydown (evt) {
  const errorForm = document.querySelector('.error');
  if (isEscapeKey(evt) && !errorForm) {
    evt.preventDefault();
    closeUploadedPicture();
  }
}

const toggleUploadedPicture = () => {
  fileChooser.addEventListener('change', () => {
    openUploadedPicture();
  });

  cancelUploadedPicture.addEventListener('click', () => {
    closeUploadedPicture();
  });
};

export {toggleUploadedPicture, closeUploadedPicture};
