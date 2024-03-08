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
  display: flex;
  padding-bottom: 2%;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  position: absolute;
  bottom: 0%;
  left: 0%;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0px;
  z-index: 2;
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
`
const ContactText = styled.a`
  text-decoration: none;
  color: #000;
  font-family: Amaranth;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1%;
`

export default Footer
