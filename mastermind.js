var allcolors = ["yellow", "green", "blue", "red", "purple", "white", "black", "orange"];
var codelength = 4;
var colorCode = [];
var userInput = [];
var tempColorCode = [];
var userChoices = 4;

//random color generator

function randomcolor(){
	for (var i = 0; i <= codelength -1; i++){
		var number = Math.floor(Math.random()* 8);
		colorCode.push(allcolors[number]);
	}
	console.log(colorCode);
}

//userinput

	function UserInput(color){
	 	userInput.push(color);
	 	console.log(color);
	 	if(userInput.length === colorCode.length){
	 		Compare();
	 	}
	}

//compare

	function CctoTcc () {
	 	var i = 0;
		colorCode.forEach(function() {
		tempColorCode.push(colorCode[i]);
		i++
		});
	}

	function Compare(){
		CctoTcc();
		var Pinblack = 0;
		var Pinwhite = 0;

		for (var i = 0; i <= userInput.length -1; i++) {
			if (tempColorCode[i] === userInput[i]) {
				console.log(userInput[i], 'Correct geplaatst')
				tempColorCode.splice(i, 1);
				userInput.splice(i, 1);
				i--;
				Pinblack++;
				console.log(Pinblack);
			}
		}

		for (var i = 0; i <= userInput.length -1; i++) {
			compare = tempColorCode.indexOf(userInput[i]);
			if (compare > -1){
				console.log(userInput[i], 'Incorrect geplaatst')
				tempColorCode.splice(compare, 1);
				userInput.splice(i, 1);
				i--;
				Pinwhite++;
				console.log(Pinwhite);
			}else{
				console.log(userInput[i], 'Bestaat niet')
			}
		}

		userInput = [];
		tempColorCode = [];

		if(Pinblack === userChoices){
			return win();
		}
	}
		
	function win(){
		alert('Goed gespeeld!');
		console.log("Goed gespeeld!")
	}