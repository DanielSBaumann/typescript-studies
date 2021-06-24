const data = new Date()
const BR = 'pt-BR'
const op = {
    dateStyle: 'full',
    timeStyle: 'short'
}
console.log(data.toLocaleDateString(BR, op))
