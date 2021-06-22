/*form.onsubmit = function (event) {
        event.preventDefault();
        alert(`Ok!`);
    };*/

function escopo() {

    const form = document.querySelector('#form');
    const result = document.querySelector('#result');

    const pessoas = [];

    function receiveEvent(event) {
        event.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        pessoas
            .push(newPeople(
                nome.value,
                sobrenome.value,
                peso.value,
                altura.value));

        console.log(pessoas);

        result.innerHTML += `
        <br>
        Nome: ${nome.value} <br>
        Sobrenome:${sobrenome.value}<br> 
        Peso:${peso.value}<br> 
        Altura:${altura.value}<br>
        <hr>`;
    }

    function newPeople(nome, sobrenome, peso, altura) {
        return { nome, sobrenome, peso, altura };
    }

    form.addEventListener('submit', receiveEvent);

}

escopo();
