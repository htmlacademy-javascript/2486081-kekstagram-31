function getEffect() {
  const noneEffect = document.querySelector('#effect-none');
  const chromeEffect = document.querySelector('#effect-chrome');
  const sepiaEffect = document.querySelector('#effect-sepia');
  const marvinEffect = document.querySelector('#effect-marvin');
  const phobosEffect = document.querySelector('#effect-phobos');
  const heatEffect = document.querySelector('#effect-heat');

  const sliderElement = document.querySelector('.effect-level__slider');
  const valueElement = document.querySelector('.effect-level__value');
  const prevjew = document.querySelector('.img-upload__preview');

  document.querySelector('.img-upload__effect-level').classList.add('hidden');

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step:0.1,
  });

  noneEffect.addEventListener('click', () => {
    prevjew.style.filter = '';
    document.querySelector('.img-upload__effect-level').classList.add('hidden');
  });

  chromeEffect.addEventListener('click', (evt) => {
    if (evt.target.focus) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    }
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      prevjew.style.filter = `grayscale(${valueElement.value})`;
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    });
  });

  sepiaEffect.addEventListener('click', (evt) => {
    if (evt.target.focus) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    }
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      prevjew.style.filter = `sepia(${valueElement.value})`;
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    });
  });

  marvinEffect.addEventListener('click', (evt) => {
    if (evt.target.focus) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
    }
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      prevjew.style.filter = `invert(${valueElement.value}%)`;
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    });
  });

  phobosEffect.addEventListener('click', (evt) => {
    if (evt.target.focus) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      prevjew.style.filter = `blur(${valueElement.value}px)`;
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    });
  });

  heatEffect.addEventListener('click', (evt) => {
    if (evt.target.focus) {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    }
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      prevjew.style.filter = `brightness(${valueElement.value})`;
      document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    });
  });
}
export {getEffect};
