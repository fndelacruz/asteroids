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

  // Bullet.getRelativeVal = function (ship, valType) {
  //   var xComponent = Math.cos(ship.angle),
  //       yComponent = Math.sin(ship.angle);
  //
  //   if (valType === "vel") {
  //     return [xComponent * 10, yComponent * 10];
  //   } else if (valType === "pos") {
  //     return [ship.pos[0] + xComponent * 10, ship.pos[1] + yComponent * 10];
  //   }
  // };

  Bullet.RADIUS = "3";
  Bullet.COLOR = "#00FF00";

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
})(window);
