/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name:splash
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash"; // lab 13
var player1; // lab 14
var timer; // lab 15
var testBox;
var dropTimer;
var presents = new Array(0); // empty array
var score = 0; 

function setup() {

  createCanvas(600, 400);

  player1 = new Player(width/2, height * 7/8);
  testBox = new Box(width/2, height/3);
  console.log(player1);

  timer = new Timer (30000); // 30 seconds
  dropTImer = new TImer(1000); // 1 second


  console.log(timer);


}

function draw() {
  background(200);
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
switch (gameState) {
  case "splash" :
    splash();
    break;
  case "play" :
    play();
    break;
  case "gameOver" :
    gameOver();
    break;
  default :
    console.log("no match! check your mousePressed function")
}

}

function splash() {
  // this is what you would see when the game starts
  background(200);
  textAlign(CENTER);
  textSize(16);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
  testBox.display();
  testBox.spin();
  testBox.move();
}

function play() {
  // this is what you see when the game is running 
  background(0, 200, 0);
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  text("This is where the Game happens", width / 2, height / 2);
  player1.x = mouseX;
  player1.y = mouseY;
  player1.display();

  if(timer.isFinished())
    gameState = "gameOver";  
}


if(dropTimer.isFinished()){
  let p = new Box(random(width), -40);
  presents.push(p); // add p to the array
  dropTimer.start();
  console.log(p);
}

for(let i =0; i < presents.length; i++){
  presents[i].display();
  presents[i].move();
  presents[i].spin();
  

  if(presents[i].y > height){
    presents.splice(i, 1); // remove from array
    score --;
  }

  let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
  if(d < 50){
    presents.splice(i, 1);
    score. ++;
  }
}
text("elapsed time: " + timer.elapsedTime, width/2, 100)
function gameOver() {
  // this is what you see when the game ends
text("Score: ' + score, 20, 40");

  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
  text("Youre Final Score: " + score, width/2, height * 2/3);
}

function mousePressed() {

    if (gameState == "splash") {
      gameState = "play"; //go to the play() screen
      timer.start(); 
      dropTimer.start();
      score = 0; // reset the score
    }
    else if (gameSate == "play") {
      gameState = "gameOver";
    }
    else if (gameSate == "gameOver"){
      gameState = "splash";
    }

  console.log("click!");

}
