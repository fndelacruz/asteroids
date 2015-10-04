(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(options) {
    options.radius = Bullet.RADIUS;
    options.color = Bullet.COLOR;
    options.isWrappable = false;
    Asteroids.MovingObject.call(this, options);
  };

  Bullet.RADIUS = "3";
  Bullet.COLOR = "#0000FF";

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
})(window);
