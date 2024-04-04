const STEP_SCALE = 25;
const PERCENT_SCALE = 100;
const Limit = {
  MAX: '100%',
  MIN: '25%'
};

const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const valueScale = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview');// import {preview} from './avatar.js';

const minusScale = () => {
  valueScale.value = `${parseFloat(valueScale.value) - STEP_SCALE}%`;
  valueScale.setAttribute('value', valueScale.value);
  if (valueScale.value === Limit.MIN) {
    smallerScale.disabled = true;
  }
  uploadPreview.style.transform = `scale(${parseFloat(valueScale.value) / PERCENT_SCALE})`;
};

const plusScale = () => {
  valueScale.value = `${parseFloat(valueScale.value) + STEP_SCALE}%`;
  valueScale.setAttribute('value', valueScale.value);
  if (valueScale.value === Limit.MAX) {
    biggerScale.disabled = true;
  }
  uploadPreview.style.transform = `scale(${parseFloat(valueScale.value) / PERCENT_SCALE})`;
};

smallerScale.addEventListener('click', () => {
  minusScale();
  biggerScale.disabled = false;
});

biggerScale.addEventListener('click', () => {
  plusScale();
  smallerScale.disabled = false;
});

export {minusScale, plusScale};
