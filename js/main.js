//Chifoumi game

// Display of a welcome message

alert("Bienvenue sur le jeu du Chifoumi !");
alert("Amusez-vous bien et profitez de votre pause chers collégues !" + " " + String.fromCodePoint(0x1F609)); 

// Ask player's firtname and backup with display

var playerFirstname = prompt("Quel est votre prénom ?");

function playerFirstname(Firstname)
{
    if (Firstname)
        {
            return playerFirstname;
        }
}

// Firstname verification (doesn't work, cannot break out of the infinite loop)

// while (playerFirstname.length < 2 || playerFirstname.length > 20)
// {
//     prompt("Veuillez entrer une saisie valable."+ " " + "Quel est votre prénom ?");
// }

alert("Préparez-vous" + " " + playerFirstname + ", le jeu va débuter !");

// Choose between paper, stone and scissors

alert("Petit rappel : la pierre bat les ciseaux ; la feuille bat la pierre et les ciseaux battent la feuille.");


// User input verification

var choixUser = "";
var choixCiseaux = "ciseaux";
var choixPapier = "papier";
var choixPierre = "pierre";
    
// while (choixUser != choixPapier && choixUser != choixPierre && choixUser != choixCiseaux)
// {
    choixUser = prompt(playerFirstname + "," + " " + "choisissez-vous pierre, feuille, ou ciseaux ?").toLocaleLowerCase();
// }

// if (choixUser === choixCiseaux || choixPapier || choixPierre)
// {
// }

// Computer choose

var choixOrdi = Math.random();

if (choixOrdi <= 0.34)
{
var choixOrdi = "pierre";
} 
else if (choixOrdi <= 0.67) 
{
var choixOrdi = "feuille";
} 
else 
{
var choixOrdi = "ciseaux";
}

// Start game 

alert("L'ordinateur a choisi :" + " " + choixOrdi);

var compare = function (choix1, choix2) 
{
if (choix1 === choix2) 
    {
		return "Egalité ! Vous et l'ordinateur avaient choisis :" + " " + choixUser;
    } 
else if (choix1 === "pierre") 
    {
        if (choix2 === "ciseaux") 
        {
            return "La pierre gagne !" + " " + String.fromCodePoint(0x1F609);
        } 
        else 
        {
			return "La feuille gagne !" + " " + String.fromCodePoint(0x1F621) + " " + "Vous aviez choisi :" + " " + choixUser;
		}
    } 
else if (choix1 === "feuille") 
    {
        if (choix2 === "pierre") 
        {
		    return "La feuille gagne !" + " " + String.fromCodePoint(0x1F609);
        } 
        else 
        {
			return "Le ciseaux gagne !" + " " + String.fromCodePoint(0x1F621) + " " + "Vous aviez choisi :" + " " + choixUser;
		}
    } 
else if (choix1 === "ciseaux") 
    {
        if (choix2 === "feuille") 
        {
			return "Le ciseaux gagne !" + " " + String.fromCodePoint(0x1F609);
        } 
        else 
        {
			return "La pierre gagne !" + " " + String.fromCodePoint(0x1F621) + " " + "Vous aviez :" + " " + choixUser;
		}
	}
};

alert(compare(choixUser, choixOrdi));