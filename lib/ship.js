(function(root) {
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
    options.angle = 1;

    Asteroids.MovingObject.call(this, options);
  };

  Ship.RADIUS = "10";
  Ship.COLOR = "#FF0000";

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };


  Ship.prototype.fireBullet = function() {
    this.game.add(new Asteroids.Bullet({
      game: this.game,
      isWrappable: false,
      ship: this
    }));
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.yaw = function(direction) {
    if (direction === "left") {
      if (this.angle === 0) {
        this.angle = 330 * Math.PI / 180;
      } else {
        this.angle -= 30 * Math.PI / 180;
      }
    } else if (direction === "right") {
      if (this.angle === 330 * Math.PI / 180) {
        this.angle = 0;
      } else {
        this.angle += 30 * Math.PI / 180;
      }
    }
    console.log(this.angle);
  };

  Ship.prototype.engineOn = function() {
    var xVel = Math.cos(this.angle),
        yVel = Math.sin(this.angle);

    this.vel[0] += xVel * 1;
    this.vel[1] += yVel * 1;
  };

})(window);
