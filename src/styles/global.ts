import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    --white: #FFFFFF;
    --gray: #F3F3F3;
    --dark-gray: #1D1D1F;
    --black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Mukta', sans-serif;
  }
  
`

export default GlobalStyles
