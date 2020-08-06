import styled from 'styled-components'

export const SectionTitle = styled.header`
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #7fb3ff;
    cursor: default;
`

export const FooterSectionTitle = styled.header`
  font-family: Lato, sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  cursor: default;
`

export const FooterStockSymbol = styled.p`
  margin-top: 0px; 
  margin-bottom: 0px; 
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  cursor: default;
`

export const CompanyName = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  margin-bottom: 0px;
  margin-top: 14px;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  cursor: default;
`

export const CompanyWebsite = styled.p`
  font-family: 'Lato', sans-serif; 
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #beccdc;
  &:hover {
    color: #e0be86
  }
  transition: 0.3s;
`

export const CompanyDescription = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  margin-bottom: 24px;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`

export const RealTimePriceDate = styled.p`
font-family: Lato, sans-serif;
font-size: 14px;
font-weight: 300;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: right;
margin-top: 0px;
margin-bottom: 0px;
color: #beccdc;
cursor: default;
`

export const MarketStatus = styled.p`
font-family: Lato, sans-serif;
font-size: 14px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: left;
margin-top: 0px;
margin-bottom: 0px;
color: #ffffff;
cursor: default;
`

export const PeerSymbol = styled.label`
font-family: Lato, sans-serif;
  font-size: 14px;
  @media (max-width: ${prop => prop.breakpoint ? prop.breakpoint : '0px'}) {
    font-size: ${prop => prop.breakpoint ? '10px' : '14px'};
    width: auto;
  }
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #beccdc;
  &:hover {
    color: #e0be86
  }
  transition: 0.3s;
  cursor: default;
`