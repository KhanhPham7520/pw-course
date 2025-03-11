let student = {
    "name": "Alex",
    "age": 10,
    "salary": 20
}


console.log("Bài 1");

console.log("Name : " + student.name);
console.log("Age : " + student.age);

console.log("--------------------------------------------------------");
console.log("Bài 2");
let sum = 0;
for (const key in student) {
    if (typeof student[key] === 'number') {
        sum += student[key];
    }
}

console.log(`Sum of number => ${sum}`);

console.log("--------------------------------------------------------");
console.log("Bài 3");
const array = [];
for (let arr in student) {
    array.push(arr)
}
console.log(array);