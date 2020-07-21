import styled from 'styled-components'

export const Grid = styled.div`
    min-width: 100px;
    position: relative;
    top: 40px;
    left: 20px;
    height:50px;
`

export const Row = styled.div`
    display: flex;
`

export const Col = styled.div`
    flex: ${(props) => props.size};
`