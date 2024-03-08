import styled from 'styled-components'
import ContactText from '../../components/ContactText'
import CL from '../../assets/CL.jpg'

function Contact() {
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
  position: relative;
  max-width: 50%;
  border-radius: 25px;
  @media (max-width: 670px) {
    display: none;
  }
  @media (max-height: 425px) {
    display: none;
  }
`

const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 17%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  @media (max-width: 554px) {
    top: 7%;
  }
  @media (max-height: 490px) {
    height: 408px;
    overflow: scroll;
  }
  @media (max-height: 427px) {
    height: 90%;
  }
  @media (max-height: 349px) {
    height: 300px;
  }
`

const Presentation = styled.div`
  position: absolute;
  top: 8%;
  bottom: 16%;
  left: 122px;
  right: 122px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  background-color: rgba(84, 168, 163, 0.5);
  padding: 16px;
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;
  z-index: 3;
  @media (max-width: 1000px) {
    left: 4%;
    right: 4%;
  }
`
export default Contact
