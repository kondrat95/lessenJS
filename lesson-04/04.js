/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

let lessen = "str"

function doubleEachCharacter(string) {
    let stringArray = Array.from(string)
    let stringArrayNew = [];

    for (let i = 0; i < stringArray.length; i++) {
        stringArrayNew.push(stringArray[i]);
        stringArrayNew.push(stringArray[i]);
    }
    return stringArrayNew;
};

let good = doubleEachCharacter(lessen);
console.log(good);



