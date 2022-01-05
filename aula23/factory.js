function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criarPessoa('Joao', 'Silva');
console.log(p1.nomeCompleto());