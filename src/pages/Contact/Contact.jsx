import styled from 'styled-components'
import mailIcon from '../../assets/mail.png'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'

function Contact() {
  return (
    <Main>
      <ContactSection>
        <Title>Contact</Title>
        <IconSection>
          <ContactLine>
            <Icon href="mailto:charleslouis.velieu@gmail.com">
              <IconPic src={mailIcon} alt="Mail" />
            </Icon>
            <IconText>charleslouis.velieu@gmail.com</IconText>
          </ContactLine>
          <ContactLine>
            <Icon href="https://www.linkedin.com/in/charles-louis-velieu-37737826b/">
              <IconPic src={linkedinIcon} alt="Linkedin" />
            </Icon>
            <IconText>
              www.linkedin.com/in/charles-louis-velieu-37737826b
            </IconText>
          </ContactLine>
          <ContactLine>
            <Icon href="https://github.com/Clv86">
              <IconPic src={githubIcon} alt="Github" />
            </Icon>
            <IconText>@Clv86</IconText>
          </ContactLine>
        </IconSection>
      </ContactSection>
    </Main>
  )
}
const IconPic = styled('img')`
  aspect-ratio: 1/1;
  max-width: clamp(20px, 2vw, 32px);
`
const Main = styled.div`
  margin: 0 72px 0 72px;
  display: flex;
  flex-direction: column;
  height: 86vh;
  @media (max-width: 724px) {
    margin: 0 28px 0 28px;
  }
  @media (max-width: 450px) {
    margin: 0 12px;
  }
`
const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4dvh;
  margin: auto;
  border-radius: 16px;
  border: 1px solid rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  padding: 16px;
`
const Title = styled.h1`
  color: #3c3c3c;
  font-family: 'Space Grotesk';
  font-size: clamp(1.3rem, 8vw, 2rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2dvh;
`
const ContactLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 3dvh;
  gap: 2vw;
`
const Icon = styled.a`
  margin-top: auto;
  margin-bottom: 0;
`

const IconText = styled.p`
  margin: auto 0;
  font-size: clamp(12px, 2vw, 16px);
`
export default Contact
