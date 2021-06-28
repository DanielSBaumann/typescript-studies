function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 60;
let sena = [];

while (sena.length !== 6) {
    const index = random(min, max);
    let add = true;
    sena.forEach(num => {
        if (num === index)
            add = false;
    });
    add ? sena.push(index) : null;
}

console.log(sena);