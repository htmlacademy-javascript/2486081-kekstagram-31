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
