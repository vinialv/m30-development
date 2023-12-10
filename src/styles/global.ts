import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Lora', sans-serif;
    height: 100vh;
    height: 100dvh;
  }

  #__next {
    height: 100%;
  }
  
`

export default GlobalStyles
