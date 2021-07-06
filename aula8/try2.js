function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        //throw('x e y precisam ser números');
        throw new Error('x e y precisam ser números');
    }
    return x + y;
}

try {
    console.log(sum(178, 155));
    console.log(sum('a', 'b'));
} catch (error) {
    console.log('Digite somente números');
}