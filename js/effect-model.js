const Effects = {
  NONE: {filter: 'none'},
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
const uploadPreview = document.querySelector('.img-upload__preview');
document.querySelector('.img-upload__effect-level').classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step:0.1,
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

function updateEffect(effect, value = '') {
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    uploadPreview.style.filter = `${effect.filter}(${valueElement.value}${value})`;
    document.querySelector('.img-upload__effect-level').classList.remove('hidden');
  });
}

function updateOptionsEffect(effect) {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    start: effect.start,
    step: effect.step,
  });
}

function getEffect() {
  uploadForm.addEventListener('change', (evt) => {
    if (evt.target.value === 'none') {
      uploadPreview.style.filter = '';
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
    }
    if (evt.target.value === 'chrome') {
      updateOptionsEffect(Effects.CHROME);
      updateEffect(Effects.CHROME);
    }
    if (evt.target.value === 'sepia') {
      updateOptionsEffect(Effects.SEPIA);
      updateEffect(Effects.SEPIA);
    }
    if (evt.target.value === 'marvin') {
      updateOptionsEffect(Effects.MARVIN);
      updateEffect(Effects.MARVIN, Units.MARVIN);
    }
    if (evt.target.value === 'phobos') {
      updateOptionsEffect(Effects.PHOBOS);
      updateEffect(Effects.PHOBOS, Units.PHOBOS);
    }
    if (evt.target.value === 'heat') {
      updateOptionsEffect(Effects.HEAT);
      updateEffect(Effects.HEAT);
    }
  });
}
export {getEffect};
