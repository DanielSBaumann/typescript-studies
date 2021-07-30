const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];
console.log(nomes);

/*const removidos = nomes.splice(3, 2, 'Thomas', 'Daniel');
console.log(nomes, removidos);

const removidos = nomes.splice(2, Number.MAX_VALUE);
console.log(nomes, removidos);*/

const removidos = nomes.splice(1, 0, 'Jorge8888]]');
console.log(nomes, removidos);
