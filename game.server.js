var
    game_server = module.exports = { games : {}, game_count:0,  game_active_games_count:0},
    uuidv4 = require('uuid/v4');
    verbose     = true;
    //Since we are sharing code with the browser, we
    //are going to include some values to handle that.
global.window = global.document = global;
var game_core = require('./game.core.js');

    //Define some required functions
game_server.createGame = function(player) {
    //Create a new game instance
    var thegame = {
        id : uuidv4(),                //generate a new id for the game
        player_host:player,         //so we know who initiated the game
        player_client:null,         //nobody else joined yet, since its new
        player_count:1,              //for simple checking of state
        player_hostID:player.userid,
        player_clientID: false,
        player_HostNickname:player.username,
        player_clientNickname:null,
    };
    //Store it in the list of game
    this.games[ thegame.id ] = thegame;
    //Keep track
    this.game_count++;
    //console.log(thegame)
    //console.log(this.games)
    console.log("No open games, creating an open game with gameID: " + thegame.id)
    return thegame;
}; //game_server.createGame

game_server.findGame = function(player) {
    console.log("Player with ID: " + player.userid + ' is looking for a game.');
    //console.log("Current games: ")
    //so there are games active,
    //lets see if one needs another player
    if(this.game_count) {  
        var joined_a_game = false;
        //Check the list of games for an open game
        for(var gameid in this.games) {
            //only care about our own properties.
            if(!this.games.hasOwnProperty(gameid)) continue;
            //get the game we are checking against
            var game_instance = this.games[gameid];
            //If the game is a player short
            if(game_instance.player_count < 2) {
                //someone wants us to join!
                joined_a_game = true;
                //increase the player count and store
                //the player as the client of this game
                game_instance.player_clientID = player.userid;
                game_instance.player_client= player;
                game_instance.player_clientNickname = player.username;
                //game_instance.gamecore.players.other.instance = player;
                game_instance.player_count++;
                //start running the game on the server,
                //which will tell them to respawn/start
                this.startGame(game_instance);
            } //if less than 2 players
        } //for all games
        //now if we didn't join a game,
        //we must create one
        if(!joined_a_game) {
            this.createGame(player);
        } //if no join already
    } 
    else { //if there are any games at all
        //no games? create one!
        this.createGame(player);
    }
    //console.log("Active games: " + player.active_games_count)
    //console.log(this.games)
    //console.log("Current games: " + this.game_count)
}; //game_server.findGame       

game_server.startGame = function(game) {
    console.log("MATCH FOUND")
    console.log("Game started with gameID: " + game.id)
    game.player_host.emit('chat message', "You're the host of game: " + game.id + " " + "Opponent: " + game.player_clientNickname + " " + "You: " + game.player_HostNickname);
    game.player_client.emit('chat message', "You're the client of game: " + game.id + " " + "You: " + game.player_clientNickname + " " + "Opponent: " + game.player_HostNickname);
    game_core.arnepa2();
    console.log(game_core.arnepa1);
    game_core.jesus();
    console.log(game_core.gud)
    //set this flag, so that the update loop can run it.
    game.player_client.game = game;
    game.active = true;
    this.game_active_games_count++;
    console.log("Active games: " + this.game_active_games_count)
};

game_server.endGame = function(gameid, userid) {
    var thegame = this.games[gameid];

    if(thegame) {
        //stop the game updates immediate
        //thegame.gamecore.stop_update();
        //if the game has two players, the one is leaving
        if(thegame.player_count > 1) {
        //send the players the message the game is ending
            if(userid == thegame.player_host.userid) {
                //the host left, oh snap. Lets try join another game
                if(thegame.player_client) {
                    //tell them the game is over
                    thegame.player_client.send('s.e');
                    //now look for/create a new game.
                    this.findGame(thegame.player_client);
                }                
            } 
            else {
                //the other player left, we were hosting
                if(thegame.player_host) {
                    console.log("Looking for new player")
                    //tell the client the game is ended
                    thegame.player_host.send('s.e');
                    //i am no longer hosting, this game is going down
                    thegame.player_host.hosting = false;
                    //now look for/create a new game.
                    this.findGame(thegame.player_host);
                }
            }
        }
        delete this.games[gameid];
        this.game_count--;
        this.game_active_games_count--;
        //console.log('game removed. there are now ' + this.game_count + ' games' );
        console.log('Game removed. there are now ' + this.game_active_games_count + ' active games' );
    } 
    else {
        console.log('that game was not found!');
    }
}; //game_server.endGame
