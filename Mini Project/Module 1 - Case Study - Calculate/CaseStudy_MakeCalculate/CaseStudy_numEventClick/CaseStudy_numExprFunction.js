// Hàm sin
function fSin() {
    checkNewSeasion();
    tempData.push("sin", "(");
    synDataArr();
    dispCusIn();
    console.log(mainDispDataToStr);
    console.log(mainValueDataToStr);
    clearDataArr()
}

//Hàm cos
function fCos(){
    checkNewSeasion();
    tempData.push("cos", "(");
    synDataArr();
    dispCusIn();
    console.log(mainDispDataToStr);
    console.log(mainValueDataToStr);
    clearDataArr()
}

//Hàm tan
function fTan(){
    checkNewSeasion();
    tempData.push("tan", "(");
    synDataArr();
    dispCusIn();
    console.log(mainDispDataToStr);
    console.log(mainValueDataToStr);
    clearDataArr()
}

//Hàm logarit cơ số e
function fLogaritE(){
    checkNewSeasion();
    tempData.push("ln");
    synDataArr();
    dispCusIn();
    console.log(mainDispDataToStr);
    console.log(mainValueDataToStr);
    clearDataArr()
}

//Hàm logarit cơ số 10
function fLogarit(){
    checkNewSeasion();
    tempData.push("log");
    synDataArr();
    dispCusIn();
    console.log(mainDispDataToStr);
    console.log(mainValueDataToStr);
    clearDataArr()
}

//Hàm căn bậc hai
function fSqrt(){
    checkNewSeasion();
    tempData.push("sqrt", "(");
    synDataArr();
    dispCusIn();
    console.log(mainDispDataToStr);
    console.log(mainValueDataToStr);
    clearDataArr()
}

//Hàm lũy thừa
function fExponents(){
    checkNewSeasion();
    // isFExponent = true;
    tempData.push("^", "(");
    synDataArr();
    dispCusIn();
    console.log(mainDispDataToStr);
    console.log(mainValueDataToStr);
    clearDataArr()
}



