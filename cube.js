hues = [0, 120, 240]
for (hueIndex in hues) {
  hue = hues[hueIndex]
  thisFace = 'hsl(' + hue + ', 100%, 50%)'
  otherFace = 'hsl(' + hue+120 + ', 100%, 50%)'

  draw = SVG('cube' + hueIndex)
  draw.size(100, 100)
  var width = 100
  var height = 100

  var gradient = draw.gradient('linear', function(stop) {
    stop.at(0, thisFace)
    stop.at(1, '#FFFFFF')
  })

  draw.rect(100, 100).fill(gradient)
  draw.line(0, 0, width, height).stroke({width: 10, color: thisFace})
  draw.line(0, 0, width, 0).stroke({width: 10, color: thisFace})
  draw.line(0, height, width, height).stroke({width: 10, color: thisFace})
  draw.line(0, height, width, 0).stroke({width: 10, color: thisFace})

  draw.line(0, 0, 0, height).stroke({width: 10, color: otherFace})
  draw.line(width, 0, width, height).stroke({width: 10, color: otherFace})
}
