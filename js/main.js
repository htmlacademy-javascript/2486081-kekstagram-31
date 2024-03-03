const NUM_OF_GENERATIONS = 25;
const MAX_LIKES = 200;
const MIN_LIKES = 15;
const RANDOM_DESCRIPTION = ['Вдохновляюсь!', 'Моя любовь <3', 'Лайк, если не дурак. -_-'];
const RANDOM_NAME = ['Артем', 'Дима', 'Ксюша',];
const RANDOM_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];

/**
 * Функция-генератор функции идентификатора для id и url.
 * @return {function} - Функция, которая генерирует идентификатор.
 */
function createIdGenerator() {
  let lastGenerated = 0;
  return function () {
    lastGenerated += 1;
    return lastGenerated;
  };
}
const generateId = createIdGenerator();
const generateIdPhoto = createIdGenerator();

/**
 * Функция-генератор случайного числа.
 * @param {integer} min - Нижняя граница диапозона случайного числа.
 * @param {integer} max - Верхняя граница диапозона случайного числа.
 * @return {integer} - Случайное число из диапозона.
 */
function createRandomNumber(min,max) {
  const minValue = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const maxValue = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}

//Функция случайного элемента массива
function getRandomElement (array) {
  return createRandomNumber(0,array.length - 1);
}

//Функция создания комментов
function getObjectComments () {
  return {
    id: createRandomNumber(0,1000),
    avatar: `img/avatar-${createRandomNumber(1,6)}.svg`,
    message: RANDOM_MESSAGE[getRandomElement(RANDOM_MESSAGE)],
    name: RANDOM_NAME[getRandomElement(RANDOM_NAME)]
  };
}

/**
 * Функция создания объекта.
 * @return {object} - Объект со сгенерироваными значениями ключей.
 */
function getObject() {
  return {
    id: generateId(),
    url: `photos/${generateIdPhoto()}.jpg`,
    description: RANDOM_DESCRIPTION[getRandomElement(RANDOM_DESCRIPTION)],
    likes:createRandomNumber(MIN_LIKES,MAX_LIKES),
    comments: Array.from({length: createRandomNumber(0,30)}, getObjectComments)
  };
}

//Создаем массив и добавляем в него 25 сгенерированных объектов.
// eslint-disable-next-line no-unused-vars
const arrayOfPhotos = Array.from({length: NUM_OF_GENERATIONS}, getObject);
