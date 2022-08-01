//Problem - 1: Harry's mom gae him money to purchase some oranges and apples> How much the shopkeepr will return?
//Solution: 
var momGaveHim = 1000;
var applesPrice = 540;
var orangesPrice = 250;
var totalFruitsPrice = applesPrice + orangesPrice;
var shopKeerWillReturn = momGaveHim - totalFruitsPrice;
// console.log(shopKeerWillReturn);
//output 210

//Problem - 2: Write a program to calculate the average marks of some subject of a student. Sub: Math, Bio, Chem, Phy & Bengali Language. Print it on 2 decimal place.
var mathNumber = 75.25;
var bioNumber = 65;
var phyNumber = 80;
var chemNumber = 35.45;
var banNumber = 99.50;
var totalSub = 5;
var totalSubNumber = mathNumber + bioNumber + phyNumber + chemNumber + banNumber;
// console.log(totalSubNumber);
var avg = totalSubNumber/totalSub; //average
avg = avg.toFixed(2); //set decimal and it will string
avg = parseFloat(avg); //conversion string to number
// console.log(avg);
//output: 71.04 number

//Problem: 3: Jhon's teacher gave him two variables. Each contains a string. Jhon's teacher asked him to combine these two strings and print them in one line. Help John to write the program.
var firstHalfLine = "I am going to be";
var lastHalfLine = "an awesome web developer";
var combinedLine = firstHalfLine + ' ' + lastHalfLine;
// console.log(combinedLine);
//output: I am going to be an awesome web developer

//Problem - 4: Sara's mom gave her a number to teach math. Asked her the remainder if she devide it by 5.
var letDividend = 119;
var givenDivisor = 5;
var remainder = letDividend%givenDivisor; //didn't asked for quotient that why we didn't use '/' sign.
console.log(remainder);
//output: 4