import {getRandomElement, createRandomNumber, createIdGenerator} from'./util.js';
import {NUM_OF_GENERATIONS, Likes, RANDOM_DESCRIPTION, RANDOM_NAME, RANDOM_MESSAGE, NumberOfComments, NumberOfAvatar} from './variables.js';

/**
 * Функция генерации комментариев к фото.
 * @return {object} Объект случайного комментария.
 */
function generateComments() {
  return {
    id: createRandomNumber(0,1000),
    avatar: `img/avatar-${createRandomNumber(NumberOfAvatar.MIN, NumberOfAvatar.MAX)}.svg`,
    message: RANDOM_MESSAGE[getRandomElement(RANDOM_MESSAGE)],
    name: RANDOM_NAME[getRandomElement(RANDOM_NAME)]
  };
}

const generateId = createIdGenerator();
const generateIdPhoto = createIdGenerator();
/**
 * Функция генерации описания фото.
 * @return {object} Объект со случайным описанием фото.
 */
function generateDescriptionPhoto() {
  return {
    id: generateId(),
    url: `photos/${generateIdPhoto()}.jpg`,
    description: RANDOM_DESCRIPTION[getRandomElement(RANDOM_DESCRIPTION)],
    likes: createRandomNumber(Likes.MIN, Likes.MAX),
    comments: Array.from({length: createRandomNumber(NumberOfComments.MIN, NumberOfComments.MAX)}, generateComments)
  };
}
/**
 * Функция получения массива с объектами, которые описывают фото.
 * @return {array} Массив с описанными фотографиями и комментариями.
 */
function getArrayPhotos() {
  const arrayOfPhotos = Array.from({length: NUM_OF_GENERATIONS}, generateDescriptionPhoto);
  return arrayOfPhotos;
}

export {getArrayPhotos};
