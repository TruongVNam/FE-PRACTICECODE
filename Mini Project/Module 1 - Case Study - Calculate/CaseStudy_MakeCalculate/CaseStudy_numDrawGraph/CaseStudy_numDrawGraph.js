let ctx = document.getElementById("graph");
let fgraph = ctx.getContext("2d");
let xCentral = (ctx.width)/2;
let yCentral = (ctx.height)/2;

//Vẽ hệ trục tọa độ Oxy
function drawOxyAxis(){
    fgraph.beginPath();
    fgraph.moveTo(xCentral, 0);
    fgraph.lineTo(xCentral, 2*yCentral);
    fgraph.lineWidth = 1;
    fgraph.strokeStyle = 'black';
    fgraph.stroke();
    fgraph.beginPath();
    fgraph.moveTo(0, yCentral);
    fgraph.lineTo(2*xCentral, yCentral);
    fgraph.lineWidth = 1;
    fgraph.strokeStyle = 'black';
    fgraph.stroke();
}
drawOxyAxis();

//Tạo class để chuyển đổi điểm từ hàm người nhập vào thành điểm hiển thị trên máy
class ConvertOxyAxis {
        a
        b
        c
        d
        e
        x
        y
    constructor(a, b, c, d, e, x){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.x = x;
        this.y = this.a * Math.pow(this.x, 4) + this.b * Math.pow(this.x, 3) + this.c * Math.pow(this.x, 2) + this.d * this.x + this.e; 
    }
    translateX(){
        let xTrans
        if(this.x >= 0){xTrans = xCentral + this.x;} else {xTrans = xCentral - Math.abs(this.x);};
        return xTrans;
    }
    translateY(){
        let yTrans;   
        if(this.y >= 0){yTrans = yCentral - Math.abs(this.y);} else {yTrans = yCentral + Math.abs(this.y);};
        return yTrans;
    }
}

//Tìm kiếm điểm bắt đầu vẽ và kết thúc vẽ trong màn hình hiển thị
class FindPoinToDrawGraph{
    a
    b
    c
    d
    e
    constructor(a, b, c, d, e){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    }
    findBeginX(){
        let i;
        for (i = 0; true;){
            let iconver = new ConvertOxyAxis(this.a, this.b, this.c, this.d, this.e, i)
            if ((iconver.translateX() < 0 || iconver.translateY() < 0 || iconver.translateY() > 2*yCentral)) {break;} else {i--;}          
        }
        return i;
    }
    findEndX(){
        let i;
        for (i = 0; true;){
            let iconver = new ConvertOxyAxis(this.a, this.b, this.c, this.d, this.e, i)
            if ((iconver.translateX() > 2*xCentral || iconver.translateY() < 0 || iconver.translateY() > 2*yCentral)) {break;} else {i++;}
        }
        return i;
    }
}
    // let graphFx = new FindPoinToDrawGraph(0, 0, 0, 2, 1);
    // console.log(graphFx.findBeginX());

    // let convertFx = new ConvertOxyAxis(0, 0, 0, 2, 1, -19);
    // let xGraph = convertFx.translateX();
    // let yGraph = convertFx.translateY();

    // console.log(xGraph);
    // console.log(yGraph);

class FindExtremaPoint{
    a
    b
    c
    d
    e
    constructor(a, b, c, d, e){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.deltaCubicEqua = (Math.pow(2*this.c, 2) - 12*this.b*this.d);
        this.extremaSquareEqua = -this.d/(2*this.c);
        this.firstXECEPoint = ((-2*this.c)-(Math.sqrt(this.deltaCubicEqua)))/(6*this.b);
        this.secondXECEPoint = ((-2*this.c)+(Math.sqrt(this.deltaCubicEqua)))/(6*this.b);
    }
    isCubicEquation(){
        if(this.a == 0 && this.deltaCubicEqua > 0){return true;} else {return false};
    }
    isSquareEquation(){
        if(this.a == 0 && this.b == 0){return true;} else {return false};   
    }
}

function getGraph(a, b, c, d, e){
    let extremaPoint = new FindExtremaPoint(a, b, c, d, e)
    let graphFx = new FindPoinToDrawGraph(a, b, c, d, e);
    let xBeginDraw = graphFx.findBeginX();
    let xEndDraw = graphFx.findEndX();
    let x = xBeginDraw;
    // let convertFx = new ConvertOxyAxis(a, b, c, d, e, x);
    // let xGraph = convertFx.translateX();
    // let yGraph = convertFx.translateY();
    for (x; x <= xEndDraw;){
        fgraph.beginPath();
        fgraph.lineJoin = "round";
        let convertFx = new ConvertOxyAxis(a, b, c, d, e, x);
        let xGraph = convertFx.translateX();
        let yGraph = convertFx.translateY();
        fgraph.moveTo(xGraph, yGraph);
        x += 0.005;
        convertFx = new ConvertOxyAxis(a, b, c, d, e, x);
        xGraph = convertFx.translateX();
        yGraph = convertFx.translateY();
        fgraph.lineTo(xGraph, yGraph);
        x += 0.005;
        // convertFx = new ConvertOxyAxis(a, b, c, d, e, x);
        // // xGraph = convertFx.translateX();
        // // yGraph = convertFx.translateY();
        fgraph.lineTo(xGraph, yGraph);
        fgraph.lineWidth = 1;
        fgraph.strokeStyle = 'red';
        fgraph.stroke(); 
    }
    // if (extremaPoint.isCubicEquation){
    //     convertFx = new ConvertOxyAxis(a, b, c, d, e, extremaPoint.firstXECEPoint);
    //     fgraph.beginPath();
    //     let xGraph = convertFx.translateX();
    //     let yGraph = convertFx.translateY();
    //     fgraph.moveTo(xGraph, yCentral);
    //     fgraph.lineTo(xGraph, yGraph);
    //     fgraph.lineTo(xCentral, yGraph);
    //     fgraph.lineWidth = 1;
    //     fgraph.strokeStyle = 'blue';
    //     fgraph.stroke();
    // }
    // if (extremaPoint.isCubicEquation){
    //     let convertFx = new ConvertOxyAxis(a, b, c, d, e, extremaPoint.firstXECEPoint);
    //     fgraph.beginPath();
    //     let xGraph = convertFx.translateX();
    //     let yGraph = convertFx.translateY();
    //     fgraph.moveTo(xGraph, yCentral);
    //     fgraph.lineTo(xGraph, yGraph);
    //     fgraph.lineTo(xCentral, yGraph);
    //     fgraph.lineWidth = 1;
    //     fgraph.strokeStyle = 'blue';
    //     fgraph.stroke();
    // }
}
getGraph(0, 0, 0.1, 1, 1);

