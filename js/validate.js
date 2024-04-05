import {/*showErrorForm,*/showSuccessForm} from './show-alerts.js';
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

function validateDescription(value) {
  return value.length <= MAX_LENGTH;
}
pristine.addValidator(
  descriptionElement,
  validateDescription,
  Message.TEXT_ERROR_DESCRIPTION
);

function validateHashtag(value) {
  const hashtagArr = hashtagsElement.value.toLowerCase().trim().split(' ');//
  if (value === '') {
    return true;
  }
  for (const hashtag of hashtagArr) {
    if (regexp.test(hashtag) === false) {
      return false;
    }
  }
  return true;
}
function validQuantityHashtag() {
  const hashtagArr = hashtagsElement.value.toLowerCase().trim().split(' ');//
  if (hashtagArr.length > MAX_HASHTAG_NUMBERS) {
    return false;
  }
  return true;
}
function validUniqueHashtag() {
  const hashtagArr = hashtagsElement.value.toLowerCase().trim().split(' ');//
  const uniqueHashtag = new Set(hashtagArr);//
  if (uniqueHashtag.size !== hashtagArr.length) {
    return false;
  }
  return true;
}

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

function blockSubmitButton() {
  uploadButton.disabled = true;
  uploadButton.textContent = Message.UPLOAD_BUTTON_TEXT_SENDING;
}

function unblockSubmitButton(){
  uploadButton.disabled = false;
  uploadButton.disabled = Message.UPLOAD_BUTTON_TEXT_ORIGINAL;
}

function setformSubmit(onSuccess) {
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
        // .catch(() => {
        //   showErrorForm(); //создает второй errorFormElement
        // }
        // )
        .finally(unblockSubmitButton);
    }
  });
}

export {setformSubmit};
