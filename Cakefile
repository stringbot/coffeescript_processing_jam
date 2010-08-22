exec = require('child_process').exec

targets = ['Sinewavz']

task 'clean', 'clean the build', () ->
  for target in targets
    exec(["rm #{target}.js"])

task 'build', 'compile the coffee script', () ->
  for target in targets
    exec(["coffee -c #{target}.coffee"])

task 'run', 'open the spike in the browser', () ->
  exec(["open sines.html"])


