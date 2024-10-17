import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

@media (max-width: 1360px) {
    body {
        font-size: 14px;
        padding: 15px;
    }

`
export default GlobalStyles
