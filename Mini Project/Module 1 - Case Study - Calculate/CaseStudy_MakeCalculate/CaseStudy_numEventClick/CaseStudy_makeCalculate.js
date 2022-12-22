let tempData = []; /// mảng số liệu thô lưu giá trị các phím khi người dùng click vào phím

let tempDispData = []; //mảng hiện thị phụ để chứa giá phần tử sau khi được xử lý từ mảng dữ liệu thô

let tempValueData = []; /// mảng giá trị phụ chứa dữ liệu sau khi được xử lý từ mảng thô

let mainDispData = []; // mảng hiển thị chính để xử lý joint() và in ra màn hình

let mainDispDataToStr = "";

let mainValueData = []; // mảng giá trị chính để xử lý với hàm eval => kết quả phép toán

let mainValueDataToStr = "";

let output = 0; // tính hàm eval của mảng mainValueData

let alertMathSyntax = document.getElementById("alertmathsyntax"); // Báo lỗi cú pháp

let dispinput = document.getElementById("dispinput"); // Biến gán thẻ HTML cho đích in data người dùng nhập trên màn hình

let result = document.getElementById("resultcal"); // Biến gán thẻ HTML => đích in kết quả cuối

//
// function dispCusIn(){
//     mainDispDataToStr = mainDispData.join("")//.replace(/,/g, ""); // Chuỗi string hiển thị data người dùng input
//     mainValueDataToStr = mainValueData.join("")//.replace(/,/g, "")// Chuỗi string để tính kết quat thông qua hàm eval()
//     dispinput.innerHTML = mainDispDataToStr;
// }
function dispCusIn(){
    mainDispDataToStr = mainDispData.join("")//.replace(/,/g, ""); // Chuỗi string hiển thị data người dùng input
    mainValueDataToStr = mainValueData.join("")//.replace(/,/g, "")// Chuỗi string để tính kết quat thông qua hàm eval()
    dispinput.innerHTML = mainDispDataToStr;
}

//
function dispResult(){
    // if (isNaN(output) || isFinite(output)) {
    //     result.innerHTML = "Math Error";
    // } else {
        result.innerHTML = output;
    //}

}

//
function equa(){
    isEquaOn = true;
    mainValueDataToStr = mainValueData.join("")//.replace(/,/g, "")// Chuỗi string để tính kết quat thông qua hàm eval()
    output = eval(mainValueDataToStr);
    // result.innerHTML = output;
    dispResult();
    console.log(mainDispDataToStr);
    console.log(mainValueDataToStr);
}

//
function del() {
    if (isNotfExponents()){
        if (mainDispData.length !== 0) {
            mainDispData.pop(mainDispData.lenght-1, 1);
            mainValueData.pop(mainValueData.lenght-1, 1);
        };
    } else {
        for(let i = mainDispData.length-1; i > 0; i--){
            if(mainDispData[i] !== "</span>"){
                mainDispData.splice(mainDispData[i], 1);
                break;
            } else {
                if (mainDispData[i-1] == "<span>"){
                    mainDispData.splice(mainDispData[i-1], 2);
                    break
                } else {
                    mainDispData.splice(mainDispData[i-1], 1);
                    break;
                }
            }
        }
    }
    result.innerHTML = "";
    dispCusIn();
    console.log(mainDispDataToStr);
    console.log(mainValueDataToStr);
}

//
function clearall() {
    clearDataArr();
    resetCheck();   
    mainDispData = [];  
    mainValueData = []; 
    dispinput.innerHTML = "";
    result.innerHTML = "";
}
