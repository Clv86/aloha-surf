import Description from '../../components/Description'
import surf1 from '../../assets/sam-wermut-35muyqODIHA-unsplash.jpg'
import styled from 'styled-components'

const Presentation = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 17%;
  bottom: 8%;
  left: 0%;
  right: 0;

  background-color: #54a8a3;
`
const SurfPic = styled.img`
  object-fit: contain;

  display: flex;
  text-align: right;
  justify-content: end;
  margin-right: 122px;

  }
`

function Home() {
  return (
    <Presentation>
      <Description />
      <SurfPic src={surf1} alt="suf-pic" />
    </Presentation>
  )
}

export default Home
