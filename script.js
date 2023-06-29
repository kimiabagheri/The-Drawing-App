const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const numberSize = document.getElementById('size')
const clear = document.getElementById('clear')

let size = 5
let isPressed = false
let x
let y
let colorInput = document.getElementById("color");


increase.addEventListener('click', incSize)
decrease.addEventListener('click', decSize)
clear.addEventListener('click', clearPage)

colorInput.addEventListener("change", function() {
    ctx.strokeStyle = colorInput.value;
    ctx.fillStyle = colorInput.value;
});

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
    drawCircle(x, y)
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    };
});

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function incSize() {
    if(size > 29) {
        size = 30
    } else {
        size += 1
        numberSize.innerText = size
    };
};
function decSize() {
    if(size < 2) {
        size = 1
    } else {
    size -= 1
    numberSize.innerText = size
    }
}

function clearPage(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}