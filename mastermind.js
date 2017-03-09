var allcolors = ["yellow", "green", "blue", "red", "purple", "white", "black", "orange"];
var codelength = 4;
var colorcode = [];
var userInput = [];

//random color generator

function randomcolor(){
	for (var i = 0; i <= codelength -1; i++){
		var number = Math.floor(Math.random()* codelength);
		colorcode.push(allcolors[number]);
	}
	console.log(colorcode);
}

//userinput

	function UserInput(color){

	 	console.log(color);
	}

//compare