// && : Cả 2 vế của mệnh đề đều đúng

// const a = 5;
// const b = 7;
// const c = 10;

// if (a < b && b < c) {
//     console.log("A nhỏ hơn B");

// }


// Xếp hạng điểm

// >= 9 => giỏi
// >= 7.0 -> 9.0 => khá
// >= 5 -> 7.0 => trung bình
// < 5 => kém

const diemso = 8;
if (diemso >= 9) {
    console.log("Loai gioi");
}
if (diemso >= 7 && diemso < 9) {
    console.log("Loai kha");
}
if (diemso >= 5 && diemso < 7) {
    console.log("Loai trung binh");
}
if (diemso < 5) {
    console.log("Kem");
}