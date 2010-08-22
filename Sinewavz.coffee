document.GetSiner = () ->
  (() ->
    n = 0
    () ->
      n += 0.1
      Math.sin(n))()