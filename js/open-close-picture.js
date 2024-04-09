import {isEscapeKey} from './util.js';
import {bodyElement} from './open-close-uploaded.js';

const bigPicture = document.querySelector('.big-picture');

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

export {openBigPicture, closeBigPicture};
