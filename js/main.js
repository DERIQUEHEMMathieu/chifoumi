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
alert("Préparez-vous" + " " + playerFirstname + ", le jeu va débuter !");

// Choose between paper, stone and scissors

alert("Petit rappel : la pierre bat les ciseaux ; la feuille bat la pierre et les ciseaux battent la feuille.");

var choixUtilisateur = prompt(playerFirstname + "," + " " + "choisissez-vous pierre, feuille, ou ciseaux ?");

function choix(choixUtilisateur)
{
    if (choixUtilisateur)
    {
        return choix;
    }
}

// User input verification

var choixUser = (choix.length);
var choixCiseaux = "ciseaux";
var choixPapier = "papier";
var choixPierre = "pierre";

if (choixUser = choixPapier.toLowerCase() || choixCiseaux.toLowerCase() || choixPierre.toLowerCase())
    {
        alert("Votre choix est enregistré.");
    }

while ((choixUser < 2 || choixUser > 20 ) || (choixUser != choixPapier || choixUser != choixPierre || choixUser != choixCiseaux))
    {
        alert("Veuillez réécrire votre choix")
    }
   
//     {   
//     
//     }

// alert("Votre choix est enregistré.");

// var nonValide = function () {
// while (choixUtilisateur !== 'pierre' && choixUtilisateur !== 'feuille' && choixUtilisateur !== 'ciseaux') {
// confirm(choixUtilisateur + " l'entrer n'est pas valide !");
// choix();
// }
// };
// nonValide();


// var choixOrdi = Math.random();

// if (choixOrdi <= 0.34) {
// 	choixOrdi = 'pierre';
// } else if (choixOrdi <= 0.67) {
// 	choixOrdi = 'feuille';
// } else {
// 	choixOrdi = 'ciseaux';
// }
// var ordiGagne = choixOrdi;

// ordiGagne = "Victiore pour l'ordinnateur";
// var userGagnent = choixUtilisateur;

// userGagnent = "Victiore pour l'utilisateur";
// alert('L\'ordinnateur a choisi ' + choixOrdi);

// var comparer = function (choix1, choix2) {
// 	if (choix1 === choix2) {
// 		return "Egalité " + choixUtilisateur;
// 	} else if (choix1 === 'pierre') {
// 		if (choix2 === 'ciseaux') {
// 			return 'La pierre gagne ! ' + userGagnent;
// 		} else {
// 			return 'La feuille gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur;
// 		}
// 	} else if (choix1 === 'feuille') {
// 		if (choix2 === 'pierre') {
// 			return 'La feuille gagne ! ' + userGagnent;
// 		} else {
// 			return 'Le ciseaux gagnent ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur;
// 		}
// 	} else if (choix1 === 'ciseaux') {
// 		if (choix2 === 'feuille') {
// 			return 'Le ciseaux gagne ! ' + userGagnent;
// 		} else {
// 			return 'La pierre gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi le ' + choixUtilisateur;
// 		}
// 	}
// };

// alert(comparer(choixUtilisateur, choixOrdi));


