/**
 * NOTE: 仅支持小部分变量的转换，其他需要可以再加上
 */

function generateBootstrapVars(theme) {
  const vars = {
    blue: theme.colors.blue['500'],
    green: theme.colors.green['500'],
    yellow: theme.colors.yellow['500'],
    red: theme.colors.red['500'],
    cyan: theme.colors.cyan['500'],
  };

  let content = '';
  for (const name in vars) {
    content += `$${name}: ${vars[name]} !default;\n`;
  }
  return content;
}

module.exports = {
  generateBootstrapVars,
};
