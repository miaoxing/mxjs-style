// NOTE: 使用 module 语法，以便 webpack config 中能运行
// TODO 补齐颜色

module.exports = {
  config: {
    cssVarPrefix: 'mx',
  },
  colors: {
    blue: {
      500: '#1cb7f0',
    },
    green: {
      500: '#5cb85c',
    },
    yellow: {
      500: '#f28c48',
    },
    red: {
      500: '#fa5b50',
    },
    cyan: {
      500: '#5bc0de',
    },
    primary: '#1cb7f0', // blue
    muted: '#757575',
  },
};
