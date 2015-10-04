(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (options) {
    options.vel = Asteroids.Util.randomVel(Asteroid.MAX_VEL);
    options.radius = Asteroid.RADIUS;
    options.color = Asteroid.COLOR;

    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.COLOR = "#000000";
  Asteroid.RADIUS = "10";
  Asteroid.MAX_VEL = "10";

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.isCollidedWith = function (otherObject) {
    var sumRadii = Number(this.radius) + Number(otherObject.radius),
        distance = Math.sqrt(
          Math.pow(otherObject.pos[0] - this.pos[0], 2) +
          Math.pow(otherObject.pos[1] - this.pos[1], 2)
        );
    if (distance < sumRadii) {
      if (otherObject instanceof Asteroids.Ship) {
        otherObject.relocate();
      }
    }
  };

})(window);
