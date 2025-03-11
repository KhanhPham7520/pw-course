const student = {
    "name": "Khanh",
    "age": 10,
    "isLoveComputer": true,
    "money": 100.5,
    "local address": "Ho Chi Minh city"
};

const myName = "Khanh";

console.log(student.name);
console.log(student["local address"]);


const student2 = {
    "name": "Khanh",
    "age": 10,
    "isLoveComputer": true,
    "money": 100.5,
    "local address": "Ho Chi Minh city"
};

console.log("-------------------------------------------------");

console.log("Name before modifying : " + student2.name);

console.log("-------------------------------------------------");

student2.name = "David"
console.log("Name after modifying the first time : " + student2.name);

console.log("-------------------------------------------------");

student2["name2"] = "Andre Olana"  // gán biến mới
console.log("Name after modifying the second time: " + student2["name2"]);
