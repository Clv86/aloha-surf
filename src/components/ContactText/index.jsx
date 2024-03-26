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
  align-items: end;
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
  color: #3c3c3c;
  font-family: 'Space Grotesk';
  font-size: clamp(1.3rem, 8vw, 2rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const ContactDescription = styled.p`
  color: #2e2e2e;
  text-align: justify;
  font-family: 'Space Grotesk';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // @media (max-width: 1000px) {
  //   flex-direction: column;
  //   position: absolute;
  // }
`

export default ContactText
