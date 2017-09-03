
var arnepa1 = 123333;
var game_core = module.exports = { games : {}, game_count:222222,  game_active_games_count:0, arnepa: 100};

game_core.jesus = function () {

    console.log("jesus")
}

game_core.gud = 123;


var arnepa2 = function () {

    console.log("lol")
}

module.exports.arnepa2 = arnepa2;
module.exports.arnepa1 = arnepa1;


/*
var game_core = 2123;
//server side we set the 'game_core' class to a global type, so that it can use it anywhere.
if( 'undefined' != typeof global ) {
    module.exports = global.game_core = game_core;
}
*/


//var arnepa = 222;