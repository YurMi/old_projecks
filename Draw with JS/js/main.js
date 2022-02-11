const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake_btn');
const BRUSH_SIZE = 10;
const MOVE_ALUE = 20;
let hue = 0;


ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = BRUSH_SIZE;
// ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//Получаем ширину и высоту окна в котором рисуем 
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);



//координаты начальной точки рисования 
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


//Слушатель стрелок 
window.addEventListener('keydown', handel_key);

function handel_key(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key })
    }
}

//Рисование стрелками клавиатуры

function draw({ key }) {
    console.log(key);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue = hue + .5;
    //start a Path
    ctx.beginPath();
    ctx.moveTo(x, y);
    //move our x and y values
    switch (key) {
        case 'ArrowUp':
            y = y - MOVE_ALUE;
            break;
        case 'ArrowDown':
            y = y + MOVE_ALUE;
            break;
        case 'ArrowLeft':
            x = x - MOVE_ALUE;
            break;
        case 'ArrowRight':
            x = x + MOVE_ALUE;
            break;
        default:
    }


    ctx.lineTo(x, y);
    ctx.stroke();


}

// Clear canvas and add class="shake" and remove after animet
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height)
    canvas.addEventListener('animationend', function () {
        console.log('done shake');
        canvas.classList.remove('shake');
    }, { once: true })
}
shakeButton.addEventListener('click', clearCanvas)