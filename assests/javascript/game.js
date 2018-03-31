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
// English Alphabet with special characters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-"];
var lives = 12;

// Game state
var wins = 0;
var losses = 0;
var guesses = [];
var targetedCharacter = "";
var letterBlanks = [];

function pickRandomLetter() {
    for (var i = 0; i < character.length; i++) {

        if (character.charAt(i) != ' ') {
            letterBlanks.push("_");

        } else {
            letterBlanks.push(" ")
        }
    } console.log(letterBlanks)
}


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

// Picking random Star Wars Character

var character = characters[Math.floor(Math.random() * characters.length)];
console.log(character);

pickRandomLetter();
updateOutput();
// Putting letters from that character





document.onkeyup = function (event) { 
    var guess = event.key.toLowerCase();
    console.log(guess);
    if (!alphabet.includes(guess)) { return; }
    if (guesses.includes(guesses)) { return; }

    guesses.push(guess);
    guesses.sort();
    for (var i = 0; i < character.length; i++) {
        if (guess === character.charAt(i).toLowerCase()) {
            letterBlanks[i] = guess;
        } console.log(guess)
        console.log(character.charAt(i))
    }
    if (guess === character) {
        wins++;
        guesses = [];
        targetedCharacter = pickRandomLetter();

        //Reset game
        guesses = [];
        targetedCharacter = pickRandomCharacter();
    } else {
        //incorret guess
        if (guesses.length >= lives) {
            losses++;
            guesses = [];
            targetedCharacter = pickRandomCharacter();

        }
    }
    // update display
    updateOutput();
}

// // Start of the hangman
// function startGame() {
//     characters = characters[Math.floor(Math.random() * characters.length)]
//     console.log(characters);
//     console.log(characters.length);
//     for(var i = 0; i < characters.length; i++) {
//         console.log(i);
//         underScores.push('_');

