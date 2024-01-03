import styled from 'styled-components'

const DescriptionStyle = styled.div`
  margin-left: 122px;
  width: 444px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const DescriptionTitle = styled.h2`
  font-family: Amaranth;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  width: 419px;
  height: 71px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  margin: 0;
`

const DescriptionText = styled.p`
  font-family: Amaranth;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  width: 419px;
  height: 71px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0;
`
const Button = styled.button`
  display: flex;
  width: 239px;
  height: 58px;
  padding: 14px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #062848;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-family: Amaranth;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 24px;
`
const Searchbar = styled.input`
  width: 419px;
  height: 57px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #0f0e0e;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
function Description() {
  return (
    <DescriptionStyle>
      <DescriptionTitle>
        Les conditions du surf sur la côte ouest française
      </DescriptionTitle>
      <DescriptionText>
        Conditions météo de la côte Ouest française en temps réel avec prévision
        sur 7 jours et détails heure par heure.
      </DescriptionText>

      <Searchbar type="search" id="spot-search" name="q" />
      <Button>Recherche spot</Button>
    </DescriptionStyle>
  )
}

export default Description
