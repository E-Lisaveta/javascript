'use strict'

//1
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function getObject(obj, from, to){
    let newObj={}
    if (typeof from!='number'||typeof to!='number'||typeof obj!='object'){
        return false;
    }
    for (let key in obj){
        if (obj[key].price>=from&&obj[key].price<to) newObj[key]=obj[key];
    }
    return newObj;
}
console.log(getObject(goods, 3000, 4000))

//2
function searchProduct(obj, title, countToCart){
    if (typeof obj!='object'||typeof title!='string'||typeof countToCart!='number') return false;
    for (let key in obj){
        if(obj[key].title===title){
            if (obj[key].count>=countToCart){
                obj[key].count-=countToCart;
                return true;
            } 
            else if (obj[key].count<countToCart){
                console.log("Недостаточное количество товара на складе");
                return false;
            } 
        }
    }
}
searchProduct(goods,"Флейта",60);

//3
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function allBooks(arr,surname){
    arr=[arr];
    let newArr=[];
    for (let key in books){
        if(books[key].author===surname){
            newArr.push(books[key].title);
        }
    }
    return newArr;
}
console.log(allBooks(books, "Пушкин"));

//4

function compare( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
  
  console.log(books.sort( compare ));

