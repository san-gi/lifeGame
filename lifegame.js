let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let tab = []
let tab2 = []

for (let i = 0; i < 8; i++) {
    tab2[i] = []
    for (let j = 0; j < 12; j++) {
        tab2[i][j] = false
    }
}
tab2[2][3] = true;
tab2[3][3] = true;
tab2[4][3] = true;
tab2[5][3] = true;
tab2[6][3] = true;
tab2[3][2] = true;
function makeTab() {
    for (let i = 0; i < 8; i++) {
        tab[i] = []
        for (let j = 0; j < 12; j++) {
            tab[i][j] = tab2[i][j] 
        }
    }
}
makeTab()
const make = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 13; i++) {
        ctx.moveTo(i * 40, 0);
        ctx.lineTo(i * 40, 320);
        ctx.stroke();
    }
    for (let j = 0; j < 9; j++) {
        ctx.moveTo(0, j * 40);
        ctx.lineTo(480, j * 40);
        ctx.stroke();
    }

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 12; j++) {
            n = voisinNb(i, j)
            if (tab[i][j]) {
                if (n == 2 || n == 3) {
                    tab2[i][j] = true
                    console.log("oui")
                } else {
                    tab2[i][j] = false
                }

            }else if(n==3){
                tab2[i][j] = true
            }
        }
    }
    console.log(tab)
    makeTab()
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 12; j++) {
            if (tab[i][j] == true) {
                ctx.beginPath();
                ctx.rect(i * 40, j * 40, 40, 40);
                ctx.fill();
                ctx.closePath();
            }
        }
    }
   
}
const draw = () => {

    make();
}
function voisinNb(x, y) {
    n = 0;
    if (tab[x - 1]) {
        n = tab[x - 1][y - 1] ? n + 1 : n
        n = tab[x - 1][y] ? n + 1 : n
        n = tab[x - 1][y + 1] ? n + 1 : n

    }
    n = tab[x][y - 1] ? n + 1 : n
    n = tab[x][y + 1] ? n + 1 : n

    if (tab[x + 1]) {
        n = tab[x + 1][y - 1] ? n + 1 : n
        n = tab[x + 1][y] ? n + 1 : n
        n = tab[x + 1][y + 1] ? n + 1 : n
    }
    return n
}


setInterval(draw, 1000)


