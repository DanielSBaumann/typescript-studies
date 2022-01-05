function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

/***OU... */

/*class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}*/

const p1 = new Pessoa('Arnaldo', 'Alves');
console.log(p1);