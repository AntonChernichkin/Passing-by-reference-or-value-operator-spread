"use strict";

// let a = 5,
//     b = a;

// b = b + a;
// console.log(a);
// console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //ссылка на объект
copy.a = 10;
console.log(obj);

function copyO(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
        a: 2,
        b: 5,
        c: {
            x: 7,
            y: 4
        }
};

// const newNumbers = copyO(numbers);  //поверхностное копирование объекта через функцию 

// numbers.a = 10;
// numbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //добавление к объекту numbers объекта add

const clone = Object.assign({}, add);
clone.d = 20;

console.log(clone);
console.log(add);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'adasdasds';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newAaray = [...array];

const q = {
    one: 1,
    two: 2
};
const newQ  = {...q};

q.one = 11;

console.log(newQ);
console.log(q);
