import {preview} from './chooser-file.js';

const STEP_SCALE = 25;
const PERCENT_SCALE = 100;
const RADIX = 10;
const Limit = {
  MAX: '100%',
  MIN: '25%'
};


const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const valueScale = document.querySelector('.scale__control--value');

const minusScale = () => {
  if (valueScale.value !== Limit.MIN) {
    valueScale.value = `${parseInt(valueScale.value, RADIX) - STEP_SCALE}%`;
    valueScale.setAttribute('value', valueScale.value);
    preview.style.transform = `scale(${parseInt(valueScale.value, RADIX) / PERCENT_SCALE})`;
  }
};

const plusScale = () => {
  if (valueScale.value !== Limit.MAX) {
    valueScale.value = `${parseInt(valueScale.value, RADIX) + STEP_SCALE}%`;
    valueScale.setAttribute('value', valueScale.value);
    preview.style.transform = `scale(${parseInt(valueScale.value, RADIX) / PERCENT_SCALE})`;
  }
};

smallerScale.addEventListener('click', () => {
  minusScale();
});
biggerScale.addEventListener('click', () => {
  plusScale();
});

export {minusScale, plusScale, valueScale};
