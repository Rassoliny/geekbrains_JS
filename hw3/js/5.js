"use strict";

// 5*. Дан массив (создать такой же, с такими же значениями):
// ```
// const arr = [
// [2, 4, 6],
// [1, 5, 10],
// [7, 4, 1],
// ];
// ```
// Задания:
// 1 Найти массив, у которого сумма всех чисел максимальна, вывести в console.log
// индекс этого массива.
// 2 Получить и вывести в console.log минимальное значение найденное в массиве,
// который мы получили в первом пункте.

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];

/**
 * Нахождение максимальной суммы строки внутри массива
 * @sum {number} - сумма строки
 * @max_summ {number} - максимальная сумма (производится сравнение sum и summ
 */
let max_summ = 0;
let row_with_max_summ;
for (const row of arr){
    let sum = 0;
    for (const num of row){
        sum = sum + num;
    }
    if (sum > max_summ) {
        max_summ = sum;
        row_with_max_summ = arr.indexOf(row, 0);
    }
}

/**
 * Нахождение минимального элемента в строке с максимальной суммой
 * @type {number}
 */
const min = Math.min.apply(null, arr[row_with_max_summ])
console.log(`Наибольшую сумму элементов имеет массив с индексом ${row_with_max_summ}.`);
console.log(`Его минимальный элемент ${min}.`);