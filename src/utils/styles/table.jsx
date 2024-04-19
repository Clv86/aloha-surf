import styled from 'styled-components'

export const StyledTable = styled.table`
  text-align: left;
  display: table;
  width: max-content;
  border-spacing: 10px;
  margin: 0 -10px;
  position: relative;
  table-layout: fixed;
  font-size: 12px;
  @media (max-width: 554px) {
    padding: 0;
  }
`

export const THead = styled.thead`
  border-bottom: 1px solid #000;
  display: table-header-group;
`

export const TFoot = styled.tfoot``

export const TBody = styled.tbody``

export const TR = styled.tr``

export const TH = styled.th`
  @media (max-height: 490px) {
    padding: 0.2em;
  }
`

export const TD = styled.td`
  text-align: center;
  color: #3c3c3c;
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 20px;
`
