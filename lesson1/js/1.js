'use strict'; //браузер применяет совремменную версию JS, писать в начале файла
//однострочный комментарий
/* многострочный комментарий*/ 
// все программы состорят из набора инструкций. в конце строчки ставим ;

// отладка
console.log('Данные для проверки'); // промежуточные данные для отладки

// переменные- выделенное место памяти, у которого есть свое имя по которому к нему можно обращаться
// обьявление переменных
let age = 26; // присваивание
age = 27;//преопределение
console.log(age);//вывод в консоль

let userLogin='qwerty', password='qwerty123';// именена чувствительны к регистру
let height=400;
let width=700;

let active, closed=1;

const PI=3.14; // сразу присвоить значение, переопределение невозможно, имена писать полность вверхнем регистре  ELEMENT_STATE
console.log(PI);

//типы данных
// 1 приметивные типы данных
// 2 ссылочные типы данных

//приметивные типы
//числа тип number 
let int=89;
let degree=-100;
let double=9.45;
//строки тип string
degree='-100C';
userLogin='wind009';
userLogin="qwe";
//userLogin= qwe; ошибка синтаксиса

let loginInfo=`Значение переменной userLogin = ${userLogin}`;
console.log(loginInfo);

//логически1 тип boolean- сохранение состояний, проверка условий
active=true;
closed=false;
console.log(active, closed);

//null- значение неизвестно
let books=null;

//undefined- значения не было присвоено
let elem;
console.log(elem);

//определение типа данных преременной typeof имяПеременной
console.log(typeof degree);
console.log(typeof closed);
console.log(typeof userLogin);
