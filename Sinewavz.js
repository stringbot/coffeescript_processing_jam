(function() {
  document.Sinewavz = {
    sketch: 'void setup() {\n  size(100,100);\n  stroke(100);\n  strokeWeight(2);\n  noLoop();\n  line(0,0,100,100);\n}'
  };
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
