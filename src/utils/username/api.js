// fetch("https://www.qa1fdg.net/bapi/composite/v3/friendly/pgc/user/client", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "zh,zh-CN;q=0.9,en;q=0.8",
//     "bnc-location": "BINANCE",
//     "bnc-time-zone": "Asia/Shanghai",
//     "bnc-uuid": "d8121d24-ed62-4e98-92b0-ca42a69679eb",
//     "clienttype": "web",
//     "content-type": "application/json",
//     "csrftoken": "cee22045a8d8fdcc3e1b34efe37c55b3",
//     "device-info": "eyJzY3JlZW5fcmVzb2x1dGlvbiI6IjE3MjgsMTExNyIsImF2YWlsYWJsZV9zY3JlZW5fcmVzb2x1dGlvbiI6IjE3MjgsMTA3OSIsInN5c3RlbV92ZXJzaW9uIjoiTWFjIE9TIDEwLjE1LjciLCJicmFuZF9tb2RlbCI6InVua25vd24iLCJzeXN0ZW1fbGFuZyI6InpoIiwidGltZXpvbmUiOiJHTVQrMDg6MDAiLCJ0aW1lem9uZU9mZnNldCI6LTQ4MCwidXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMzUuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImxpc3RfcGx1Z2luIjoiUERGIFZpZXdlcixDaHJvbWUgUERGIFZpZXdlcixDaHJvbWl1bSBQREYgVmlld2VyLE1pY3Jvc29mdCBFZGdlIFBERiBWaWV3ZXIsV2ViS2l0IGJ1aWx0LWluIFBERiIsImNhbnZhc19jb2RlIjoiZGRmOGRjNDUiLCJ3ZWJnbF92ZW5kb3IiOiJHb29nbGUgSW5jLiAoQXBwbGUpIiwid2ViZ2xfcmVuZGVyZXIiOiJBTkdMRSAoQXBwbGUsIEFOR0xFIE1ldGFsIFJlbmRlcmVyOiBBcHBsZSBNNCBQcm8sIFVuc3BlY2lmaWVkIFZlcnNpb24pIiwiYXVkaW8iOiIxMjQuMDQzNDY2MDcxMTQ3MTIiLCJwbGF0Zm9ybSI6Ik1hY0ludGVsIiwid2ViX3RpbWV6b25lIjoiQXNpYS9TaGFuZ2hhaSIsImRldmljZV9uYW1lIjoiQ2hyb21lIFYxMzUuMC4wLjAgKE1hYyBPUykiLCJmaW5nZXJwcmludCI6IjM2Y2U5N2M4MDZkNjYyODlhYjBiZGY3NDBjMzE5MThmIiwiZGV2aWNlX2lkIjoiIiwicmVsYXRlZF9kZXZpY2VfaWRzIjoiIn0=",
//     "fvideo-id": "333c8463b3fc8474a57723cbe1a31c6310ea9dde",
//     "fvideo-token": "dMoT2kMznVaPnFXyCd7m7UGed7wI4Hzxun36GGMlCYYR/8CMfMG8Suan1dn9Lhm3jRCkKJ6zt0mxIfuOIuW2ml6ecCaCTGMYTkrhZgfurHY5xcCITUxb8ximoCa+WEuZQmZYWgWfBX2t+Ei7DFkCzEUW66fxG9L3JIVo/U5+95wKDHjDRVIlyfBj05BDS5+rA=7f",
//     "lang": "en",
//     "priority": "u=1, i",
//     "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-gray-env": "content-qa",
//     "x-passthrough-token": "",
//     "x-trace-id": "5c7dcbb5-cf23-4cbd-9173-1310a152897b",
//     "x-ui-request-trace": "5c7dcbb5-cf23-4cbd-9173-1310a152897b"
//   },
//   "referrer": "https://www.qa1fdg.net/en/square/profile/ganggang_112",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"username\":\"ganggang_112\",\"getFollowCount\":true,\"queryFollowersInfo\":true,\"queryRelationTokens\":true}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
// });

const headers = {
  accept: '*/*',
  'accept-language': 'zh,zh-CN;q=0.9,en;q=0.8',
  'bnc-location': 'BINANCE',
  'bnc-time-zone': 'Asia/Shanghai',
  'bnc-uuid': 'd8121d24-ed62-4e98-92b0-ca42a69679eb',
  clienttype: 'web',
  'content-type': 'application/json',
  csrftoken: 'cee22045a8d8fdcc3e1b34efe37c55b3',
  'device-info':
    'eyJzY3JlZW5fcmVzb2x1dGlvbiI6IjE3MjgsMTExNyIsImF2YWlsYWJsZV9zY3JlZW5fcmVzb2x1dGlvbiI6IjE3MjgsMTA3OSIsInN5c3RlbV92ZXJzaW9uIjoiTWFjIE9TIDEwLjE1LjciLCJicmFuZF9tb2RlbCI6InVua25vd24iLCJzeXN0ZW1fbGFuZyI6InpoIiwidGltZXpvbmUiOiJHTVQrMDg6MDAiLCJ0aW1lem9uZU9mZnNldCI6LTQ4MCwidXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMzUuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImxpc3RfcGx1Z2luIjoiUERGIFZpZXdlcixDaHJvbWUgUERGIFZpZXdlcixDaHJvbWl1bSBQREYgVmlld2VyLE1pY3Jvc29mdCBFZGdlIFBERiBWaWV3ZXIsV2ViS2l0IGJ1aWx0LWluIFBERiIsImNhbnZhc19jb2RlIjoiZGRmOGRjNDUiLCJ3ZWJnbF92ZW5kb3IiOiJHb29nbGUgSW5jLiAoQXBwbGUpIiwid2ViZ2xfcmVuZGVyZXIiOiJBTkdMRSAoQXBwbGUsIEFOR0xFIE1ldGFsIFJlbmRlcmVyOiBBcHBsZSBNNCBQcm8sIFVuc3BlY2lmaWVkIFZlcnNpb24pIiwiYXVkaW8iOiIxMjQuMDQzNDY2MDcxMTQ3MTIiLCJwbGF0Zm9ybSI6Ik1hY0ludGVsIiwid2ViX3RpbWV6b25lIjoiQXNpYS9TaGFuZ2hhaSIsImRldmljZV9uYW1lIjoiQ2hyb21lIFYxMzUuMC4wLjAgKE1hYyBPUykiLCJmaW5nZXJwcmludCI6IjM2Y2U5N2M4MDZkNjYyODlhYjBiZGY3NDBjMzE5MThmIiwiZGV2aWNlX2lkIjoiIiwicmVsYXRlZF9kZXZpY2VfaWRzIjoiIn0=',
  'fvideo-id': '333c8463b3fc8474a57723cbe1a31c6310ea9dde',
  'fvideo-token':
    'dMoT2kMznVaPnFXyCd7m7UGed7wI4Hzxun36GGMlCYYR/8CMfMG8Suan1dn9Lhm3jRCkKJ6zt0mxIfuOIuW2ml6ecCaCTGMYTkrhZgfurHY5xcCITUxb8ximoCa+WEuZQmZYWgWfBX2t+Ei7DFkCzEUW66fxG9L3JIVo/U5+95wKDHjDRVIlyfBj05BDS5+rA=7f',
  lang: 'en',
  priority: 'u=1, i',
  'sec-ch-ua':
    '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'x-gray-env': 'content-qa',
  'x-passthrough-token': '',
  'x-trace-id': '5c7dcbb5-cf23-4cbd-9173-1310a152897b',
  'x-ui-request-trace': '5c7dcbb5-cf23-4cbd-9173-1310a152897b',
};

async function fetchUser({ uid }) {
  try {
    const response = await fetch(
      'https://www.binance.com/bapi/composite/v3/friendly/pgc/user/client',
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          //
          queryFollowersInfo: true,
          queryRelationTokens: true,
          squareUid: uid,
        }),
      }
    );
    const data = await response.json();

    return data;
  } catch (e) {
    return null;
  }
}

module.exports = {
  fetchUser,
};
