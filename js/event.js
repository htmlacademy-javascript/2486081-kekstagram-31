import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    document.querySelector('.social__comments').innerHTML = '';
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture() {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openBigPicture, closeBigPicture};
