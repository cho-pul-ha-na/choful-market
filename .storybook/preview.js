import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src';
import { mainTheme } from '../src/theme';

export const decorators = [
  Story => (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
