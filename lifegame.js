var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const make = () => {
    for (var i = 0; i < 13; i++) {

        ctx.moveTo(i * 40, 0);
        ctx.lineTo(i * 40, 320);
        ctx.stroke();
    }
    for (var j = 0; j < 9; j++) {
        ctx.moveTo(0, j*40);
        ctx.lineTo(480, j*40);
        ctx.stroke();
    }
}



const draw = () => {

}

make();