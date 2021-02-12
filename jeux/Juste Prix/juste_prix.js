// Récupération des inputs
var setting = document.getElementById('changeSetting');
var actualMaxValue = document.getElementById('maxValue');
let justePrix = document.getElementById('justePrix');
let autoSolver = document.getElementById('autoSolver');
let changText = document.getElementById('text');
justePrix.addEventListener('click', fnJustePrix);
autoSolver.addEventListener('click', fnAutoSolver);
setting.addEventListener('click', fnSetting);
// Je set 2 compteurs individuelle spour le pc et le joueur.
var count = 1;
var coutBot = 1;
// Je set la valeur maximum a 100.
let = firstSetting = 100;
// Je récupére la valeur du Juste Prix afin de créer la solution.
setting = firstSetting
var solution = Math.floor(setting*Math.random());

// Dans le cas ou le joueur update le Juste Prix, je reset la valeur de la solution et de la valeur maximum possible a atteindre.
function fnSetting() {
    setting = parseInt(document.getElementById('setting').value, 10);
    solution = Math.floor(setting*Math.random());
    maxSolution = setting;
    // Je lui met en feedback la valeur qu'il a rentré.
    actualMaxValue.innerHTML = "Actual Max Value: "+ maxSolution+"";
}

// La fonction juste prix indique au joueur qand il a gagné, quand il est au dessus ou en dessous de la solution.
function fnJustePrix() {
    // Je récupére le nombre (tentative) rentré par le joueur et lui dit qi il a gagné ou pas.
    var userNumber = document.querySelector('#tentative').value;
    if(userNumber == solution) {
        if (count == 1) {
            changText.innerHTML = "C'est gagné la solution est bien "+ solution +". Tu as gagné du premier coup.";
        }
        else {
            changText.innerHTML = "C'est gagné la solution est bien "+ solution +". Tu as gagné en "+ count +" coups.";
        }
    }
    else if(userNumber < solution && userNumber >= 0) {
        changText.innerHTML = "Perdu, c'est plus que "+ userNumber +".";
    }
    else if(userNumber > solution && userNumber <= maxSolution) {
        changText.innerHTML = "Perdu, c'est moins que "+ userNumber +".";
    } 
    // Dans le cas pu le jouer rentre un nombre invalide je lui dit et je soustrait au count pour ne pas fausser le nombre d'essay.
    else{
        changText.innerHTML = "On a dit entre 0 et "+ maxSolution +" fais pas n'imp.";
        count--;
    }
    count++;
}

// Test est le résultat du calcule que va effectuer le pc a chaque fois que la fonction sera reitéré.
var maxSolution = 100;
var minSolution = 0;
var test=0;

// La fonction autoSolver a pour but de trouver le résultat en un minimum de coups possible. Elle coupe a chaque fois le résultat en 2 avant de détecter si 
// la solution a été trouvé, est plus haute ou plus basse. Ainsi de suite jusqu'a ce que le résultat soit trouvé.
function fnAutoSolver(){
    while(test != solution) {
        test = Math.round((maxSolution - minSolution)/2 + minSolution);
        if(test == solution){
            changText.innerHTML = "J'ai gagné, la solution était "+ test +". J'ai trouvé en "+ coutBot +" coups.";
        }
        else if(test < solution) {
            minSolution = test;
        }
        else if(test > solution) {
            maxSolution = test;
        }
        coutBot++;
        fnAutoSolver()
    }
}