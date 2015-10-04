(function(root){
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
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
  Ship.COLOR = "#000000";

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var bulletVel = [
      this.vel[0] * 10,
      this.vel[1] * 10
    ];

    var bulletPos = [
      this.pos[0] + bulletVel[0],
      this.pos[1] + bulletVel[1]
    ];
    this.game.bullets.push(new Asteroids.Bullet({
      pos: bulletPos,
      vel: bulletVel,
      game: this.game
    }));
  };

})(window);
