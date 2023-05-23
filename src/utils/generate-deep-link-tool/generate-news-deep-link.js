const { generateDeepLink } = require('./generate-deep-link')

const NEWS_APP_ID = 'G2QKzfFwo66YTjEwKRcPi5'

module.exports = {
  announcement(id) {
    return generateDeepLink({
      appId: NEWS_APP_ID,
      startPagePath: 'pages/announcement/index',
      startPageQuery: `annoId=${id}`,
    })
  },
  news(id) {
    return generateDeepLink({
      appId: NEWS_APP_ID,
      startPagePath: 'pages/news-detail/index',
      startPageQuery: `id=${id}`,
    })
  },
}
