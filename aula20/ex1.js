//Filter , Map , Reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*function callbackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;
    } else {
        return false;
    }
}*/

/*const callback = (valor, indice, array) => 
    valor > 10 ? true : false
    
const callback = (valor, indice, array) => valor > 10    
    

const callback = (valor) => valor > 10

const num2 = numeros.filter(callback);

const num2 = numeros.filter(function (value) {
    return value > 10;
})

const num2 = numeros.filter(value => value > 10);*/

const num2 = numeros.filter(value => (value > 10) && value % 2 === 0);

//console.log(num2);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const cincoLetras = pessoas
    .filter(obj => obj.nome.length >= 7);

const maisVelhos = pessoas
    .filter(obj => obj.idade >= 50);

const terminaA = pessoas
    .filter(obj => obj
        .nome
        .toLowerCase()
        .endsWith('a'));

//console.log(cincoLetras);
//console.log(maisVelhos);
console.log(terminaA);

/*const pMais30 = pessoas.filter(obj => obj.idade > 50);
console.log(pMais30);*/
















