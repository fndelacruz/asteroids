(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(options) {
    options.radius = Bullet.RADIUS;
    options.color = Bullet.COLOR;

    Asteroids.MovingObject.call(this, options);
  };

  Bullet.RADIUS = "50";
  Bullet.COLOR = "#0000FF";

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
})(window);
