//  Assim...
//const nomes = ['Eduardo', 'Maria', 'Joana'];
//  Ou...
/*const nomes = new Array('Eduardo', 'Maria', 'Joana');

//const novo = nomes; Por referencia...
const novo = [...nomes];//  Por Spread...
//const removido = novo.pop();
const removido = novo.shift();
console.log(nomes);
//console.log(novo);
//console.log(removido);

nomes.push('Amanda');
nomes.push('Thomas');
console.log(nomes);

nomes.unshift('Paula');
nomes.unshift('Daniel');
console.log(nomes);*/

/*const nomes = ['Eduardo', 'Maria', 'Joana', 'Paulo', 'Antonia'];
const novo = nomes.slice(0, -1);
console.log(nomes);
console.log(novo);*/

const nome = 'Daniel Silveira Baumann';
const nomes = nome.split(/\s/);
let meuNome = nomes.join().replace(/,/g, ' ');
//meuNome = meuNome.replaceAll(',', /\s/)
console.log(nomes);
console.log(meuNome);