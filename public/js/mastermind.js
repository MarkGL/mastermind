

var allcolors = ["yellow", "green", "blue", "red", "purple", "white", "black", "orange"];
var colorCode = [];
var userInput = [];
var tempColorCode = [];
var userChoices = 4;
var gameLength = 10;
var rowCounter = 1;

//Create Grid

function gridCreate(){
	for(var i = 1; i <= gameLength; i++) {
		var div = document.createElement('div');
		div.id = "row" + i;
		document.getElementById('grid').appendChild(div);


		for(var j = 1; j <= userChoices; j++) {
			var button = document.createElement("button");
			button.id = 'row' + i + 'button' + j; 
			document.getElementById("row" + i).appendChild(button);
		}
	}	
}

gridCreate();

//Random Color Generator

function randomColor(){
	for (var i = 0; i <= userChoices -1; i++){
		var number = Math.floor(Math.random()* 8);
		colorCode.push(allcolors[number]);
	}
	console.log(colorCode);
}

//UserInput

function getUserInput(color){
 	userInput.push(color);
 	console.log(color);
 	document.getElementById('row' + rowCounter + 'button' +userInput.length).style.backgroundColor = color;
 	if(userInput.length === colorCode.length){
 		Compare();
 	}
}

//Push ColorCode to TempColorCode

	function CctoTcc () {
	 	var i = 0;
		colorCode.forEach(function() {
		tempColorCode.push(colorCode[i]);
		i++
		});
	}

//Compare userInput with randomColor

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
		rowCounter++;
		userInput = [];
		tempColorCode = [];

		if(Pinblack === userChoices){
			setTimeout(win,0);
			return;
		}
	}

	if(rowCounter === gameLength){
		alert('Game Over!');
		reload();
	}
		
	function win(){
		console.log("Goed gespeeld!");
		alert('Goed gespeeld!');
	}

(function () {
    randomColor();
})();