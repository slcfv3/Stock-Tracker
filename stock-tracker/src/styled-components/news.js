import styled from 'styled-components'

export const NewsList = styled.ul`
list-style-type: none;
padding-inline-start: 0px;
width: 100%
`

export const ListItem = styled.li`
margin-bottom: 35px;
`
export const Headline = styled.p`
font-family: 'Lato', sans-serif;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: left;
margin-bottom: 5px;
color: #ffffff;
&:hover {
  color: #e0be86
}
transition: 0.3s;
`

export const ArticleLabel = styled.label`
font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #beccdc;
`