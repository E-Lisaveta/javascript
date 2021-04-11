'use strict'

//1
let arr1= [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];
for (let i=0;i<arr1.length;i++){
    for (let j=0;j<arr1[i].length;j++){
        arr1[i][j]+=10;
    }
}
console.log(arr1);

//2
let max=0, min=0;
let arr2=[];
arr2.length=7;
for(let i=0;i<arr2.length;i++){
    arr2[i]=parseInt(Math.random()*1000);
}
console.log(arr2);
//смена мест
for (let i=0;i<arr2.length;i++){
    if(arr2[i]>=arr2[max]) max=i;
    if (arr2[i]<=arr2[min]) min=i;
}
console.log(max, min);

//3
let newArr=[];
let count=0;
let arr3=[1, -5, 9, 89, -34, -11, 5];
for (let i=0;i<arr3.length;i++){
    if (arr3[i]<0){
        newArr[count]=arr3[i];
        count++;
    }
}
console.log(newArr);