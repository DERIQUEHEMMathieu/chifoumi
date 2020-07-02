//Chifoumi game

// Display of a welcome message

alert("Bienvenue sur le jeu du Chifoumi !");
alert("Amusez-vous bien et profitez de votre pause chers collégues !" + " " + String.fromCodePoint(0x1F609)); 

// Ask player's firtname and backup with display

var playerFirstname = prompt("Quel est votre prénom ?");
var Firstname = function(){
    playerFirstname = alert("Préparez-vous" + " " + playerFirstname + ", le jeu va débuter !");
}
Firstname();