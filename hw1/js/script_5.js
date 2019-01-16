"use strict";

luckyTicket();

function luckyTicket() {
//Ввод билета
    const ticket = (prompt('Введите билет.'));
//Проверка правильности ввода (только цифры
    if (Number.isNaN(parseInt(ticket))) {
        alert('Нужно вводить только цифры!');
        return luckyTicket();
  }
//Проверка правильности ввода (6 цифр)
    if (ticket.length !== 6) {
        alert('Билет должен состоять из 6 цифр!');
        return luckyTicket();
    }
//Проверка счастливого билета
    var six = parseInt(ticket) % 10;
    var five = parseInt(ticket[4]);
    var four = parseInt(ticket[3]);

    var first = parseInt(ticket[0]);
    var second = parseInt(ticket[1]);
    var third = parseInt(ticket[2]);

    var summ1 = first + second + third;
    var summ2 =  six + five + four;

    if (summ1 === summ2) {
        alert(`Введенный билет является счастливым!`)
    }
    else {
        alert(`Введен обычный билет.`)
    }
}
