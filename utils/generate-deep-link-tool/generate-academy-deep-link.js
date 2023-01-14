const { generateDeepLink } = require('./generate-deep-link')

const BUZZ_APP_ID = 'znf9fpiMh6ufdU3vDtAvi4'

module.exports = {
  academy(slug) {
    return generateDeepLink({
      appId: BUZZ_APP_ID,
      startPagePath: 'pages/academy-buzz/index',
      startPageQuery: `articleSlug=${slug}`,
    })
  },
  academyList(tags) {
    return generateDeepLink({
      appId: BUZZ_APP_ID,
      startPagePath: 'pages/academy-buzz-list/index',
      startPageQuery: `tags=${tags}`,
    })
  },
}
