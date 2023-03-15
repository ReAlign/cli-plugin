const BDL = require('./utils/generate-deep-link-tool/generate-buzz-deep-link')

const DL = { ...BDL }

const filterEmpty = (str) => {
  return str.split('\n').filter(x => x !== '').join('')
}

const getInnerIp = () => {
  const { networkInterfaces } = require('os');

  const nets = networkInterfaces();
  const results = Object.create(null); // Or just '{}', an empty object

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  return results['en0'][0];
}

module.exports = [
  {
    cmd: 'buzz-deep-link <scene> [params]',
    alias: 'buzz',
    desc: 'Buzz DeepLink',
    fn: (scene, params) => {
      if (scene === 'help') {
        console.log([
          'scene can be:',
          '',
          ...Object.keys(DL).map(x => `  * ${x}`),
          ''
        ].join('\n'))
      } else {
        if (DL[scene]) {
          DL[scene](params)
        } else {
          console.log('error')
        }
      }
    },
  },
  {
    cmd: 'https-serve',
    alias: 'hs',
    desc: 'Server over https.',
    fn: (cmd, { logBox, chalk }) => {
      const { spawn } = require('node:child_process');
      const ls = spawn(
        'serve',
        [
          '--ssl-cert', '/Users/user/ssl/ssl_2023-05-11.pem',
          '--ssl-key', '/Users/user/ssl/ssl_2023-05-11.key',
          '--no-request-logging',
        ]
      );

      ls.stdout.on('data', (data = '') => {
        if (!`${data}`.trim().startsWith('UPDATE')) {
          const port = filterEmpty(`${data}`.split('localhost:')[1]);

          const local = `https://localhost:${port}`;
          const ip = `https://${getInnerIp()}:${port}`;

          logBox([
            `${chalk.green(`🎉🎉🎉 https server is running:\n`)}`,
            `${chalk.blue(ip)}`,
            `${chalk.blue(local)}`,
          ]);
        }
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
    },
  },
  {
    cmd: 'pro-search',
    alias: 'ps',
    desc: 'Pro Search',
    fn: () => {
      const path = require("path");
      const fs = require("fs");

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

      console.log('all key count: ', Object.keys(require('./data/i18n.json.js')).length)
      console.log();
      // console.log(newArr);

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
    },
  },
]
