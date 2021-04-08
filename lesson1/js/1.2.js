'use strict';
//арифметические опрераторы

let a=3, b=5, c='8', d='семь';
let res=a+b;
console.log(res);//8

res=a+c;// number+srting=string
console.log(res);//'38'

res=a+d;
console.log(res);//3семь

res=+c;
console.log(res);//8

res=+d;
console.log(res);// NaN-не чесло, арифметическую опперацию выполнить не удалось
// все остальные арифметические операции будут приводить операнды к числу

a=7;
b=3;
res= a/b;
console.log(res);//2.333333335

res=a%b;
console.log(res);//1

res=a/0;
console.log(res);//Infinity

res-a/0;
console.log(res);//-Infinity

b=2
res=a%b;
console.log(res);//1

console.log(9%8);//1
console.log(9%7);//2
console.log(9%6);//3

//оператор присваивания

let num=10;
num=num+10;
console.log(num);//20

num=10;
num+=10;
console.log(num);

num=10;
num*=10;
console.log(num);

num=10;
num/=10;
console.log(num);

num=10;
num-=10;
console.log(num);

//операторы сравнения (true, false)

a=5;
b=8;
c='5';

res=a>b;
console.log(res);//false

console.log(a==c);//true- приравнивает типы данных 
console.log(a===c);//false -сначала сравнивает типы данных
// точно также работает неравенство и строгое неравенство

//тернарный оператор ?

a=8;
b=2;
//  условие/логическое выражение? 
res= a%b===0 ?a/b:a*b;
console.log(res);//4

res=a%b===0;//? true:false
console.log(res); //true

//логические операторы
//&& и, || или 

res= (a%b===0) && (b>100)? 'true': 'false';
console.log(res);//'false'

res= (a%b===0) || (b>100)? 'true': 'false';
console.log(res);//'true'

//! НЕ

res= (a%b===0) && !(b>100)? 'true': 'false';
console.log(res);//'true'

//false- 0, null, unferfined, NaN, ''
//true- все остальное