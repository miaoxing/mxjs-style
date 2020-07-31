/**
 * NOTE: 仅支持小部分变量的转换，其他需要可以再加上
 */

function generateAntdVars(theme) {
  return {
    'blue-base': theme.colors.blue,
    'green-base': theme.colors.green,
    'yellow-base': theme.colors.yellow,
    'red-base': theme.colors.red,
    'cyan-base': theme.colors.cyan,
  }
}

function generateBootstrapVars(theme) {
  const vars = {
    blue: theme.colors.blue,
    green: theme.colors.green,
    yellow: theme.colors.yellow,
    red: theme.colors.red,
    cyan: theme.colors.cyan,
  }

  let content = '';
  for (const name in vars) {
    content += `$${name}: ${vars[name]} !default;\n`;
  }
  return content;
}

module.exports = {
  generateAntdVars,
  generateBootstrapVars,
};
