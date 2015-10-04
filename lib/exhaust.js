(function(root) {
  if (typeof Asteroids === "undefined") {
    root.Asteroids = {};
  }

  var Exhaust = Asteroids.Exhaust = function (options) {
    if (typeof options === "undefined") {
      options = {};
    }
  };



  Asteroids.Util.inherits(Exhaust, Asteroids.MovingObject);
})(window);
