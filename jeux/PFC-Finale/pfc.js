// Tout les getters, pour accéder aux éléments HTML plus facilement :

phrase_bateau = document.getElementById('phrase_bateau')
pierre = document.getElementById('pierre')
feuille = document.getElementById('feuille')
ciseaux = document.getElementById('ciseaux')
scoreboard = document.getElementById('scoreboard')
reset = document.getElementById('reset')
joueur_score = 0
bot_score = 0
console.log('reset')

// -------------------------------------------------------

// Fonction comparant le choix du bot et le choix de l'ordinateur, suivi de toutes les conditions qui font le pierre, feuille ciseaux :

function game(user_choice) {
    choix_bot = get_bot_choice()
    if (user_choice == "pierre" && choix_bot == "feuille") {
        bot_score += 1
        phrase_bateau.innerHTML = "Le Bot a gagné en jouant " + choix_bot
        // Dans chaque condition le score est actualisé en fonction du résultat
    }

    else if (user_choice == "feuille" && choix_bot == "pierre") {
        joueur_score += 1
        phrase_bateau.innerHTML = "Vous avez gagné !" 
        
    }
    else if (user_choice == "feuille" && choix_bot == "ciseaux") {
        bot_score += 1
        phrase_bateau.innerHTML = "Le Bot a gagné en jouant " + choix_bot
        
    }

    else if (user_choice == "ciseaux" && choix_bot == "feuille") {
        joueur_score += 1
        phrase_bateau.innerHTML = "Vous avez gagné !"
        
    }

    else if (user_choice == "pierre" && choix_bot == "ciseaux") {
        joueur_score += 1
        phrase_bateau.innerHTML = "Vous avez gagné !" 
    }

    else if (user_choice == "ciseaux" && choix_bot == "pierre") {
        bot_score += 1
        phrase_bateau.innerHTML = "Le Bot a gagné en jouant " + choix_bot
    }

    else if (user_choice == "feuille" && choix_bot == "feuille") {
        phrase_bateau.innerHTML = "Egalité !"
        
    }

    else if (user_choice == "pierre" && choix_bot == "pierre") {
        phrase_bateau.innerHTML = "Egalité !" 
        
    }

    else if (user_choice == "ciseaux" && choix_bot == "ciseaux") {
        phrase_bateau.innerHTML = "Egalité !" 
        
    }
// -------------------------------------------------------------------------

// Affichage du score en fonction du résultat de l'ordinateur et du joueur :

scoreboard.innerHTML = "Joueur : " + joueur_score + " - " + bot_score + " : " + "Bot"
}

// -------------------------------------------------------------------------

// Fonction permettant de reset les scores à 0 - 0 si le joueur souhaite recommencer :

function reset_score() {
    joueur_score = 0
    bot_score = 0
    scoreboard.innerHTML = "Joueur : " + joueur_score + " - " + bot_score + " : " + "Bot"
}

// ----------------------------------------------------------------------------

// Les eventListener qui permettent d'associer le click du joueur sur un élément HTML à son choix :

pierre.addEventListener('click', function() {
    // Dans chaque cas la fonction game est appelé avec comme argument le choix du joueur :
    game("pierre")
})

feuille.addEventListener('click', function() {
    game("feuille")
})

ciseaux.addEventListener('click', function() {
    game("ciseaux")
})

reset.addEventListener('click', function() {
    reset_score()

})

// ------------------------------------------------------------------------
 
// fonction permettant de récupérer aléatoirement le choix du bot dans un tableau contenant les string "pierre" "feuille" et "ciseaux" le choix du bot est ensuite retourné dans la fonction game :

function get_bot_choice() {
    choix = ["pierre", "feuille", "ciseaux"]
    random_bot_choice = choix[Math.floor(Math.random() * choix.length)];
    return random_bot_choice   
}

// -------------------------------------------------------------------------