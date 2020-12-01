let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let tab = []
let tab2 = []
let sto = false
let vitesse = 100
for (let i = 0; i < 48; i++) {
    tab2[i] = []
    for (let j = 0; j < 32; j++) {
        tab2[i][j] = false
    }
}
random()
// tab2[3][6] = true;
// tab2[4][6] = true;
// tab2[5][6] = true;
// tab2[6][6] = true;
// tab2[6][7] = true;
// tab2[6][8] = true;
// tab2[5][9] = true;
// tab2[2][9] = true;
// tab2[2][7] = true;

// tab2[1][6] = true;
// tab2[5][8] = true;
// tab2[9][8] = true;
// tab2[9][9] = true;
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
        ctx.stroke();

    }
    for (let j = 0; j < 33; j++) {
        ctx.moveTo(0, j * 10);
        ctx.lineTo(480, j * 10);
        ctx.stroke();

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

            } else if (n == 3) {
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
    if (!sto)
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

function pause() {
    sto = sto ? false : true
    console.log(sto)
}

function random() {
    console.log("rannn")
    for (let i = 0; i < 48; i++) {
        tab2[i] = []
        for (let j = 0; j < 32; j++) {
            tab2[i][j] = Math.random() < 0.5
        }
    }
}


