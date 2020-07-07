const prompt = require('prompt-sync')({sigint: true});

const prompter = ()=>{
	const programs = `
	1. Hello
	2. Mario
	3. Credit
	4. Exit Prompt\n`
	console.log("\n\tProblems in Set 1", programs)

	let option = prompt("Which problem do you want to execute? (enter the problem number): ");

	switch(option){
		case "1": require("./hello"); break;
		case "2": require("./mario"); break;
		case "3": require("./credit"); break;
		case "4":
		case "exit": console.log("Bye"); break;
		default: console.log("Invalid option"); prompter()
	}
}

prompter()