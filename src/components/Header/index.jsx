import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'

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
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: white;
`

const ButtonNav = styled.nav`
  padding-right: 122px;
  align-self: flex-end;
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
`

const LogoPic = styled.img`
  width: 79.438px;
  height: 79.438px;
  flex-shrink: 0;
  box-sizing: border-box;
  margin-right: 11.3px;
  margin-bottom: 11.3px;
  margin-top: 10.2px;
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
