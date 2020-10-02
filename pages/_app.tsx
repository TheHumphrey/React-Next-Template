import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import usePersistedState from '@app/Hooks/usePersistedState';

import { AuthProvider } from '@app/Hooks/useAuth';

import light from '@app/styles/themes/light';
import dark from '@app/styles/themes/dark';

import GlobalStyle from '@app/styles/global';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const handleToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
