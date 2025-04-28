const { colors } = require('./color-console');

const box = (str) => {
  const rowWhiteLen = 5;
  const rowWhiteStr = ' '.repeat(rowWhiteLen);
  const col = rowWhiteLen + str.length + rowWhiteLen;
  const boxStr =
    `┌${'─'.repeat(col)}┐\n` +
    `│${rowWhiteStr}${str}${rowWhiteStr}│\n` +
    `└${'─'.repeat(col)}┘`;

  console.log('');
  console.log(colors('green', boxStr));
  console.log('');
};

module.exports = {
  box,
};
