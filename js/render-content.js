function renderPhotos(photo) {
  const template = document.querySelector('#picture').content.querySelector('a');
  const fragmentPhoto = document.createDocumentFragment();
  const listPictures = document.querySelector('.pictures');

  photo.forEach(({url, description, likes, comments}) => {
    const photoElement = template.cloneNode(true);
    photoElement.querySelector('img').src = url;
    photoElement.querySelector('img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;

    fragmentPhoto.append(photoElement);

  });

  listPictures.append(fragmentPhoto);
}

function renderBigPhoto(picture) {
  document.querySelector('.big-picture__img').querySelector('img').src = picture.querySelector('img').src;
  document.querySelector('.social__caption').textContent = picture.querySelector('img').alt;
  document.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
  document.querySelector('.social__comment-shown-count').textContent = 1;
  document.querySelector('.social__comment-total-count').textContent = picture.querySelector('.picture__comments').textContent;
}

function renderComments(comment) {
  const templateComment = document.querySelector('.social__comment');
  const listComment = document.querySelector('.social__comments');
  listComment.innerHTML = '';

  comment.forEach(({comments}) => {

    comments.forEach(({avatar, name, message}) => {
      const commentElement = templateComment.cloneNode(true);
      commentElement.querySelector('img').src = avatar;
      commentElement.querySelector('img').alt = name;
      commentElement.querySelector('.social__text').textContent = message;

      listComment.append(commentElement);
    });
  });
}

export {renderPhotos, renderBigPhoto, renderComments};
