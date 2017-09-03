var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = 3000;
const uuidv4 = require('uuid/v4');
var game_server = require('./game.server.js');

app.use(express.static(__dirname + '/public'));


/*
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});*/

app.get('/mainpage',function(req,res){
  res.sendFile('/mainPage.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/reportbug',function(req,res){
  res.sendFile('/reportbug.html');
});

io.on('connection', function(socket){
  socket.on("nickname", function(msg){
    socket.username = msg;
    socket.userid = uuidv4();
		io.emit("nickname", socket.username + " connected");
    console.log("Player: " + socket.username + " UserID: " + socket.userid + " connected");
    game_server.findGame(socket);
  });

  socket.on('chat message', function(msg){
  	io.emit('chat message', socket.username + ": " + msg);
	});
  
  socket.on('disconnect', function(){
    if (socket.username){
      io.emit("disconnect", socket.username + " has disconnected" );
      console.log("Player: " + socket.username + " UserID: " + socket.userid + " has disconnected" );
    }
    if(socket.game && socket.game.id) {
      //player leaving a game should destroy that game
      game_server.endGame(socket.game.id, socket.userid);
    } //client.game_id
  });
});

http.listen(port, function(){
	console.log("Listening on port: " +port)
});