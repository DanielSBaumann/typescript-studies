const SECOND = 1000;
const MINUTE = 60 * SECOND;
function showTime() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function intervalo() {
    console.log(showTime());
}

//setInterval(intervalo, 2 * SECOND);

/*const TIMER = setInterval(function () {
    console.log(showTime());
}, 3 * SECOND);*/


//OU...
const TIMER = setInterval(() => {
    console.log(showTime());
}, SECOND);

const TIMEOUT = setTimeout(() =>
    clearInterval(TIMER),
    6 * SECOND);