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
    display: flex;
    overflow: hidden;
    column-gap: ${prop => prop.columnGap ? prop.columnGap : '50px'};
    justify-content: ${prop => prop.justifyContent ? prop.justifyContent : 'flex-start'};
`    
//justify-content: ${prop => prop.alignContent ? prop.alignContent : 'center'};

export const Col = styled.div`
    flex: ${(props) => props.size};
`
//align-content: ${prop => prop.alignContent ? prop.alignContent : 'center'};