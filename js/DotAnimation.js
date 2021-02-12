var canvas = document.getElementById("DotAnimation");
var ctx = canvas.getContext("2d");
var dot = {
  x: [],
  y: [],
  vx: [],
  vy: [],
  taille: [],
  couleur: [],
};

function resize() {
  let width = window.innerWidth / 1.5;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

function GenDot() {
  for (let i = 0; i < 200; i++) {
    let x = RandomInt(canvas.width);
    let y = RandomInt(canvas.height);
    let vx = velocity();
    let vy = -Math.abs(velocity());
    let taille = RandomInt(5);
    let couleur = RandomColor();

    dot.x.push(x);
    dot.y.push(y);
    dot.vx.push(vx);
    dot.vy.push(vy);
    dot.taille.push(taille);
    dot.couleur.push(couleur);
  }
}

function background() {
  resize();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#DDF4F8";
  ctx.fill();
}

function draw() {
  background();
  for (let i = 0; i < 200; i++) {
    ctx.beginPath();
    ctx.arc(dot.x[i], dot.y[i], dot.taille[i], 0, 2 * Math.PI, false);
    ctx.fillStyle = dot.couleur[i];
    ctx.fill();
    ctx.closePath();
    dot.x[i] += dot.vx[i];
    dot.y[i] += dot.vy[i];
    if (dot.y[i] < 0) {
      dot.y[i] += canvas.height;
    }
    if (dot.x[i] > canvas.width + 100 || dot.x[i] < 0) {
      dot.vx[i] *= -1;
    }
  }
}

function velocity() {
  var velocity = RandomInt(360);
  velocity = Math.cos(velocity) / 5;
  return velocity;
}
function RandomColor() {
  let Color = ["#2EC4B6", "#CBF3F0", "#362C28"];
  return Color[RandomInt(Color.length)];
}

function RandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

resize();
GenDot();
setInterval(draw, 10);
