function getValidate() {
  const hashtagsElement = document.querySelector('.text__hashtags');
  const descriptionElement = document.querySelector('.text__description');

  //const uploadButton = document.querySelector('.img-upload__submit');
  const form = document.querySelector('.img-upload__form');

  const regexp = /^#[a-zа-яё0-9]{1,19}$/i;
  const MAX_HASHTAG_NUMBERS = 5;
  const MAX_LENGTH = 140;

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
    'Длина комментария больше 140 символов.'
  );

  function validateHashtag(value) {
    const hashtagArr = hashtagsElement.value.toLowerCase().trim().split(' ');
    const uniqueHashtag = new Set(hashtagArr);
    if (value === '') {
      return true;
    }
    for (const hashtag of hashtagArr) {
      if (regexp.test(hashtag) === false) {
        return false;
      }
    }
    if (hashtagArr.length > MAX_HASHTAG_NUMBERS) {
      return false;
    } else if (uniqueHashtag.size !== hashtagArr.length) {
      return false;
    } else {
      return true;
    }
  }

  pristine.addValidator(
    hashtagsElement,
    validateHashtag,
    'Введён невалидный хэштег'
  );
}

export {getValidate};
