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
  height: auto;
  margin: 0;
  padding: 0;
}

@media (max-width: 768px) {
  body {
    padding: 20px;
  }
}
`
export default GlobalStyles
