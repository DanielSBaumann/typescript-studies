let obra1 = new Object();
obra1.nome = "Guernica"
obra1.autor = "Picasso"
obra1.valor = 123

let obra2 = new Object();
obra2.nome = "Medusa"
obra2.autor = "Carravagio"
obra2.valor = 456

let obra3 = new Object();
obra3.nome = "Monalisa"
obra3.autor = "Da Vinci"
obra3.valor = 789

let obras = new Array();
obras.push(obra1)
obras.push(obra2)
obras.push(obra3)

//console.log(JSON.stringify(obras))
console.log(obras)

maiorValor(obras)

function maiorValor(obras) {
    let aux = obras[0];
    for (item of obras) {
        if (item.valor > aux.valor) {
            aux = item
        }
    }
    console.log(aux.nome)
}