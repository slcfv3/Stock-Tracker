import styled from 'styled-components'

export const Grid = styled.div`
    position: relative;
    top: 40px;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-right: 150px;
    padding-left: 150px;
`

export const Row = styled.div`
    background-image: ${prop => prop.BackgroundImage ? prop.BackgroundImage : 'transparent'};
    display: flex;
    overflow: hidden;
    padding: ${prop => prop.Padding ? prop.Padding : '0 0 0 0'};
    margin-bottom: ${prop => prop.marginBottom ? prop.marginBottom : 'none'};
    column-gap: ${prop => prop.columnGap ? prop.columnGap : '50px'};
    justify-content: ${prop => prop.justifyContent ? prop.justifyContent : 'flex-start'};
    border-right: ${prop => prop.BorderRight ? prop.BorderRight : 'none'}
`    
//justify-content: ${prop => prop.alignContent ? prop.alignContent : 'center'};

export const Col = styled.div`
    flex: ${(props) => props.size};
    margin: ${prop => prop.margin ? prop.margin : '0 0 0 0'};
    padding: ${prop => prop.Padding ? prop.Padding : '0 0 0 0'};
    border-right: ${prop => prop.BorderRight ? prop.BorderRight : 'none'};
    border-color: ${prop => prop.BorderColor ? prop.BorderColor : 'none'};
`
//align-content: ${prop => prop.alignContent ? prop.alignContent : 'center'};