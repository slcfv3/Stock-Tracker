import styled from 'styled-components'

export const StyledPrice = styled.p`
  margin: 0px;
  font-family: 'Lato', sans-serif;
  font-size: ${prop => prop.size ? prop.size : '40px'};
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`

export const PriceChange = styled.p`
  margin: 0px;
  font-family: 'Lato', sans-serif;
  font-size: ${prop => prop.size ? prop.size : '40px'};
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${prop => prop.change >= 0 ? '#91e4a5' : '#e95656'};
`