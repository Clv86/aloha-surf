import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Space Grotesk', sans-serif;
    font-optical-sizing: auto;
    margin: 0;
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
    --margin-responsive-size : 0 72px;
    @media (max-width: 724px) {
        --margin-responsive-size : 0 28px;
    }
    @media (max-width: 450px) {
        --margin-responsive-size : 0 12px;
    }
}`

export default GlobalStyle
