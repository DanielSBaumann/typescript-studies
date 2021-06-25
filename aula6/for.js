/*for (let i = 1; i <= 10; i++) {
    console.log(i);
}*/

/*const frutas = ['pera', 'uva', 'maca', 'banana', 'laranja'];
for (let fruta of frutas) {
    console.log(fruta);
}
//frutas.forEach(fruta => { console.log(fruta) });

for (let i in frutas) {
    console.log(frutas[i]);
}*/

const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Silveira',
    idade: 31
};

for (let keys in pessoa) {
    console.log(`${keys} : ${pessoa[keys]}`);
    //console.log(pessoa[keys])
}