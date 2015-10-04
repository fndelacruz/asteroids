(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({
      game: this
    });
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 800;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.add(new Asteroids.Asteroid({
        pos: this.randomPosition(),
        game: this
      }));
    }
  };

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function(gameObject){
      gameObject.move();
    });
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.constructor.DIM_X, this.constructor.DIM_Y);

    this.allObjects().forEach(function(gameObject){
      gameObject.draw(ctx);
    });
  };

  Game.prototype.checkCollisions = function() {
    // debugger
    for (var i = 0; i < this.allObjects().length - 1; i++) {
      for (var j = i + 1; j < this.allObjects().length ; j++) {
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          this.allObjects()[i].collideWith(this.allObjects()[j]);
        }
      }
    }
  };


  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.wrap = function(pos) {

    if (pos[0] < 0) {
      pos[0] = Game.DIM_X;
    }
    if (pos[0] > Game.DIM_X) {
      pos[0] = 0;
    }
    if (pos[1] < 0) {
      pos[1] = Game.DIM_Y;
    }
    if (pos[1] > Game.DIM_Y) {
      pos[1] = 0;
    }

    return pos;
  };

  Game.prototype.randomPosition = function() {
    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
  };

  Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.bullets).concat([this.ship]);
  };

  Game.prototype.add = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    } else if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    }
  };

  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(obj), 1);
    } else if (obj instanceof Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(obj), 1);
    }
  };

  Game.prototype.isOutOfBounds = function (pos) {
    if (pos[0] < 0 || pos[1] < 0 ||
        pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y ) {
      return true;
    }
  };
})(window);
