const BDL = require('../utils/generate-deep-link-tool/generate-buzz-deep-link')

const DL = { ...BDL }


module.exports = (scene, params) => {
  if (scene === 'help') {
    console.log([
      'scene can be:',
      '',
      ...Object.keys(DL).map(x => `  * ${x}`),
      ''
    ].join('\n'))
  } else {
    if (DL[scene]) {
      DL[scene](params)
    } else {
      console.log('error')
    }
  }
}