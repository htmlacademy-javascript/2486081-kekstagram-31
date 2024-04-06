import {renderPictures} from './render-content.js';
import {debounce} from './util.js';

let filterName = 'filter-default';
let pictures = [];
const debounceRender = debounce(renderPictures);
const filter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');

const getDiscussed = (pictureA, pictureB) =>{
  const DescriptionA = pictureA.comments.length;
  const DescriptionB = pictureB.comments.length;
  return DescriptionB - DescriptionA;
};

const applyFilters = () => {
  let filteredPictures = [];
  if (filterName === 'filter-default') {
    filteredPictures = pictures;
  }
  if (filterName === 'filter-random') {
    filteredPictures = pictures.slice().sort(() => 0.5 - Math.random()).slice(0, 10);
  }
  if (filterName === 'filter-discussed') {
    filteredPictures = pictures.slice().sort(getDiscussed);
  }
  debounceRender(filteredPictures);
};

const activeButton = (evt) => {
  const currentButton = evt.target.closest('button');
  const activeFilter = document.querySelector('.img-filters__button--active');

  if (currentButton !== activeFilter) {
    activeFilter.classList.remove('img-filters__button--active');
  }
  currentButton.classList.add('img-filters__button--active');

  filterName = evt.target.id;
  applyFilters();
};

const changeFilter = (picture) => {
  filterForm.addEventListener('click', activeButton);
  pictures = picture;
};


export {filter, changeFilter};
