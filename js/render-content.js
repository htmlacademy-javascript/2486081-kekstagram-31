import {openBigPicture,closeBigPicture} from './event.js';
const COUNT = 0;
const STEP = 5;

const templatePictureComment = document.querySelector('.social__comment');
const listComment = document.querySelector('.social__comments');
const buttonAddComment = document.querySelector('.social__comments-loader');

const templatePicture = document.querySelector('#picture').content.querySelector('a');
const fragmentPicture = document.createDocumentFragment();
const listPictures = document.querySelector('.pictures');
const buttonClose = document.querySelector('.big-picture__cancel');

const removePicturesElements = () => {
  const pictures = document.querySelectorAll('.picture');
  for (const picture of pictures) {
    picture.remove();
  }
};

const renderComments = (comment, start) => {
  const commentsSlice = comment.slice(0 , start + STEP);
  document.querySelector('.social__comments').innerHTML = '';

  commentsSlice.forEach(({avatar, name, message}) => {

    const commentElement = templatePictureComment.cloneNode(true);
    const imgElementComments = commentElement.querySelector('img');
    const commentTextElement = commentElement.querySelector('.social__text');
    const shownCountCommentElement = document.querySelector('.social__comment-shown-count');
    const totalCountCommentElement = document.querySelector('.social__comment-total-count');

    imgElementComments.src = avatar;
    imgElementComments.alt = name;
    commentTextElement.textContent = message;
    listComment.append(commentElement);

    shownCountCommentElement.textContent = commentsSlice.length;
    totalCountCommentElement.textContent = comment.length;

    if (commentsSlice.length >= comment.length) {
      buttonAddComment.classList.add('hidden');
    } else {
      buttonAddComment.classList.remove('hidden');
    }
  });
};

const renderPictures = (picture) => {
  picture.forEach(({url, description, likes, comments}) => {

    const pictureElement = templatePicture.cloneNode(true);
    const imgElement = pictureElement.querySelector('img');
    const likesElement = pictureElement.querySelector('.picture__likes');
    const commentsElement = pictureElement.querySelector('.picture__comments');

    imgElement.src = url;
    imgElement.alt = description;
    likesElement.textContent = likes;
    commentsElement.textContent = comments.length;
    fragmentPicture.append(pictureElement);

    pictureElement.addEventListener('click', () => {
      openBigPicture();

      const bigPictureImgElement = document.querySelector('.big-picture__img').querySelector('img');
      const captionElement = document.querySelector('.social__caption');
      const likesCountElement = document.querySelector('.likes-count');

      bigPictureImgElement.src = url;
      captionElement.textContent = description;
      likesCountElement.textContent = likes;

      if (comments.length === 0) {
        document.querySelector('.social__comment-shown-count').textContent = 0;
        document.querySelector('.social__comment-total-count').textContent = 0;
        buttonAddComment.classList.add('hidden');
      }

      let number = COUNT;

      renderComments(comments, number);

      buttonAddComment.addEventListener('click', (evt) => {
        evt.preventDefault();
        number += STEP;
        renderComments(comments, number);
      });

      buttonClose.addEventListener('click', () => {
        closeBigPicture();
      });
    });
  });
  removePicturesElements();
  listPictures.append(fragmentPicture);
};

export {renderPictures};
