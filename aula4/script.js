const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const imc = calcImc()
    setResultado(imc)
});

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = criaP(msg)
    resultado.appendChild(p)
}

function criaP(msg) {
    const p = document.createElement('p')
    p.innerHTML = `Seu IMC é ${msg}`
    return p;
}

function calcImc() {
    const peso = document.querySelector('#peso')
    const altura = document.querySelector('#altura')
    return peso.value / (altura.value * altura.value)
}