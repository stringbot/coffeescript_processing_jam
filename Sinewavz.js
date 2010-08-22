(function() {
  document.GetSiner = function(w, h) {
    return (function() {
      var base, x, y, yscale;
      x = 0;
      y = (base = h / 2);
      yscale = 100;
      return function() {
        x += 1;
        y += 0.1;
        return [x % w, base + (Math.sin(y) * yscale)];
      };
    })();
  };
})();
