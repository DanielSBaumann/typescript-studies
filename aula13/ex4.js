//  IIFE  ->  Immediately invoked function expression

(() => {
    const nome = 'Daniel'
    console.log(`Bem vindo ${nome}`)
})();

(() => console.log('Hello!'))();

((idade, peso, altura) => {
    console.log(idade, peso, altura);
})(31, 90, 1.84);