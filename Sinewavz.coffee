document.GetSiner = (scale,incr) -> # it's a function ...
  (() ->   # ... that calls a closure ...
    n = 0
    () ->  # ... that returns a function
      n += incr
      scale*Math.sin(n))() # ... that generates a sine wave

document.GetCosiner = (scale,incr) ->
  (() ->
    n = 0
    () ->
      n += incr
      scale*Math.cos(n))()
