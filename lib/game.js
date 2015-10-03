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
        ],
        game: this
      }));
    }
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    });
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.constructor.DIM_X, this.constructor.DIM_Y);

    this.asteroids.forEach(function(asteroid){
      asteroid.draw(ctx);
    });
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.asteroids.length - 2; i++) {
      for (var j = i + 1; j < this.asteroids.length - 1; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.remove(j);
          this.remove(i);
        }
      }
    }
  };

  Game.prototype.remove = function (asteroidIdx) {
    this.asteroids.splice(asteroidIdx, 1);
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.wrap = function (pos) {
    if (pos[0] < 0) {
      pos[0] = Game.DIM_X;
    } else if (pos[0] > Game.DIM_X) {
      pos[0] = 0;
    } else if (pos[1] < 0) {
      pos[1] = Game.DIM_Y;
    } else if (pos[1] > Game.DIM_Y) {
      pos[1] = 0;
    }
    return pos;
  };

})(window);
