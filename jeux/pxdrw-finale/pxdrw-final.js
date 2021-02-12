// Getter de la section pour générer le tableau

var get_section = document.querySelector("section")


// Fonction permettant de générer un tableau en HTML : 

function generate_table() {
    // Je créer les éléments en HTML :
    var tableau = document.createElement("table")
    var tblbody = document.createElement("tbody")
    // Je créer une balise enfant à la section (tblbody) puis je créer une autre balise enfant à tblbody (tableau) :
    get_section.appendChild(tblbody)
    tblbody.appendChild(tableau)
    // Boucle for dans une autre boucle for permettant de créer les TD dans les TR du tableau :
    for (var i = 0; i < 40; i++) {
        var row = document.createElement("tr")
        tableau.appendChild(row)
        
        for (var j = 0; j < 40; j++) {
            var cases = document.createElement("td")
            row.appendChild(cases)
        }
    }

}
// Je génère le tableau :
generate_table()

// Getters : 
var color = document.getElementById('favcolor')
var color_stock = color.value 
var reset = document.getElementById('reset')
var select_td = document.querySelectorAll("td")
var eraser_HTML = document.getElementById('gomme')
var phrase_bateau = document.getElementById('phrase_bateau')
var review = document.getElementById('review')

// Fonction permettant de reset le tableau et de l'afficher complètement vide
// select_td sélectionne tout les td de mon tableau, avec cette variable je fais une boucle Foreach qui sélectionne les td individuellement pour les remettre en 'null'
function resetcolor() {
    select_td.forEach(element => {
        element.style.backgroundColor = null
        
    });
}

// Fonction assez cocasse qui permet d'avoir une review aléatoire dans un tableau pour se sentir jugé ou admiré
function review_phrase() {
    choix = ["Joli !", "Quel talent !", "Bordel, t'as fait les beaux arts ou quoi mec ?", "Artiste/20", "La Joconde : ", "Art Review : Une oeuvre d'art incontournable", "Dessine-moi comme une de tes françaises"]
    // La ligne de code juste en dessous permet d'obtenir un élément aléatoire de mon tableau, pour ça, j'utilise Math.floor suivi de Math.random multiplié par la taille de mon tableau
    phrase = choix[Math.floor(Math.random() * choix.length)];
    phrase_bateau.innerHTML = phrase
}

// Fonction pour activer le mode gomme, (ca set la couleur blanche dans le color_stock qui comme son nom l'indique stock la couleur de l'input color HTML)
function eraser() {
    color_stock = "#FFFFFF";
}

// Mes listeners
color.addEventListener("input", function(){
    // Permet de stocker la valeur de l'input color HTML
    color_stock = color.value 
})

reset.addEventListener('click', function() {
   resetcolor() 
    
})

eraser_HTML.addEventListener('click', function() {
    eraser()

})

review.addEventListener('click', function() {
    review_phrase()
})

// Boucle for permettant d'attribuer la couleur de l'input color HTML à une case du tableau HTML
for (let i = 0; i < select_td.length; i++) {
    select_td[i].addEventListener('click', function() {
        select_td[i].style.backgroundColor = color_stock;

    })
}



