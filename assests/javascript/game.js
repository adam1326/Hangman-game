// Start of the JavaScript with a prompt
var userName=prompt("Hello, Whats your name?");
alert("Hello " + userName)
alert("Are you ready for Star Wars Hangman?")
window.onload = function(){
document.getElementById("Name").innerHTML = userName + " Welcome to:";
}


// Start of the game
var availableLetter
var availableLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var availableLetter = alphabet();

console.log(Array.from("alphabet"));

var wins = 0;
losses = 0;
correct = 0;
lives = 12;
letterGuessed = [];
letterBlank = [];
randomWord = "";

    // Characters of the movie Star Wars
    var characters = ["Jar Jar Binks", "Obi-Wan Kenobi", "Leia", "Chewbecca", "Han Solo", "Darth Vader", "Yoda", "Luke Skywalker", "Anakin Skywalker" ];
  console.log(Array.from("characters"));
// function gameOver() {
//     if (letterBlanks.indexof("_") === -1) {
//         wins++;
//         alert("You won!");
        
//     } else {
//         losses++;
//         alert("You lost!");
//     }
// }
//     window.onload = function() {
//     document.getElementById("wins").innerHTML = totalWins;   
//     // document.getElementById("").innerHTML = losses;
//     }
//     restartTheGame();

// function checkGameOver () {
//     return availableLetter.indexOf(letter) > -1;
// }

// function updateWrongGuess() {
//     livesLeft--;
//     document.getElementById("guessedLetter").innerHTML = letterGuessed.join(" ");
//     document.getElementById("user-lives").innerHTML = livesLeft;
// }

// function inititalizeGame() {
//     livesLeft = 12;
//     letterGuessed = [];
//     letterBlank = [];
//     randomword = words [Math.floor ((Math.random()=words.length))];

//     for (var i=0; i <= "z".charCodeAt(0); i++) {
//         availableLetter.push(String.fromCharCode(i));
//     }
//     return availableLetter;
// }

// document.onekeyup = function(event) {
//     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//     if (word.indexof (userGuess) > -1) {
//         alert("That's a correct letter!!");
//         document.getElementById("currentWord").innerHTML += userGuess;
//         document.getElementById("letterGuessed") += userGuess;
//         correct = correct + 1;
//         if (correct == 6) {
//             alert("WOW, You have won!")
//             inititalizeGame();

//         }        

//     } else {
//         lives = lives -1;
//         if (lives == 0) {
//             alert("Oh no, you lost!")
//         } else {
//             alert("Wrong letter!" + lives + "Lives.");
//             document.getElementById("letterGuessed").innerHTML += userGuess;
//             document.getElementById("user-lives").innerHTML = lives;

//         }
//     }
// } 


// var totalWins = [];
// var currentWord = "";
// var currentLetter = [];
// var guessedLetters = [];
// var incorrectGueses = [];
// var blankAndSuccess = [];
// var blank = 0;



