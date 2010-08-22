document.Siner = (()->
  x = y = 0
  () ->
    x += 1
    y += 0.1
    [x,Math.sin(y)])()


