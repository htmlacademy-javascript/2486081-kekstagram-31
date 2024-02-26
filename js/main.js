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
