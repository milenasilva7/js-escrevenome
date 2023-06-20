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
  background(0);a//variaveis da bolinha
let xbolinha = 300;
let ybolinha = 200
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha 
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;
let raquetemovimento = 10; 
let raquetealtura = 90;
//variaveis da raquete 
let xraquete = 5;
let yraquete = 150;
function setup () {
 
  
  createCanvas (600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  //movimentaBolinha();
  verificacolisaoBorda();
  rect(xraquete, yraquete, raquetecomprimento,
       raquetealtura );
}  

function mostraBolinha() {
  circle(xbolinha, ybolinha, diametro);
}
  
function movimenta(){
   xBolinha += velocidadexbolinha;
   xBolinha += velocidadeyBolinha;
}
 
function verificaColisaoBorda(){
 if(xbolinha + raio> width ||
   xbolinha - raio< 0){
   velocidadexbolinha *= -1;
  }
 if (ybolinha + raio> height ||
    ybolinha - raio < 0){
   velocidadeybolinha *= -1;
 }
}

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
