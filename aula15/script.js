function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        clear: document.querySelector('.btn-clear'),
        
        inicia() {
            this.clickBTN();
        },

        clickBTN() {
            document.addEventListener('click', event => {
                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.btnToDisplay(element.innerText);
                }

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('btn-dell')) {
                    this.deleteOne();
                }

                if (element.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta)
                    return;
                this.display.value = conta;
            } catch (e) {
                return;
            }
        },

        btnToDisplay(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        }


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();

