/**
 * Функция для проверки длины строки.
 * @param {string} string - Вводная строка.
 * @param {integer} maxLength - Максимальная длина строки.
 * @return {boolean} true, если длина строки удовлетворяет условию.
 */
function getstringlength(string, maxLength) {
  return string.length <= maxLength;
}

// Строка короче 20 символов
getstringlength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
getstringlength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
getstringlength('проверяемая строка', 10); // false

/**
 * Функция для проверки, является ли строка палиндромом.
 * @param {string} string - Вводная строка.
 * @return {boolean} true, если строка явлется палиндромом.
 */
function checkPalindrome(string = '') {
  string = string.replaceAll(' ','').toLowerCase();
  let reversedLine = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedLine += string[i];
  }
  return string === reversedLine;
}

// Строка является палиндромом
checkPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkPalindrome('ДовОд'); // true
// Это не палиндром
checkPalindrome('Кекс'); // false

const hourInMinutes = 60;
const index = {
  hour: 0,
  min: 1
};
/**
 * Функция для перевода часов в минуты.
 * @param {array} time - Mасссив, в котором записано время виде строки.
 * @return {integer} Время, переведенное из часов в минуты.
 */
const convertToMinutes = (time) => {
  const result = +time[index.hour] * hourInMinutes + +time[index.min];
  return result;
};

/**
 * Функция для проверки времени встречи.
 * @param {string} beginning - Начало рабочего дня.
 * @param {string} end - Конец рабочего дня.
 * @param {string} startMeeting - Начало встречи.
 * @param {integer} lengthMeeting - Продолжительность встречи.
 * @return {boolean} true, если встреча умещается в рабочий день.
 */
function checkMeetingTime(beginning, end,startMeeting,lengthMeeting) {
  const beginningInMinutes = convertToMinutes(beginning.split(':'));
  const endingInMinutes = convertToMinutes(end.split(':'));
  const meetingingDuration = convertToMinutes(startMeeting.split(':')) + lengthMeeting;
  return beginningInMinutes <= meetingingDuration && meetingingDuration <= endingInMinutes;
}

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
checkMeetingTime('08:00', '17:30', '14:00', 90); // true
checkMeetingTime('8:0', '10:0', '8:0', 120); // true
checkMeetingTime('08:00', '14:30', '14:00', 90); // false
checkMeetingTime('14:00', '17:30', '08:0', 90); // false
checkMeetingTime('8:00', '17:30', '08:00', 900); // false
