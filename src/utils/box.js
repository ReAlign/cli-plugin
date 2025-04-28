const { colors } = require('./color-console');

const getBLen = (str) => {
  if (str == null) return 0;
  if (typeof str != 'string') {
    str += '';
  }
  return str.replace(/[^\x00-\xff]/g, '01').length;
};

const box = (str) => {
  const rowWhiteLen = 3;
  const rowWhiteStr = ' '.repeat(rowWhiteLen);
  const col = rowWhiteLen + getBLen(str) + rowWhiteLen;
  const boxStr =
    `┌${'─'.repeat(col)}┐\n` +
    `│${' '.repeat(col)}│\n` +
    `│${rowWhiteStr}${str}${rowWhiteStr}│\n` +
    `│${' '.repeat(col)}│\n` +
    `└${'─'.repeat(col)}┘`;

  console.log('');
  console.log(colors('green', boxStr));
  console.log('');
};

module.exports = {
  box,
};
