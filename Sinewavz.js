(function() {
  document.GetSiner = function() {
    return (function() {
      var n;
      n = 0;
      return function() {
        n += 0.1;
        return Math.sin(n);
      };
    })();
  };
})();
