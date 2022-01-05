function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;

    /*Object.defineProperty(this,
        'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true
    });*/

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 600;
//delete p1.estoque;
console.log(p1);
console.log(Object.keys(p1));

for (let key in p1) {
    console.log(key);
}













