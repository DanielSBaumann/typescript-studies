//  DefineProperty -> Getter & Setter
function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this,
        'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor Invalido');
            }
            estoque = valor;
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3)
//console.log(p1);
//console.log(p1.estoque);
//p1.estoque = 'abcdef';
p1.estoque = 987;

console.log(p1.estoque);