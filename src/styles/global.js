import { createGlobalStyle } from 'styled-components';

import 'rc-slider/assets/index.css';

import 'font-awesome/css/font-awesome.min.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: #181818;
    color: #fff;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }
`;
