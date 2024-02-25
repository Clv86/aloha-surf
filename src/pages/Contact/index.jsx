import styled from 'styled-components'
import ContactText from '../../components/ContactText'
import surf1 from '../../assets/gian-luca-modified.jpg'

function Contact() {
  return (
    <Main>
      <SurfPic src={surf1} alt="surf-pic" />

      <Presentation>
        <ContactText />
      </Presentation>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 17%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
`

const SurfPic = styled.img`
  display: flex;
  position: absolute;
  width: 100%;
  opacity: 0.5;

  z-index: 2;
`

const Presentation = styled.div`
  position: absolute;
  top: 8%;
  bottom: 16%;
  left: 122px;
  right: 122px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgba(84, 168, 163, 0.5);
  padding: 16px;
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;
  z-index: 3;
`
export default Contact
