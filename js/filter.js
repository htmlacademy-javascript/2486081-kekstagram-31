import {renderPictures} from './render-content.js';

const filter = document.querySelector('.img-filters');
const buttonDefault = document.querySelector('#filter-default');
const buttonRandom = document.querySelector('#filter-random');
const buttonDiscussed = document.querySelector('#filter-discussed');

//const formFilter = document.querySelector('.img-filters__form');
// const activeButton = (currentButton) => {
//   const activeFilter = document.querySelector('.img-filters__button--active');
//   if (currentButton !== activeFilter) {
//     activeFilter.classList.remove('img-filters__button--active');
//   }
//   currentButton.classList.add('img-filters__button--active');
// };
// formFilter.addEventListener('click', (evt) => {
//   if(evt.target.id) {
//     console.log((evt.target.id));
//   }
// });

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

export {filter, setFilterDiscussedClick, setFilterRandomClick, setFilterDefaultClick, getFilterDiscussed, getFilterDefault, getFilterRandom};
