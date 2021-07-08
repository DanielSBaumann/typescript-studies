//  Declaracao de função (Function hoisting)
function hi() {
    console.log('Hi!');
}

//  First-class objects 
const msg = frase => console.log(`Exibindo mensagem : ${frase}`);

//  Dentro de um objeto
const obj = {
    falar() { console.log('Estou falando') },
    rosnar() { console.log('Rosnar') }
}

obj.falar();
obj.rosnar();
