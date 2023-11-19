// function x() {
// 	var i = 1;
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 3000);
//     console.log("first")
// }

// x();

//////////////////////////////////////////////////////////////////////////////

// function x() {
// 	for (var i = 1; i <= 5; i++) {
// 		setTimeout(function () {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// 	console.log("first");
// }

// x();

//if you use var output is 6 6 6 6 6
//if you use let output is 1 2 3 4 5 , because let has a block scope . It creates a new copy of the variable for every new blcok

//////////////////////////////////////////////////////////////////////////////////
//but what if interviewer ask you to use var only

// function x() {
// 	for (var i = 1; i <= 5; i++) {

//         function closure(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, x * 1000);
//         }
//         closure(i)
// 	}
// 	console.log("first");
// }

// x();

//closure creates a new copy of i as closure functions gets called each time

/////////////////////////////////////////////////////////////////////////////////

//good example to give in interview
// function outest() {
//     var c = 12;
//     function outer(b) {
//         function inner() {
//             console.log(a , b, c); //it still can access b as b is a part of outer scope
//         }
//         var a = 10; //if we put let instead of var which has block scope then we can still get the same answer as 10

//         return inner;
//     }
//     return outer;
// }
// let a = 100; // even though global scope has a variable inner function will remeber the reference of the variable mentioned in its outer scope thet is a= 10 and it will return 10 but if there no a variable in its outer scope then it will search it in global scope and return 100
// // outer()(); other way of writing this is below

// const close = outest()("hello")
// console.log(close)
// close()

//////////////////////////////////////////////////////////////////////////////////
//example of data hiding and encapsulation

// function counter() {
//     var count = 0;
//     return function incrementCounter() {
//         count++;
//         console.log(count)
//     }
// }

// var counter1 = counter();
// counter1()

// var counter2 = counter();
// counter2()

////////////////////////////////////////////////////////////////////////////////////
///How to make it scalable
function Counter() {
	var count = 0;
	this.incrementCounter = function incrementCounter() {
		count++;
		console.log(count);
	};
	this.decrementCounter = function decrementCounter() {
		count--;
		console.log(count);
	};
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();
