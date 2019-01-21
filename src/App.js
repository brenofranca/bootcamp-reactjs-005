import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import './configs/reactotron';

import store from './store';

import Routes from './routes';

import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </Provider>
  </BrowserRouter>
);

export default App;
