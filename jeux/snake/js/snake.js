var canvas = document.getElementById("snake");
var ctx = canvas.getContext("2d");
var snake;
var coordinatesfood;
var direction;
var state = "Menu";
var score;
var xText;

function background() {
  resize();
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#191919";
  ctx.fill();
  ctx.closePath();
  if (state == "Jeu") {
    //affiche un rond avec le score a l'interieur pendant la partie
    ctx.beginPath();
    ctx.fillStyle = "#424242";
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
    ctx.fill();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#191919";
    ctx.font = "75px poppins";
    ctx.fillText(score, canvas.width / 2, canvas.height / 2);
    ctx.closePath();
  }
}

function resize() {
  //permet de redimensionner le canvas si besoin
  let width = 900;
  let height = 600;
  canvas.width = width;
  canvas.height = height;
}

function reset() {
  //remet a 0 les variables principales
  score = 0;
  direction = "Droite";
  snake = [
    [-90, 270],
    [-60, 270],
    [-30, 270],
    [0, 270],
  ];
}

function Menu_Text() {
  //affiche le texte du menu
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.font = "48px poppins";
  ctx.fillText("Snake", xText, canvas.height / 2 - 60);
  ctx.font = "28px poppins";
  ctx.fillText(
    "Appuyer sur une touche du clavier pour commencer",
    xText,
    canvas.height / 2
  );
  ctx.fillText(
    "puis les flèches pour diriger le Snake",
    xText,
    canvas.height / 2 + 30
  );
}

function drawsnake() {
  //Dessinne le serpent, les parties du corps du serpent on une couleur differente (Tête: rouge, reste du corp: alterne entre jaune et vert)
  for (let i = 0; i < snake.length; i++) {
    let color;
    if (i % 2 == 0) {
      color = "#06D6A0";
    } else {
      color = "#FFD166";
    }
    if (i == snake.length - 1) {
      color = "#EF476F";
    }
    roundRect(snake[i][0], snake[i][1], 30, 30, 5, color);
  }
}

function move() {
  //Fait avancer le serpent en retirant le bout de la queue et en avançant le tete selon la direction
  snake.shift();
  if (direction == "Droite") {
    if (snake[snake.length - 1][0] + 30 < canvas.width) {
      snake.push([snake[snake.length - 1][0] + 30, snake[snake.length - 1][1]]);
    } else {
      snake.push([0, snake[snake.length - 1][1]]);
    }
  } else if (direction == "Gauche") {
    if (snake[snake.length - 1][0] > 0) {
      snake.push([snake[snake.length - 1][0] - 30, snake[snake.length - 1][1]]);
    } else {
      snake.push([canvas.width - 30, snake[snake.length - 1][1]]);
    }
  } else if (direction == "Haut") {
    if (snake[snake.length - 1][1] > 0) {
      snake.push([snake[snake.length - 1][0], snake[snake.length - 1][1] - 30]);
    } else {
      snake.push([snake[snake.length - 1][0], canvas.height - 30]);
    }
  } else if (direction == "Bas") {
    if (snake[snake.length - 1][1] <= canvas.height - 60) {
      snake.push([snake[snake.length - 1][0], snake[snake.length - 1][1] + 30]);
    } else {
      snake.push([snake[snake.length - 1][0], 0]);
    }
  }
}

function death() {
  //Verifie si la tête du serpent ne touche pas une partie de son corps
  for (let i = 0; i < snake.length - 1; i++) {
    if (
      snake[snake.length - 1][0] == snake[i][0] &&
      snake[snake.length - 1][1] == snake[i][1]
    ) {
      state = "Mort";
    }
  }
}

function food() {
  //Genere de la nouriture et verifie lorsque le serpent mange, pour ensuite lui rajouter +1 de longueur
  if (
    coordinatesfood.x == snake[snake.length - 1][0] &&
    coordinatesfood.y == snake[snake.length - 1][1]
  ) {
    score += 1;
    snake.push([snake[snake.length - 1][0], snake[snake.length - 1][1]]);
    GenFood();
  }
  ctx.beginPath();
  ctx.arc(
    coordinatesfood.x + 15,
    coordinatesfood.y + 15,
    15,
    0,
    2 * Math.PI,
    false
  );
  ctx.fillStyle = "#EF476F";
  ctx.fill();
  ctx.closePath();
}

function GenFood() {
  coordinatesfood = {
    x: RandomInt(30) * 30,
    y: RandomInt(20) * 30,
  };
  for (let i = 0; i < snake.length; i++) {
    //Verifie si la nourriture ne se trouve pas sur le serpent
    if ((snake[i][0] == coordinatesfood.x, snake[i][1] == coordinatesfood.y)) {
      GenFood();
    }
  }
}

function Mort_Text() {
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.font = "48px poppins";
  ctx.fillText("Vous avez perdu", canvas.width / 2, canvas.height / 2 - 20);
  ctx.fillText("Score : " + score, canvas.width / 2, canvas.height / 2 + 30);
  ctx.font = "28px poppins";
  ctx.fillText(
    "Appuyer sur espace pour retourner au Menu",
    canvas.width / 2,
    canvas.height / 2 + 120
  );
}

function RandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function change_direction(e) {
  if (state == "Menu") {
    GenFood();
    state = "Jeu";
  } else if (state == "Jeu") {
    if (e.code == "ArrowUp" && direction != "Bas") {
      direction = "Haut";
    } else if (e.code == "ArrowDown" && direction != "Haut") {
      direction = "Bas";
    } else if (e.code == "ArrowLeft" && direction != "Droite") {
      direction = "Gauche";
    } else if (e.code == "ArrowRight" && direction != "Gauche") {
      direction = "Droite";
    }
  } else if (state == "Mort" && e.code == "Space") {
    state = "Menu";
  }
}

//Fonction originaire du web, mais recupérée sur un de mes anciens programmes, je n'ai donc plus la source
function roundRect(x, y, largeur, hauteur, border_radius, color) {
  var r = x + largeur;
  var b = y + hauteur;
  ctx.beginPath();
  ctx.moveTo(x + border_radius, y);
  ctx.lineTo(r - border_radius, y);
  ctx.quadraticCurveTo(r, y, r, y + border_radius);
  ctx.lineTo(r, y + hauteur - border_radius);
  ctx.quadraticCurveTo(r, b, r - border_radius, b);
  ctx.lineTo(x + border_radius, b);
  ctx.quadraticCurveTo(x, b, x, b - border_radius);
  ctx.lineTo(x, y + border_radius);
  ctx.quadraticCurveTo(x, y, x + border_radius, y);
  ctx.fillStyle = color;
  ctx.fill();
}
function Draw() {
  background();
  if (state == "Menu") {
    reset();
    xText = canvas.width / 2;
    Menu_Text();
  } else if (state == "Jeu") {
    if (xText < canvas.width + 300) {
      xText += 30;
      Menu_Text();
    }
    drawsnake();
    move();
    death();
    food();
  } else if (state == "Mort") {
    Mort_Text();
  }
}

setInterval(Draw, 100);

document.onkeydown = change_direction;
