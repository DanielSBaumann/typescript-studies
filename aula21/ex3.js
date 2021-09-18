/**REDUCE*/

const nums = [5, 50, 80, 1, 2, 3, 5, 6, 11, 15, 22, 27];

/*const total = nums.reduce((aux, obj) => {
    aux += obj
});*/

const total = nums.reduce(function (aux, val) {
    aux += val;
    return aux;
});

console.log(total);