(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(options) {
    options.vel = this.getRelativeVal(options.ship, "vel");
    options.pos = this.getRelativeVal(options.ship, "pos");
    options.radius = Bullet.RADIUS;
    options.color = Bullet.COLOR;
    options.isWrappable = false;
    Asteroids.MovingObject.call(this, options);
  };

  Bullet.RADIUS = "3";
  Bullet.COLOR = "#00FF00";

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
})(window);
