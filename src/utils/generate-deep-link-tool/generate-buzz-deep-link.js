const { generateDeepLink } = require('./generate-deep-link')

const BUZZ_APP_ID = 'znf9fpiMh6ufdU3vDtAvi4'

module.exports = {
  profile(uid) {
    return generateDeepLink({
      appId: BUZZ_APP_ID,
      startPagePath: 'pages/buzz-profile/index',
      startPageQuery: `uid=${uid}`,
    })
  },
  post(id) {
    return generateDeepLink({
      appId: BUZZ_APP_ID,
      startPagePath: 'pages/bits-buzz/index',
      startPageQuery: `postId=${id}`,
    })
  },
  article(id) {
    return generateDeepLink({
      appId: BUZZ_APP_ID,
      startPagePath: 'pages/article-buzz/index',
      startPageQuery: `articleId=${id}`,
    })
  },
  followers(uid) {
    return generateDeepLink({
      appId: BUZZ_APP_ID,
      startPagePath: 'pages/followers/index',
      startPageQuery: `uid=${uid}`,
    })
  },
}
