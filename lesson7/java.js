//lents ичиндеги сан
//push  масифтин аягына кошот
let arr = [1, 2, 3, 4, 5];

// arr.push(10);

// arr.unshift(0);
// arr.shift();

// arr.splice(1, 2);

// console.log(arr);
// console.log(arr.length);
// console.log(arr.reduce((acc, curr) => acc + curr, 0));

// const doubled = arr.map((num) => num * 2);
// console.log(doubled); // [6, 16, 24, 10, 40]

// const evens = arr.filter((num) => num % 2 === 0);
// console.log(evens);

// console.log(arr[0]);


let numbers = [];
for (let i = 1; i <= 50; i++) {
  numbers.push(i);
}


let result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);         

console.log("Баштапкы массив:", numbers);
console.log("Жуп сандар x2:", result);
