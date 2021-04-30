import {generateBootstrapVars, generateAntdVars} from '../utils';
import theme from '../theme-preset';

describe('style', () => {
  test('generateBootstrapVars', () => {
    const result = generateBootstrapVars(theme);
    expect(result).toMatchSnapshot();
  });

  test('generateAntdVars', () => {
    const result = generateAntdVars(theme);
    expect(result).toMatchSnapshot();
  });
});

