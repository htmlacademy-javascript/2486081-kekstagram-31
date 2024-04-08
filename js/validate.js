import {showSuccessForm} from './show-alerts.js';
import {sendData} from './api.js';

const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_NUMBERS = 5;
const MAX_LENGTH = 140;
const Message = {
  TEXT_ERROR_DESCRIPTION: 'Длина комментария больше 140 символов.',
  TEXT_ERROR_UNIQUE_HASHTAG: 'Хэштеги повторяются.',
  TEXT_ERROR_QUANRITY_HASHTAG: 'Превышено количество хэштегов.',
  TEXT_ERROR_INVALID_HASHTAG: 'Введён невалидный хэштег.',
  UPLOAD_BUTTON_TEXT_ORIGINAL: 'Опубликовать',
  UPLOAD_BUTTON_TEXT_SENDING: 'Публикую...'
};

const hashtagsElement = document.querySelector('.text__hashtags');
const descriptionElement = document.querySelector('.text__description');
const uploadButton = document.querySelector('.img-upload__submit');
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text'
});

const validateDescription = (value) => value.length <= MAX_LENGTH;

pristine.addValidator(
  descriptionElement,
  validateDescription,
  Message.TEXT_ERROR_DESCRIPTION
);


const validateHashtag = (value) => {
  const hashtags = hashtagsElement.value.toLowerCase().trim().split(' ');
  if (value === '') {
    return true;
  }
  for (const hashtag of hashtags) {
    if (regexp.test(hashtag) === false) {
      return false;
    }
  }
  return true;
};

const validQuantityHashtag = () => {
  const hashtags = hashtagsElement.value.toLowerCase().trim().split(' ');
  if (hashtags.length > MAX_HASHTAG_NUMBERS) {
    return false;
  }
  return true;
};

const validUniqueHashtag = () => {
  const hashtags = hashtagsElement.value.toLowerCase().trim().split(' ');
  const uniqueHashtag = new Set(hashtags);
  if (uniqueHashtag.size !== hashtags.length) {
    return false;
  }
  return true;
};

pristine.addValidator(
  hashtagsElement,
  validQuantityHashtag,
  Message.TEXT_ERROR_QUANRITY_HASHTAG
);
pristine.addValidator(
  hashtagsElement,
  validUniqueHashtag,
  Message.TEXT_ERROR_UNIQUE_HASHTAG
);
pristine.addValidator(
  hashtagsElement,
  validateHashtag,
  Message.TEXT_ERROR_INVALID_HASHTAG
);

const blockSubmitButton = () => {
  uploadButton.disabled = true;
  uploadButton.textContent = Message.UPLOAD_BUTTON_TEXT_SENDING;
};

const unblockSubmitButton = () => {
  uploadButton.disabled = false;
  uploadButton.textContent = Message.UPLOAD_BUTTON_TEXT_ORIGINAL;
};

const setformSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          onSuccess();
          showSuccessForm();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export {setformSubmit, hashtagsElement, descriptionElement, pristine};
