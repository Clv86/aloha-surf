import styled from 'styled-components'
import ContactText from '../../components/ContactText'
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
  height: 311px;
  @media (max-height: 425px) {
    display: none;
  }
  @media (max-width: 670px) {
    max-width: 317px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 78vh;
  margin-bottom: auto;
  @media (max-width: 724px) {
    height: calc(78vh + 34px);
  }
`

const Presentation = styled.div`
  display: flex;
  width: 80vw;
  align-items: flex-end;
  justify-content: center;
  gap: 4vh;
  margin: auto;
  @media (max-width: 670px) {
    flex-direction: column;
    margin-bottom: 4vh;
  }
`

export default APropos