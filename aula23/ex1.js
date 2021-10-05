const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Baumann'
};
console.log(pessoa.nome);
//OU...
const chave = 'sobrenome';
console.log(pessoa[chave]);

const pessoa2 = new Object();
pessoa2.nome = 'Thomas';
pessoa2.sobrenome = 'Baumann';
pessoa2.idade = 31;
pessoa2.falarNome = function () {
    return (`${this.nome} está falando!`);
}

//console.log(pessoa2.falarNome());

pessoa2.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa2.getDataNascimento());

for (let chave in pessoa2) {
    console.log(pessoa2[chave], chave);
}