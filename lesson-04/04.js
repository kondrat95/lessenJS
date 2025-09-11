/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
//
// let prob = "str"
// function doubleEachCharacter(string) {
//     let result = ""
//     for (let i = 0; i < string.length; i++) {
//         result += string[i] + string[i];
//     }
//
//     return result;
//
// };
//
// let good = doubleEachCharacter(prob);
// console.log(good);

function sumMix(x){
    let result = 0;
    for (let i = 0; i < x.length; i++){
        result +=  Number(x[i])
    }
    return result
}

console.log(sumMix([9, '1', 8, 2]))

