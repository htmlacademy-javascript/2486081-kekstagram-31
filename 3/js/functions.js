/**
 * Функция для проверки длины строки.
 * @param {string} string - Вводная строка.
 * @param {integer} maxLength - Максимальная длина строки.
 * @return {boolean} -true, если длина строки удовлетворяет условию.
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
 * @return {boolean} -true, если строка явлется палиндромом.
 */
function checkPalindrome (string = '') {
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

