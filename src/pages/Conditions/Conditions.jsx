import styled from 'styled-components'
import DayConditions from '../../components/DayConditions/DayConditions'
import WeekConditions from '../../components/WeekConditions/WeekConditions'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
function Conditions(spot, setSpot) {
  const [tableWeek, setTable] = useState(false)
  const { spotName } = useParams()
  const underline = {
    borderBottom: '2px solid #2e2e2e',
    paddingBottom: '4px',
  }
  return (
    <Main>
      <Presentation>
        <TitleBar>
          <SpotTitle>{spotName}</SpotTitle>
          <ChooseButton>
            <TableButton
              style={tableWeek ? null : underline}
              onClick={() => setTable(false)}
            >
              Aujourd'hui
            </TableButton>
            <TableButton
              style={tableWeek ? underline : null}
              onClick={() => setTable(true)}
            >
              Cette semaine
            </TableButton>
          </ChooseButton>
        </TitleBar>
        {tableWeek ? (
          <WeekConditions name={spotName} />
        ) : (
          <DayConditions name={spotName} />
        )}
      </Presentation>
    </Main>
  )
}

const ChooseButton = styled.div`
  display: flex;
  gap: 8px;
`
const TableButton = styled.button`
  &:hover {
    border-bottom: 2px solid #2e2e2e;
    padding-bottom: 4px;
  }
  padding-bottom: 6px;
  padding-top: 6px;
  display: flex;
  color: #2e2e2e;
  font-family: 'Space Grotesk';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 78dvh;
  margin: var(--margin-responsive-size);
  @media (max-device-height: 507px) and (max-device-width: 1190px) {
    justify-content: left;
  }
`
const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 10px;
  margin-top: 32px;
  @media (max-height: 507px) {
    margin-top: 0;
    width: 100%;
  }
`
const SpotTitle = styled.h2`
  color: #3c3c3c;
  font-family: 'Space Grotesk';
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 0 8px 0;
  @media (max-height: 507px) {
    margin-bottom: 0;
  }
`

const TitleBar = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 8px;
  padding: 0;
  @media (max-height: 507px) {
    flex-direction: row;
    align-items: end;
  }
`

export default Conditions
