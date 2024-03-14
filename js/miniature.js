function renderPhotos(arrayPhotos) {
  const template = document.querySelector('#picture').content.querySelector('a');
  const fragmentPhoto = document.createDocumentFragment();
  const listPictures = document.querySelector('.pictures');

  arrayPhotos.forEach(({url, description, likes, comments}) => {
    const photoElement = template.cloneNode(true);
    const imgPhoto = photoElement.querySelector('img');
    imgPhoto.src = url;
    imgPhoto.alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    fragmentPhoto.append(photoElement);
  });

  listPictures.append(fragmentPhoto);
}
export {renderPhotos};
