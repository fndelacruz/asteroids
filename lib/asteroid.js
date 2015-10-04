(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    options.vel = Asteroids.Util.randomVel(Asteroid.MAX_VEL);
    options.radius = Asteroid.RADIUS;
    options.color = Asteroid.COLOR;

    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.COLOR = "#FFA500";
  Asteroid.RADIUS = "40";
  Asteroid.MAX_VEL = "5";

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    } else if (otherObject instanceof Asteroids.Bullet) {
      // debugger;
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

})(window);
