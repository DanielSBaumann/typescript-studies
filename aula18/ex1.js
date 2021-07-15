function* geradora1() {
    //  Código qualquer ...
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
/*for (let valor of g1) {
    console.log(valor)
}
console.log(g1);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);// undefined ...*/

function* geradora2() {
    let i = 1;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();

/*console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);*/

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

/*for (let valor of g4) {
    console.log(valor)
}*/

function* geradora5() {
    yield () => console.log('yeild 1');
    yield () => console.log('yeild 2');
    yield () => console.log('yeild 3');
    yield () => console.log('yeild 4');
}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
const func4 = g5.next().value;

func1();
func2();
func3();
func4();

