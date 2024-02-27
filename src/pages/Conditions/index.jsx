import styled from 'styled-components'
import DayConditions from '../../components/DayConditions'
import WeekConditions from '../../components/WeekConditions'
import surf1 from '../../assets/gian-luca-modified.jpg'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Conditions(spot, setSpot) {
  const [tableWeek, setTable] = useState(false)
  const { spotName } = useParams()
  return (
    <Main>
      <SurfPic src={surf1} alt="surf-pic" />

      <Presentation>
        <TitleBar>
          <SpotTitle>{spotName}</SpotTitle>
          <DayButton onClick={() => setTable(false)}>Jour</DayButton>
          <WeekButton onClick={() => setTable(true)}>Semaine</WeekButton>
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
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 17%;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
`
const SurfPic = styled.img`
  display: flex;
  position: absolute;
  width: 100%;
  opacity: 0.5;

  z-index: 2;
`
const Presentation = styled.div`
  position: absolute;
  top: 8%;
  bottom: 16%;
  left: 122px;
  right: 122px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgba(84, 168, 163, 0.5);
  padding: 16px;
  border-radius: 25px;
  box-shadow: 5px 3px 3px black;
  z-index: 3;
`
const SpotTitle = styled.h2`
  flex-shrink: 0;
  olor: #000;
  text-align: left;
  margin-left: 106px;
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

export default Conditions
