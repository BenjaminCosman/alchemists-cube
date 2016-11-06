hues = [0, 120, 240]

for (hueIndex in hues) {
  for (sign in [0, 1]) {
      if (sign == 0)
        signText = '-'
      else
        signText = '+'

    hue = hues[hueIndex]
    thisFace = 'hsl(' + hue + ', 100%, 50%)'
    otherFace = 'hsl(' + hue+120 + ', 100%, 50%)'
    gold = 'gold'
    silver = 'silver'

    draw = SVG('cube' + hueIndex + signText)
    var width = 300
    var height = width
    draw.size(width, height)

    var gradient = draw.gradient('linear', function(stop) {
      stop.at(0, 'hsl(' + hue + ', 100%, 80%)')
      stop.at(1, '#FFFFFF')
    })

    draw.rect(width, height).fill(gradient)
    draw.line(0, 0, width, height).stroke({width: 10, color: thisFace})
    draw.line(0, 0, width, 0).stroke({width: 10, color: thisFace})
    draw.line(0, height, width, height).stroke({width: 10, color: thisFace})
    draw.line(0, height, width, 0).stroke({width: 10, color: thisFace})

    draw.line(0, 0, 0, height).stroke({width: 10, color: otherFace})
    draw.line(width, 0, width, height).stroke({width: 10, color: otherFace})

    diameter = 50
    draw.circle(diameter).center(0, 0).fill(gold)
    draw.circle(diameter).center(width, 0).fill(silver)
    draw.circle(diameter).center(0, height).fill(silver)
    draw.circle(diameter).center(width, height).fill(gold)

    margin = 10
    draw.text(signText).font({size: 12}).center(0+margin, 0+margin)
    draw.text(signText).font({size: 12}).center(width-margin, 0+margin)
    draw.text(signText).font({size: 12}).center(0+margin, height-margin)
    draw.text(signText).font({size: 12}).center(width-margin, height-margin)
  }
}
