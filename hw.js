'use strict'

//2
function substrInStr(str1, str2){
let i=0, count=0;
while (true){
    let foundPos=str1.indexOf(str2,i);
    if (foundPos==-1) break;
    i=foundPos+1;
    count+=1
}
return count;
}
console.log(substrInStr("дом домик домой одомашненный","дом"));

//3
function palindrom(str){
    let newStr1=str.toLowerCase().split(' ').join('').split('').join('');
    let newStr2=str.toLowerCase().split(' ').join('').split('').reverse().join('');
    if (newStr1===newStr2) return true;
    return false;
}
console.log(palindrom("а роза упала на лапу Азора"));