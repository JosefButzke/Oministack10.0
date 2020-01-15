import React from 'react';

import GlobalStyle from './styles/global';
import { Container } from './styles/styles';

import Main from './pages/Main/index';
import SideBar from './pages/SideBar/index';

function App() {
  return (
    <Container>
      <SideBar />
      <Main />
      <GlobalStyle />
    </Container>
  );
}

export default App;
