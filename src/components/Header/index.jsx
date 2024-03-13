import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import hut from '../../assets/hut.png'
import wave from '../../assets/wave.png'
import surfer from '../../assets/surfer.png'
function Header() {
  return (
    <NavContainer>
      <Logo to="/">
        <LogoPic src={logo} alt="logo" />
        <Title>ALOHA SURF</Title>
      </Logo>
      <ButtonNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/spots">Spots</StyledLink>
        <StyledLink to="/à-propos">À Propos</StyledLink>
      </ButtonNav>
      <LogoNav>
        <IconLink to="/">
          <SmallNavPic src={hut} />
        </IconLink>
        <IconLink to="/spots">
          <SmallNavPic src={wave} />
        </IconLink>
        <IconLink to="/à-propos">
          <SmallNavPic src={surfer} />
        </IconLink>
      </LogoNav>
    </NavContainer>
  )
}
const SmallNavPic = styled.img`
  max-height: 40px;
`
const LogoNav = styled.nav`
  display: none;

  @media (max-width: 554px) {
    display: flex;
    width: 100%;
    justify-content: right;
    padding-right: 4%;
  }
`
const IconLink = styled(Link)`
  margin-top: 18px;
  margin-left: 18px;
`

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  z-index: 3;
  background-color: white;
  @media (max-width: 554px) {
    height: auto;
    align-items: end;
  }
`

const ButtonNav = styled.nav`
  padding-right: 122px;
  align-self: flex-end;
  @media (max-width: 1000px) {
    padding-right: 4%;
  }
  @media (max-width: 554px) {
    display: none;
  }
`
const Logo = styled(Link)`
  padding-left: 122px;
  display: inline-flex;
  flex-direction: row;
  align-item: stretch;
  align-content: stretch;
  &:link {
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    padding-left: 4%;
  }
`

const LogoPic = styled.img`
  width: 79.438px;
  height: 79.438px;
  box-sizing: border-box;
  margin-right: 11.3px;
  margin-bottom: 11.3px;
  margin-top: 10.2px;
  @media (max-width: 1000px) {
    max-height: 80px;
  }
  @media (max-width: 554px) {
    max-height: 50px;
    margin-bottom: 5px;
  }
  @media (max-height: 425px) {
    max-height: 50px;
    margin-bottom: 5px;
  }
`

const Title = styled.h1`
  font-family: 'Jomhuria';
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  color: black;
  line-height: normal;
  display: flex;
  margin: 0;
  justify-content: center;
  align-self: flex-end;
  height: 55px;
  @media (max-width: 554px) {
    display: none;
  }
`
const StyledLink = styled(Link)`
  font-family: 'Jomhuria';
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  color: black;
  margin-left: 16px;
`

export default Header
