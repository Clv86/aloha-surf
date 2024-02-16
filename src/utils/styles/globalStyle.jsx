import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Amaranth', sans-serif;
    font-family: 'Jomhuria', serif;
        margin: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
}`

/* import Jomhuria from '/Users/Charl/Documents/WebDev/Aloha/aloha-surf/src/fonts/Jomhuria.woff'
/* import Jomhuria2 from '../../fonts/Jomhuria.woff2'
import Jomhuria3 from '../../fonts/Jomhuria-Regular.ttf' */

/*import Amaranth from '../../fonts/Amaranth.woff'
import Amaranth2 from '../../fonts/Amaranth.woff2'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family : 'Jomhuria';
    src: local ('Jomhuria'),
    url(${Jomhuria}) format ('woff'),
    font-weight: normal;
    font-style: normal;
};
@font-face {
    font-family: 'Amaranth';
    src: local ('Amaranth'),
    url(${Amaranth}) format ('woff'),
    url(${Amaranth2}) format ('woff2');
    font-weight: normal;
    font-style: normal;
}
* {
    font-family: 'Johmuria', 'Amaranth';
}` */

export default GlobalStyle
