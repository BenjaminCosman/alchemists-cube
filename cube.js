draw = SVG('cube')
width = 100
height = 100
draw.line(0, 0, width, height).stroke({width: 10})
draw.line(0, 0, width, 0).stroke({width: 10})
draw.line(0, height, width, height).stroke({width: 10})
draw.line(0, height, width, 0).stroke({width: 10})
