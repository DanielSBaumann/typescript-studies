/*let index = 1;
while (index <= 10) {
    console.log(index);
    index++;
}*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;

let aux = random(min, max);

while (aux !== 10) {
    console.log(aux);
    aux = random(min, max);
}

console.log(`Finalmente... ${aux}`);