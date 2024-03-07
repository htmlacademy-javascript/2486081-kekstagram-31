/**
 * Функция-генератор случайного числа.
 * @param {integer} min - Нижняя граница диапозона случайного числа.
 * @param {integer} max - Верхняя граница диапозона случайного числа.
 * @return {integer} Случайное число из диапозона.
 */
function createRandomNumber(min, max) {
  const minValue = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const maxValue = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

/**
 * Функция случайного элемента массива
 * @param {array} array - Массив, у которого надо найти случайный элемент.
 * @return {integer} Случайный элемент массива.
 */
function getRandomElement(array) {
  return createRandomNumber(0, array.length - 1);
}

/**
 * Функция-генератор функции идентификатора для id и url.
 * @return {function} Функция, которая генерирует идентификатор.
 */
function createIdGenerator() {
  let lastGenerated = 0;
  return function () {
    lastGenerated ++;
    return lastGenerated;
  };
}

export {getRandomElement, createRandomNumber, createIdGenerator};
