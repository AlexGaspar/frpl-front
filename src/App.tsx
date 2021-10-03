import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled, { ThemeProvider } from 'styled-components';
import { Colors, Classes } from '@blueprintjs/core';

import NavBar from './pages/components/NavBar';

import { useRoutes } from 'react-router-dom';

import routes from './app/routes';

const theme = {
  colors: Colors,
};

const Layout = styled.div`
  color: ${p => p.theme.colors.WHITE};
  padding: 12px 24px;
  height: calc(100vh - 50px);
`;

function App() {
  const routing = useRoutes(routes);

  return (
    <div className={`App ${Classes.DARK}`}>
      <ThemeProvider theme={theme}>
        <NavBar />
        {routing}
      </ThemeProvider>
    </div>
  );
}

export default App;
