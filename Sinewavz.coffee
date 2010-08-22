document.GetSiner = (w,h) ->
  (() ->
    x = 0
    y = base = h/2
    yscale = 100
    () ->
      x += 1
      y += 0.1
      [x % w, base + (Math.sin(y) * yscale)])()