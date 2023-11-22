import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    overflow-x: hidden;
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }
`