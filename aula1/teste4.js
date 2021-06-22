let prob = '>>><>'
prob = '<<<'
prob='>>>>>>>>>'

carrosel(prob)

function carrosel(sequencia) {
    let index = 0
    let aux = sequencia.split('')
    for (item of aux) {
        item === '>' ? ++index : --index
        index === -1 ? index = 6 : null
        index === 7 ? index = 0 : null
    }
    console.log(index)
}