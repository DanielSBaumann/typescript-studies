const timer = document.querySelector('#timer');

let segundos = 0;
let time;
let begin = true;

function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function start() {
    if (begin) {
        begin = false;
        black();
        time = setInterval(() => {
            segundos++;
            timer.innerHTML = criaHoraSegundos(segundos);
        }, 1000);
    }
}

function pause() {
    clearInterval(time);
    red();
    begin = true;
}

function clear() {
    black();
    clearInterval(time);
    timer.innerHTML = '00:00:00';
    segundos = 0;
    begin = true;
}

function red() {
    timer.style.color = '#ff0000'
}

function black() {
    timer.style.color = '#000000'
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.id === 'iniciar')
        start();

    if (el.id === 'pausar')
        pause();

    if (el.id === 'zerar')
        clear();
});