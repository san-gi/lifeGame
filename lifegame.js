let canvas = document.getElementById("myCanvas");
let body = document.getElementById("b");
let ctx = canvas.getContext("2d");
let x = window.innerWidth;
let y = window.innerHeight;
ctx.canvas.width = window.innerWidth - 1;
ctx.canvas.height = window.innerHeight - 1;
let isDrawing = false;
let l = false;
let a = false;
ctx.fillStyle = '#eee';
window.addEventListener("resize", event => {
    
    
    x = window.innerWidth;
    y = window.innerHeight;
    ctx.canvas.width = window.innerWidth - 1;
    ctx.canvas.height = window.innerHeight - 1;
    ctx.fillStyle = '#666666';
    vitesse = 50
  
    for (let i = 0; i < x / 10; i++) {
        if (i >= tab2.length) {
            tab2[i] = []
            tab = []
        }
    }
 
    makeTab()

});



body.addEventListener("click", event => {
    isDrawing = false;
    if (isDrawing) {
        tab2[Math.ceil(event.x / 10) - 1][Math.ceil(event.y / 10) - 1] = true

        ctx.beginPath();
        ctx.rect((Math.ceil(event.x / 10) - 1) * 10, (Math.ceil(event.y / 10) - 1) * 10, 10, 10);
        ctx.fill();
        ctx.closePath();

    }
})
canvas.addEventListener("click", event => {

    if (!a) {
        ctx.fillStyle = '#666666';
        $("#button").toggleClass("buttonsAnimates")
        $("#button").toggleClass("button")

        a = true
    }
    
})
body.addEventListener('mousedown', event => {
    isDrawing = true;
    if (isDrawing) {
        tab2[Math.ceil(event.x / 10) - 1][Math.ceil(event.y / 10) - 1] = true

        ctx.beginPath();
        ctx.rect((Math.ceil(event.x / 10) - 1) * 10, (Math.ceil(event.y / 10) - 1) * 10, 10, 10);
        ctx.fill();
        ctx.closePath();

    }
})
body.addEventListener('mousemove', e => {
    if (isDrawing) {
        tab2[Math.ceil(e.x / 10) - 1][Math.ceil(e.y / 10) - 1] = true

        ctx.beginPath();
        ctx.rect((Math.ceil(e.x / 10) - 1) * 10, (Math.ceil(e.y / 10) - 1) * 10, 10, 10);
        ctx.fill();
        ctx.closePath();

    }
})

let tab = []
let tab2 = []
let sto = false
let vitesse = 100
for (let i = 0; i < x / 10; i++) {
    tab2[i] = []
    for (let j = 0; j < y / 10; j++) {
        tab2[i][j] = false
    }
}


vague()
function makeTab() {
    for (let i = 0; i < x / 10; i++) {
        tab[i] = []
        for (let j = 0; j < y / 10; j++) {
            tab[i][j] = tab2[i][j]
        }
    }
}
makeTab()
const make = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < x / 10; i++) {
        ctx.moveTo(i * 10, 0);
        ctx.lineTo(i * 10, y);
        if (l)
            ctx.stroke();

    }
    for (let j = 0; j < y / 10; j++) {
        ctx.moveTo(0, j * 10);
        ctx.lineTo(x, j * 10);
        if (l)
            ctx.stroke();

    }

    for (let i = 0; i < x / 10; i++) {
        for (let j = 0; j < y / 10; j++) {
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
    for (let i = 0; i < x / 10; i++) {
        for (let j = 0; j < y / 10; j++) {
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
    // if (tab[x - 1]) {
    //     n = tab[x - 1][y - 1] ? n + 1 : n
    //     n = tab[x - 1][y] ? n + 1 : n
    //     n = tab[x - 1][y + 1] ? n + 1 : n
    // }
    // n = tab[x][y - 1] ? n + 1 : n
    // n = tab[x][y + 1] ? n + 1 : n

    // if (tab[x + 1]) {
    //     n = tab[x + 1][y - 1] ? n + 1 : n
    //     n = tab[x + 1][y] ? n + 1 : n
    //     n = tab[x + 1][y + 1] ? n + 1 : n
    // }
    let x1 = x - 1 < 0 ? tab.length - 1 : x - 1;
    let x2 = x;
    let x3 = x + 1 > tab.length - 1 ? 0 : x + 1;
    let y1 = y - 1 < 0 ? tab[0].length - 1 : y - 1;
    let y2 = y;
    let y3 = y + 1 > tab[0].length - 1 ? 0 : y + 1;
    n = tab[x1][y1] ? n + 1 : n
    n = tab[x1][y2] ? n + 1 : n
    n = tab[x1][y3] ? n + 1 : n
    n = tab[x2][y1] ? n + 1 : n
    n = tab[x2][y3] ? n + 1 : n
    n = tab[x3][y1] ? n + 1 : n
    n = tab[x3][y2] ? n + 1 : n
    n = tab[x3][y3] ? n + 1 : n


    return n
}
inter = setInterval(draw, vitesse)

function pause() {
    sto = sto ? false : true

}
function spaceShip(){
    var t = [[true,false,true,false],
            [false,false,false,true],
            [false,false,false,true],
            [true,false,false,true],
            [false,true,true,true]]
            return t
}
function vague(){

    addtoTab(spaceShip(),60,10)
    addtoTab(spaceShip(),50,10)
    addtoTab(spaceShip(),30,20)
    addtoTab(spaceShip(),30,20)
    addtoTab(spaceShip(),40,20)
    addtoTab(spaceShip(),50,20)
    addtoTab(spaceShip(),40,30)
    addtoTab(spaceShip(),20,30)
    addtoTab(spaceShip(),10,40)
    addtoTab(spaceShip(),40,40)
    addtoTab(spaceShip(),50,40)
    addtoTab(spaceShip(),60,40)
    
}

function addtoTab(f,xx,yy){
 

    for (let i = 0; i <f.length; i++) {
        for (let j = 0; j <f[0].length; j++) {
            tab2[i+xx][j+yy] = f[i][j]
        }
    }
}

function clean(){
    console.log("oui")
    for (let i = 0; i < x / 10; i++) {
        tab2[i] = []
        for (let j = 0; j < y / 10; j++) {
            tab2[i][j] = false
            tab[i][j] = false
        }
    }
}
function random() {

    for (let i = 0; i < x / 10; i++) {
        tab2[i] = []
        for (let j = 0; j < y / 10; j++) {
            tab2[i][j] = Math.random() < 0.5
        }
    }
}


function rapi() {
    clearInterval(inter)
    vitesse /= 2;

    inter = setInterval(draw, vitesse)

}

function lent() {
    clearInterval(inter)
    vitesse *= 2;
    inter = setInterval(draw, vitesse)
}

function ligne() {
    l = !l
}

function leaveGame() {
     l = false;
     a = false;
    ctx.fillStyle = '#eee';
    $("#button").toggleClass("buttonsAnimates")
    $("#button").toggleClass("button")
}
