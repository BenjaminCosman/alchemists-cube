draw = SVG('cube')
width = 100
height = 100
var gradient = draw.gradient('linear', function(stop) {
  stop.at(0, '#ffffff')
  stop.at(1, '#0000ff')
})
draw.rect(100, 100).fill(gradient)
draw.line(0, 0, width, height).stroke({width: 10})
draw.line(0, 0, width, 0).stroke({width: 10})
draw.line(0, height, width, height).stroke({width: 10})
draw.line(0, height, width, 0).stroke({width: 10})
