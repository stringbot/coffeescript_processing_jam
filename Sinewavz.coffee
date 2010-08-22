document.Sinewavz =
  sketch: '''
  void setup() {
    size(100,100);
    stroke(100);
    strokeWeight(2);
    noLoop();
    line(0,0,100,100);
  }
'''

document.Siner = (()->
  x = y = 0
  () ->
    x += 1
    y += 0.1
    [x,Math.sin(y)])()


