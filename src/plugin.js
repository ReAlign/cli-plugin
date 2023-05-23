const {
  buzz,
  httpsServe,
  proSearch,
  colorConvert,
} = require('./cmds')

module.exports = [
  {
    cmd: 'buzz-deep-link <scene> [params]',
    alias: 'buzz',
    desc: 'Buzz DeepLink',
    fn: (scene, params/*, cmd, { logBox, chalk } */) => {
      buzz(scene, params)
    },
  },
  {
    cmd: 'https-serve',
    alias: 'hs',
    desc: 'Server over https.',
    fn: (...x) => {
      httpsServe(...x)
    },
  },
  {
    cmd: 'pro-search',
    alias: 'ps',
    desc: 'Pro Search',
    fn: () => {
      proSearch()
    },
  },
  {
    cmd: 'color-convert',
    alias: 'cc',
    desc: 'Convert color',
    optionMode: 'any',
    options: [
      ['-c, --color <color>', '颜色'],
      ['-t, --target <target>', '目标格式 [ rgb | hex ]'],
    ],
    fn: (keys, { color, target }) => {
      colorConvert(color, target)
    },
  },
]
