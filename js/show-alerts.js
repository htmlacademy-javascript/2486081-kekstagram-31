import {isEscapeKey, ALERT_SHOW_TIME} from './util.js';
import {bodyElement} from './open-close-uploaded.js';


const closeErrorFormMessage = () => {
  const errorFormMessage = document.querySelector('.error');
  const errorFormInner = document.querySelector('.error__inner');
  const errorButton = errorFormMessage.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    errorFormMessage.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
  });

  function onDocumentClick(evt) {
    if(!errorFormInner.contains(evt.target)) {
      errorFormMessage.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  }
  function onDocumentKeydown(evt) {
    if(isEscapeKey(evt)) {
      errorFormMessage.remove();
      document.removeEventListener('click', onDocumentClick);
    }
  }

  document.addEventListener('keydown', onDocumentKeydown, {once: true});
  document.addEventListener('click', onDocumentClick, {once: true});
};

const closeSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  const successInner = document.querySelector('.success__inner');
  const successButton = successMessage.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    successMessage.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
  });

  function onDocumentClick(evt) {
    if(!successInner.contains(evt.target)) {
      successMessage.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  }
  function onDocumentKeydown(evt) {
    if (isEscapeKey(evt)) {
      successMessage.remove();
      document.removeEventListener('click', onDocumentClick);
    }
  }

  document.addEventListener('keydown', onDocumentKeydown, {once: true});
  document.addEventListener('click', onDocumentClick, {once: true});
};

const showErrorForm = () => {
  const templateErrorForm = document.querySelector('#error').content.querySelector('section');
  const errorFormElement = templateErrorForm.cloneNode(true);
  bodyElement.append(errorFormElement);
  closeErrorFormMessage();
};

const showSuccessForm = () => {
  const templateSuccessForm = document.querySelector('#success').content.querySelector('section');
  const successFormElement = templateSuccessForm.cloneNode(true);
  bodyElement.append(successFormElement);
  closeSuccessMessage();
};

const showDataErrorPicture = () => {
  const templateDataError = document.querySelector('#data-error').content.querySelector('section');
  const dataErrorElement = templateDataError.cloneNode(true);
  bodyElement.append(dataErrorElement);
  setTimeout(() => {
    dataErrorElement.remove();
  }, ALERT_SHOW_TIME);
};

export {showErrorForm, showSuccessForm, showDataErrorPicture};
