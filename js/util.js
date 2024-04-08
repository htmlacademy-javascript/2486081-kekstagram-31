const RERENDER_DELAY = 500;
const DEFAULT_VALUE_SCALE = '100%';
const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = RERENDER_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {isEscapeKey, debounce, RERENDER_DELAY, DEFAULT_VALUE_SCALE, ALERT_SHOW_TIME};
