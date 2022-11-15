// Khi click vào phím hàm số mũ fExponents() kích hoạt biến check,
// biến này phục vụ cho việc xử lý đồng bộ data
let isFExponent = false;

// Khi click vào các phím hàm số: sin, cos, log, ln, sqrt... thì kích hoạt thành true,
// báo hiệu biểu thức thứ cấp là một hàm số.
let isSubExpr = false;

// Khi click vào phím equa thì bật chế độ thành true, khi đang trong chế độ này,
// nhập liệu mới sẽ tương đương bộ thao tác: phím AC + sau đó nhập liệu
let isEquaOn = false; 

// Biến gán dòng ký tự được làm mờ để nhắc người dùng nhập đúng cú pháp
// let guideSyntax = "";
let pseudoCRB = "<span style='color:rgb(169, 163, 163); font-weight:bold;font-size: 30px;'>)</span>"
let pseudoXVariable = "<span style='color:rgb(169, 163, 163); font-weight:bold;font-size: 30px;'>x</span>"
// "<span style='color:rgb(169, 163, 163); font-weight:bold;font-size: 30px;'>)</span>"
// "<span style='color:rgb(169, 163, 163); font-weight:bold;font-size: 30px;'>x</span>"

// Khai báo list các symbol phục vụ quá trình xử lý, đồng bộ dữ liệu của người dùng cho việc hiển thị và tính toán
// let listMathSymbol = [
//     /// Các phím gọi đến số
//     // {symbol: "0", dispval:["0"], calval:["0"]},
//     // {symbol: "1", dispval:["1"], calval:["1"]},
//     // {symbol: "2", dispval:["2"], calval:["2"]},
//     // {symbol: "3", dispval:["3"], calval:["3"]},
//     // {symbol: "4", dispval:["4"], calval:["4"]},
//     // {symbol: "5", dispval:["5"], calval:["5"]},
//     // {symbol: "6", dispval:["6"], calval:["6"]},
//     // {symbol: "7", dispval:["7"], calval:["7"]},
//     // {symbol: "8", dispval:["8"], calval:["8"]},
//     // {symbol: "9", dispval:["9"], calval:["9"]},
//     // {symbol: ".", dispval:["."], calval:["."]},
//     // {symbol: "+", dispval:["+"], calval:["+"]},
//     // {symbol: "-", dispval:["-"], calval:["-"]},
//     // {symbol: "(", dispval:["("], calval:["("]},
//     // {symbol: ")", dispval:[")"], calval:[")"]},
//     // {symbol: "*", dispval:["&#215;"], calval:["*"]},
//     // {symbol: "/", dispval:["&#247;"], calval:["/"]},

//     // {symbol: "Math.PI", dispval:["&pi;"], calval:["Math.PI"]},
//     // {symbol: "Math.E", dispval:["e"], calval:["Math.E"]},
//     // {symbol: "Rnd", dispval:["Rnd"], calval:["Math.random()"]},
//     // /// Các phím gọi đến hàm 
//     // {symbol: "^", dispval:["<sup>",pseudoXVariable,"</sup>"], calval:["**"]},
//     // {symbol: "sqrt", dispval:["&#8730;"], calval:["Math.sqrt"]},
//     // {symbol: "log", dispval:["log"], calval:["Math.log10"]},
//     // {symbol: "ln", dispval:["ln"], calval:["Math.log"]},
//     // {symbol: "sin", dispval:["sin","("], calval:["Math.sin","("]},
//     // {symbol: "cos", dispval:["cos","("], calval:["Math.cos","("]},
//     // {symbol: "tan", dispval:["tan","("], calval:["Math.tan","("]},
//     // /// Các phím gọi đến hàm 
//     // {symbol: "arcsin", dispval:["arcsin","("], calval:["Math.asin","("]},
//     // {symbol: "arccos", dispval:["arccos","("], calval:["Math.acos","("]},
//     // {symbol: "arctan", dispval:["arctan","("], calval:["Math.atan","("]},
// ];
list = [
    ["*", "&#215;", "*"], 
    ["/", "&#247;","/"],
    ["Math.PI", "&pi;", "Math.PI"],
    ["Math.E", "e", "Math.E"],
    ["Rnd", "Rnd", "Math.random()"],
    ["^", "^", "**"],
    ["sqrt", "&#8730;", "Math.sqrt"],
    ["log", "log", "Math.log10"],
    ["ln", "ln", "Math.log"],
    ["sin", "sin", "Math.sin"],
    ["cos", "cos", "Math.cos"],
    ["tan", "tan", "Math.tan"],
    ["arcsin", "arcsin", "Math.asin"],
    ["arccos", "arccos", "Math.acos"],
    ["arctan", "arctan", "Math.atan"],
]

// Khai báo class cho việc kiểm tra cú pháp
class MathSyntax{
    arr
    constructor(arr){
        this.arr = arr;
        this.operatorForORB = ["*", "/", "^", ")"];
        this.operatorForCRB = ["+", "-", "*", "/", "^", "(",];
        this.rBMap = this.arr.filter(item => (item == "(" || item == ")"));
    }
    isORBequaCRB(){
        let checkCountORB = 0;
        let checkCountCRB = 0;
        this.arr.forEach(function(item){
            if (item == "("){checkCountORB++};
            if (item == ")"){checkCountCRB++};  
        })
        if (checkCountORB == checkCountCRB) {return true} else {return false}
    }
    isRBSyntaxErr(){
        let checkErr = false;
        for (let i = 0; i < this.arr.length; i++){
            for (let j = 0; j < this.operatorForORB.length; j++){
                if (i == 0 && this.arr[i] == this.operatorForORB[j]) {
                    checkErr = true;
                    if (checkErr){break;};   
                } else if (this.arr[i] == "(" && this.arr[i+1] == this.operatorForORB[j]) {
                    checkErr = true;
                    if (checkErr){ break;}; 
                } else if (this.arr[i] == ")" && this.arr[i-1] == this.operatorForCRB[j]) {
                    checkErr = true;
                    if (checkErr){ break;};
                } 
            };
            if (checkErr){ break;};
        }
        return checkErr;
    }
    isRBPoisionErr(){
        let checkErr = false
        let tempArr = this.rBMap;
        let lastORBIndex = tempArr.lastIndexOf("(");
        let firstCRBIndex = tempArr.indexOf(")", lastORBIndex);
        while (lastORBIndex >= 0 && firstCRBIndex >= 0){
            tempArr.splice(lastORBIndex, (firstCRBIndex-lastORBIndex+1))
            lastORBIndex = tempArr.lastIndexOf("(");
            firstCRBIndex = tempArr.indexOf(")", lastORBIndex);
        }
        if ((lastORBIndex > 0 && firstCRBIndex < 0) || (lastORBIndex < 0 && firstCRBIndex > 0)) {checkErr = true;}
        return checkErr;  
    }   
}

// Hàm đồng bộ hóa dữ liệu
function synDataToDisp(){ //Xử lý và chuyển dữ liệu của mảng thô (tempData) sang mảng tạm hiển thị (tempDisData)
    if (true) {
        for (let j = 0; j < tempData.length; j++){
            let i
            for (i = 0; i < list.length;) {
                if (tempData[j] == list[i][0]){
                    tempDispData.push(list[i][1]);
                    break;
                } else { i++;}
            }
            if (i == list.length) {tempDispData.push(tempData[j])};
        }
    } else {}
};

function synDataToCalc(){ //Xử lý và chuyển dữ liệu của mảng thô (tempData) sang mảng tạm hiển thị (tempValueData)
    if (true) {
        for (let j = 0; j < tempData.length; j++){
            let i
            for (i = 0; i < list.length;) {
                if (tempData[j] == list[i][0]){
                    tempValueData.push(list[i][2]);
                    break;
                } else {i++;}
            }
            if (i == list.length) {tempValueData.push(tempData[j])};
        }
    } else {}
};

function pushDataFromTempToMain(){
    tempDispData.forEach(function(symbol){
        mainDispData.push(symbol);
    });
    tempValueData.forEach(function(symbol){
        mainValueData.push(symbol);
    });
}

function synDataArr(){
    synDataToDisp();
    synDataToCalc();
    pushDataFromTempToMain();
};


function clearDataArr(){
    tempData = [];
    tempDispData = [];
    tempValueData = [];   
};

function isEndSubExpr(arr){
    // Kiểm tra một biểu thức thứ cấp đã được viết hoàn thiện hay chưa thông qua việc đếm số lượng ngoặc đơn mở và đóng
    // Nếu số lượng hai loại này là bằng nhau và ngoặc đóng nằm cuối biểu thức tức là biểu thức thứ cấp đã được hoàn thiện về cú pháp
    let countORB = 0; // count Open Round Bracket = "("
    let countCRB = 0; // count Close Round Bracket = ")"
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "(") {countORB++};
        if (arr[i] == ")") {countCRB++};
    }
    if (countORB == countCRB && arr[arr.length-1] == ")") {return true} else {return false}
};

function isNotfExponents(){
    let isnotfExponent = (mainDispData.indexOf("<span>") < 0);
    if (isnotfExponent && !isFExponent){return true} else {return false}
}


// Đưa tất cả các trạng thái check về defaut
function resetCheck (){
    isFExponent = false;
    isSubExpr = false;
    isEquaOn = false;
}

// Kiểm tra nếu phép tính trước đó đã kết thúc (tức là đã click vào phím '='.
// Nếu trạng thái này xuất hiện, phím số đc click hoạt động đã click phím "=", 
// tương đương với thực hiện phép tính mới).
function checkNewSeasion(){
    if (isEquaOn) {clearall();}
}

//Hàm tính giai thừa
function factorial (num) {
    if (Number.isInteger(num)) {
        let res = 1
        for (let i = num; i > 0; i--) {
            res *= i
        }
        return res;
    } else {}
}

//Hàm tính giá trị biểu thức cần được giai thừa khi phép giai thừa đc gọi
function calcFactorial (arr){
    let pseudoArr = arr;
    let indexFacArr = [];
    let countORB = 0;
    let countCRB = 0;
    let indexBegin = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] == "!") {indexFacArr.push(i)}
    }
    for (let i = 0; i < indexFacArr.length; i++) {
        for (let j = indexFacArr[i]; j > 0; j--) {
            if (arr[j-1] == ")") {
                if (arr[j] == ")") {countCRB++};
                if (arr[j] == "(") {countORB++};
                if (countCRB = 0 && countCRB == countORB){indexBegin = j; break;}
            }
        }
    }
}

