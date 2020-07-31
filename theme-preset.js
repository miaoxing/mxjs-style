// NOTE: 使用 module 语法，以便 webpack config 中能运行

module.exports = {
  colors: {
    blue: '#1cb7f0',
    green: '#5cb85c',
    yellow: '#f28c48',
    red: '#fa5b50',
    cyan: '#5bc0de',

    primary: '#1cb7f0', // blue
    muted: '#757575',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '.75rem',   // 12
    '.875rem',  // 14
    '1rem',     // 16
    '1.125rem', // 18
    '1.25rem',  // 20
  ],
  fontWeights: {
    light: 300,
    bold: 700,
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [
    0,
    '.25rem',   // 4
    '.5rem',    // 8
    '1rem',     // 16
    '1.5rem',   // 24
    '3rem'      // 48
  ],
  shadows: {
    sm: '0 .125rem .25rem rgba(0, 0, 0, .075)',
    md: '0 .5rem 1rem rgba(0, 0, 0, .15)',
    lg: '0 1rem 3rem rgba(0, 0, 0, .175)',
  },
};
