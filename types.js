//typeof

var price = 100;
// console.log(typeof price);
// output will be number. It mean will say what kind of value is inside the variable.

var price = '100';
// console.log(typeof price);
//here the output will be string. 

var isHappy = true;
// console.log(typeof isHappy);
//here the outpus will be boolean.

var romantic;
// console.log(typeof romantic);
//here is no value inserted so output will be undefined.

//advance
//JS HiCCUPS solve.
//only in sum of 0.1 and 0.2 result will be 0.30000000000000004 which is quite abnormal. Normal will be 0.3 but in other number it will be fine.
//now let's solve it in two steps.
//toFixed will make it string but bring it in normal position, then parseFloat will convert it string to number.
//now the example below
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
// console.log(sum); //it will bring the problem which is called js hiccup 0.30000000000000004.

//now the solution below
sum = sum.toFixed(2); //here inside first brace you need to how much digits you want after decimal sign. The result will give 2 digits afeter decimal sign so, the result be 0.30
// console.log(sum);//it will bring 0.30 as string not as number
//here is the solution is to convert it string to float using parseFloat
sum = parseFloat(sum);
console.log(sum);