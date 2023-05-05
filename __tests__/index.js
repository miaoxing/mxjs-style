import {generateBootstrapVars} from '../utils';
import theme from '../theme-preset';

describe('style', () => {
  test('generateBootstrapVars', () => {
    const result = generateBootstrapVars(theme);
    expect(result).toMatchSnapshot();
  });
});

