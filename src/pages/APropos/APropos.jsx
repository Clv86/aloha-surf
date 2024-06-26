import styled from 'styled-components'
import ContactText from '../../components/ContactText/ContactText'
import CL from '../../assets/CL.jpg'

function APropos() {
  return (
    <Main>
      <Presentation>
        <ContactText />
        <Portrait src={CL} alt="Photo de moi" />
      </Presentation>
    </Main>
  )
}

const Portrait = styled.img`
  height: 400px;
  @media (max-height: 425px) {
    display: none;
  }
  @media (max-width: 670px) {
    max-width: 317px;
    margin: auto;
    max-width: 100%;
    max-height: 35dvh;
  }
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 78dvh;
  margin-bottom: auto;
`

const Presentation = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4dvh;
  margin: auto;
  border-radius: 16px;
  border: 1px solid rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  padding: 16px;
  @media (max-width: 724px) {
    width: auto;
    margin: 4dvh 28px;
    flex-direction: column;
    justify-content: start;
    object-fit: contain;
  }
  @media (max-width: 450px) {
    margin: 4dvh 12px;
  }
`

export default APropos
