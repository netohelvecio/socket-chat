import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { RoomProvider } from './context/Room';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoomProvider>
        <Routes />
        <GlobalStyles />
      </RoomProvider>
    </ThemeProvider>
  );
}

export default App;
