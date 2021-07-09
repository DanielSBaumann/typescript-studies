function createPerson(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome }
}


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const hi = falaFrase('Hi');

console.log(hi);
console.log(hi('World'));