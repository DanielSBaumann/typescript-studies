const paragrafos = document.querySelector('.paragrafos');

const ps = document.querySelectorAll('p');

const estilos = getComputedStyle(document.body);

const background = estilos.backgroundColor;

console.log(background)
console.log(ps)
ps.forEach(item => {
    item.style.backgroundColor = background;
    item.style.color = 'white';
});

/*ps.forEach(item => console.log(item.outerHTML));
ps.forEach(item => console.log(item.innerHTML));
console.log(ps);
console.log(ps[0].innerHTML);
console.log(ps[0].style);
ps[0].innerHTML = 'Eu gosto de feijão';
console.log(ps[0].innerHTML);*/
