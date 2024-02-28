import styled from 'styled-components'

function ContactText() {
  function sendMail() {
    window.location.href = 'mailto:charleslouis.velieu@gmail.com'
  }
  return (
    <ContactStyle>
      <ContactTitle>À propos</ContactTitle>
      <ContactDescription>
        J'ai fait ce site pour m'exercer au code et montrer les conditions des
        différents spots susceptibles d'être intéressant sur la côte ouest
        française ! N'hésitez pas à me contacter pour faire des retours sur le
        site ou proposer de nouveaux spots à ajouter :{' '}
        <ContactMail onClick={sendMail}>
          charleslouis.velieu@gmail.com
        </ContactMail>
      </ContactDescription>
    </ContactStyle>
  )
}
const ContactMail = styled.button``
const ContactStyle = styled.div`
  width: 444px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2%;
`
const ContactTitle = styled.h1`
  width: 200px;
  height: 72px;
  font-family: Jomhuria;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin: 0;
`
const ContactDescription = styled.p`
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 419px;
  height: 71px;
  margin: 0;
  margin-bottom: 10%;
`

export default ContactText
