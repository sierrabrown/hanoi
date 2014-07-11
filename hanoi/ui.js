(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});
  
  var UI = Hanoi.UI = function($rootEL) {
    this.$el = $rootEL;
    this.calls = [];
  };
  
  var game = new Hanoi.Game();
  
  UI.prototype.setUpCanvas = function() {
    this.$el.html(buildString());
  };
  
  UI.prototype.setUpHandlers = function() {
    console.log('clicking on a tower');
    var user = this;
    $('.tower').on('click', user.clicks.bind(user));
  };
  
  var buildString = function () {
    var squareString = '';
    for (var i = 0; i < 3; i++){
        squareString += '<div class="tower" data-pos='+ i +'></div>';
    }
    var $towers = $(squareString);
    var $firstTower = $($towers[0]);
    for (var j = 1; j < 4; j++) {
      $firstTower.append('<div class="disc" data-pos=' + j +'>'+ j +'</div>');
    }
    return $towers;
  };
  
  UI.prototype.clicks = function () {
    this.calls.push($(event.currentTarget));
    var that = this;
    if (this.calls.length > 1){
      that.moveDisc();
    }
  };
  
  UI.prototype.moveDisc = function (){
    var $start = this.calls[0];
    var $end = this.calls[1];
    
    console.log($start.attr('data-pos'))
    console.log($end.attr('data-pos'))
    
    var $disc = $($start.children().first());
    
    console.log($disc)
    
    // if (!$start.hasClass('tower')){
    //   $start = $start.parent()
    // }
    // if (!$end.hasClass('tower')){
    //   $end = $end.parent()
    // }

    if (game.move($start.attr('data-pos'), $end.attr('data-pos'))) {
      $($disc).prependTo($end);
    };
    this.calls = [];
  };
  
})(this);