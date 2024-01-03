import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'

const NavContainer = styled.nav`
  position: absolute;
  right: 122px;
  left: 122px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonNav = styled.nav`
  align-self: flex-end;
`
const Logo = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-item: stretch;
  align-content: stretch;
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
  line-height: normal;
  display: flex;
  margin: 0;
  justify-content: center;
  align-self: flex-end;
  flex-shrink: 0;
`
const StyledLink = styled(Link)`
  font-family: 'Jomhuria';
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  color: black;
  margin-left: 16px;
`

function Header() {
  return (
    <NavContainer>
      <Logo>
        <LogoPic src={logo} alt="logo" />
        <Title>ALOHA SURF</Title>
      </Logo>
      <ButtonNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/spots">Spots</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </ButtonNav>
    </NavContainer>
  )
}

export default Header
