/*const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

const multi = (n) => { return n ** 2 };*/
//ou...
/*const multi2 = n => n ** 2

console.log(multi(9))
console.log(multi(16))
console.log(multi(25))*/

const multi = n => n ** 2;

const pitagoras = (n1, n2, n3) => {
    if ((multi(n1) + multi(n2)) == multi(n3)) {
        console.log(`${n1}² + ${n2}² = ${n3}²`);
    } else {
        console.log('Não é triangulo retangulo');
    }
};

pitagoras(3, 4, 5)
pitagoras(5, 10, 15)
