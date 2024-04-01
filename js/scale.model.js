const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const valueScale = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview');

const blockScaleKey = (value) => {
  if (value === '100%') {
    biggerScale.disabled = 'disabled';
  } else if (value === '25%') {
    smallerScale.disabled = 'disabled';
  } else {
    smallerScale.disabled = '';
    biggerScale.disabled = '';
  }
};

function minusScale() {
  valueScale.value = `${parseFloat(valueScale.value) - 25}%`;
  valueScale.setAttribute('value', valueScale.value);
  preview.style.transform = `scale(${parseFloat(valueScale.value) / 100})`;
  blockScaleKey(valueScale.value);
}

function plusScale() {
  valueScale.value = `${parseFloat(valueScale.value) + 25}%`;
  valueScale.setAttribute('value', valueScale.value);
  preview.style.transform = `scale(${parseFloat(valueScale.value) / 100})`;
  blockScaleKey(valueScale.value);
}

smallerScale.addEventListener('click', () => {
  minusScale();
});

biggerScale.addEventListener('click', () => {
  plusScale();
});

export {minusScale, plusScale};
