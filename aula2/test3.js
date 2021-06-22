/**Primitivos e Referencia */
/*
const a = ['a', 'b', 'c']
const b = a
b.push('d')
console.log(a, b)
const c = [...a]
c.push('XYZ')
console.log(a, b, c)*/

const aa = {
    nome: 'Joao',
    sobrenome: 'Silva'
}

const ab = aa
ab.nome = 'Jose'
console.log(aa, ab)

const ac = { ...aa }
ac.sobrenome = 'Nogueira'
console.log(aa, ab, ac)
