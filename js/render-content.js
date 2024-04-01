import {openBigPicture,closeBigPicture} from './event.js';
const templateComment = document.querySelector('.social__comment');
const listComment = document.querySelector('.social__comments');

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
      document.querySelector('.social__comment-shown-count').textContent = 1;
      document.querySelector('.social__comment-total-count').textContent = comments.length;

      listComment.innerHTML = '';
      comments.forEach(({avatar, name, message}) => {
        const commentElement = templateComment.cloneNode(true);
        commentElement.querySelector('img').src = avatar;
        commentElement.querySelector('img').alt = name;
        commentElement.querySelector('.social__text').textContent = message;
        listComment.append(commentElement);
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
