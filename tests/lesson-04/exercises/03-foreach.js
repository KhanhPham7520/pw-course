const numArray = [1, 2, 3];
console.log("Bài 1");

numArray.forEach((item) => console.log(item));

console.log("--------------------------------------------------------");

//2 - Find  min and max value in array && total of them
let sum = 0;
let min = numArray[0];
let max = numArray[0];

numArray.forEach((item) => {
    sum += item;
    if (item > max) {
        max = item;
    } else if (item < min) {
        min = item;
    }
});
console.log("Bài 2");
console.log(`Sum : ${sum} - max : ${max} - min : ${min}`);

console.log("--------------------------------------------------------");


// 3.
let totalMultiNumArray = numArray[0];

console.log("Bài 3");
numArray.forEach((item) => {
    console.log(`New array num : ${item * 2}`);
})

