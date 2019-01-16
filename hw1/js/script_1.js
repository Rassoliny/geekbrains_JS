"use strict";

copyName();
mathOperations();
celsiusToFahrenheit();

function celsiusToFahrenheit() {
    // Спрашиваем у пользователя температуру в Цельсиях
    const celsius = parseInt(prompt('Введите температуру в Цельсиях.'));

    // Если пользователь ввел не число - сообщаем ему об этом.
  if (Number.isNaN(celsius)) {
    alert('Необходимо ввести значение температуры в Цельсиях.');
    return celsiusToFahrenheit();
  }

  // Перевод температуры из Цельсиев в Фаренгейты
  let fahrenheit = (9 / 5) * celsius + 32;
  return alert(`Температура ${fahrenheit} по Фаренгейту.`)
}

function copyName(){
  let admin;
  let name = `Василий`;

  admin = name;
  console.log(admin)
}

function mathOperations() {
  console.log(10+10+"10");//2010 - слева числа, справа текст. Сперва произойдет сложение
  console.log(10+"10"+10);//101010 - текст по середине. Все станет строкой
  //console.log(10+10++"10");//ошибка компилятора
  console.log(10/-"");//-Infinity. Деление на -0
  console.log(10/+"2.5"); //4. Деление 10 на 2.5, т.к. текст справа

}


// async указывает браузеру, что скрипт может быть выполнен ассинхронно.
// defer отрабатывает только после того, как HTML будет полностью разобран

