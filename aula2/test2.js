/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome='Silva',
    idade: 33
};*/

/*
function newPeople(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const p1 = newPeople('Luiz', 'Silva', 35)

console.log(p1)*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Silva',
    idade: 33,
    fala() {
        console.log(`${this.nome}`)
    },
    anoNascimento() {
        console.log(`${this.nome} nasceu em ${2021 - this.idade}`)
    }
};

pessoa1.fala()
pessoa1.anoNascimento()


