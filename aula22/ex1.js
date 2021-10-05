
const nums = [5, 50, 80, 1, 2, 3, 5, 8, 11, 15, 22, 27];
const numerosPar = nums.filter(num => num % 2 === 0);
//console.log(numerosPar);
const dobroPar = nums
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
//console.log(dobroPar);
const totalPar = nums
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((ac, num) => ac + num);
console.log(totalPar);