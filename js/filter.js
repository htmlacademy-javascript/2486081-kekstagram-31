import {renderPictures} from './render-content.js';
import {getDebounce} from './util.js';

let filterName = 'filter-default';
let pictures = [];
const debounceRender = getDebounce(renderPictures);
const filter = document.querySelector('.img-filters');
const filterForm = filter.querySelector('.img-filters__form');

const getDiscussed = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

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

const getActiveButton = (evt) => {
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
  filterForm.addEventListener('click', getActiveButton);
  pictures = picture;
};


export {filter, changeFilter};
