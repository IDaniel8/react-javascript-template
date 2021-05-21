import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: inherit;
    font-family: Helvetica;
    font-size: 14px;
  }

  div#root {
    height: inherit;
    display: flex;
    flex-direction: column;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export { GlobalStyle }
