import {getPhotos} from './data.js';
import {renderPhotos, renderBigPhoto, renderComments} from './render-content.js';
import {openBigPicture,closeBigPicture} from './event.js';

renderPhotos(getPhotos());

const pictures = document.querySelectorAll('.picture');
const buttonClose = document.querySelector('.big-picture__cancel');

for (const picture of pictures) {
  picture.addEventListener('click', () => {
    openBigPicture();
    renderBigPhoto(picture);
    renderComments(getPhotos());//Работает не правильно
  });
}

buttonClose.addEventListener('click', () => {
  closeBigPicture();
  document.querySelector('.social__comments').innerHTML = '';
});
