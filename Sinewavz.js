(function() {
  document.Siner = (function() {
    var x, y;
    x = (y = 0);
    return function() {
      x += 1;
      y += 0.1;
      return [x, Math.sin(y)];
    };
  })();
})();
