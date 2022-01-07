const regexCPF = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/

function Produto(nome, preco) {

    this.nome = nome;
    this.preco = preco;
    Produto.prototype.produtoCompleto = function () {
        return this.nome + ' ' + this.preco;
    }

}

const p1 = new Produto('Amaciante', 4.6);

console.log(p1.produtoCompleto());
