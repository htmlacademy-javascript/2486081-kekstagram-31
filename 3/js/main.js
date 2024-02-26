const NUM_OF_GENERATIONS = 25;
const maxLikes = 200;
const minLikes = 15;
const RANDOM_DESCRIPTION = ['Вдохновляюсь!', 'Моя любовь <3', 'Лайк, если не дурак. -_-'];
const RANDOM_NAME = ['Артем', 'Дима', 'Ксюша',];
const RANDOM_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];

/**
 * Функция-генератор идентификатора для id и url.
 * @return {integer} - Сгенерированный идентификатор.
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

/**
 * Функция создания объекта.
 * @return {object} - Объект со сгенерироваными значениями ключей.
 */
function getObject() {
  return ({
    id: generateId(),
    url: `photos/${generateIdPhoto()}.jpg`,
    description: RANDOM_DESCRIPTION[createRandomNumber(0, RANDOM_DESCRIPTION.length - 1)],
    likes:createRandomNumber(minLikes,maxLikes),
    comments: {
      id: createRandomNumber(0,1000),
      avatar: `img/avatar-${createRandomNumber(1,6)}.svg`,
      message: RANDOM_MESSAGE[createRandomNumber(0,RANDOM_MESSAGE.length - 1)],
      name: RANDOM_NAME[createRandomNumber(0,RANDOM_NAME.length - 1)]
    }
  });
}

//Создаем массив и добавляем в него 25 сгенерированных объектов.
// eslint-disable-next-line no-unused-vars
const arrayOfPhotos = Array.from({length: NUM_OF_GENERATIONS}, getObject);
