/*


  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let number = 10;
let factorial = 1;
let i = 1;

while (i <= number) {
    factorial *= i;
    i++;
}

console.log(factorial);
