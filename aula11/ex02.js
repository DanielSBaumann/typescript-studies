function funcao() {
    console.log('Oie')
}
//funcao('OLAAAAAAAAAAAAAAAA');

//  arguments sustenta todos argumentos enviados
function teste() {
    let total = 0;
    for (let item of arguments) {
        total += item;
    }
    return total;
}

//console.log(teste(1, 2, 3, 4, 5, 6, 7, 8, 9));

function teste2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

//teste2(1, 2, 3);

function teste3() {
    if (arguments.length === 0) {
        console.log('Não tem argumentos');
        return;
    }
    for (let item of arguments) {
        console.log(item);
    }
}

//teste3();
//teste3(1, 2, 3);

function teste4(a, b) {
    b = b || 0;
    console.log(a + b);
}

//teste4(2);
//teste4(4 + 3);

function teste5(a, b = 2, c = 3) {
    console.log(a + b + c);
}

//teste5(10, 10);
//teste5(2, undefined, 25);

function teste6({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let pessoa = { nome: 'Daniel', sobrenome: 'Baumann', idade: 31 };
//teste6(pessoa);

function conta(operador, acumulador, ...numeros) {
    console.log('****************************');
    numeros.forEach(numero => {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
        console.log(acumulador)
    });
    console.log('****************************\n\n\n');
}

//conta('+', 0, 10, 10, 10, 30, 40, 10, 50);
//conta('-', 0, 10, 10, 10, 30, 40, 10, 50);
//conta('*', 2, 2, 3, 4, 5, 6);
//conta('/', 512, 2, 2, 2, 2, 2, 2, 2);

const conta = (...args) => { };

