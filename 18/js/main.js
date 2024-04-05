import {renderPictures} from './render-content.js';
import {openUploadedPicture, closeUploadedPicture} from './open-close-uploaded.js';
import {setformSubmit} from './validate.js';
import {getData, sendCorrectAttributes} from './api.js';
import {filter, setFilterDiscussedClick, setFilterRandomClick, setFilterDefaultClick, getFilterDiscussed, getFilterDefault, getFilterRandom} from './filter.js';
import {debounce, RERENDER_DELAY} from './util.js';

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

getData()
  .then((picture) => {
    filter.classList.remove('img-filters--inactive');
    renderPictures(picture);
    setFilterDefaultClick(debounce(() => getFilterDefault(picture), RERENDER_DELAY));
    setFilterRandomClick(debounce(() => getFilterRandom(picture), RERENDER_DELAY));
    setFilterDiscussedClick(debounce(() => getFilterDiscussed(picture), RERENDER_DELAY));
  })
  .catch (
    filter.classList.add('img-filters--inactive')
  );

