//циклдар

// for

// while

// for ( i = 0; i<10; i++) {
//     console.log("hello world" +i);

// }

// let i = true;
// while (i ){
//     console.log("hello world" +i);
//     i++;

// }

// == - проверка на равенство
// == - проверка на равенство и тип данных
// console.log(5 == '5'); true
// console.log(5 === '5'); false

// for (i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// for (i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (i = 0; i < 10; i++) {
//   for (j = 0; j < 5; j++)
//     if (i % 2 == 0) {
//       console.log(i+'*'+j+'='+i*j);
//     }
// }

let password = "1234";
let atem = 3;
let userpasword = prompt("ведите пароль");

while (userpasword !== password && atem > 1) {
  atem--;
  userpasword = prompt(`неверно осталось попыток: ${atem}`);
}
if (userpasword === password) {
  alert("вы вощли");
} else {
  alert("лимит закончен");
}

// let wath = prompt("канча таблица керек");
// let wo = prompt("канчага чейин есептелинсин");

// let i = 1;
// while (i <= wath) {
//   let j = 1;
//   while (j <= wo) {
//     console.log(i + "*" + j + "=" + i * j);
//     j++;
//     i++;
//   }
// }
