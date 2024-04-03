import {isEscapeKey} from './util.js';
const ALERT_SHOW_TIME = 5000;
function showErrorForm() {
  const templateErrorForm = document.querySelector('#error').content.querySelector('section');
  const errorFormElement = templateErrorForm.cloneNode(true);
  document.querySelector('body').append(errorFormElement);
  closeErrorFormMessage();
}

function closeErrorFormMessage() {
  const errorFormMessage = document.querySelector('.error');
  const errorFormInner = document.querySelector('.error__inner');
  const errorButton = errorFormMessage.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    errorFormMessage.remove();
  });
  function onDocumentKeydown(evt) {
    if (isEscapeKey(evt) || !errorFormInner.contains(evt.target)) {
      errorFormMessage.remove();
    }
  }
  document.addEventListener('keydown', onDocumentKeydown);//надо удалить + закрывает все.
  document.addEventListener('click', onDocumentKeydown);//надо удалить
}

function showSuccessForm() {
  const templateSuccessForm = document.querySelector('#success').content.querySelector('section');
  const successFormElement = templateSuccessForm.cloneNode(true);
  document.querySelector('body').append(successFormElement);
  closeSuccessMessage();
}

function closeSuccessMessage() {
  const successMessage = document.querySelector('.success');
  const successInner = document.querySelector('.success__inner');
  const successButton = successMessage.querySelector('.success__button');
  function onDocumentKeydown(evt) {
    if (isEscapeKey(evt) || !successInner.contains(evt.target)) {
      successMessage.remove();
    }
  }
  successButton.addEventListener('click', () => {
    successMessage.remove();
  });
  document.addEventListener('keydown', onDocumentKeydown);//надо удалить
  document.addEventListener('click', onDocumentKeydown);//надо удалить
}

function showDataErrorPicture() {
  const templateDataError = document.querySelector('#data-error').content.querySelector('section');
  const dataErrorElement = templateDataError.cloneNode(true);
  document.querySelector('body').append(dataErrorElement);
  setTimeout(() => {
    dataErrorElement.remove();
  }, ALERT_SHOW_TIME);
}
export {showErrorForm, showSuccessForm, showDataErrorPicture};
