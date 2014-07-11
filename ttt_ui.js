(function (root) {
  var TTT = root.TTT = (root.TTT || {});
  
  var UI = TTT.UI = function($rootEl) {
    this.$el = $rootEl;
  };
  
  var game = new TTT.Game();
  
  UI.prototype.setUpHandlers = function() {
    
    var user = this;
    $('#gameBoard').on('click', '.square', user.markSquare);
  };
  
  UI.prototype.markSquare = function() {
    var $square = $(event.target);
    //Add user logic here
    var pos = $square.attr('data-pos').split(",");
    $square.append(game.player);
    var pos_arr = [parseInt(pos[0]),parseInt(pos[1])];
    game.move(pos_arr);
    var winner = game.winner();
    if (winner !== null){
      game.switchPlayer();
      alert(game.player + " has won the game!!!");
      return;
    }
    game.tie();
    // var squarePos = $square.pos.split(',');
//     console.log(squarePos);
  };
  
  UI.prototype.setUpCanvas = function() {
    this.$el.html(buildString(9));
  };
  
  var buildString = function () {
    var squareString = '';
    for (var i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++){
        squareString += '<div class="square" data-pos='+ [i, j] +'></div>';
      }
    }
    return squareString;
  };
  
})(this);


