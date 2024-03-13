import styled from 'styled-components'

function Footer() {
  return (
    <FooterContact>
      <ContactTitle>Contact</ContactTitle>
      <ContactText href="mailto:charleslouis.velieu@gmail.com">
        charleslouis.velieu@gmail.com
      </ContactText>
    </FooterContact>
  )
}

const FooterContact = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  @media (max-height: 464px) {
    display: none;
  }
`

const ContactTitle = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-top: 8px;
`
const ContactText = styled.a`
  text-decoration: none;
  color: #000;
  font-family: Amaranth;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 100%;
`

export default Footer
