(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    if (typeof options.isWrappable === "undefined") {
      this.isWrappable = true;
    } else {
      this.isWrappable = options.isWrappable;
    }
    // later, fix asteroids and bullets to use angle like the ship does.
    // currently they just use raw x and y components
    this.angle = options.angle;

    // not sure if this is the best way to go about it. I attach ship to objects
    // that originate from the ship (ex: bullets, exhaust) so they know the ship
    // attributes of position and velocity
    this.ship = options.ship;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    if (this instanceof Asteroids.Asteroid ||
        this instanceof Asteroids.Bullet) {
      ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
      );
    } else if (this instanceof Asteroids.Ship) {
      ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        this.angle - 0.6 * Math.PI,
        this.angle + 0.6 * Math.PI,
        false
      );
    }

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else {
        this.game.remove(this);
      }
    }
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var sumRadii = Number(this.radius) + Number(otherObject.radius),
        distance = Math.sqrt(
          Math.pow(otherObject.pos[0] - this.pos[0], 2) +
          Math.pow(otherObject.pos[1] - this.pos[1], 2)
        );
    return (distance < sumRadii) ? true : false;
  };

  MovingObject.prototype.collideWith = function(otherObject) {
  };


})(window);
