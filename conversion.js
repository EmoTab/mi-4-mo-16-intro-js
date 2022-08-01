var price1 = 31;
var price2 = 10;
var totalPrice = price1 + price2;
// console.log(totalPrice);

var price1 = '31';
var price2 = '10';
var totalPrice = price1 + price2;
// console.log(totalPrice);

var price1 = 31;
var price2 = '10';
var totalPrice = price1 + price2;
// console.log(totalPrice);

var price1 = '31';
var price2 = 10;
var totalPrice = price1 + price2;
// console.log(totalPrice);

var price1Number = parseInt(price1);
// console.log(price1Number);

var price1 = '3.41';
var price1Number = parseInt(price1);
// console.log(price1Number);
// parseInt will remove the number after decimal.
//parseFloate came to rescue those number after decimal it will save them.

var price1Number = parseFloat(price1);
console.log(price1Number);