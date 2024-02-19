import styled from 'styled-components'

function ContactText() {
  return (
    <ContactStyle>
      <ContactTitle>Contact</ContactTitle>
      <ContactDescription>loremipsum@gmx.fr</ContactDescription>
    </ContactStyle>
  )
}

const ContactStyle = styled.div`
  margin-left: 145px;
  width: 444px;
`
const ContactTitle = styled.h1`
  width: 200px;
  height: 72px;
  flex-shrink: 0;
  font-family: Jomhuria;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`
const ContactDescription = styled.p`
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  width: 419px;
  height: 71px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`

export default ContactText
