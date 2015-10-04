(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    setInterval(function(){
      this.game.step();
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };

  GameView.prototype.bindKeyHandlers = function() {
    var game = this.game;
    key("left", function() {
      game.ship.power([-1, 0]);
    });
    key("right", function() {
      game.ship.power([1, 0]);
    });
    key("up", function() {
      game.ship.power([0, -1]);
    });
    key("down", function() {
      game.ship.power([0, 1]);
    });
    key("space", function() {
      game.ship.fireBullet();
    });
    key("a", function() {
      game.ship.yaw("left");
    });
    key("d", function() {
      game.ship.yaw("right");
    });
  };

})(window);
