(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Exhaust = Asteroids.Exhaust = function(options) {
    if (typeof options === "undefined") {
      options = {};
    }

    options.vel = this.getRelativeVal(options.ship, "vel");
    options.pos = this.getRelativeVal(options.ship, "pos");
    options.radius = Exhaust.RADIUS;
    options.color = Exhaust.COLORS[Math.floor(Math.random() * Exhaust.COLORS.length)];
    options.isWrappable = false;

    Asteroids.MovingObject.call(this, options);
  };

  Exhaust.RADIUS = 2;
  Exhaust.COLORS = ["#FFA500", "#FFFF00"];

  Asteroids.Util.inherits(Exhaust, Asteroids.MovingObject);

})(window);
