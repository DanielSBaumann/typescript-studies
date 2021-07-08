const txt = document.querySelector('#txt');
const btn = document.querySelector('#btn');
const tarefas = document.querySelector('.tarefas');

adcionarTarefasSalvas();

function createLI() {
    const li = document.createElement('li');
    return li;
}

function criaBtnApagar(li) {
    li.innerHTML += '   ';
    const btnApagar = document.createElement('button');
    btnApagar.innerHTML = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
}

function criaTarefa(txtInput) {
    const li = createLI();
    li.innerHTML = txtInput;
    tarefas.appendChild(li);
    criaBtnApagar(li);
    salvarTarefa();
}

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    liTarefas.forEach(item =>
        listaDeTarefas.push(item.innerText.replace(' Apagar', '')));
    const json = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', json);
}

function clearInput() {
    txt.value = '';
    txt.focus();
}

function adcionarTarefasSalvas() {
    const tarefaSalva = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefaSalva);
    listaDeTarefas.forEach(item => criaTarefa(item));
}

txt.addEventListener('keypress', (e) => {
    if (!txt.value) return;
    if (e.keyCode === 13) {
        criaTarefa(txt.value);
        clearInput();
    }
});

btn.addEventListener('click', (e) => {
    if (!txt.value) return;
    criaTarefa(txt.value);
    clearInput();
});

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('apagar')) {
        element.parentElement.remove();
        salvarTarefa();
    }
});