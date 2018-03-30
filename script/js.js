var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var isCorrect = document.querySelector("#isCorrect");
var heading = document.querySelector("header");
var newColors = document.querySelector("#newColors");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var squaresCount = 6;



easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	for(var i = 3 ; i < squares.length ; i++){
		squares[i].classList.add("hidden");
	}
	squaresCount = 3;
	addSquareStyle();
	restoreStyles();
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	for(var i = 3 ; i < squares.length ; i++){
		squares[i].classList.remove("hidden");
	}
	squaresCount = 6;
	addSquareStyle();
	restoreStyles();
});


colorDisplay.textContent = pickedColor;

for(var i = 0 ; i < squares.length ; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
	if(clickedColor === pickedColor){
		for(var i = 0 ; i < squares.length ; i++){
			squares[i].style.background = pickedColor;
			isCorrect.textContent = "Correct!";
			heading.style.background = pickedColor;
			newColors.textContent = "play again";
		}
	}	else{
		this.style.background = "transparent";
		isCorrect.textContent = "Try Again!";
	}
	});
}
newColors.addEventListener("click" ,function(){
	if(newColors.textContent === "play again"){
		restoreStyles();
	}
	squareCountCheck();
});

function addSquareStyle(){
	colors = generateRandomColors(squaresCount);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0 ; i < squares.length ; i++){
			squares[i].style.background = colors[i];
		}
}
function restoreStyles(){
	newColors.textContent = "New Colors";
	heading.style.background = "blue";
	isCorrect.textContent = "";
}
function pickColor(){
var random =  Math.floor(Math.random() * colors.length);
return	colors[random];
}

function generateRandomColors(num){
	var colorsArray = [];

	for(var i = 0 ; i < num ; i++){
		colorsArray.push(randomColor());
	}

	return colorsArray;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function squareCountCheck(){
	colors = generateRandomColors(squaresCount);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < squaresCount ; i++){
		squares[i].style.background = colors[i];
	}
}
