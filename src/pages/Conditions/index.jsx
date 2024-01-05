import styled from 'styled-components'
import DayConditions from '../../components/DayConditions'
import WeekConditions from '../../components/WeekConditions'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 17%;
  bottom: 8%;
  left: 0%;
  right: 122px;
  background-color: #54a8a3;
`
const SpotTitle = styled.h2`
  flex-shrink: 0;
  olor: #000;
  text-align: left;
  margin-left: 122px;
  font-family: Amaranth;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const DayButton = styled.button`
  display: flex;
  width: 117px;
  height: 29px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: auto;
  margin-bottom: auto;
`

const WeekButton = styled.button`
  display: flex;
  width: 117px;
  height: 29px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: auto;
  margin-bottom: auto;
`
const TitleBar = styled.div`
  display: inline-flex;
  gap: 3%;
`
function Conditions(spot, setSpot) {
  const [tableWeek, setTable] = useState(false)
  const { spotName } = useParams()
  return (
    <Presentation>
      <TitleBar>
        <SpotTitle>{spotName}</SpotTitle>
        <DayButton onClick={() => setTable(false)}>Jour</DayButton>
        <WeekButton onClick={() => setTable(true)}>Semaine</WeekButton>
      </TitleBar>

      {tableWeek ? <WeekConditions /> : <DayConditions name={spotName} />}
    </Presentation>
  )
}

export default Conditions
