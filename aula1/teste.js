const num1 = 30

count(num1)

function count(num) {
    if (num <= 20) {
        console.log("VOCE CONSEGUE, MANINHO")
    } else {
        let aux = 21
        while (aux <= num) {
            console.log(aux)
            aux++
        }
    }
}