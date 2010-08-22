document.GetSiner = (scale,incr) ->
  (() ->
    n = 0
    () ->
      n += incr
      scale*Math.sin(n))()