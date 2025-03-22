let arrNum = [1, 2, 3, 4, 3, 55, 23];

console.log("--------------------------------------------------------");
console.log("Bài 1");

let count = 0;
let target = 3;

let firstValue = -1;
let lastValue = -1;



for (let i of arrNum) {
    if (i === target) {
        if (firstValue === -1) {
            firstValue = count;
        }
        lastValue = count;
    }
    count++;
}

console.log(`First value của ${target} là ${firstValue} and last value ${target} là ${lastValue}`);


console.log("--------------------------------------------------------");
console.log("Bài 2");
let str = "Playwright";
let newArr = [];
for (let char of str) {
    newArr.push(char);
}
console.log('New array : ' + newArr.reverse());

console.log("--------------------------------------------------------");
console.log("Bài 3");

const arr = [1, 2, 3, 1, 2, 4, 5]

let countNumArr = {};
let resultOfNumArr = [];

for (let num of arr) {
    countNumArr[num] = (countNumArr[num] || 0) + 1;
}


for (let num of arr) {
    if (countNumArr[num] === 1) {
        resultOfNumArr.push(num);
    }
}
console.log(resultOfNumArr);

