import {openBigPicture,closeBigPicture} from './event.js';
const STEP = 5;

const templateComment = document.querySelector('.social__comment');
const listComment = document.querySelector('.social__comments');
const buttonAddComment = document.querySelector('.social__comments-loader');
const template = document.querySelector('#picture').content.querySelector('a');
const fragmentPicture = document.createDocumentFragment();
const listPictures = document.querySelector('.pictures');

function renderPictures(picture) {
  picture.forEach(({url, description, likes, comments}) => {

    const pictureElement = template.cloneNode(true);
    pictureElement.querySelector('img').src = url;
    pictureElement.querySelector('img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragmentPicture.append(pictureElement);

    pictureElement.addEventListener('click', () => {
      openBigPicture();
      document.querySelector('.big-picture__img').querySelector('img').src = url;
      document.querySelector('.social__caption').textContent = description;
      document.querySelector('.likes-count').textContent = likes;
      let number = 5;

      if (comments.length === 0) {
        document.querySelector('.social__comment-shown-count').textContent = 0;
        document.querySelector('.social__comment-total-count').textContent = 0;
        buttonAddComment.classList.add('hidden');
      }

      addComments(comments);

      function addComments(comment) {
        const arrComment = comment;
        const arrSliceComments = arrComment.slice(0 , number);
        listComment.innerHTML = '';
        arrSliceComments.forEach(({avatar, name, message}) => {
          const commentElement = templateComment.cloneNode(true);
          commentElement.querySelector('img').src = avatar;
          commentElement.querySelector('img').alt = name;
          commentElement.querySelector('.social__text').textContent = message;
          listComment.append(commentElement);
          document.querySelector('.social__comment-shown-count').textContent = arrSliceComments.length;
          document.querySelector('.social__comment-total-count').textContent = arrComment.length;

          if (arrSliceComments.length >= arrComment.length) {
            buttonAddComment.classList.add('hidden');
          } else {
            buttonAddComment.classList.remove('hidden');
          }
        });
      }
      buttonAddComment.addEventListener('click', (evt) => {
        evt.preventDefault();
        number += STEP;
        addComments(comments);
      });
    });
  });

  listPictures.append(fragmentPicture);
}

const buttonClose = document.querySelector('.big-picture__cancel');
buttonClose.addEventListener('click', () => {
  closeBigPicture();
  document.querySelector('.social__comments').innerHTML = '';
});

//
export {renderPictures};
