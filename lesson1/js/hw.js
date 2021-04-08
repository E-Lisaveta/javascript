'use strict';
//1
let n=56;
let sum= n%10+(n-n%10)/10;
console.log(sum);

//2
a=6, b=9;
a=a+b;
b=a-b;
a=a-b;
console.log('a='+a);
console.log('b='+b);

//3
let h=4, s;
a=5, b=3;
s=2*(a*b+a*h+b*h);
console.log(s);

//4
let start=6, end=9, between;
between=start<end? end-start:-1;
console.log(between);