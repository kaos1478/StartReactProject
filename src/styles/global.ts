import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  body, input, button {
    /*font: 16px 'Roboto', sans-serif;*/
  }

  #root {
    /*max-width: 1000px;*/
    margin: 0 auto;
    /*padding: 40px 20px;*/
  }
`;
