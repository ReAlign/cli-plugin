const { fetchUser } = require('../utils/username/api');
const { box } = require('../utils/box');

async function readProfileLink({ uid }) {
  const { success, data } = await fetchUser({ uid });
  if (success && data) {
    // console.log(data);
    const nickname = data?.displayName || '-';
    const profileLink = (data?.userShareLink || '').split('?')[0];
    box(`${nickname}: ${profileLink}`);
  } else {
    console.log('获取失败');
  }
}

module.exports = (uid) => {
  readProfileLink({ uid });
};
