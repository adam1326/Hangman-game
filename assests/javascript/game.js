// Start of the JavaScript with a prompt
var userName = prompt("Hello, Whats your name?");
alert("Hello " + userName)
alert("Are you ready for Star Wars Hangman?")
window.onload = function () {
    document.getElementById("Name").innerHTML = userName + " Welcome to:";
}


// Start of the game
// Characters of the movie Star Wars
var characters = ["Jar Jar Binks", "Obi-Wan Kenobi", "Leia", "Chewbecca", "Han Solo", "Darth Vader", "Yoda", "Luke Skywalker", "Anakin Skywalker"];
var maxLives = 12;

// Game state

var wins = 0;
var losses = 0;
var lives = maxLives;
var guesses = [];
var letterBlanks = [];

// Picking random Star Wars Character
function reset() {
	guesses = [];
	character = characters[Math.floor(Math.random() * characters.length)];
	lives = maxLives;
	letterBlanks = [];
	
	for (var i = 0; i < character.length; i++) {
        if (character.charAt(i) != ' ') {
            letterBlanks.push("_");
        } else {
            letterBlanks.push(" ");
        }
    }
	console.log(character);
}
reset();
updateOutput();

//JS into HTML
function updateOutput() {
    var html =
        "<p>Lives: " + lives + "</p>" +
        "<p>Current Word: " + letterBlanks + "</p>" +
        "<p>Letters Guessed: " + guesses + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>";
    document.querySelector("#myGameArea").innerHTML = html;
}

// Putting letters from that character
document.onkeyup = function (event) {
    var guess = event.key.toLowerCase();
    console.log(guess);

	var alphabet = "abcdefghijklmnopqrstuvwxyz-";
    if (!alphabet.includes(guess)) { return; }
    if (guesses.includes(guess)) { return; }

    guesses.push(guess);
    guesses.sort();

	if (character.toLowerCase().includes(guess)) {
		// we've made a correct guess

		// good guess, now need to update letterBlanks
		for (var i = 0; i < character.length; i++) {
			if (character[i].toLowerCase() == guess.toLowerCase()) {
				letterBlanks[i] = character[i];
			}
		}


	} else {
		// incorrect guess
		lives--;
	}


	if (letterBlanks.join("") == character) {
		// won
		wins++;
		reset();
	}
	if (lives <= 0) {
		// died.
		losses++;
		reset();
	}

    // update display
    updateOutput();
}