//const timer = setTimeout(() => console.log(), 1000);
const timer = (func, TIME, callback) => {
    setTimeout(() => {
        console.log(func);
        callback();
    }, TIME);
}

const rand = (min = 1000, max = 3000) => {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

const f1 = () => timer('f1', rand(), f2);
const f2 = () => timer('f2', rand(), f3);
const f3 = () => timer('f3', rand(), hi);
const hi = () => console.log('Ola');

f1();
/*f1(() =>
    f2(() =>
        f3(() =>
            hi())));*/
/*f1()
f2()
f3()
*/