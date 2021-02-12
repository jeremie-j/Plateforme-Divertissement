// Liste de toutes les cartes possibles.
var diffCards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
//  Les cartes qui seront sélectionné par le jeu.
var finalCards = [];
// Les cartes ont trois états différents, face caché [0], face visible [1] et defaussé [2].
var currentStatCards = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var returnedCards = [];
var positionReturnedCards = [];
var deletedCards = [];
// La variable score prendra en mémoire le score du joueur.
var score=0;

// Je récupére l'input de l'utilsateurs afin de savoir avec quelle carte il intéragit.
// var fn = function(event) {fnCheckCarte(i)};
var allImage = document.querySelectorAll('.image');
for (let i = 0; i < allImage.length; i++) {
    // allImage[i].addEventListener('click', fn)
    allImage[i].addEventListener('click', function(event) {fnCheckCarte(i)})
    allImage[i].addEventListener('click', fnGame);
}

// Cette fonction sélectionne 10 cartes random parmi les 21, les dédoublent et les mélangent dans un tableau.
function fnSelectionCards() {
    // Je duplique le tableau afin afin de tirer certaines cartes.
    let remainingCardes = diffCards.slice(0);
    let drawnCards = [];
    // J'insére dans le tableau de cartes des elements de rang aléatoire jusqu'a ce qu'il atteigne une longeur de 10.
    while(drawnCards.length < 10) drawnCards.push(remainingCardes.splice(Math.floor(Math.random()*remainingCardes.length),1)[0]);
    // Je dois maintenant dédoubler et trier les cartes du tableau.
    let drawDoubledCards = [];
    for(let i = 0; i < drawnCards.length; ++i) {
        drawDoubledCards.push(drawnCards[i])
        drawDoubledCards.push(drawnCards[i])
    }
    // Code volé a Jeremie Jourda permettant de mélanger l'array.
    finalCards = drawDoubledCards.sort(() => Math.random() - 0.5);
}

// La valeur onClick permet de bloquer certaines fonctions pendant que les cartes sélectionné par le joueur sont affichés.
var onClick = 0;
// Je prépare maintenant la table de jeu.
function fnSetupTable() {  
    onClick = 0;
    returnedCards = [];
    // Je lie le tableau cartes Finales au HTML en associant a chaque cartes le numéro (correspondant au nom des images).
    for(let numCarte = 0; currentStatCards[numCarte] < 20; numCarte++) {
        // Sauf dans le cas ou la carté a été trouvé par le joeur, dabs ce cas la il ne se passe rien.
        if(currentStatCards[numCarte] == 2) {}
        else {
            document.getElementById('carte' + numCarte).src= "Images/back.png";
        }
    }
    // A chaque fois que la table est mise a jour, je remet les cartes d'état 1 en état 0.
    for (let i = 0; i < currentStatCards.length; i++) {
        if (currentStatCards[i] == 1)
            currentStatCards[i] = 0;
    }
}

// Je stock l'intégralité des positions utilsé par le joueur pour une utilisation futur.
var storagePosReturned = [];

function fnCheckCarte(i) {
    // Je retouve quelle carte à été retourné.
    positionReturnedCards.push(allImage[i].id.slice(5));
    storagePosReturned.push(positionReturnedCards[0])
    // Si cette carte a déja été retouné par le joueur il ne se passera rien.
    if(currentStatCards[positionReturnedCards] == 1 || currentStatCards[positionReturnedCards] == 2) {}
    else {
        fnReturnCards(i)
        // Je path de la carte, afin de déterminer le numéro de carte exacte.
        returnedCards.push(allImage[i].src.split('/')[6].slice(0, -4));
        // Je l'intégre dans l'état Cartes afin de gareder en memoire quelle carte a été retourné.
        currentStatCards[positionReturnedCards] = 1;
        // Je reset le tableau qui reservira.
        positionReturnedCards = [];
    }
}

function fnReturnCards(i) {
    // Le onClick valide l'affichage d'une carte si il est égale a 0. 
    if(onClick == 0) {
        // J'afficge la carte sur lequel le a cliqué.
        allImage[i].src = "Images/" + finalCards[i] + ".png";
    }
}

// Condition victoire.
function fnVictory() {
    if(deletedCards.length > 18)
        document.getElementById("win").className = "victory";
}

let changScore = document.getElementById('score');

function fnGame() {
    if(returnedCards.length > 0) {
        // Si les 2 cartes retournés sont identique, je change leurs états afin qu'ils ne soient plus jamais retourné.
        if(returnedCards[0] == returnedCards[1]) {
            for (let i = 0; i < currentStatCards.length; i++) {
                if (currentStatCards[i] == 1) {
                    currentStatCards[i] = 2;
                }
                // Je change la classe HTML afin que le joueur ne puisse plus intéragit avec les cartes trouvés. C'est ici que j'utilise la variable "storagePosReturned".
                if(currentStatCards[i] == 2) {
                    document.getElementById("carte"+ storagePosReturned[storagePosReturned.length - 1]).className = "final";
                    document.getElementById("carte"+ storagePosReturned[storagePosReturned.length - 2]).className = "final";
                }
            }
            // Si le joueur trouve une pair le score augmente de 50.
            score += 50;
            changScore.innerHTML = "Score: "+score;
            // J'ajoute les cartes retournées aux cartes defaussees (c.a.d trouvé par le joueur), avant de reset le tableau des cartes retournées.
            deletedCards.push(returnedCards[0])
            deletedCards.push(returnedCards[0])
            returnedCards = [];
            }
        else if(returnedCards.length == 2 && (returnedCards[0] !== returnedCards[1])) {
            // Dans ce cas la le joueur a un delay de 0.5 secondes pendant lequelle il ne peut pas intergir afin de ne pas faire bug le jeu.
            onClick = 1;
            setTimeout(fnSetupTable, 500)
            // Si le joueur ne trouve pas de pair le score diminue de 10.
            score -=10;
            changScore.innerHTML = "Score: "+score;
        }
    }
    fnVictory();
}
fnSelectionCards();
fnSetupTable();
