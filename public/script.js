//Jquery
$("#version").click(function() {
  $("#info").toggle();  
});

function getArray (){
  $.ajax({
    url : "arrayJSON.php",
    type : "POST",
    data : 'data123',
    dataType : "json",
    success : function (result) {
      worldHighScores = result;
      console.log(hgScore);
      console.log(worldHighScores);
    },
    error : function () {
    }
  });
};

function uploadArray (){
  $.ajax({
    url: "index.php",
    type: "POST",
    data: {array:jsJSONArray},
    success: function(d) {
      console.log(d);
    }
  });
};

function noAnimationNoWelcome(){
  if (animationAfterChoice === 0 && welcomeScreen === 0) return true
};

function testSection (){
  //context.fillText("Just normal? " + justNormal, 20, 50);
  //context.fillStyle = "black";
  //context.fillText(iffalse(welcomeScreen), 20, 300);
  //context.fillText("Just 3?: " + just3, 20, 100);
  //context.fillStyle = "black";
  //context.fillText("ClientNick " + game_server, 20, 150);
  //context.fillText("3 Point mode: " + threepointmode, 20, 200);
  //context.fillText("High Score mode: " + highscoremode, 20, 250);
}

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var fps = 60;

//Modes
var welcomeScreen = 1;
var animationAfterChoice = 0;
var searchformatch = 0;
var localHS = 1;
var worldHS = 0;
var lastNormalor3 = "normal";
var justNormal = 0;
var just3 = 0;
var compareDandC = 0;
var mode10 = 0;
var normalmode = 1;
var threepointmode = 0;
var highscoremode = 0;

var endGameRound = 0;
var singleplayer = 1;
var multiplayer = 0;

var alwayszero = 0;

//Sounds
var pausebackgroundSong = 0;
var noSound = 0;
var soundFX = 1;

var lastButtonMousedown = 0;
var mousedownRPS = 0;

var winText = " ";
var computerChoice = " ";
var userChoice = " ";
var computerText;
var playerText;

var rectRock = new Box(190, 60, 318, 108, "rock", "brown");
var rectPaper = new Box(190, 203, 318, 108, "paper", "pink");
var rectScissors = new Box(190, 340, 318, 108, "scissors", "orange");
var boxAfter10 = new Box(100, 100, 500, 300);
var topLine = new Box(0, 0, 700, 50);


var button10Mode = new Button (117, 470, 125, 30, "3 Point Game!", "nothing", "3pointgame", -1);
var buttonNormalMode = new Button (287, 470, 125, 30, "Normal Mode", "nothing", "normalmode",-1);
var AfterEndNormal = new Button (430, 320, 120, 50, "Normal", "nothing", "afternormalmode",-1);
var AfterEnd10 =  new Button (150, 320, 120, 50, "Go again?", "nothing", "after3point",-1);
var buttonHighScores = new Button (455, 470, 125, 30, "High Scores", "nothing", "highscores",-1);
var buttonLocalHS = new Button (455, 440, 125, 30, "Local HS", "nothing", "localhs", -1); 
var buttonWorldHS =  new Button (455, 410, 125, 30, "World HS", "nothing", "worldhs", -1);
var buttonSinglePlayer = new Button (0, 425, 125, 30, "Single-Player", "nothing", "singleplayer", -1);
var buttonMultiPlayer = new Button (0, 385, 125, 30, "Multiplayer", "nothisng", "multiplayer", -1);
var buttonSearchforMatch = new Button (150, 50, 400, 100, "Search For Match!", "Searching For Match!","searchformatch", 1);
var buttonEndSearch = new Button (150, 160, 400, 100, "Stop", "nothing", "endsearch", -1);
var rectAudioButton = new Button (670, 470, 30, 30, "audiobutton", -1);
var rectFX = new Button (670, 430, 30, 30, "fxbutton", "nothing", "fxbutton", -1);
var welcomeScreenRect = new Button (0, 0, 700, 500, "Welcome to Rock, Paper, Scissors!", "What's your nickname?");

var testRect = new Button (300, 0, 30, 30);
var testRect2 = new Button (400, 0, 30, 30);
var rectFingers = new Button (0, 200, 25, 4);
var rectFingersUp  = new Button (0, 200, 7, 25);
var rectFingers2 = new Button (100, 21, 25, 4);
var rectFingersUp2 = new Button (0, 200, 7, 25)

var clickrectRock = new Foo (canvas, rectRock, "rock", "", "", 1, 0);
var clickrectPaper = new Foo (canvas, rectPaper, "paper", "", "", 1, 0);
var clickrectScissors = new Foo (canvas, rectScissors, "scissors", "", "", 1, 0);
var clickrect3pointgame = new Foo (canvas, button10Mode, "3pointgame", "", "", 1, 0);
var clickrectNormalmode = new Foo (canvas, buttonNormalMode, "normalmode", "", "", 1, 0);
var clickAfterEndNormal = new Foo (canvas, AfterEndNormal, "afternormalmode", "", "", 1, 0);
var clickAfterEnd10 =  new Foo (canvas, AfterEnd10, "after3point", "", "", 1, 0);

var clickrectSearchformatch = new Foo (canvas, buttonSearchforMatch, "searchformatch", "multiplayer", "", 0, 1);
var clickrectEndsearch = new Foo (canvas, buttonEndSearch, "endsearch", "multiplayer", "", 0, 1);

var clickrectAudio = new Foo (canvas, rectAudioButton, "audiobutton", "always");
var clickrectFx = new Foo (canvas, rectFX, "fxbutton", "always");
var clickrectHighscores = new Foo (canvas, buttonHighScores, "highscores", "always");
var clickrectLocalhs = new Foo (canvas, buttonLocalHS, "localhs", "highscores");
var clickrectWorldhs = new Foo (canvas, buttonWorldHS, "worldhs", "highscores");
var clickrectSingleplayer = new Foo (canvas, buttonSinglePlayer, "singleplayer", "always");
var clickrectMultiplayer = new Foo (canvas, buttonMultiPlayer, "multiplayer", "always");

var backSprite = new CreateSprite (700, 500, 0, 0, 0, 0);
var audioSprite = new CreateSprite (30, 30, 0, 0, 670, 470);
var crossSprite = new CreateSprite (30, 30, 0, 0, 670, 470);
var crossSpriteFX = new CreateSprite (30, 30, 0, 0, 670, 430);
var fxSprite = new CreateSprite (30, 30, 0, 0, 670, 430);

var scoreTextPlayer = 0;
var scoreTextCom = 0;
var inARow = 0;
var highScore = 0;
var i, compareResult;
var storedHighScores = JSON.parse(localStorage.getItem("highscores"));
var hgScore = [];

var hgScoreL;
var wgScoreL;

var today, objToday, weekday, dayOfWeek, domEnder, dayOfMonth, months, curMonth, curYear, curHour, curMinute, curSeconds, curMeridiem, todayforCheck;

var worldHighScores;

var youWon10 = "You won after 3 rounds!";
var youLost10 = "You lost after 3 rounds!";

var timeWhenWorLPlay = 2600;

var hover = 0;
var fxHover = 0;

var resourcesLoaded = 0;
var assetsLoaded = 0;

var allAudioFilesLoaded = 0;

var audioNames = ["1mp3.mp3", "jankenpo.mp3", "paperpaper.mp3", "paperscissors.mp3", "rockpaper.mp3", "rockrock.mp3", "rockscissors.mp3", "scissorsscissors.mp3", "lostsound.mp3", "win1.mp3", "win2.mp3", "win3.mp3", "win4.mp3"];
var audioFiles = [];
var audioFilesProcessed = 0;
// an array of image URLs
var imageNames = ["imgaudio0.png", "imgaudio.png", "img.jpg", "imgaudio1.png", "imgaudio2.png", "cross.png", "fx.png"];
// an array of images 
var images = [];
// function to flag image as loaded
var imagesProcessed = 0;

audioNames.forEach(function(name){
  audio = new Audio(); 
  audio.src = "sounds/" + name;      // set the src
  audio.addEventListener('canplaythrough', audioDone, false);
  audioFiles.push(audio); 
});

var notCorrect = "";

var input = document.getElementById('inputNickname');
    
var delta = 0;
var timestep = 1000 / fps;
var lastFrameTimeMs = 0;

var framesThisSecond = 0,
    lastFpsUpdate = 0;

var howLong = 40;
var currentFrame = 0;
var pausePoint = 5;
var halfPoint = 15;
var backPoint = 25;
var stopAfter3 = 0;

var howLong2 = 40;
var currentFrame2 = 0;
var pausePoint2 = 5;
var halfPoint2 = 15;
var backPoint2 = 25;
var stopAfter32 = 0; 

var mousemove = new Misc(canvas);
var mousemove = new Misc(document.body);
var mousemove = new Misc(window);    

function Box(x, y, width, height, text, color){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.text = text;
  this.color = color;
  this.draw = function(){
    if(iffalse(endGameRound, highscoremode)){
      context.fillStyle = "black"
      if(mousedownRPS === this.text) {
        mousedownFunc();
      };
      context.fillRect(this.x, this.y, this.width, this.height);
      context.fillStyle = this.color;
      context.font = "100px Garamond";
      context.textAlign = "center";
      context.fillText(capitalizeFirstLetter(this.text), this.x + this.width/2 , this.y + this.height/2 + this.height/4);
      context.textAlign = "left";
    }
  };
};

function Button (x, y, width, height, text, text2, RPS, sfm){
  this.x = x,
  this.y = y,
  this.width = width,
  this.height = height,
  this.text = text,
  this.RPS = RPS,
  this.text2 = text2,
  this.sfm = sfm,
  this.draw = function (makeitGreen, makeitGreen2){
    context.font = "20px Garmond";
    if (mousedownRPS === this.RPS){
      context.fillStyle = "grey";
    }
    else{
      context.fillStyle = "black";
    }
    context.fillRect(this.x, this.y, this.width, this. height)
    if (iftrue(makeitGreen) && (iffalse(makeitGreen2) || makeitGreen2 === undefined)){
      context.fillStyle = "green";
    }
    else{
      context.fillStyle = "white";
    }
    context.textAlign = "center";
    if (searchformatch === this.sfm) {
      context.fillText(this.text2, this.x + this.width/2, this.y+20);
    }
    else{
      context.fillText(this.text, this.x + this.width/2, this.y+20);
    }
    context.textAlign = "left";
  }
};
 
//var clickrectRock = new Foo (canvas, rectRock, "rock", "", "", 1);

function Foo(elementID, buttonID, RPS, whenActive, whenActive2, sp, mp) {
    this.elementID = elementID;
    this.buttonID = buttonID;
    this.RPS = RPS;
    this.whenActive = whenActive;
    this.whenActive2 = whenActive2;
    this.sp = sp;
    this.mp = mp;
    this.listenMousedown = function(evt) {
      this.mousePos = getMousePos(canvas, evt);
      if (( (this.sp === singleplayer || this.mp === multiplayer) || (this.whenActive2 === undefined || this.whenActive2 === searchformatch)) && iffalse(animationAfterChoice) || this.whenActive === "always" && this.buttonID.text != "High Scores"){
        if (isInside(this.mousePos, this.buttonID)) {
          mousedownRPS = this.RPS;
          lastButtonMousedown = this.RPS;
        }
      }
      else if (((iftrue(endGameRound)) && (this.buttonID.text === "Normal" || this.buttonID.text === "Go again?" || this.buttonID.text === "Normal Mode" || this.buttonID.text === "3 Point Game!"))) {
        if (isInside(this.mousePos, this.buttonID)) {
          mousedownRPS = this.RPS;
          lastButtonMousedown = this.RPS;
        }  
      }
    }
    this.listenClick = function(evt) {
      this.mousePos = getMousePos(canvas, evt);
      if (( (this.sp === singleplayer || this.mp === multiplayer) || (this.whenActive2 === undefined || this.whenActive2 === searchformatch)) && iffalse(animationAfterChoice) || this.whenActive === "always" && this.buttonID.text != "High Scores") {
        if (isInside(this.mousePos, this.buttonID) && this.RPS === RPS && lastButtonMousedown === this.RPS) {
          action();
        }
      }
      else if ((iftrue(endGameRound)) && (this.buttonID.text === "Normal" || this.buttonID.text === "Go again?" || this.buttonID.text === "Normal Mode" || this.buttonID.text === "3 Point Game!") && (lastButtonMousedown === "afternormalmode" || lastButtonMousedown === "after3point" || lastButtonMousedown === "3pointgame" || lastButtonMousedown === "normalmode")){
        if (isInside(this.mousePos, this.buttonID) && this.RPS === RPS && lastButtonMousedown === this.RPS) {
          action();
        }
      } 
    };
    this.elementID.addEventListener('mousedown', this.listenMousedown.bind(this), false);
    this.elementID.addEventListener('click', this.listenClick.bind(this), false);
}
function Misc(elementID) {
  this.elementID = elementID;
  this.listenMouseup = function(evt, elementID) {
    actionMouseup(evt, this.elementID);
  }
  this.listenMousemove = function(evt) {
    actionMousemove(evt);
  }
  this.listenMouseout = function(){
    actionMouseout(); 
  }
  this.listenMousedown = function(elementID){
    actionMousedown(this.elementID);
  }
  this.elementID.addEventListener('mouseup', this.listenMouseup.bind(this), false);
  this.elementID.addEventListener('mousemove', this.listenMousemove.bind(this), false);
  this.elementID.addEventListener('mouseout', this.listenMouseout.bind(this), false);
  this.elementID.addEventListener('onmousedown', this.listenMousedown.bind(this), false);
}
canvas.onselectstart = function () { return false; }

function CreateSprite  (spriteWidth, spriteHeight, pixelsLeft, pixelsTop, canvasPosX, canvasPosY){
  this.spriteWidth = spriteWidth,
  this.spriteHeight = spriteHeight,
  this.pixelsLeft = pixelsLeft,
  this.pixelsTop = pixelsTop,
  this.canvasPosX = canvasPosX,
  this.canvasPosY = canvasPosY
};

//Function that adds a sprite and draws it.
function addSprite(type, source) {
  context.drawImage(source,
    type.pixelsLeft,
    type.pixelsTop,
    type.spriteWidth,
    type.spriteHeight,
    type.canvasPosX,
    type.canvasPosY,
    type.spriteWidth,
    type.spriteHeight
  );
};

//Function that capitalizes the first letter in a string
function capitalizeFirstLetter(string) {
  "use strict";
  return string.charAt(0).toUpperCase() + string.slice(1);
};        

function iftrue(a, b, c, d , e, f, g, h){
  if ((a === 1 || a === undefined) && (b === 1 || b === undefined) && (c === 1 || c === undefined) && (d === 1 || d === undefined) && (e === 1 || e === undefined) && (f === 1 || f === undefined) && (g === 1 || g === undefined) && (h === 1 || h === undefined)) return true
    else return false
}
function iffalse(a, b, c, d , e, f, g, h){
  if ((a != 1 || a === undefined) && (b != 1 || b === undefined) && (c != 1 || c === undefined) && (d != 1 || d === undefined) && (e != 1 || e === undefined) && (f != 1 || f === undefined) && (g != 1 || g === undefined) && (h != 1 || h === undefined)) return true
    else return false
}
        
function mousedownFunc (){
        context.fillStyle ="white";
};

function updateWSHSorNot () {
  if (iftrue(highscoremode)) {
    getArray();    
  }
};

getArray();

setInterval(function(){ 
    updateWSHSorNot(); 
}, 10000);

//Resets all variables to 0 to start the game over
function resetGame(){
  if (animationAfterChoice != 1){
    endGameRound = 0;
    pausebackgroundSong = 0;
    scoreTextPlayer = 0;
    scoreTextCom = 0;
    computerChoice = " ";
    userChoice =" ";
    winText =" ";
  }
};

function checkStoredHS(){
  if (storedHighScores != null){
    hgScore = storedHighScores;
  }
};


function checkLengthforHSforLoop (){
  if (hgScore.length > 10){
    hgScoreL = 10;
  }
  else{
    hgScoreL = hgScore.length;
  }   
};


function checkLengthforWHSforLoop (){
  if (worldHighScores === undefined){  
  }
  else if (worldHighScores.length > 10){
    wgScoreL = 10;
  }
  else{
    wgScoreL = worldHighScores.length;
  }   
};

function todayFunc (){
  objToday = new Date(),
  dayOfMonth = objToday.getDate() < 10 ? "0" + objToday.getDate() : objToday.getDate(),
  curMonth = objToday.getMonth() < 10 ? "0" + (objToday.getMonth() + 1) : (objToday.getMonth() + 1),
  curYear = objToday.getFullYear(),
  curHour = objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours(),
  curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
  curYearforCheck = objToday.getFullYear(),
  curMonthforCheck = objToday.getMonth() < 10 ? "0" + (objToday.getMonth() + 1) : (objToday.getMonth() + 1),
  curDayforCheck = objToday.getDate() < 10 ? "0" + objToday.getDate() : objToday.getDate(),
  curHourforCheck = objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours(),
  curMinuteforCheck = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
  curSecondforCheck = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
  todayforCheck = curYearforCheck.toString() + curMonthforCheck + curDayforCheck + curHourforCheck + curMinuteforCheck + curSecondforCheck,
  today = curHour + ":" + curMinute + " " + dayOfMonth + "." + curMonth + "." + curYear;
};

function checkHS (){
  if(winText === "You lose!" && inARow !=0){
    todayFunc();
    hgScore.push([inARow, nickName, today, todayforCheck]);
    hgScore.splice(15, 20);
    localStorage.setItem("highscores", JSON.stringify(hgScore));
    jsJSONArray = JSON.stringify(hgScore);
    uploadArray();
  };
};

function winTextfunc () {
  context.fillText(winText, 313, 20);
}

function highScoreFunction (){
  if (highScore < inARow && winText === "You win!" ){
    highScore = inARow;  
  }
};

function inARowFunction (){
  if(winText === "You lose!"){
    inARow = 0;
  }
  else if(scoreTextPlayer === 0){
    inARow = 0;
  } 
};

//Draws the score
function drawScore() {
  "use strict";
  context.font = "30px Garamond";
  context.fillStyle = "white";
  context.fillText(scoreTextPlayer, 268, 20);
  context.fillText(scoreTextCom, 400, 20);
};

//Function to check whether a point is inside a rectangle
function isInside(pos, rect) {
  "use strict";
  return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y;
}
//Function to get the mouse position
function getMousePos(canvas, event) {
  "use strict";
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
};

//Function which checks if the player won or the computer.
function compare(choice1, choice2) {
  "use strict";
  if (choice1 === choice2) {
    winText = "It's a tie!";
  } 
  else if ( (choice1 === "rock" && choice2 === "scissors") || (choice1 === "paper" && choice2 === "rock") || (choice1 === "scissors" && choice2 === "paper")) {
    winText = "You win!";
    scoreTextPlayer = scoreTextPlayer + 1;
    inARow ++;
  } 
  else {
    winText = "You lose!";
    scoreTextCom = scoreTextCom + 1;
    checkHS();
  }
};

function whichSound (choice1, choice2) {
  if ((choice1 === "paper" && choice2 === "paper") && (iftrue(soundFX))){
    audioFiles[1].play();
    setTimeout(function() {
        audioFiles[2].play();
    }, 1200);
  }
  else if ((((choice1 === "scissors" && choice2 === "paper")) || (choice1 === "paper" && choice2 === "scissors")) && (iftrue(soundFX))){
    audioFiles[1].play();
    setTimeout(function() {
        audioFiles[3].play();
    }, 1200); 
  }
  else if ( ((choice1 === "rock" && choice2 === "paper") || (choice1 === "paper" && choice2 === "rock")) && (iftrue(soundFX))){
    audioFiles[1].play();
    setTimeout(function() {
        audioFiles[4].play();
    }, 1200);  
  }
  else if ((choice1 === "rock" && choice2 === "rock")&& (iftrue(soundFX))){
    audioFiles[1].play();
    setTimeout(function() {
        audioFiles[5].play();
    }, 1200);        
  }
  else if (((choice1 === "scissors" && choice2 === "rock") || (choice1 === "rock" && choice2 === "scissors")) && (iftrue(soundFX))){
    audioFiles[1].play();
    setTimeout(function() {
        audioFiles[6].play();
    }, 1200);  
  }
  else if (( choice1 === "scissors" && choice2 === "scissors") && (iftrue(soundFX))){
    audioFiles[1].play();
    setTimeout(function() {
        audioFiles[7].play();
    }, 1200);  
   }  
};

//Function that generates the computer choice at random
function generateComChoice() {
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } 
  else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } 
  else {
    computerChoice = "scissors";
  }
};

//Function that combines the generation of computer choice and comparison of user and computer choice
function genComandCompare(){
  generateComChoice();
  compare(userChoice, computerChoice);
  whichSound(userChoice, computerChoice);
};

function initAnimation (){
  if (iftrue(animationAfterChoice)){ 
    setTimeout(function() {
      animationAfterChoice = 0;
    }, 2.4 * 1000);
  };
};

//Function that spawns the menu box that pops up after a game is lost or won after a game round and runs the ModeAfterEnd function to let the player choose what game mode to play when either button is pushed
function spawnEndBox(){
  if (iftrue(endGameRound) && winText === "You win!"){
    context.fillStyle ="green";
    context.fillRect(boxAfter10.x, boxAfter10.y, boxAfter10.width, boxAfter10.height)
    context.fillStyle ="white";
    context.fillText(youWon10, 200, 200)
    AfterEndNormal.draw(iftrue(alwayszero));
    AfterEnd10.draw(iftrue(alwayszero));
  }
  else if (iftrue(endGameRound) && winText === "You lose!") {
    context.fillStyle ="red";
    context.fillRect(boxAfter10.x, boxAfter10.y, boxAfter10.width, boxAfter10.height)
    context.fillStyle ="white";
    context.fillText(youLost10, 200, 200)
    AfterEndNormal.draw(iftrue(alwayszero));
    AfterEnd10.draw(iftrue(alwayszero));
  }
};

//Function that ends the 10 round mode
function resetScore () {
  if(scoreTextPlayer === 3 && iftrue(threepointmode)){
    endGameRound = 1;
  }
  else if (scoreTextCom === 3 && iftrue(threepointmode)) {
    endGameRound = 1;
  }
}

function whichWinSound () {
  var wins = ["win1", "win2", "win3", "win4"];
  var chosenWin = wins[Math.floor(Math.random() * wins.length)];
  if(chosenWin === "win1"){
    setTimeout(function() {
      audioFiles[9].play();
    }, timeWhenWorLPlay);
  }
  else if (chosenWin === "win2"){
    setTimeout(function() {
      audioFiles[10].play();
    }, timeWhenWorLPlay);
  }
  else if (chosenWin === "win3"){
    setTimeout(function() {
      audioFiles[11].play();
    }, timeWhenWorLPlay);
  }
  else if (chosenWin === "win4"){
    setTimeout(function() {
      audioFiles[12].play();
    }, timeWhenWorLPlay);
  } 
}

function fxHoverFunc (){
  if (iftrue(fxHover)){
    context.font = "20px Garmond";
    context.fillStyle = "white";
    context.fillText("Sound effects", 555, 450);
  }
};

function hoverFunc (){
  if (iftrue(hover)){
    context.font = "20px Garmond";
    context.fillStyle = "white";
    context.fillText("BG music", 585, 490);
  }
};
//Function that draws the top black line
function topLineFunc () {
  context.fillStyle = "black";
  context.fillRect(topLine.x, topLine.y, topLine.width, topLine.height);
};

//Function that gathers the functions that draws the player's choices.
function rockpaperscissorsText(){
  if (iffalse(justNormal, just3)){
    rectRock.draw();
    rectPaper.draw();
    rectScissors.draw();
  }  
}

//Function that draws text for com choice and player choice
function candpChoiceDraw(){
  context.font = "15px Georgia";
  computerChoiceColor();
  computerText = context.fillText("Computer: " + capitalizeFirstLetter(computerChoice.toString()), 436, 20);
  userChoiceColor();
  context.textAlign ="right";
  playerText = context.fillText(nickName +": " + capitalizeFirstLetter(userChoice.toString()), 247, 20);
  context.textAlign ="left";
};

//Function that turns the winText, green, red or blue.
function greenOrRed (){
  if (winText === "You win!") {
    context.fillStyle = "green";
  }
  else if (winText === "You lose!") {
    context.fillStyle = "red";
  }
  else{
   context.fillStyle = "blue";
  }
};

function allLoaded() {
  if (iftrue(allAudioFilesLoaded, allImagesLoaded)){
    resourcesLoaded = 1;
    $("#inputNickname").show();
    input.focus();
    console.log("Audio files and images loaded sucessfully") 
    return true;
  }
};

function callbackAudioFiles (){
  allAudioFilesLoaded = 1;
  audio.removeEventListener('canplaythrough', audioDone, false);
  console.log("All sounds loaded"); 
  allLoaded();
};

function audioDone () {
  console.log("File: " + this.src.substring(21,50) + " loaded")
  audioFilesProcessed++;
  assetsLoaded++;
  if (audioFilesProcessed === audioFiles.length){
      callbackAudioFiles(); 
  }
};


function loaded(){
  this.loaded = true;
  console.log ("File: " + this.src.substring(21,50) + " loaded.");
  imagesProcessed ++;
  assetsLoaded++;
  if (imagesProcessed === imageNames.length){
    callbackImages();
  }
};
// for each image name create the image and put it into the images array
function callbackImages () {
    allImagesLoaded = 1;
    console.log("All images loaded"); 
    allLoaded();
};

imageNames.forEach(function(name){
  image = new Image();   // create image
  image.src = "sprites/" + name;      // set the src
  image.onload = loaded; // add the image on load event
  images.push(image);    // push it onto the image array  
});

audioFiles[0].addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

var setVolume = function(id,vol) {
    id.volume = vol; // vol between 0 and 1
};

function fXOnOff () {
  if (iftrue(soundFX)){
    addSprite(fxSprite, images[6]);
  }
  else if (iffalse(soundFX)){
    addSprite(fxSprite, images[6]);
    addSprite(crossSpriteFX, images[5]);   
  }
};

function pausebgSong (){
  if (iffalse(pausebackgroundSong)){
    audioFiles[0].play(); 
  }
  else if (iftrue(pausebackgroundSong)){
    audioFiles[0].pause();
  }
};

//function that paues or unpauses the audio and draws a cross over the sound sprite. 
function noSoundFunc (){
  if(noSound === 1){
    addSprite(audioSprite, images[0]);
    addSprite(crossSprite, images[5]);
    audioFiles[0].pause();    
  }
  else if (noSound === 2){
    addSprite(audioSprite, images[3]);
    pausebgSong();
    setVolume(audioFiles[0], 0.1);
  }

  else if (noSound === 3){
    addSprite(audioSprite, images[4]);
    pausebgSong();
    setVolume(audioFiles[0], 0.2);
  }

  else if (noSound === 0){
    addSprite(audioSprite, images[1]);
    pausebgSong();
    setVolume(audioFiles[0], 0.3);
  }  
};

function showFPS(){
  context.font = "20px garmond";
  context.fillStyle = "white";
  context.fillText(Math.round(fps) + " FPS", 0, 500);
}

function welcomeInput (){
  if (iftrue(welcomeScreen)){
    window.addEventListener("keydown", function (e) {
      if (e.keyCode === 13 && input.value.length <= 6 && input.value.length >= 3) {
        nickName = input.value;
        welcomeScreen = 0;
        $("m").hide();
      }
      else if (e.keyCode === 13 && input.value.length > 6) {
        notCorrect = "Your nickname can only be 6 characters long";
      }
      else if (e.keyCode === 13 && input.value.length < 3){
       notCorrect = "Your nickname must be over 3 characters long";
      };
    }, false);
  };
};

function panic() {
    delta = 0; // discard the unsimulated time
    // ... snap the player to the authoritative state
}

function animateHandDraw(rect){
  if((iftrue(animationAfterChoice)) ) {
    if ((stopAfter3 > 18) && (userChoice === "scissors")) {
      context.fillStyle = "black";
      context.fillRect(rectFingers.x, rectFingers.y, rectFingers.width, rectFingers.height);
      context.fillRect(rectFingers.x, rectFingers.y+10, rectFingers.width,                
      rectFingers.height);
    }
    else if ((stopAfter3 > 18) && (userChoice === "paper")){
      context.fillStyle = "black";
      context.fillRect(rectFingers.x, rectFingers.y, rectFingers.width, rectFingers.height);
      context.fillRect(rectFingers.x, rectFingers.y+8, rectFingers.width, rectFingers.height);
      context.fillRect(rectFingers.x, rectFingers.y+16, rectFingers.width, rectFingers.height);
      context.fillRect(rectFingers.x, rectFingers.y+24, rectFingers.width, rectFingers.height);
      context.fillRect(rectFingersUp.x, rectFingersUp.y+26, rectFingersUp.width, rectFingersUp.height);
    }
    context.fillStyle = "black";
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
  };
};

function animateHandDraw2(rect) {
  if((iftrue(animationAfterChoice))) {
    if ((stopAfter32 > 18) && (computerChoice === "scissors")) {
      context.fillStyle = "black";
      context.fillRect(rectFingers2.x-55, rectFingers2.y, rectFingers2.width, rectFingers2.height);
      context.fillRect(rectFingers2.x-55, rectFingers2.y+10, rectFingers2.width, 
      rectFingers2.height);
    }
    else if ((stopAfter32 > 18) && (computerChoice === "paper")){
    context.fillStyle = "black";
    context.fillRect(rectFingers2.x-55, rectFingers2.y, rectFingers2.width, rectFingers2.height);
    context.fillRect(rectFingers2.x-55, rectFingers2.y+8, rectFingers2.width,                
    rectFingers2.height);
    context.fillRect(rectFingers2.x-55, rectFingers2.y+16, rectFingers2.width,
    rectFingers2.height);
    context.fillRect(rectFingers2.x-55, rectFingers2.y+24, rectFingers2.width,
    rectFingers2.height);
    context.fillRect(rectFingersUp2.x+23, rectFingersUp2.y+26, rectFingersUp2.width,         
    rectFingersUp2.height);
    }
    context.fillStyle = "black";
    context.fillRect(rect.x, rect.y, rect.width, rect.height);
  };
};

function animateHandUpdate2(rect){ 
  if((iftrue(animationAfterChoice) ) && (stopAfter32 != 25)){ 
    if (currentFrame2 <= pausePoint2) {
      rect.y = rect.y + howLong2;
      currentFrame2++;
    }
    else if ((currentFrame2 >= pausePoint2) && (currentFrame2 < halfPoint2) && currentFrame2 != halfPoint2){
      currentFrame2++;
      stopAfter32 ++;
    }
    else if ((currentFrame2 >= halfPoint2) && (currentFrame2 != backPoint2)){
      rect.y = rect.y - howLong;
      currentFrame2++;
    }
    else if (currentFrame2 === backPoint2){
      currentFrame2 = 0;
      rect.y = 0;
    }
  }
  else if (iffalse(animationAfterChoice))   {
      stopAfter32 = 0;
      rect.y = 0;
      currentFrame2 = 0;
  }
  else if (stopAfter32 === 25){
  }
  rectFingers2.x = testRect2.x+30;
  rectFingers2.y = testRect2.y+0.5;
  rectFingersUp2.x = testRect2.x;
  rectFingersUp2.y = testRect2.y-50;
};

function animateHandUpdate(rect){ 
  if((iftrue(animationAfterChoice)) && (stopAfter3 != 25)){
    if (currentFrame <= pausePoint) {
     rect.y = rect.y + howLong;
     currentFrame++;
    }
    else if ((currentFrame >= pausePoint) && (currentFrame < halfPoint) && currentFrame != halfPoint){
      currentFrame++;
      stopAfter3 ++;
    }
    else if ((currentFrame >= halfPoint) && (currentFrame != backPoint)){
      rect.y = rect.y - howLong;
      currentFrame++;
    }
    else if (currentFrame === backPoint){
        currentFrame = 0;
        rect.y = 0;
    }
  }
  else if (iffalse(animationAfterChoice)) {
    stopAfter3 = 0;
    rect.y = 0;
    currentFrame = 0;
  }
  else if (stopAfter3 === 25){
  }
  rectFingers.x = testRect.x+30;
  rectFingers.y = testRect.y+0.5;
  rectFingersUp.x = testRect.x;
  rectFingersUp.y = testRect.y-50;
};

//Function that changes the color of the computer choicce text
function computerChoiceColor() {
  if (computerChoice === "rock") context.fillStyle = rectRock.color;
  else if (computerChoice === "paper") context.fillStyle = rectPaper.color;
  else if (computerChoice === "scissors") context.fillStyle = rectScissors.color;
  else context.fillStyle = "white";
}

//Function that changes the color of the player choicce text
function userChoiceColor() {
  if (userChoice === "rock") context.fillStyle = rectRock.color;
  else if (userChoice === "paper") context.fillStyle = rectPaper.color;
  else if (userChoice === "scissors") context.fillStyle = rectScissors.color;
  else context.fillStyle = "white";
};

//Checks if you won or lost a point game and plays a sound
function winOrLostSound (){
  if (iffalse(endGameRound) && iftrue(threepointmode, soundFX)){
    if (scoreTextPlayer === 3){
    setTimeout(function() {
        pausebackgroundSong = 1;
    }, timeWhenWorLPlay); 
    whichWinSound();  
    }
    else if (scoreTextCom === 3){
      setTimeout(function() {
        pausebackgroundSong = 1;
        audioFiles[8].play();
      }, timeWhenWorLPlay); 
    }    
  }
};

function actionMouseout (){
  hover = 0;
  fxHover = 0
};

function actionMouseup(evt, bombom){
  var mousePos = getMousePos(canvas, evt);
  if (isInside(mousePos, canvas) || isInside(mousePos, canvas) === false ){
    mousedownRPS = 0;
  }
  if(bombom === window){
    mousedownRPS = 0;
  }
  if(bombom === document.body){
    mousedownRPS = 0;
  } 
}

function actionMousemove(evt){
  var mousePos = getMousePos(canvas, evt);
  if (isInside(mousePos, rectFX)){
    fxHover = 1;
  }
  else {
    fxHover = 0;
  }
  if (isInside(mousePos, rectAudioButton)){
    hover = 1;
  }
  else{
    hover = 0;
  }
}

function actionMousedown(momo){
  if (momo === document) {
    return false;
  }
}

function action(){
  if (lastButtonMousedown === "fxbutton"){
    if(iftrue(soundFX)){
      soundFX = 0;
    }
    else if(soundFX === 0){
      soundFX = 1;
    }
  }
  //Checks to see if player has clicked the sound button
  else if (lastButtonMousedown === "audiobutton"){
    if (noSound === 0){
      noSound = 1; 
    }
    else if (noSound === 1){
      noSound = 2;
    }
    else if (noSound === 2){
      noSound = 3
    }
    else if (noSound === 3){
      noSound = 0;
    }
  }
  if (iffalse(welcomeScreen, animationAfterChoice)) {
    //Check if buttonSearchforMatch is clicked and  searches for match
    if (iftrue(searchformatch) && iffalse(welcomeScreen) && lastButtonMousedown === "endsearch") {
      searchformatch = 0;
    }
    //Check if buttonEndSearch is clicked and ends search,
    else if (iffalse(searchformatch) && lastButtonMousedown === "searchformatch" ) {
      searchformatch = 1;
    }
    //Check if buttonMultiplayer is clicked and takes you to multiplayer page.
    else if (lastButtonMousedown === "multiplayer"){
      multiplayer = 1;
      singleplayer = 0;
      highscoremode = 0;
    }
    //Check if buttonSingleplayer is clicked and takes you to singleplayer page.
    else if (lastButtonMousedown === "singleplayer"){
      singleplayer = 1;
      multiplayer = 0;
      highscoremode = 0;
    }
    //Check to see if player has clicked and Normal mode and engages Normal mode if so.
    else if (iffalse(multiplayer) && lastButtonMousedown === "normalmode"){
      if (justNormal === 1){
        lastNormalor3 = "normal";
        normalmode = 1;
        threepointmode = 0;
        highscoremode = 0; 
        justNormal = 0;
      }
      else if (just3 === 0 && iftrue(threepointmode)){
        lastNormalor3 = "normal";
        normalmode = 1;
        threepointmode = 0;
        highscoremode = 0;
        resetGame(); 
      }
      else if(iftrue(endGameRound)){
        lastNormalor3 = "normal";
        normalmode = 1;
        threepointmode = 0;
        highscoremode = 0;
        resetGame();
      }
    }
    //Check to see if player has clicked and High Scores and engages High Scores.
    else if(lastButtonMousedown === "highscores"){
      if (iffalse(endGameRound) && lastNormalor3 === "normal"){
        if (iffalse(multiplayer)){
          //normalmode = 0;
          //threepointmode = 0;
          justNormal = 1;
        }
        highscoremode = 1;
        
      }
      else if(iffalse(endGameRound) && lastNormalor3 === "3pointgame"){
        if (iffalse(multiplayer)){
          //normalmode = 0;
          //<threepointmode = 0;
          just3 = 1;
        }
        highscoremode = 1;
        
      }
      else if (iftrue(endGameRound)){
        if (iffalse(multiplayer)){
          //normalmode = 0;
          //threepointmode = 0;
        }
        highscoremode = 1;
      }
    }
    //Check to see if player has clicked Local High Scores and engages Local High Scores.
    else if(lastButtonMousedown === "localhs" && iftrue(highscoremode)){
      localHS = 1;
      worldHS = 0;
    }
    //Check to see if player has clicked World High Scores and engages World High Scores.
    else if(lastButtonMousedown === "worldhs" && iftrue(highscoremode)){
      localHS = 0;
      worldHS = 1;
    }
    //Check to see if player has clicked and 3 round mode and engages 3 round mode if so.
    else if(lastButtonMousedown === "3pointgame"){
      if (just3 === 1){
        lastNormalor3 = "3pointgame";
        normalmode = 0;
        threepointmode = 1;
        highscoremode = 0;
        just3 = 0;
      }
      else if (justNormal === 0 && iftrue(normalmode)){
        lastNormalor3 = "3pointgame";
        normalmode = 0;
        threepointmode = 1;
        highscoremode = 0;
        resetGame();
      }
      else if(iftrue(endGameRound)){
        lastNormalor3 = "3pointgame";
        normalmode = 0;
        threepointmode = 1;
        highscoremode = 0;
        resetGame();
      }
    } 
    //Checks to see if the player has chosen an option and generates computer choice and compares the player and computer choice.
    else if(iffalse (endGameRound, highscoremode, just3, justNormal)){
      if (lastButtonMousedown === "rock"){
        userChoice = "rock";
        initNewGameRound();
      }
      else if (lastButtonMousedown === "paper"){
        userChoice = "paper";
        initNewGameRound();
      }
      else if (lastButtonMousedown === "scissors"){
        userChoice = "scissors";
        initNewGameRound();
      }
    }
    //Check if the button for 10 round mode or Normal mode is pressed in the menu that pop up after a games is finished. 
    else if ((lastButtonMousedown === "afternormalmode" || lastButtonMousedown === "normalmode") && iftrue(endGameRound) && iffalse (welcomeScreen, highscoremode)){
      normalmode = 1;
      threepointmode = 0;
      highscoremode = 0;
      resetGame(); 
    }
    else if ((lastButtonMousedown === "after3point" || lastButtonMousedown === "3pointgame") && iftrue(endGameRound) && iffalse (welcomeScreen, highscoremode)){
      normalmode = 0;
      threepointmode = 1;
      highscoremode = 0;
      resetGame();
    }
  }
}    

function singleplayerBackground(){
  addSprite(backSprite, images[2]);
};

function singlePlayerWhenNoAnimationAndNoHSMode() {
  topLineFunc();
  candpChoiceDraw();
  greenOrRed();
  winTextfunc();
  drawScore();
  spawnEndBox();
  rockpaperscissorsText();
}

function initNewGameRound() {
  genComandCompare();
  animationAfterChoice = 1;
  initAnimation();
  winOrLostSound ();
};

function whenMultiplayer (){
  context.fillStyle = "grey";
  context.fillRect (0, 0, 700, 500);
  context.fillStyle = "white";
  context.font = "20px Garmond";
  context.fillText("Your nickname: " + nickName, 10, 20);
  buttonSearchforMatch.draw(searchformatch);
  if (iftrue(searchformatch)){
    buttonEndSearch.draw(alwayszero);
  };
}

//Function that gathers drawing of the different modes (text and box) and changes the color of the text if mode is selected.
function WhichButtonsShouldBeShown (){
  if (iftrue(just3) && iffalse(multiplayer)){
    button10Mode.draw(threepointmode, just3);
    if(endGameRound === 1 && iffalse(multiplayer)){
      buttonNormalMode.draw(normalmode, justNormal);
    }
  }
  else if (iftrue(justNormal) && iffalse(multiplayer)){
    buttonNormalMode.draw(normalmode, justNormal);
    if(endGameRound === 1 && iffalse(multiplayer)){
      button10Mode.draw(threepointmode, just3);
    }
  }
  else if (iffalse(multiplayer)){
    button10Mode.draw(threepointmode);
    buttonNormalMode.draw(normalmode);
    buttonSinglePlayer.draw(singleplayer);
    buttonMultiPlayer.draw(multiplayer);
  }
  buttonSinglePlayer.draw(singleplayer);
  buttonMultiPlayer.draw(multiplayer);
  buttonHighScores.draw(highscoremode);
  if (iftrue(highscoremode)){
    buttonLocalHS.draw(localHS);
    buttonWorldHS.draw(worldHS);
  }
};

function whenLocalHS (){
  context.font = "30px Garmond";
  context.fillStyle = "black";
  context.fillText("HIGH SCORES", 250, 25);
  context.fillText("RANK", 10, 75);
  context.fillText("SCORE", 150, 75);
  context.fillText("PLAYER", 300, 75);
  context.fillText("TIME", 485, 75);
  for (i = 0; i < hgScoreL ; i++) {
    var kk = i+1;
    context.fillText(kk.toString() +".", 10, 110 + i*30);
    context.fillText(hgScore[i][0], 150, 110 + i*30);
    context.fillText(hgScore[i][1], 300, 110 + i*30);
    context.fillText(hgScore[i][2], 485, 110 + i*30);
  };
};

function whenWorldHS (){
  context.font = "30px Garmond";
  context.fillStyle = "black";
  context.fillText("WORLD HIGH SCORES", 180, 25);
  context.fillText("RANK", 10, 75);
  context.fillText("SCORE", 150, 75);
  context.fillText("PLAYER", 300, 75);
  context.fillText("TIME", 485, 75);
  for (i = 0; i < wgScoreL ; i++) {
    var kk = i+1;
    context.fillText(kk.toString() +".", 10, 110 + i*30);
    context.fillText(worldHighScores[i][0], 150, 110 + i*30);
    context.fillText(worldHighScores[i][1], 300, 110 + i*30);
    context.fillText(worldHighScores[i][2], 485, 110 + i*30);
  };
};

function alwaysShowing(){
  showFPS();
  animateHandDraw(testRect);
  animateHandDraw2(testRect2);
  noSoundFunc();
  hoverFunc();
  fxHoverFunc();
  fXOnOff();
};

function whenWelcomeScreen (){
  context.font = "29px Garmond";
  context.fillStyle = "black";
  context.fillRect(welcomeScreenRect.x, welcomeScreenRect.y, welcomeScreenRect.width, welcomeScreenRect.height);
  context.fillStyle = "white";
  context.fillText (welcomeScreenRect.text, 145, 100);
  context.fillText (welcomeScreenRect.text2, 210, 150);
  context.fillStyle = "white";
  context.font = "15px Garmond";
  context.fillStyle = "red";
  context.fillText(notCorrect, 200, 300);
  noSoundFunc();
  hoverFunc();
  fxHoverFunc();
  fXOnOff();
};

function loadingscreen(){
  context.fillStyle = "black";
  context.fillRect(0, 0, 700, 500);
  context.fillStyle = "white";
  context.font = "100px Garmond";
  context.fillText("Loading assets", 50, 200);
  context.fillText(assetsLoaded + "/" + (audioFiles.length + images.length), 250, 350);
  console.log(assetsLoaded + "/" + (audioFiles.length + images.length));
}

//Function that draws all elements to the canvas and is updated by the FPS.
function render() {
  //Clears the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (resourcesLoaded === 1) {  
    if (iftrue(singleplayer)){
      singleplayerBackground();
    }      
    if (iffalse(animationAfterChoice, highscoremode)){
      if (iftrue(singleplayer)) {
        singlePlayerWhenNoAnimationAndNoHSMode ();
      }
      else if (iftrue(multiplayer)){
        whenMultiplayer();
      };
      WhichButtonsShouldBeShown();
    };
    if (iftrue(localHS, highscoremode)){
      whenLocalHS();
      WhichButtonsShouldBeShown();     
    }
    else if (iftrue(worldHS, highscoremode)){
      whenWorldHS();
      WhichButtonsShouldBeShown();
    }
    //Test section begin
    testSection ();
    //Test section end  
    alwaysShowing();
    if (iftrue(welcomeScreen)){
      whenWelcomeScreen();
      //Test section begin
      testSection ();
      //Test section end  
    }
  }
  else {
    loadingscreen(); 
  };
};

function update(delta) {
  if (iftrue(resourcesLoaded)){
    welcomeInput();
    checkStoredHS();
    resetScore();
    animateHandUpdate(testRect);
    animateHandUpdate2(testRect2);  
    inARowFunction();
    highScoreFunction();
    checkLengthforHSforLoop();
    checkLengthforWHSforLoop();
    hgScore.sort(function(a,b) { 
     if (b[0] === a[0]){
      var xA = a[3], yA = b[3];
      return xA < yA ? 1 : xA > yA ? -1 : 0;
     }
     else {
      return (b[0] - a[0])
     }
    });

    if (worldHighScores === undefined){
    }
    else{
      worldHighScores.sort(function(a,b) { 
        if (b[0] === a[0]){
          var xA = a[3], yA = b[3];
          return xA < yA ? 1 : xA > yA ? -1 : 0;
        }
        else {
          return (b[0] - a[0])
        };
      });
    };
  };
};

function mainLoop(timestamp) {
  if (timestamp < lastFrameTimeMs + (1000 / fps)) {
    requestAnimationFrame(mainLoop);
    return;
  }
  delta += timestamp - lastFrameTimeMs;
  lastFrameTimeMs = timestamp;
  if (timestamp > lastFpsUpdate + 1000) {
    fps = 0.25 + framesThisSecond + 0.75 * fps;
    lastFpsUpdate = timestamp;
    framesThisSecond = 0;
  }
  framesThisSecond++;
  var numUpdateSteps = 0;
  while (delta >= timestep) {
    update(timestep);
    delta -= timestep;
    //Sanity check
    if (++numUpdateSteps >= 240) {
      panic();
      break;
    }
  }
  render();
  requestAnimationFrame(mainLoop);
};

requestAnimationFrame(mainLoop);