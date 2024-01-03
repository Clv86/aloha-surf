import styled from 'styled-components'

const FooterContact = styled.div`
display= inline;
position: absolute;
bottom: 0%;
left: 0%;
text-align: center;
width: 100%;
height: 8%;
box-sizing: border-box;
padding: 0px;`

const ContactTitle = styled.h1`
  padding: 0px;
  margin: 0px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const ContactText = styled.p`
  padding: 0px;
  margin: 0px;
  color: #000;
  text-align: center;
  font-family: Amaranth;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

function Footer() {
  return (
    <FooterContact>
      <ContactTitle>Contact</ContactTitle>
      <ContactText>loremipsum@gmx.fr</ContactText>
    </FooterContact>
  )
}

export default Footer
