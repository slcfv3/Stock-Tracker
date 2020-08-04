import styled from 'styled-components'

export const OptionList = styled.ul`
    position:absolute;
    top:18%;
    list-style: none;
    width: 78%;
    z-index:2000;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to bottom, #001330 2%, rgba(0, 8, 19, 0.8) 177%);
`
export const Option = styled.li`
    height:40px;
    &:hover {
        background-color: #1c395d
    }
`

export const SymbolTag = styled.label`
    width: 47px;
    height: 22px;
    font-family: Lato;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #0068ff;
    position:relative;
    top:8px;
`
export const NameTag = styled.label`
    width:600px;
    height: 22px;
    font-family: Lato;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    position:relative;
    top:5px;
`
export const ExchangeTag = styled.p`
    width: 76px;
    height: 22px;
    opacity: 0.13;
    border-radius: 2px;
    background-color: #80b4ff;
    display: inline-block;
    margin:0;
    position: relative;
    left:20px;
    top:10px;
`

export const ExchangeText = styled.label`
    width: 60px;
    height: 17px;
    opacity: 0.5;
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    position: relative;
    left:72px;
    top:5px;
`

export const TagContainer = styled.label`
    position:absolute;
    left:150px;
`