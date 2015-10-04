(function(root){
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (options) {
    if (typeof options === "undefined") {
      options = {};
    }
    options.pos = Asteroids.Game.prototype.randomPosition();
    options.vel = [0, 0];
    options.radius = Ship.RADIUS;
    options.color = Ship.COLOR;

    Asteroids.MovingObject.call(this, options);
  };

  Ship.RADIUS = "5";
  Ship.Color = "#00FF00";

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

})(window);
