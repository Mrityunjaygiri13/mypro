var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var board,boardImg;
var b1,b2,b3,b4;

function preload(){
boardImg=loadImage("frame.jpg")
}

function setup() {
  createCanvas(1536,745);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}



function draw() {

  background("skyblue");  

  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  drawSprites();
}