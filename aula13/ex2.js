function criaOutraFuncao(nome) {
    //const nome = 'Daniel';
    return () => { return nome };
}

const funcao = criaOutraFuncao('Daniel');
console.dir(funcao);