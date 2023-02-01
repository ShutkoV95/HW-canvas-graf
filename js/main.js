const canvas = document.querySelector('#canvas');

const paintParabola = document.querySelector('.paintParabola');

const paintCubicParabola = document.querySelector('.paintCubicParabola');

const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 500;


const
    cWidth = canvas.clientWidth,
    cHeight = canvas.clientHeight;

const
    scaleX = 50,
    scaleY = 50;

const
    xAxis = Math.round(cWidth / scaleX / 2) * scaleX,
    yAxis = Math.round(cHeight / scaleY / 2) * scaleY;



paintParabola.onclick = function() {
    renderGraph ('red', 2);
}

paintCubicParabola.onclick = function() {
    renderGraph ('green', 3);
}

ctx.font = '20px Arial';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';

drawGrid ('#f7e4c0');

drawAxis ('black');




function drawAxis (axisColor){
    // draw axis
    ctx.beginPath();
    ctx.strokeStyle = axisColor;
    // y
    ctx.moveTo(xAxis, 0);
    ctx.lineTo(xAxis, cHeight);
    // x
    ctx.moveTo(0, yAxis);
    ctx.lineTo(cWidth, yAxis);

    ctx.stroke();
    ctx.closePath();

    //axis digth
    // xAxis
    for (let i = 0; i <= cWidth; i += scaleX) {
        ctx.fillText((i - xAxis) / scaleX, i, yAxis);  
    }
    
    // yAxis
    for (let i = 0; i <= cHeight; i += scaleY) {
        ctx.fillText((yAxis - i) / scaleY, xAxis, i); 
    }
    //Names Graph axis
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.font = '30px Arial';
    // Y
    ctx.fillText('Y', yAxis, scaleY);
    // X
    ctx.fillText('X', (cWidth - scaleX), xAxis);

    ctx.closePath();
}

function drawGrid (gridColor){
    // draw grid
    ctx.beginPath();
    ctx.strokeStyle = gridColor;
    //vert line
    for (let i = 0; i <= cWidth; i += scaleX) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, cHeight); 
    }

    //horiz line
    for (let i = 0; i <= cHeight; i += scaleY) {
        ctx.moveTo(0, i);
        ctx.lineTo(cWidth, i); 
    }

    ctx.stroke();
    ctx.closePath();
}

// drawGraph
function renderGraph (color, number) {
    ctx.fillStyle = color;
    for (let i = 0; i <= cWidth; i ++) {
        const x =(i - xAxis) / scaleX;
        const y = x ** number;

        ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4);
    }
}