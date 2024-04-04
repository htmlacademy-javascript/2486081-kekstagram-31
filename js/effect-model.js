const optionsNoUiSlider = {min: 0, max: 1, start: 1, step: 0.1};

const Effects = {
  CHROME: {filter:'grayscale', min: 0, max: 1, start: 1, step: 0.1},
  SEPIA: {filter: ' sepia', min: 0, max: 1, start: 1, step: 0.1},
  MARVIN : {filter: 'invert', min: 0, max: 100, start: 100, step: 1},
  PHOBOS: {filter: 'blur', min: 0, max: 3, start: 3, step: 0.1},
  HEAT: {filter: 'brightness', min: 1, max: 3, start: 3, step: 0.1}
};
const Units = {
  MARVIN: '%',
  PHOBOS: 'px',
};

const uploadForm = document.querySelector('#upload-select-image');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const uploadPreview = document.querySelector('.img-upload__preview');// import {preview} from './avatar.js';
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

const updateValueEffect = (effect, unit = '') => {
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    uploadPreview.style.filter = `${effect.filter}(${valueElement.value}${unit})`;
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

const getEffect = () => {
  uploadForm.addEventListener('change', (evt) => {
    if (evt.target.value === 'none') {
      uploadPreview.style.filter = '';
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
    }
    if (evt.target.value === 'chrome') {
      updateOptionsEffect(Effects.CHROME);
      updateValueEffect(Effects.CHROME);
    }
    if (evt.target.value === 'sepia') {
      updateOptionsEffect(Effects.SEPIA);
      updateValueEffect(Effects.SEPIA);
    }
    if (evt.target.value === 'marvin') {
      updateOptionsEffect(Effects.MARVIN);
      updateValueEffect(Effects.MARVIN, Units.MARVIN);
    }
    if (evt.target.value === 'phobos') {
      updateOptionsEffect(Effects.PHOBOS);
      updateValueEffect(Effects.PHOBOS, Units.PHOBOS);
    }
    if (evt.target.value === 'heat') {
      updateOptionsEffect(Effects.HEAT);
      updateValueEffect(Effects.HEAT);
    }
  });
};

export {getEffect};
