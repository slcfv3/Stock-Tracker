import styled from 'styled-components'

export const StatTable = styled.table`
    width: 100%;
    border-collapse: collapse;  
`

export const StatLabel = styled.td`
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #beccdc;
    width: 50%;
    border-bottom: 1px solid;
    border-color: rgba(84, 96, 109, 0.5);
    padding-top: 15px;
    padding-bottom: 15px;
    cursor: default;
`

export const StatValue = styled.td`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #ffffff;
    width: 50%;
    border-bottom: 1px solid;
    border-color: rgba(84, 96, 109, 0.5);
    padding-top: 15px;
    padding-bottom: 15px;
`