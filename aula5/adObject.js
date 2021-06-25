const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Carlos',
    idade: 33,
    endereco: {
        rua: 'Rivadavia Campos',
        numero: 1000
    }
};

/*const { nome = 'Não existe', sobrenome } = pessoa;
const { endereco } = pessoa;
console.log(nome)
console.log(endereco)*/

const {
    nome: userName = '',
    sobrenome: lastName = null,
    endereco: address = '' } = pessoa;

const { endereco: { rua, numero } } = pessoa;
console.log(userName, lastName)
console.log(rua);
console.log(numero);
