# DeepLink Rule

Announcement
  * bnc://app.binance.com/mp/app?appId=G2QKzfFwo66YTjEwKRcPi5&startPagePath=cGFnZXMvYW5ub3VuY2VtZW50L2luZGV4&startPageQuery=${Base64URLEncode(id=${id})}
Academy
  * bnc://app.binance.com/mp/app?appId=G2QKzfFwo66YTjEwKRcPi5&startPagePath=cGFnZXMvYWNhZGVteS1kZXRhaWwvaW5kZXg&startPageQuery=${Base64URLEncode(slug=${id})}
News
  * bnc://app.binance.com/mp/app?appId=G2QKzfFwo66YTjEwKRcPi5&startPagePath=cGFnZXMvbmV3cy1kZXRhaWwvaW5kZXg&startPageQuery=${Base64URLEncode(id=${id})}
Buzz Article
  * bnc://app.binance.com/mp/app?appId=znf9fpiMh6ufdU3vDtAvi4&startPagePath=cGFnZXMvYXJ0aWNsZS1idXp6L2luZGV4&startPageQuery=${Base64URLEncode(id=${id})}
Buzz Bit
  * bnc://app.binance.com/mp/app?appId=znf9fpiMh6ufdU3vDtAvi4&startPagePath=cGFnZXMvYml0cy1idXp6L2luZGV4&startPageQuery=${Base64URLEncode(id=${id})}
Buzz Profile
  * bnc://app.binance.com/mp/app?appId=znf9fpiMh6ufdU3vDtAvi4&startPagePath=cGFnZXMvYnV6ei1wcm9maWxlL2luZGV4&startPageQuery=${Base64URLEncode(uid=${uid})}

## Usage

```bash
# root .
$ node get-deep-link.js [announcement|academy|academyList|news|article|bit|profile] 11

# Example
$ node get-deep-link.js academy what-is-ethereum-2-0-and-why-does-it-matter
Deep link copied.
bnc://app.binance.com/mp/app?appId=znf9fpiMh6ufdU3vDtAvi4&startPagePath=cGFnZXMvYWNhZGVteS1idXp6L2luZGV4&startPageQuery=YXJ0aWNsZVNsdWc9d2hhdC1pcy1ldGhlcmV1bS0yLTAtYW5kLXdoeS1kb2VzLWl0LW1hdHRlcg==
```