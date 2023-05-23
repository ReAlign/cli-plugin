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

module.exports = (cmd, { logBox, chalk }) => {
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
}