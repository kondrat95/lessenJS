/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  let num = Number(str)
    console.log(num)
    if (typeof num === "number" && Number.isNaN(num) === false) {
        return true;
    }
    return false;
  // your code
}


 console.log(isNumeric("123abc")) // Ожидаемый результат: false

