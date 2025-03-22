let height = 1.64;
let weight = 70;

console.log(height)

let bmiIndex = weight / (height * height);

if (bmiIndex < 18.5) {
    console.log("Chỉ số BMI của bạn là " + bmiIndex + " và bạn bị thiếu cân rồi !!!!");
}

if (bmiIndex >= 18.5 && bmiIndex < 25) {
    console.log("Chỉ số BMI của bạn là " + bmiIndex + " và bạn bị thiếu cân rồi !!!!");
}

if (bmiIndex >= 25 && bmiIndex < 30) {
    console.log("Chỉ số BMI của bạn là " + bmiIndex + " và bạn bị thừa cân rồi !!!!");
}

if (bmiIndex >= 30) {
    console.log("Chỉ số BMI của bạn là " + bmiIndex + " và bạn bị béo phì rồi !!!!");
}


console.log("--------------------------------------------------");

function convertTemperature(temperatureType, temperatureValue) {
    if (temperatureType == 'F') {
        console.log("Độ Farenheit là " + temperatureValue * 9 / 5 + 32);
    }
    if (temperatureType == 'C') {
        console.log("Độ Celsius là " + (temperatureValue - 32) * 5 / 9);
    }
}

convertTemperature('C', 32);

console.log("--------------------------------------------------");

function filterPrimeNumberArray(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++)
        if (number % i === 0) {
            return false;
        }
    return true;
}


function filterPrimes(arr) {
    return arr.filter(filterPrimeNumberArray);
}

let numbers = [12, 19, 23];
console.log(filterPrimes(numbers));

console.log("--------------------------------------------------");

//5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.

const userObj = {
    name : "Khanh",
    email : "phamphannhatkhanh@gmail.com"
}