function goiTenToi() {
    console.log("Xin chao, K12");
}


function chaoTheoTenVaLop(ten, lop) {
    console.log(`Xin chao ten toi la ${ten}, den tu lop ${lop}`);
}

chaoTheoTenVaLop("Khanh", "K12");
chaoTheoTenVaLop("Hoang", 11);


console.log("-------------------------------------------------");

function kiemTraDiemSo(diemso) {
    if (diemso >= 9) {
        return "Giỏi"; // trả về giá trị Giỏi
    }
    if (diemso >= 7 && diemso < 9) {
        return "Khá"; // trả về giá trị Khá
    }
    if (diemso >= 5 && diemso < 7) {
        return "Trung Bình"; // trả về giá trị Trung Bình
    }
    if (diemso < 5) {
        return "Kém"; // trả về giá trị Trung Bình
    }
}


const diemSoArr = [1, 2, 8.7, 5.3]; // khai báo mảng
for (let i = 0; i < diemSoArr.length; i++) {
    kiemTraDiemSo(diemSoArr[i]); // truy xuất vị trí
}

const result = kiemTraDiemSo(10);
console.log("Kiem tra diem so sau khi return : " + result);