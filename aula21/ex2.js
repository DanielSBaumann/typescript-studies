/**MAP*/

/*const nums = [5, 50, 80, 1, 2, 3, 5, 6, 11, 15, 22, 27];

const dobro = nums
    .map(val => val * 2);

console.log(dobro);*/

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

/*const nomes = pessoas
    .map(obj => obj.nome);

console.log(nomes);*/

/*const idades = pessoas
    .map(obj => obj.idade);*/

/**OU...*/

/*const idades = pessoas
    .map(obj => ({ idade: obj.idade }));

console.log(idades);*/

const comID = pessoas
    .map((obj, index) =>
        ({ id: ++index, nome: obj.nome, idade: obj.idade }));

console.log(comID);

console.log("\n\n\n");

console.log(pessoas);