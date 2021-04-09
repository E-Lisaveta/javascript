'use strict'

//1
let count=77;
if (count<=100&&count>=90) console.log("Отлично");
else if (count<=89&&count>=60) console.log("Хорошо");
else if (count<=59&&count>=40) console.log("Удовдетворительно");
else if(count<=39&&count>=0) console.log("попробуй потом");

//2
let a=parseInt(prompt("Первый операнд:"));
let b=parseInt(prompt("Второй операнд:"));
let c=parseInt(prompt("Оператор:"));
switch(c){
    case 3: console.log(a+b);
    break;
    case 5: console.log(a-b);
    break;
    case 7: console.log(a*b);
    break;
    case 9: console.log(a/b);
    break;
}

//3
let rand=(Math.random()*490+1)+10;
if(rand>25&&rand<200) console.log(`Число ${rand} содержится в интервале (25; 200)`);
else console.log(`Число ${rand} не содержится в интервале (25; 200)`);

//4
for (let i=1;i<=20;i++){
    let res=i*2;
    console.log(res);
}

//5
let one = 0, two=1, fib;
let n=10;
for (let i=0; i<=n; i++){
    console.log(one);
    fib=one+two;
    one=two;
    two=fib;
}

//6
let n=2;
for (let i=1;i<=n;i++){
    for(let j=0;j<=9;j++){
        console.log(`${i}*${j}=${i*j}`)
    }
}

//7

let userNum=parseInt(prompt("Загадайте число от 1 до 100 : "));
let left=0, right=100;
let mb=(left+right)/2;
while(true){
    let ans=parseInt(prompt(`Число = ${mb}?`));
    if (ans===1){ 
        console.log(`Вы загадали число ${mb}`);
        break;
    }
    else ans=parseInt(prompt(`Число меньше ${mb}?`));
    if (ans===1)
        right=mb;
    else 
        left=mb;
    mb=(left+right)/2;
    
}


