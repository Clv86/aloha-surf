import styled from 'styled-components'

function Contact() {
  return (
    <Main>
      <Presentation>charleslouis.velieu@gmail.com</Presentation>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78vh;
  @media (max-width: 724px) {
    height: calc(78vh + 34px);
  }
`

const Presentation = styled.div`
  display: flex;
  justify-content: center;
  color: #3c3c3c;
  font-family: 'Space Grotesk';
  font-size: clamp(1.2rem, 4vw, 4rem);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export default Contact
