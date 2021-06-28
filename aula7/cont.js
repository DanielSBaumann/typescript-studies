const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of num) {
    if (numero % 2 === 0) {
        continue;
    }
    console.log(numero);
    if (numero === 7) {
        console.log('Encrontrado')
        break;
    }
}