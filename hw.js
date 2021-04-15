'use strict'

//1
function getEnding(count){
    let ending;
    if (count>=11&&count<=19) return ending="товаров";
    if (count%10>1&&count%10<5) return ending="товара";
    if (count%10==1) return ending="товар";
    return ending="товаров"
}
let num=81;
console.log(num+' '+getEnding(num));

//2
function range (start, end, step=1){
    let newArr=[];
    let count=0;
    for(let i=start;i<=end;i+=step){
        newArr[count]=i;
        count+=1;
    }
    return newArr;
}
console.log(range(1,10,2));

//3
function spam(text,...words){
    let arrText=text.split(' ');
    let sum=0;
    for(let i=0;i<arrText.length;i++){
        for(let j=0;j<words.length;j++){
            if(arrText[i]==words[j]) sum+=1;
        }
    }
    if (sum==0) return "0 баллов";
    if (sum>=1&&sum<=3) return "1 балл";
    if (sum>=4&&sum<=6) return "2 балла";
    if (sum>=7&&sum<=9) return "3 балла";
    if (sum>=10&&sum<=14) return "4 балла";
    if (sum>14) return "5 баллов";
}
let text="рыбак рыбалка зонт рыбака видит рыбалка цепь из далека";
console.log("Данный текст заспамлен на "+spam(text,"рыбалка", "цепь", "зонт"));

//4
let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];

let newArr1= numsArr.map(elem=>elem.map(num=>num*=10));
console.log(newArr1);

let newArr2= numsArr.map(elem=>elem.filter(num=>num>0));
console.log(newArr2);