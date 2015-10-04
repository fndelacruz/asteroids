(function(root){
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function(childClass, parentClass) {
    var Surrogate = function(){};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  };

  Asteroids.Util.randomVel = function(maxVel) {

    var vel = [
      [-1, 1][Math.floor(Math.random() * 2)],
      [-1, 1][Math.floor(Math.random() * 2)]
    ];

    vel[0] *= Math.random() * maxVel;
    vel[1] *= Math.random() * maxVel;
    return vel;
  };



})(window);
