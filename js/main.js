import {closeUploadedPicture, toggleUploadedPicture} from './open-close-uploaded.js';
import {getData, sendCorrectAttributes} from './api.js';
import {renderPictures} from './render-content.js';
import {filter, changeFilter} from './filter.js';
import {setformSubmit} from './validate.js';


setformSubmit(closeUploadedPicture);
getData()
  .then((picture) => {
    filter.classList.remove('img-filters--inactive');
    sendCorrectAttributes();
    renderPictures(picture);
    changeFilter(picture);
  })
  .catch (
    filter.classList.add('img-filters--inactive')
  )
  .finally(toggleUploadedPicture());

