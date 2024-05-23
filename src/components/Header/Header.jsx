import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.svg'
import styled from 'styled-components'

function Header() {
  return (
    <NavContainer>
      <ButtonNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/spots">Spots</StyledLink>
        <StyledLink to="/à-propos">À Propos</StyledLink>
      </ButtonNav>
      <Logo to="/">
        <LogoPic src={logo} alt="logo" />
        <Title>ALOHA</Title>
      </Logo>
      <FlexContainer>
        <ButtonContact>
          <StyledLink to="/contact">Contact</StyledLink>
        </ButtonContact>
      </FlexContainer>
    </NavContainer>
  )
}
const FlexContainer = styled.div`
  flex: 1;
`
const ButtonContact = styled.div`
  display: flex;
  margin-left: auto;
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
  @media (max-height: 507px) {
    padding: 2px 6px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  @media (max-width: 724px) {
    padding: 4px 8px;
  }
`
const NavContainer = styled.nav`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border-bottom: solid 1px white;
  padding: var(--margin-responsive-size);
`

const ButtonNav = styled.nav`
  display: flex;
  flex: 1;
  gap: clamp(1rem, 3.02vw - 0.937rem, 2.688rem);
  align-self: flex-end;
  margin-bottom: auto;
  margin-top: auto;
`
const Logo = styled(Link)`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
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

const LogoPic = styled.img``

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
  font-size: clamp(0.75rem, 0.4375rem + 1vw, 1rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
`

export default Header
