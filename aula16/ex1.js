//Funcção Construtora
function Pessoa(nome, sobrenome) {
    //Atributos e metodos privados...
    const ID = 99999;
    const inter = () =>
        console.log(`Fuck you`);

    //Atributos e metodos publicos...
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () =>
        console.log(`${this.nome} : sou um metodo`);
}

const p1 = new Pessoa('Daniel', 'Baumann');
const p2 = new Pessoa('Thomas', 'Baumann');
const p3 = new Pessoa('Paula', 'Bastos');

p1.metodo();
console.log(p1.ID);

/*let pessoas = new Array();
pessoas.push(p1);
pessoas.push(p2);
pessoas.push(p3);
pessoas.forEach(item =>
    console.log(item));*/