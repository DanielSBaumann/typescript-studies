let objeto = new Object()
objeto.jaTomouVacina = false
objeto.idade = 65
objeto.temComorbidade = true

solucao(objeto)

function solucao(obj) {
    if (!obj.jaTomouVacina) {
        if (!obj.temComorbidade && obj.idade < 60) {
            console.log("INAPTA");
        }
        if (obj.idade >= 60) {
            console.log("APTA POR IDADE");
            return
        }
        if (obj.temComorbidade) {
            console.log("APTA POR COMORBIDADE");
            return
        }
    } else {
        console.log("JA TOMOU VACINA");
    }
}