let doc = document.querySelector('body')

let a1 = document.querySelector('#achat1');
let a2 = document.querySelector('#achat2');
let a3 = document.querySelector('#achat3');
let a4 = document.querySelector('#achat4');

let u1 = document.querySelector('#upgrade1');
let u2 = document.querySelector('#upgrade2');
let u3 = document.querySelector('#upgrade3');
let u4 = document.querySelector('#upgrade4');

let cookie = document.querySelector('#cookie');

let cookie_par_seconde = 0;
let compteur_cookie = 0;

let prix_upgrade_clic = 30;
let clic_power = 1;
let nb_upgrade_clic = 0;
let multiplicateur_achat_1 = 1;

let prix_achat_2 = 100;
let nb_achat_2 = 0;
let cookie_par_seconde_a2 = 0;
let multiplicateur_achat_2 = 1;

let prix_achat_3 = 1000;
let nb_achat_3 = 0;
let cookie_par_seconde_a3 = 0;
let multiplicateur_achat_3 = 1;

let prix_achat_4 = 5000;
let nb_achat_4 = 0;
let cookie_par_seconde_a4 = 0;
let multiplicateur_achat_4 = 1;

let nb_upgrade_1 = 0;
let prix_upgrade_1 = 10000;

let nb_upgrade_2 = 0;
let prix_upgrade_2 = 20000;

let nb_upgrade_3 = 0;
let prix_upgrade_3 = 30000;

let nb_upgrade_4 = 0;
let prix_upgrade_4 = 40000;

function cookie_clic(){
    compteur_cookie+= clic_power*multiplicateur_achat_1;
    Creer_Bulle(); //crée une bulle a chaque clic
}

// Gestion des boutons

function bouton_achat_1(){
    if (compteur_cookie >= prix_upgrade_clic){
        nb_upgrade_clic += 1;
        clic_power += 1;
        compteur_cookie -= prix_upgrade_clic;
        prix_upgrade_clic += nb_upgrade_clic*3;
        a1.textContent = "("+nb_upgrade_clic+") Upgrade clic : "+prix_upgrade_clic;
    }
}

function bouton_achat_2(){
    if (compteur_cookie >= prix_achat_2){
        nb_achat_2 += 1;
        compteur_cookie -= prix_achat_2;
        prix_achat_2 += nb_achat_2*2;
        cookie_par_seconde_a2 += 1;
        a2.textContent = "("+nb_achat_2+") Upgrade Pps 1 : "+prix_achat_2;
    }
}

function bouton_achat_3(){
    if (compteur_cookie >= prix_achat_3){
        nb_achat_3 += 1;
        compteur_cookie -= prix_achat_3;
        prix_achat_3 += nb_achat_3*3;
        cookie_par_seconde_a3 += 5;
        a3.textContent = "("+nb_achat_3+") Upgrade Pps 2 : "+prix_achat_3;
    }
}

function bouton_achat_4(){
    if (compteur_cookie >= prix_achat_4){
        nb_achat_4 += 1;
        compteur_cookie -= prix_achat_4;
        prix_achat_4 += nb_achat_4*4;
        cookie_par_seconde_a4 += 10;
        a4.textContent = "("+nb_achat_4+") Upgrade Pps 3 : "+prix_achat_4;
    }
}

function bouton_upgrade_1(){
    if (compteur_cookie >= prix_upgrade_1){
        nb_upgrade_1 += 1;
        compteur_cookie -= prix_upgrade_1;
        prix_upgrade_1 = prix_upgrade_1 * 2;
        multiplicateur_achat_1 = multiplicateur_achat_1 * 2
        u1.textContent = "("+nb_upgrade_1+") Upgrade clic x 2 : "+prix_upgrade_1;
    }
}

function bouton_upgrade_2(){
    if (compteur_cookie >= prix_upgrade_2){
        nb_upgrade_2 += 1;
        compteur_cookie -= prix_upgrade_2;
        prix_upgrade_2 = prix_upgrade_2 * 3;
        multiplicateur_achat_2 = multiplicateur_achat_2 * 2
        u2.textContent = "("+nb_upgrade_2+") Upgrade 1 x 2 : "+prix_upgrade_2;
    }
}

function bouton_upgrade_3(){
    if (compteur_cookie >= prix_upgrade_3){
        nb_upgrade_3 += 1;
        compteur_cookie -= prix_upgrade_3;
        prix_upgrade_3 = prix_upgrade_3 * 4;
        multiplicateur_achat_3 = multiplicateur_achat_3 * 2
        u3.textContent = "("+nb_upgrade_3+") Upgrade 2 x 2 : "+prix_upgrade_3;
    }
}

function bouton_upgrade_4(){
    if (compteur_cookie >= prix_upgrade_4){
        nb_upgrade_4 += 1;
        compteur_cookie -= prix_upgrade_4;
        prix_upgrade_4 = prix_upgrade_4 * 5;
        multiplicateur_achat_4 = multiplicateur_achat_4 * 2
        u4.textContent = "("+nb_upgrade_4+") Upgrade 3 x 2 : "+prix_upgrade_4;
    }
}

a1.addEventListener('click', bouton_achat_1);
a2.addEventListener('click', bouton_achat_2);
a3.addEventListener('click', bouton_achat_3);
a4.addEventListener('click', bouton_achat_4);

u1.addEventListener('click', bouton_upgrade_1);
u2.addEventListener('click', bouton_upgrade_2);
u3.addEventListener('click', bouton_upgrade_3);
u4.addEventListener('click', bouton_upgrade_4);

cookie.addEventListener('click', cookie_clic);

// Fonction d'update de l'affichage 

function cookie_temps(){
    cookie_par_seconde = (cookie_par_seconde_a2*multiplicateur_achat_2) + (cookie_par_seconde_a3*multiplicateur_achat_3) + (cookie_par_seconde_a4*multiplicateur_achat_4)
    compteur_cookie += cookie_par_seconde/20;
    document.querySelector('#nombre_cookies').textContent = Math.round(compteur_cookie)+" Pintes";
    document.querySelector('#cookies_par_seconde').textContent = cookie_par_seconde+" Pintes par seconde";  
    canvas.width = doc.offsetWidth;
    canvas.height = doc.offsetHeight;      
}

setInterval(cookie_temps,50);

// Canvas pour l'affichage des bulles => Lors du lancement du site on crée un tableau que l'on remplit avec des bulles de taille / position / vitesse / opacité / sprite différentes qui montent et redescendent tout en bas lorsqu'elles atteignent le haut de la page

var canvas = document.getElementById('bulles');
canvas.width = doc.offsetWidth;
canvas.height = doc.offsetHeight;
contexte = canvas.getContext('2d');

var Nb_bulle_differentes = 10;
var Densite_bulle = 1.5;
var Taille_bulle = 15;
var Velocite_bulle = 2;
var opacite_bulle = 0.25
var Taille_sprite

var Tableau_bulle = [];
var nb_bulles = Math.floor(Densite_bulle * (canvas.width * canvas.height / 10000))

function Creer_Tableau_Bulles(){
    console.log(nb_bulles)
    for(let i = 0; i<nb_bulles; i++){
        Creer_Bulle()
    }
}

function Creer_Bulle(){
    if(Tableau_bulle.length < 2500){
        let sprite={};
        let bulle={};
        let b_canvas={}

        sprite.posX = 0; 
        sprite.posY = Math.floor(Math.random() * Nb_bulle_differentes) * 50; 
        bulle.size = Math.floor(Math.random() * Taille_bulle); 
        bulle.velocity = Math.random() * Velocite_bulle; 
        bulle.opacity = Math.random() * opacite_bulle;
        b_canvas.posX = Math.floor(Math.random() * canvas.width - ( bulle.size / 2));
        b_canvas.posY = Math.floor(Math.random() * canvas.height);
        let UneBulle = {sprite, bulle, b_canvas};
        Tableau_bulle.push(UneBulle);
    }
}

function drawBulles(){
    updateBulles();
    contexte.clearRect(0,0,canvas.width,canvas.height);

    for(let i=0; i<Tableau_bulle.length;i++){
        contexte.globalAlpha = Tableau_bulle[i].bulle.opacity;   
        contexte.drawImage(sprite,Tableau_bulle[i].sprite.posX, Tableau_bulle[i].sprite.posY, Taille_sprite, Taille_sprite,Tableau_bulle[i].b_canvas.posX, Tableau_bulle[i].b_canvas.posY, Tableau_bulle[i].bulle.size, Tableau_bulle[i].bulle.size) 
    }
    requestAnimationFrame(drawBulles);
}

function updateBulles(){
    for(let i = 0; i < Tableau_bulle.length; i++){
        if(Tableau_bulle[i].b_canvas.posY < 0) {
            Tableau_bulle[i].b_canvas.posY = canvas.height + Tableau_bulle[i].bulle.size;
        } else {
            Tableau_bulle[i].b_canvas.posY -= Tableau_bulle[i].bulle.velocity;
        }
    }
}

let sprite=new Image();
sprite.src = 'img/bulles.png'
sprite.onload = ()=> {
    Taille_sprite = sprite.height / Nb_bulle_differentes;
    Creer_Tableau_Bulles();
    drawBulles();
}