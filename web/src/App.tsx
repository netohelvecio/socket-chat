import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { RoomProvider } from './context/Room';
import { UserProvider } from './context/User';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <RoomProvider>
          <Routes />
          <GlobalStyles />
        </RoomProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
