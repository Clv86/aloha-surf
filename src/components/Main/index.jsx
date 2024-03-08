import styled from 'styled-components'
import surf1 from '../../assets/gian-luca-modified.jpg'

function Main() {
  return (
    <BackgroundContainer>
      <SurfPic src={surf1} alt="surf-pic" />
    </BackgroundContainer>
  )
}
const BackgroundContainer = styled.div`
  position: absolute;
  overflow-y: hidden;
  bottom: 0;
  top: 17%;
  width: 100%;
  object-fit: cover;
  @media (max-width: 554px) {
    top: 10%;
  }
`
const SurfPic = styled.img`
  max-width: 100%;
  min-width: 1003px;
  width: auto;
  opacity: 0.5;
  z-index: 2;
  @media (max-width: 1003px) {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
  }
  @media (max-width: 554px) {
    height: 100%;
  }
`
export default Main
