/*let a = 'A';
let b = 'B';
let c = 'C';*/

/*console.log(a, b, c);
[a, b, c] = [1, 2, 3];*/

/*const ordem = [b, c, a];
[a, b, c] = ordem;
console.log(a, b, c);*/

/*let [n1, n2, ...resto] = nums;
console.log(n1);
console.log(n2);
console.log(resto);*/

/*const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [n1, , n3, , n5] = nums;

console.log(n1, n3, n5)*/

const nums = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];

console.log(nums[1][1]);

const [, [, , n6]] = nums;

console.log(n6)
