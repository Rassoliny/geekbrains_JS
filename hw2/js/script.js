"use strict";

// 1.Объясните почему код даёт именно такие результаты?
// let a = 1, b = 1, c, d;
// c = ++a;
// alert(c); // 2 значение операнда возвращается увеличенным на единицу; a = 2
// d = b++;
// alert(d); // 1 значение операнда возвращается, а затем увеличивается на единицу b = 2
// c = 2 + ++a;
// alert(c); // 5  1 + 1 + a увеличивается до 3 и складывается
// d = 2 + b++;
// alert(d); // 4 2 + b; b увеличивается до 3
// alert(a); // 3
// alert(b); // 3


// 2 Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
// (описать последовательность действий).
// let a = 2; // a = 2
// let x = 1 + (a *= 2); // a = a * 2; x = 1 + 4 = 5


// 3 Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным
// числом);
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;
// var a = Math.floor(Math.random()* 200 - 100);
// var b = Math.floor(Math.random()* 200 - 100);
// if (a >= 0 && b >= 0 && a >= b){
//     alert(a - b);
// } else if (a >= 0 && b >= 0 && b >= a) {
//     alert(b - a);
// } else if (a < 0 && b < 0) {
//     alert(a * b);
// } else if ( a * b < 0){
//     alert(a + b);
// }


// 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами.
// Обязательно использовать оператор return.
function addition(a, b) {
    return (a + b);
}

function subtraction(a, b ) {
    return (a - b);
}

function multiplication(a, b ) {
    return (a * b);
}

function division(a, b ) {
    return (a / b);
}


//
// 5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости
// от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return (arg1 + arg2);

        case 'subtraction':
            return (arg1 - arg2);

        case 'multiplication':
            return (arg1 * arg2);

        case 'division':
            return (arg1 / arg2);

        default:
            alert(`Что-то пошло не так...`)

}

}



// 6**. Программа должна спросить у пользователя количество денег, которое он хочет положить
// в банк. Пользователь должен ввести целое число, а программа должна выдать
// соответствующее сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
// Если пользователь введет любое другое целое число, программа также должна выдать
// соответствующее сообщение, в котором будет отображено это число, а также поставить
// верное окончание в слове "рубль". Для получения верного склонения слова (любого слова с
// числом) вам необходимо создать функцию.

addMoneyToBank();

function addMoneyToBank() {
    const money = parseInt(prompt('Введите cумму, которую Вы желаете положить на счет.'));

    if (Number.isNaN(money)) {
        alert('Введите коррекную сумму!');
        return addMoneyToBank();
  }

    alert(`Ваша сумма в ${money} ${declension(money)} успешно зачислена.`)

    
}

function declension(arg) {
    if (arg % 10 === 0) {
        return (`рублей`);
    } else if (arg % 10 === 1) {
        return (`рубль`);
    } else {
        return (`рубля`);
    }

}