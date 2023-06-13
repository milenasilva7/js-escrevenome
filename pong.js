let xbolinha = 300;
let ybolinha = 200
let diametro = 15;
let raio = diametro / 2 ;

let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

function setup () {
  createCanvas (600, 400);
}

function draw() {
  background(0);
  circle( xbolinha, ybolinha, diametro);
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
  
  if (xbolinha + raio> width ||
     xbolinha  - raio< 0){
    velocidadexbolinha *= -1;
  }
 if (ybolinha + raio> height ||
    ybolinha - raio < 0){
     velocidadeybolinha *= -1;
   }
}
