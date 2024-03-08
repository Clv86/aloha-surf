import styled from 'styled-components'

function ContactText() {
  return (
    <ContactStyle>
      <ContactDescription>
        <ContactTitle>À propos</ContactTitle>
        J'ai fait ce site pour m'exercer au code et montrer les conditions des
        différents spots susceptibles d'être intéressant sur la côte ouest
        française !{' '}
        <a href="mailto:charleslouis.velieu@gmail.com">
          N'hésitez pas à me contacter pour faire des retours sur le site ou
          proposer de nouveaux spots à ajouter !{' '}
        </a>
      </ContactDescription>
    </ContactStyle>
  )
}
const ContactStyle = styled.div`
  width: 444px;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2%;
  @media (max-width: 808px) {
    width: auto;
  }
  @media (max-width: 1000px) {
    align-items: start;
    padding-left: 0;
  }
  @media (max-height: 425px) {
    width: auto;
  }
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
  @media (max-width: 1000px) {
    text-align: center;
  }
`
const ContactDescription = styled.p`
  display: block;
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 71px;
  margin: 0;
  margin-bottom: 10%;

  // @media (max-width: 1000px) {
  //   flex-direction: column;
  //   position: absolute;
  // }
`

export default ContactText
