presentoir = document.querySelector("#GamePresentaion");
WhiteScreen = document.querySelector("#WhiteScreen");
credits = document.querySelector("#Credits");
jeu1 = document.querySelector("#ShooterButton");
jeu2 = document.querySelector("#TDButton");
jeu3 = document.querySelector("#ClickerButton");
jeu4 = document.querySelector("#SnakeButton");
jeu5 = document.querySelector("#PixelButton");
jeu6 = document.querySelector("#SimonButton");
jeu7 = document.querySelector("#TwinsButton");
jeu8 = document.querySelector("#PFCButton");
jeu9 = document.querySelector("#JPButton");
//Apres moultes reflexions, j'aurais pu en effet mettre un queryselector ALL
var Choix;

function reset() {
  jeu1.style.animation = "reset 0.5s forwards";
  jeu2.style.animation = "reset 0.5s forwards";
  jeu3.style.animation = "reset 0.5s forwards";
  jeu4.style.animation = "reset 0.5s forwards";
  jeu5.style.animation = "reset 0.5s forwards";
  jeu6.style.animation = "reset 0.5s forwards";
  jeu7.style.animation = "reset 0.5s forwards";
  jeu8.style.animation = "reset 0.5s forwards";
  jeu9.style.animation = "reset 0.5s forwards";
}

function DisplayShooter() {
  reset();
  jeu1.style.animation = "decal 0.5s forwards";
  WhiteScreen.style.animation = "FonduBlanc 0.5s forwards";
  setTimeout(function () {
    presentoir.style.backgroundImage = "url('./img/Shooter.png')";
    WhiteScreen.style.animation = "FonduBlancInverse 0.5s forwards";
    credits.innerHTML = "Credits : Sammy FERRIER";
    Choix = 1;
  }, 500);
}

function DisplayTD() {
  reset();
  jeu2.style.animation = "decal 0.5s forwards";
  WhiteScreen.style.animation = "FonduBlanc 0.5s forwards";
  setTimeout(function () {
    presentoir.style.backgroundImage = "url('./img/TD.png')";
    WhiteScreen.style.animation = "FonduBlancInverse 0.5s forwards";
    credits.innerHTML = "Credits : Jérémie JOURDA";
    Choix = 2;
  }, 500);
}

function DisplayClicker() {
  reset();
  jeu3.style.animation = "decal 0.5s forwards";
  WhiteScreen.style.animation = "FonduBlanc 0.5s forwards";
  setTimeout(function () {
    presentoir.style.backgroundImage = "url('./img/Clicker.png')";
    WhiteScreen.style.animation = "FonduBlancInverse 0.5s forwards";
    credits.innerHTML = "Credits : Sammy FERRIER";
    Choix = 3;
  }, 500);
}

function DisplaySnake() {
  reset();
  jeu4.style.animation = "decal 0.5s forwards";
  WhiteScreen.style.animation = "FonduBlanc 0.5s forwards";
  setTimeout(function () {
    presentoir.style.backgroundImage = "url('./img/Snake.png')";
    WhiteScreen.style.animation = "FonduBlancInverse 0.5s forwards";
    credits.innerHTML = "Credits : Jérémie JOURDA";
    Choix = 4;
  }, 500);
}

function DisplayPixel() {
  reset();
  jeu5.style.animation = "decal 0.5s forwards";
  WhiteScreen.style.animation = "FonduBlanc 0.5s forwards";
  setTimeout(function () {
    presentoir.style.backgroundImage = "url('./img/Pixel.png')";
    WhiteScreen.style.animation = "FonduBlancInverse 0.5s forwards";
    credits.innerHTML = "Credits : Alexandre THIBORD";
    Choix = 5;
  }, 500);
}

function DisplaySimon() {
  reset();
  jeu6.style.animation = "decal 0.5s forwards";
  WhiteScreen.style.animation = "FonduBlanc 0.5s forwards";
  setTimeout(function () {
    presentoir.style.backgroundImage = "url('./img/Simon.png')";
    WhiteScreen.style.animation = "FonduBlancInverse 0.5s forwards";
    credits.innerHTML = "Credits : Simon CHAPELAIN";
    Choix = 6;
  }, 500);
}

function DisplayTwins() {
  reset();
  jeu7.style.animation = "decal 0.5s forwards";
  WhiteScreen.style.animation = "FonduBlanc 0.5s forwards";
  setTimeout(function () {
    presentoir.style.backgroundImage = "url('./img/Paires.png')";
    WhiteScreen.style.animation = "FonduBlancInverse 0.5s forwards";
    credits.innerHTML = "Credits : Martin SION";
    Choix = 7;
  }, 500);
}

function DisplayPFC() {
  reset();
  jeu8.style.animation = "decal 0.5s forwards";
  WhiteScreen.style.animation = "FonduBlanc 0.5s forwards";
  setTimeout(function () {
    presentoir.style.backgroundImage = "url('./img/PFC.png')";
    WhiteScreen.style.animation = "FonduBlancInverse 0.5s forwards";
    credits.innerHTML = "Credits : Alexandre THIBORD";
    Choix = 8;
  }, 500);
}

function DisplayJP() {
  reset();
  jeu9.style.animation = "decal 0.5s forwards";
  WhiteScreen.style.animation = "FonduBlanc 0.5s forwards";
  setTimeout(function () {
    presentoir.style.backgroundImage = "url('./img/JP.png')";
    WhiteScreen.style.animation = "FonduBlancInverse 0.5s forwards";
    credits.innerHTML = "Credits : Martin SION";
    Choix = 9;
  }, 500);
}
function LoadGame() {
  if (Choix == 1) {
    window.location.href = "./jeux/shooter de fou malade/shooter.html";
  } else if (Choix == 2) {
    window.location.href = "./jeux/Tower Defense/index.html";
  } else if (Choix == 3) {
    window.location.href = "./jeux/clicker de ouf guedin/clicker.html";
  } else if (Choix == 4) {
    window.location.href = "./jeux/snake/snake.html";
  } else if (Choix == 5) {
    window.location.href = "./jeux/pxdrw-finale/pxdrw-final.html";
  } else if (Choix == 6) {
    window.location.href = "./jeux/Simon/home.html";
  } else if (Choix == 7) {
    window.location.href = "./jeux/Jeu des Paires/jeu_des_paires.html";
  } else if (Choix == 8) {
    window.location.href = "./jeux/PFC-Finale/pfc.html";
  } else if (Choix == 9) {
    window.location.href = "./jeux/Juste Prix/juste_prix.html";
  }
}
//init
DisplayShooter();
