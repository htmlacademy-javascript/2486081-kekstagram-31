import {preview} from './chooser-file.js';

const optionsNoUiSlider = {min: 0, max: 1, start: 1, step: 0.1};

const Effects = {
  CHROME: {filter:'grayscale', min: 0, max: 1, start: 1, step: 0.1, unit: '' },
  SEPIA: {filter: ' sepia', min: 0, max: 1, start: 1, step: 0.1, unit: ''},
  MARVIN : {filter: 'invert', min: 0, max: 100, start: 100, step: 1, unit: '%'},
  PHOBOS: {filter: 'blur', min: 0, max: 3, start: 3, step: 0.1, unit: 'px'},
  HEAT: {filter: 'brightness', min: 1, max: 3, start: 3, step: 0.1, unit: ''}
};

const uploadForm = document.querySelector('#upload-select-image');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
document.querySelector('.img-upload__effect-level').classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: optionsNoUiSlider.min,
    max: optionsNoUiSlider.max,
  },
  start: optionsNoUiSlider.start,
  step: optionsNoUiSlider.step,
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

const updateValueEffect = (effect) => {
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    preview.style.filter = `${effect.filter}(${valueElement.value}${effect.unit})`;
    document.querySelector('.img-upload__effect-level').classList.remove('hidden');
  });
};

const updateOptionsEffect = (effect) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    start: effect.start,
    step: effect.step,
  });
};

const changesEffects = () => {
  uploadForm.addEventListener('change', (evt) => {

    const effectName = evt.target.value.toUpperCase();

    if (evt.target.value === 'none') {
      preview.style.filter = '';
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
    } else if (evt.target.value) {
      updateOptionsEffect(Effects[effectName]);
      updateValueEffect(Effects[effectName]);
    }
  });
};

export {changesEffects};
