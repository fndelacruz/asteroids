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

})(window);
