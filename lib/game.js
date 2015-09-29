(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.DIM_X = 1000;
  Game.DIM_Y = 1000;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid({
        pos: [
          Math.floor(Math.random() * Game.DIM_X),
          Math.floor(Math.random() * Game.DIM_Y),
        ]
      }));
      // debugger
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.constructor.DIM_X, this.constructor.DIM_Y);

    this.asteroids.forEach(function(asteroid){
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    });
  };

  Game.prototype.wrap = function (pos) {

  };

})(window);
