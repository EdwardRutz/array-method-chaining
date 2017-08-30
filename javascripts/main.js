"use strict";
console.log("main.js active");

/***********  SCRIPT  ***************/
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let myNums = integers
	.sort((a,b) => {return a-b})
	.reverse()					
	.filter((num) => {return num < 19})
	.map((num) => { return (num * 1.5) -1 })
	.reduce((previous, current) => { return previous + current});

	console.log("Result", myNums);

//------ OUTPUT TO DOM -------
let domOut2 = document.getElementById('result');
	domOut2.innerHTML = `Result = ${myNums}`;

let domOut1 = document.getElementById('numbers');
	domOut1.innerHTML = `Do calculations on these numbers:  ${integers}`;







