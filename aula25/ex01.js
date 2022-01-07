
const produto = { nome: 'Caneca', preco: 1.8 };

Object.defineProperty(produto, 'nome', {
    writable: true,
    configurable: true,
    enumerable: true
});

/*const outraCoisa = {
    ...produto,
    material: 'porcelana'
};/***Spread Operator */

//Ou...

const caneca = Object.assign(
    {},
    produto,
    { material: 'porcelana' }
);

caneca.nome = 'Luiz';

//console.log(produto);
//console.log(outraCoisa);

console.log(Object
    .getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let entry of Object.entries(produto)) {
    console.log(entry);
}

for (let [key, value] of Object.entries(produto)) {
    console.log(key + ' <---> ' + value);
}