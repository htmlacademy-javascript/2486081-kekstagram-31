import {renderPictures} from './render-content.js';
import {openUploadedPicture, closeUploadedPicture} from './uploaded-model.js';
import {setformSubmit} from './validate.js';
import {getData, sendCorrectAttributes} from './api.js';
//-------------------------------------------------------->
const RERENDER_DELAY = 500;
const filter = document.querySelector('.img-filters');
const buttonDefault = document.querySelector('#filter-default');
const buttonRandom = document.querySelector('#filter-random');
const buttonDiscussed = document.querySelector('#filter-discussed');

//-------------------------------------------------------->
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

//------------------------------------------>
const setFilterDefaultClick = (cb) => {
  buttonDefault.addEventListener('click', () => {
    buttonDefault.classList.add('img-filters__button--active');
    buttonRandom.classList.remove('img-filters__button--active');
    buttonDiscussed.classList.remove('img-filters__button--active');
    cb();
  });
};

const setFilterRandomClick = (cb) => {
  buttonRandom.addEventListener('click', () => {
    buttonRandom.classList.add('img-filters__button--active');
    buttonDefault.classList.remove('img-filters__button--active');
    buttonDiscussed.classList.remove('img-filters__button--active');
    cb();
  });
};

const setFilterDiscussedClick = (cb) => {
  buttonDiscussed.addEventListener('click', () => {
    buttonDiscussed.classList.add('img-filters__button--active');
    buttonDefault.classList.remove('img-filters__button--active');
    buttonRandom.classList.remove('img-filters__button--active');
    cb();
  });
};

function getDiscussed(pictureA, pictureB) {
  const DescriptionA = pictureA.comments.length;
  const DescriptionB = pictureB.comments.length;
  return DescriptionB - DescriptionA;
}
function getFilterDiscussed (picture) {
  const copiedImages = picture.slice().sort(getDiscussed);
  return renderPictures(copiedImages);
}
function getFilterDefault(picture) {
  return renderPictures(picture);
}
function getFilterRandom(picture) {
  const randomPicture = picture.slice().sort(() => 0.5 - Math.random()).slice(0, 10);
  return renderPictures(randomPicture);
}
function debounce(callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
//-------------------------------------------------------->
getData()
  .then((picture) => {
    filter.classList.remove('img-filters--inactive');
    renderPictures(picture);
    //-------------------------------------------------------->
    setFilterDefaultClick(debounce(() => getFilterDefault(picture), RERENDER_DELAY));
    setFilterRandomClick(debounce(() => getFilterRandom(picture), RERENDER_DELAY));
    setFilterDiscussedClick(debounce(() => getFilterDiscussed(picture), RERENDER_DELAY));
  })
  .catch (
    filter.classList.add('img-filters--inactive')
  );
//-------------------------------------------------------->
//-------->//
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview');
const imgPreview = preview.querySelector('img');
fileChooser.accept = 'image/png, image/jpeg';

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});
export {imgPreview, fileChooser};
//--------->//
