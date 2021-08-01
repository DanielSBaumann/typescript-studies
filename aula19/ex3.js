/*const num1 = [1, 2, 3];
const num2 = [4, 5, 6];*/

const [num1, num2] = [[1, 2, 3], [4, 5, 6]];
/*const num3 = num1.concat(num2);*/
const num3 = [...num1, ...num2];
console.log(num1, num2, num3);













