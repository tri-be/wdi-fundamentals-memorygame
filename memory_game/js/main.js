var cards = [
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
}
];

var cardsInPlay = [];

var resetGame = function() {
	var toDelete = document.getElementById("clicked");
	document.getElementById("reset").removeChild(toDelete);
	var needsReset = document.querySelectorAll(".clicked");
	for (var i = 0; i < needsReset.length; i++) {
		needsReset[i].setAttribute("src", "images/back.png");
		needsReset[i].removeAttribute("class", "clicked");
	}
	cardsInPlay = [];
	
	
}

var createButton = function() {
	var resetButton = document.createElement("button");
		resetButton.setAttribute("id", "clicked");
		resetButton.innerHTML = "reset";
		document.getElementById("reset").appendChild(resetButton);
		resetButton.addEventListener("click", resetGame);

}

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		createButton();
	} else {
		alert("Sorry, try again.");
		createButton();
	}
}

var flipCard = function() {

	var cardId = this.getAttribute("data-id");

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute("src", cards[cardId].cardImage);
	this.setAttribute("class", "clicked");

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();
