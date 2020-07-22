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
    column-gap: 50px;
    padding-bottom: 1%;
`

export const Col = styled.div`
    flex: ${(props) => props.size};
`