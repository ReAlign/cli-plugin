const tinyColor = require('tinycolor2')

module.exports = (color, target) => {
  const _color = tinyColor(color)
  if (_color.isValid()) {
    const TargetMap = {
      rgb: 'toRgbString',
      hex: 'toHexString',
    }

    const fn = _color[TargetMap[target]]
    if (fn) {
      console.log(fn.bind(_color)())
    } else {
      console.log('Unsupported target!')
    }
  } else {
    console.log('Invalid color!')
  }
}