const { exec } = require('child_process')

const generateDeepLink = ({ appId, startPagePath, startPageQuery }) => {
  const _ = {
    btoa(str) {
      return Buffer.from(str).toString('base64')
    },
  }

  const Prefix = 'bnc://app.binance.com/mp/app'
  const pars = {
    appId,
    startPagePath: _.btoa(startPagePath),
    ...startPageQuery ? {
      startPageQuery: _.btoa(startPageQuery),
    } : {},
  }
  const parsStr = Object.keys(pars)
    .reduce((prev, item) => {
      prev.push(`${item}=${pars[item]}`)
      return prev
    }, [])
    .join('&')

  const deepLink = `${Prefix}?${parsStr}`
  exec('pbcopy').stdin.end(deepLink)

  console.log('Deep link copied.')

  return deepLink
}

module.exports = {
  generateDeepLink,
}
