"use strict";

//1/  this in global space
console.log("global", this);
//this in global space is global object. In browser it is window

//2/ this in function

//this word behaves differently in strict mode and a non strict mode
function x() {
	// value of this depend on strict mode in function
	// non-strict mode = window obj
	// strict mode = undefine
	console.log("x", x);
}

//this substitution
//If value of this keyword is undefined or null
// then this keyword will be replaced with globalObject
// only in non strict mode

//Question 1. What is the value of this keyword inside a function
//Value of this keyword inside a function is undefined. But because javascript has something called "this substitution",
//if you are not using strict mode then value get substituted by global object

//3/the value of this keyword depends on how this is called

x(); // undefine
// window.x(); //  window

//4/ this inside a objects's  method

const obj = {
	a: 10,
	x: function () {
		console.log("Inside a obj function");
		console.log(this); //it is "obj" object
		console.log(this.a); //10
	},
};

obj.x();

//////////////////////////////////////////////
const student = {
	name: "Pranali",
	printName: function () {
		console.log(this.name);
	},
};

const student2 = {
	name: "Ishita",
};

student.printName();

student.printName.call(student2);

////////////////////////////////////////////////////
//5/ this inside arrow function
//arrow functions don't provide their own this binding, it retains this value of the enclosing lexical context
//i.e. where your object is placed

const obj3 = {
	a: 10,
	x: () => {
		console.log(this); // it will return window object
	},
};

obj3.x();

const obj4 = {
	a: 101,
	x: function () {
		const y = () => {
			console.log(this);
		};
		y();
	},
};

obj4.x();

//6/ this inside DOM elements => refers to HTMLElement
{
	/* <button onclick="alert(this)"></button> */
} //this will return "[object HTMLButtonElement]"
