let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let tab = []
let tab2 = []

for (let i = 0; i < 48; i++) {
    tab2[i] = []
    for (let j = 0; j < 32; j++) {
        tab2[i][j] = false
    }
}
tab2[3][6] = true;
tab2[4][6] = true;
tab2[5][6] = true;
tab2[6][6] = true;
tab2[6][7] = true;
tab2[6][8] = true;
tab2[5][9] = true;
tab2[2][9] = true;
tab2[2][7] = true;
function makeTab() {
    for (let i = 0; i < 48; i++) {
        tab[i] = []
        for (let j = 0; j < 32; j++) {
            tab[i][j] = tab2[i][j] 
        }
    }
}
makeTab()
const make = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 49; i++) {
        ctx.moveTo(i * 10, 0);
        ctx.lineTo(i * 10, 320);

    }
    for (let j = 0; j < 33; j++) {
        ctx.moveTo(0, j * 10);
        ctx.lineTo(480, j * 10);
 
    }

    for (let i = 0; i < 48; i++) {
        for (let j = 0; j < 32; j++) {
            n = voisinNb(i, j)
            if (tab[i][j]) {
                if (n == 2 || n == 3) {
                    tab2[i][j] = true

                } else {
                    tab2[i][j] = false
                }

            }else if(n==3){
                tab2[i][j] = true
            }
        }
    }

    makeTab()
    for (let i = 0; i < 48; i++) {
        for (let j = 0; j < 32; j++) {
            if (tab[i][j] == true) {
                ctx.beginPath();
                ctx.rect(i * 10, j * 10, 10, 10);
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
setInterval(draw, 100)


