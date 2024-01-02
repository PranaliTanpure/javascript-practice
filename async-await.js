const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved promise!!");
	}, 10000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved promise!!");
	}, 5000);
});
//////////////////////////////////////////////////////////////
// async function getData() {
// 	// return "Namaste";
// 	return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

////////////////////////////////////////////////////////////

async function handlePromise() {
	console.log("Hello world");
	const val = await p2;
	console.log("Namaste JS!");
	console.log(val);
	const val2 = await p1;
	console.log("Namaste JS! 2");
	console.log(val2);
}

handlePromise();
