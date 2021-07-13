function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
        get nomeCompleto() { return `${this.nome}  ${this.sobrenome}` },
        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}.`
        },
        set nomeCompleto(nome) {
            nome = nome.split(' ');
            this.nome = nome[0];
            this.sobrenome = nome[1];
        },
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Daniel', 'Baumann', 90, 1.83);
//console.log(p1.fala('banco de dados PostgreSQL'))
//console.log(p1.imc)
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Thomas Baumann';
console.log(p1.nomeCompleto)