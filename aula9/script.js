const SECOND = 1000;
const timer = document.querySelector('#timer');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

let data = new Date('2001-01-01 00:00:00');
let chrono = null;
let begin = true;

function start() {
    if (begin) {
        black();
        begin = false;
        chrono = setInterval(() => {
            addTime();
            showTime();
        }, SECOND);
    }
}

function red(){
    timer.style.color = '#ff0000'
}

function black(){
    timer.style.color = '#000000'
}

function showTime() {
    timer.innerHTML = '';
    timer.innerHTML = `${data.toLocaleTimeString()}`;
}

function addTime() {
    data.setSeconds(data.getSeconds() + 1);
}

function pause() {
    begin = true;
    red();
    setTimeout(() =>
        clearInterval(chrono),
        100);
}

function clear() {
    pause();
    black();
    data = new Date('2001-01-01 00:00:00');
    chrono = null;
    showTime();
}

iniciar.addEventListener('click', (e) => start());
pausar.addEventListener('click', (e) => pause());
zerar.addEventListener('click', (e) => clear());