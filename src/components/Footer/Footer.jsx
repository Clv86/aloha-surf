import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
function Footer() {
  const { pathname } = useLocation()
  return (
    <ContactText style={{ color: pathname === '/' ? '#fff' : '#2E2E2E' }}>
      Développé avec amour par{' '}
      <Mail href="mailto:charleslouis.velieu@gmail.com">
        charleslouis.velieu@gmail.com
      </Mail>{' '}
      🏄‍
    </ContactText>
  )
}
const Mail = styled.a`
  color: inherit;
  text-decoration: none;
`
const ContactText = styled.p`
  position: fixed;
  bottom: 0;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  font-family: 'Space Grotesk';
  font-size: 0.8em;
  vertical-align: bottom;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`

export default Footer
