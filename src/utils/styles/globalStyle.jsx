import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Amaranth', sans-serif;
    font-family: 'Jomhuria', serif;
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    @media(max-width: 1175px) {
        height: auto;
    }
}`

export default GlobalStyle
