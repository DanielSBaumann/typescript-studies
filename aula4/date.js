/*const data = new Date();
console.log(data.toString())*/

/*const hours = 60 * 60 * 3 * 1000
const day = 60 * 60 * 24 * 1000

const data2 = new Date(0 + hours + day);
console.log(data2.toString())*/

/*const data = new Date(2019, 3, 20, 15, 14, 27, 500)
console.log(data.toString())*/

/*const niver = new Date(1989, 10, 4)
console.log(niver.toString())
console.log(niver.getDay())*/

const niver = new Date('1989-11-04 12:35:00')
console.log(niver.toString())
console.log(niver.getDate())
console.log(niver.getMonth() + 1) //mes começa do zero
console.log(niver.getFullYear())
console.log(niver.getDay()) // 0 -> Domingo , 6 -> Sabado
console.log(niver.getHours())
