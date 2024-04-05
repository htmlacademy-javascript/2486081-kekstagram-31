import {isEscapeKey} from './util.js';
const ALERT_SHOW_TIME = 5000;

const closeErrorFormMessage = () => {
  const errorFormMessage = document.querySelector('.error');
  const errorFormInner = document.querySelector('.error__inner');
  const errorButton = errorFormMessage.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    errorFormMessage.remove();
  });

  const onDocumentClick = (evt) => !errorFormInner.contains(evt.target) ? errorFormMessage.remove() : false;
  const onDocumentKeydown = (evt) => isEscapeKey(evt) ? errorFormMessage.remove() : false;

  document.addEventListener('keydown', onDocumentKeydown, {once: true});//закрывает все.
  document.addEventListener('click', onDocumentClick, {once: true});
};

const closeSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  const successInner = document.querySelector('.success__inner');
  const successButton = successMessage.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    successMessage.remove();
  });

  const onDocumentClick = (evt) => !successInner.contains(evt.target) ? successMessage.remove() : false;
  const onDocumentKeydown = (evt) => isEscapeKey(evt) ? successMessage.remove() : false;

  document.addEventListener('keydown', onDocumentKeydown, {once: true});
  document.addEventListener('click', onDocumentClick, {once: true});
};

const showErrorForm = () => {
  const templateErrorForm = document.querySelector('#error').content.querySelector('section');
  const errorFormElement = templateErrorForm.cloneNode(true);
  document.querySelector('body').append(errorFormElement);
  closeErrorFormMessage();
};

const showSuccessForm = () => {
  const templateSuccessForm = document.querySelector('#success').content.querySelector('section');
  const successFormElement = templateSuccessForm.cloneNode(true);
  document.querySelector('body').append(successFormElement);
  closeSuccessMessage();
};

const showDataErrorPicture = () => {
  const templateDataError = document.querySelector('#data-error').content.querySelector('section');
  const dataErrorElement = templateDataError.cloneNode(true);
  document.querySelector('body').append(dataErrorElement);
  setTimeout(() => {
    dataErrorElement.remove();
  }, ALERT_SHOW_TIME);
};

export {showErrorForm, showSuccessForm, showDataErrorPicture};
