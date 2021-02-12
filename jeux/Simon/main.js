// variable let
let sequence=[];
let hommesequence=[];
let level = 0;

// variable const
const startButton=document.querySelector(".js-start");
const info=document.querySelector(".js-info");
const heading=document.querySelector(".js-heading");
const simon = document.querySelectorAll(".js-simon");
const cliquerestant = sequence.lenght - hommesequence.lenght;
const nextsequence =[...sequence];
const red = document.querySelector('.simon-red')
const blue = document.querySelector('.simon-blue')
const yellow = document.querySelector('.simon-yellow')
const green = document.querySelector('.simon-green')

// Bug soit entre playTour ou nextSet, double lançage pour aucune raison
//-------------------------------------------------

function StartSimon() {
  nextSet();
}

startButton.addEventListener('click', StartSimon);
  red.addEventListener('click',function() {
  cliqueCase()
  })
  blue.addEventListener('click',function (){
  cliqueCase()
  })
  yellow.addEventListener('click',function(){
  cliqueCase()
  })
  green.addEventListener('click',function(){
   cliqueCase()
  })


// fonction changer de "manche"


function nextSet() {
  level += 1;
  console.log("je passe de niveau")

  info.textContent ='Tour du robot';
  heading.textContent = 'Niveau ' + level +' sur 30';

  const nextsequence =[...sequence];
nextsequence.push(GenerationSequence());
playTour(nextsequence);

sequence =[...nextsequence];
  setTimeout(() =>{
    tonTour(level);
}, level * 600 +1000);
}


// section aléatoire
function GenerationSequence(){
  const Case = ['red','blue','yellow','green']
  var random = Case[Math.floor(Math.random() * Case.length)];
  return random
}


// fonction hummain
function tonTour(level) {
  info.textContent = 'Ton tour:'+ level + 'Tap'+ level > 1 ? 's' : ''
};


// reset des variables
function resetJeu(texte){
  alert(texte);
  sequence=[];
  hommesequence=[];
  level=0;
  heading.textContent = 'Simon Game';
}
// tu clique (toi)

function cliqueCase(){
  if (hommesequence.lenght === sequence.lenght){
    hommesequence.push(1);
    info.textContent = "Continue bg";
    setTimeout(() =>{
  nextSet();
  }, 1000);
  return;
}
  if (hommesequence.lenght === 30)
      heading.textContent ="T'as gagné bien joué bg"
      resetJeu()
}


// passage de tour


function playTour(nextsequence) {
  nextsequence.forEach((color, index) => {
    setTimeout(() => {
      activateTile(color);
    }, (index + 1) * 600);
  });
}


// active la Case


function activateTile(color){
  let Case =document.querySelector(`[data-Case='${color}']`)
  
  Case.classList.add('activated');

  setTimeout(() => {
    Case.classList.remove('activated');
  }, 300);
}