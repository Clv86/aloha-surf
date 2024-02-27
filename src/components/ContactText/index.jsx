import styled from 'styled-components'

function ContactText() {
  return (
    <ContactStyle>
      <ContactTitle>Contact</ContactTitle>
      <ContactDescription>
        J'ai fait ce site pour m'exercer au code et montrer les conditions des
        différents spots susceptibles d'être intéressant sur la côte ouest
        française ! N'hésitez pas à me contacter pour faire des retours sur le
        site ou proposer de nouveaux spots à ajouter :
      </ContactDescription>
      <ContactMail>charleslouis.velieu@gmx.fr</ContactMail>
    </ContactStyle>
  )
}
const ContactMail = styled.a``
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
