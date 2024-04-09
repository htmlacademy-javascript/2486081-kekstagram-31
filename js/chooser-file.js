const FILES_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview');
const imgPreview = preview.querySelector('img');
const smallPreviewImages = document.querySelectorAll('.effects__preview');
fileChooser.accept = 'image/png, image/jpeg';

const uploadYourPicture = (file) => {
  const fileName = file.name.toLowerCase();
  const matches = FILES_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const url = URL.createObjectURL(file);
    imgPreview.src = url;
    smallPreviewImages.forEach((picture) => {
      picture.style.backgroundImage = `url(${imgPreview.src})`;
    });
  }
};

export {preview, fileChooser, uploadYourPicture};
