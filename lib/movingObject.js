(function (root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillstyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    // var sumRadii = Number(this.radius) + Number(otherObject.radius),
    //     distance = Math.sqrt(
    //       Math.pow(otherObject.pos[0] - this.pos[0], 2) +
    //       Math.pow(otherObject.pos[1] - this.pos[1], 2)
    //     );
    // return (distance < sumRadii) ? true : false;
  };


})(window);
