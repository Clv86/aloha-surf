import surf1 from '../../assets/Background1.jpg'
import surf2 from '../../assets/Background2.jpg'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
function Background() {
  const location = useLocation()
  return (
    <BackgroundContainer>
      {location.pathname === '/' ? (
        <SurfPic src={surf1} alt="surf pic" />
      ) : (
        <SurfPic src={surf2} alt="surf pic" />
      )}
    </BackgroundContainer>
  )
}
const BackgroundContainer = styled.div`
  position: absolute;
  overflow-y: hidden;
  bottom: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -2;
  @media (max-width: 748px) {
    object-fit: fill;
  }
`
const SurfPic = styled.img`
  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  margin: auto;
  max-width: 100%;
  z-index: -10;
  @media (max-width: 748px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
  }
`
export default Background
