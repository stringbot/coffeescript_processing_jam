(function() {
  document.GetSiner = function(scale, incr) {
    return (function() {
      var n;
      n = 0;
      return function() {
        n += incr;
        return scale * Math.sin(n);
      };
    })();
  };
  document.GetCosiner = function(scale, incr) {
    return (function() {
      var n;
      n = 0;
      return function() {
        n += incr;
        return scale * Math.cos(n);
      };
    })();
  };
})();
