// Start of the JavaScript with a prompt
var userName=prompt("Hello, Whats your name?");
alert("Hello " + userName)
alert("Are you ready for Star Wars Hangman?")
window.onload = function(){
document.getElementById("Name").innerHTML = userName + " Welcome to:";
}


// Start of the game
// Characters of the movie Star Wars
var characters = ["Jar Jar Binks", "Obi-Wan Kenobi", "Leia", "Chewbecca", "Han Solo", "Darth Vader", "Yoda", "Luke Skywalker", "Anakin Skywalker" ];
// English Alphabet with special characters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", " "];
var lives = 12;

// Game state
var wins = 0;
var losses = 0;
var guesses = [];
var targetedCharacter = "";

//JS into HTML
    function updateOutput() {
        var html =
        "<p>Lives: " + lives + "</p>" +
        "<p>Current Word: _ " + targetedCharacter + "</p>" +
        // "<p>_ _ _ _ " + targetedCharacter + "</p>" +
        "<p>Letters Guessed: " + guesses + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>";
        document.querySelector("#myGameArea").innerHTML = html;

    }
updateOutput();
// Picking random Star Wars Character
function pickRandomCharacters() {
    for (var i = 0; i = characters; i++)
    var characters = characters[Math.floor(Math.random() * characters.length)];
    var characters = targetedCharacter;
    console.log(characters);
    return characters;
}

document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();
    if (! alphabet.includes(guess)) { return;}
    if (guess.includes(guess)) { return;}

    guesses.push(guess);
    guesses.sort();
    if (guess === targetedCharacter) {
        wins++;

        //Reset game
        guesses = [];
        targetedCharacter = pickRandomCharacter();
    } else {
        //innocent guess
        if (guesses.lengeth >= lives) {
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

