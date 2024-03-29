import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.svg'
import styled from 'styled-components'
function Header() {
  return (
    <NavContainer>
      <ButtonNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/spots">Spots</StyledLink>
        <StyledLink to="/à-propos">À Propos</StyledLink>
      </ButtonNav>
      <Logo to="/">
        <LogoPic src={logo} alt="logo" />
        <Title>ALOHA</Title>
      </Logo>
      <ButtonContact>
        <StyledLink to="/contact">Contact</StyledLink>
      </ButtonContact>
    </NavContainer>
  )
}
const ButtonContact = styled.div`
  display: flex;
  width: 100px;
  max-width: 33%;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #fff;
  margin-top: 17px;
  margin-bottom: 19px;
  @media (max-width: 724px) {
    padding: 4px 0px;
  }
`
const NavContainer = styled.nav`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  z-index: 3;
  border-bottom: solid 1px white;
  padding: 0 72px 0 72px;
  @media (max-width: 724px) {
    padding: 0 28px;
  }

  @media (max-width: 450px) {
    padding: 0 12px;
  }
`

const ButtonNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 3.02vw - 0.937rem, 2.688rem);
  align-self: flex-end;
  margin-bottom: auto;
  margin-top: auto;
  @media (max-width: 724px) {
  }
`
const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  max-width: 33%;
  margin-left: auto;
  margin-right: auto;
  gap: 14px;
  &:link {
    text-decoration: none;
  }
  @media (max-width: 724px) {
    display: none;
  }
`

const LogoPic = styled.img`
  @media (max-width: 1000px) {
  }
  @media (max-width: 554px) {
  }
  @media (max-height: 425px) {
  }
`

const Title = styled.h1`
  color: #fff;
  font-family: 'Space Grotesk';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  align-self: flex-end;
`
const StyledLink = styled(Link)`
  color: #fff;
  font-family: 'Space Grotesk';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  @media (max-width: 504px) {
  }
`

export default Header
