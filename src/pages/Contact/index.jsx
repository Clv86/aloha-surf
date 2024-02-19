import styled from 'styled-components'
import ContactText from '../../components/ContactText'
import surf2 from '../../assets/sam-wermut-XvKaRS_0Jik-unsplash.jpg'

function Contact() {
  return (
    <Presentation>
      <ContactText />
      <SurfPic src={surf2} alr="surf-pic" />
    </Presentation>
  )
}

const SurfPic = styled.img`
  object-fit: contain;
  display: flex;
  text-align: right;
  justify-content: end;
`
const Presentation = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 17%;
  bottom: 8%;
  left: 0%;
  right: 122px;
  background-color: #54a8a3;
`

export default Contact
