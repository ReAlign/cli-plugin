module.exports = (type, str) => {
  if (type === 'encode') {
    console.log(Buffer.from(str).toString('base64'));
  } else if (type === 'decode') {
    console.log(Buffer.from(str, 'base64').toString());
  } else {
    //
  }
}