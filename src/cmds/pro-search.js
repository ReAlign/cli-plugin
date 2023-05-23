module.exports = () => {
  const path = require('path');
  const fs = require('fs');

  const R = path.join(process.cwd(), 'src')

  const bigArr = [];

  //关键字
  const lookingForString = /[^a-zA-Z]t\([\'|\`].*?[\'|\`]\)/g;

  recursiveReadFile(R);
  const newArr = [...new Set(
    bigArr
      .map((x) => `t(${x.split('t(')[1]}`)
  )];

  console.log('\ni18n key search result:\n');

  console.log('Unique');
  console.log('used key count: ', newArr.length, '\n')
  console.log(newArr)

  console.log('All');
  console.log('used key count: ', bigArr.length, '\n')
  console.log(bigArr)

  function recursiveReadFile(fileName) {
    if (!fs.existsSync(fileName)) return;
    if (isFile(fileName)) {
      check(fileName);
    }
    if (isDirectory(fileName)) {
      var files = fs.readdirSync(fileName);
      files.forEach(function (val, key) {
        var temp = path.join(fileName, val);
        if (isDirectory(temp)) recursiveReadFile(temp);
        if (isFile(temp)) check(temp);
      })
    }
  }

  function check(fileName) {
    var data = readFile(fileName);
    var exc = new RegExp(lookingForString);
    const arr = data.match(exc);
    if (!arr) return;
    bigArr.push(...arr);
  }

  function isDirectory(fileName) {
    if (fs.existsSync(fileName)) return fs.statSync(fileName).isDirectory();
  }


  function isFile(fileName) {
    if (fs.existsSync(fileName)) return fs.statSync(fileName).isFile();
  }


  function readFile(fileName) {
    if (fs.existsSync(fileName)) return fs.readFileSync(fileName, 'utf-8');
  }
}