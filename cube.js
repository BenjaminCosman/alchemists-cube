var width = 300
var height = width
draw = SVG('cube')
draw.size(width*4, height*3)

drawFace(120, '+', 0, 1, 90)
drawFace(0,   '+', 1, 1, 0)
drawFace(120, '-', 2, 1, 270)
drawFace(0,   '-', 3, 1, 0)
drawFace(240, '+', 1, 0, 270)
drawFace(240, '-', 2, 2, 180)

// Draw one face
function drawFace(hue, signText, x, y, rot) {
  function m(elt) { // move and rotate
    return elt.translate(x*width, y*height).rotate(rot, width/2, height/2)
  }
  function c(elt) { // clip to square
    return elt.clipWith(draw.rect(width, height))
  }

  thisFace = 'hsl(' + hue + ', 100%, 50%)'
  otherFace = 'hsl(' + hue+120 + ', 100%, 50%)'
  gold = 'gold'
  silver = 'silver'

  var gradient = draw.gradient('linear', function(stop) {
    stop.at(0, 'hsl(' + hue + ', 100%, 80%)')
    stop.at(1, '#FFFFFF')
  })

  m(draw.rect(width, height).fill(gradient))

  m(c(draw.line(0, 0, width, height).stroke({width: 10, color: thisFace})))
  m(c(draw.line(0, 0, width, 0).stroke({width: 10, color: thisFace})))
  m(c(draw.line(0, height, width, height).stroke({width: 10, color: thisFace})))
  m(c(draw.line(0, height, width, 0).stroke({width: 10, color: thisFace})))

  m(c(draw.line(0, 0, 0, height).stroke({width: 10, color: otherFace})))
  m(c(draw.line(width, 0, width, height).stroke({width: 10, color: otherFace})))

  diameter = width/2
  m(c(draw.circle(diameter).center(0, 0).fill(gold)))
  m(c(draw.circle(diameter).center(width, 0).fill(silver)))
  m(c(draw.circle(diameter).center(0, height).fill(silver)))
  m(c(draw.circle(diameter).center(width, height).fill(gold)))

  margin = width/10
  fontSize = width/10
  m(draw.text(signText).font({size: fontSize}).center(0+margin, 0+margin))
  m(draw.text(signText).font({size: fontSize}).center(width-margin, 0+margin))
  m(draw.text(signText).font({size: fontSize}).center(0+margin, height-margin))
  m(draw.text(signText).font({size: fontSize}).center(width-margin, height-margin))
}
