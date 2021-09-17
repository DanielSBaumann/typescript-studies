//Filter_Map_Reduce

/*const nums = [5, 50, 80, 1, 2, 3, 5, 6, 11, 15, 22, 27];
const numFiltrados = nums.filter(num => num > 10);
console.log(numFiltrados);*/

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasNomeGrande = pessoas
    .filter(obj => obj.nome.length >= 6);

console.log(pessoasNomeGrande)

const pessoasIdosas = pessoas
    .filter(obj => obj.idade >= 50);

//console.log(pessoasIdosas);