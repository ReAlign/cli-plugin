const { argv } = require('node:process')

const BDL = require('./generate-buzz-deep-link')
const NDL = require('./generate-news-deep-link')
const ADL = require('./generate-academy-deep-link')

const DL = { ...BDL, ...NDL, ...ADL }

const [, , type, _id] = argv

if (DL[type] && _id) {
  console.log(DL[type](_id))
} else {
  console.log('Args parse error!')
}
