function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => this.clickBTN();

    this.clickBTN = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-dell')) this.deleteOne();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.btnToDisplay = (value) => this.display.value += value;
    this.clearDisplay = () => this.display.value = '';
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if (!conta)
                return;
            this.display.value = conta;
        } catch (e) {
            return;
        }
    };

}

const calculadora = new Calculadora();
calculadora.inicia();
