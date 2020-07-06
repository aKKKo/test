//'use strict';

// var number = 5;
// var string = "Hello!";
// var sym = Symbol();
// var Boolean1 = true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log('string'*8);

// let sdf;
// console.log(sdf);

// let person = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(person.name);

// let arr = ['plun.png','orange.jpg','apple.bmp'];

// console.log(arr[0]);

// - to String
// // 1 способ.
// console.log(typeof("ww" + 5));
// // 2 способ.
// console.log("ww" + false);

// // - to Number
// // 1 способ.
// console.log(typeof(Number(null)));
// // 2 способ.
// console.log(5 + + "5");
// // 3 способ.
// console.log(typeof(parseInt('15px', 10)));

// let ans = +prompt("Hello!", '');

// console.log(typeof(!!null));

// let incr = 10,
//     decr = 10;


// let isChecked = false,
//     isClose = true;

// console.log(isChecked || isClose);


if (num < 49) {
    console.log ("Не верно")
} else if (num > 100) {
    console.log ("МногО!");
} else {
    console.log ("Верно");
};

(num == 50) ? console.log ("Верно") : console.log ("Не верно");

switch (num) {
    case num < 49:
        console.log ("Не верно");
        break;
    case num > 100:
        console.log ("Много");
        break;
    case num > 80:
        console.log ("Все еще много");
        break;
    case 50:
        console.log ("Верно");
        break;
    default:
        console.log ("сосамба");
        break;
}

let num = 50;

// while (num < 55) {
//     console.log (num);
//     num++;
// }

do {
    console.log (num);
    num++;
}
while (num < 55)


for (let i = 1; i < 8; i++) {
    if (i == 6){
        continue
    }
    console.log (i)
}