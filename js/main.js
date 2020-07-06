//Chifoumi game

// Variables
var choices = ["pierre", "feuille", "ciseaux"];

var winningPairs = [
  "feuille/pierre",
  "pierre/ciseaux",
  "ciseaux/feuille"
];

var scores = {
  "player" : 0,
  "computer" : 0
};

var playerFirstname = "";

// Functions
function playerFirstname(Firstname) {
    if (Firstname)

function askPlayerChoice() {
    do {
    var choice = prompt("Faites votre choix entre " + choices.join(",  ")).toLowerCase();
    }
  // While the choice made by the player is not in the array of possible answers we show a prompt
  while (!choices.includes(choice));
  return choice;
}

// Generate a random number bewteen 0 and 2 matching an index in the choices array
function generateChoice() {     
    var randomIndex = Math.floor(Math.random() * Math.floor(choices.length));
    return choices[randomIndex];
}

// This function compare the answers to know who won, return an index of the scores object
function findWinner(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
      return false;
    }
// We create a string as those in winningPairs, if the string is in then the player wins
    else if(winningPairs.includes(playerChoice + "/" + computerChoice)) {
      return "player";
    }
    else {
      return "computer";
    }
}

// Ask if the player wants to replay, if yes reset the scores so that the game loop goes on
function replay() {
    do {
      var answer = prompt("Voulez-vous rejouer (oui ou non)")
    } 
    while (!["oui", "non"].includes(answer));
    if(answer === "oui") {
      scores["player"] = 0;
      scores["computer"] = 0;
    }
}

// Game code
// Display of a welcome message
alert("Bienvenue sur le jeu du Chifoumi !");
alert("Amusez-vous bien et profitez de votre pause chers collégues !" + " " + String.fromCodePoint(0x1F609)); 

// Ask player's firtname and backup with display
playerFirstname = prompt("Quel est votre prénom ?");

// Firstname verification
while (playerFirstname.length < 2 || playerFirstname.length > 20)
{
    playerFirstname = prompt("Veuillez entrer une saisie valable."+ " " + "Quel est votre prénom ?");
}
alert("Préparez-vous" + " " + playerFirstname + ", le jeu va débuter !");

// Choose between paper, stone and scissors
alert("Petit rappel : la pierre bat les ciseaux ; la feuille bat la pierre et les ciseaux battent la feuille.");

// While neither the player or the computer has won
while (scores["player"] < 3 && scores["computer"] < 3) {
    var playerChoice = askPlayerChoice();
    alert("Vous avez choisi " + playerChoice);
  
    alert("L'ordinateur joue");
    var computerChoice = generateChoice();
    alert("L'ordinateur a choisi " + computerChoice);
  
    var winner = findWinner(playerChoice, computerChoice);
// If there is a winner
    if(winner) {
// We increment the index we get front the findWinner function
      scores[winner] += 1;
// Display the rigth winner using ternary condition for shorter syntax
      alert("Le gagnant est " + (winner === "player" ? playerFirstname : "l'ordinateur"));
      alert(playerFirstname + " : " + scores["player"] + "\nordinateur : " + scores["computer"]);
    }
// If winner is false
    else {
      alert("Match nul !");
    }
// When someone has 3 points the games end and the player choose if he wants to replay
    if(scores["player"] === 3 || scores["computer"] === 3) {
      alert(scores["player"] === 3 ? "Vous avez gagné" : "Vous avez perdu");
      replay();
    }
}