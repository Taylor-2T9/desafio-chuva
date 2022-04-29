import styled from 'styled-components'

export const Card = styled.div`
border: 1px solid #E7E7E7;
`
export const Author = styled.h4`
margin-left: 3.7%;
font-family: 'Quicksand', sans-serif;
font-style: normal;
font-weight: bold;
line-height: 15px;
font-size: 14px;
color: #5C5C5C;
`
export const AuthorArea = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const IsAuthor = styled.p`
margin-right: 10%;
font-family: 'Quicksand', sans-serif;
font-weight: 700;
font-size: 14px;
color: #ED7839;
`
export const Content = styled.p`
margin-left: 3.7%;
font-family: 'Quicksand', sans-serif;
font-style: normal;
font-weight: 400;
line-height: 18px;
color: #4D4D4D;
`
export const Verified = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 25px;
div{
    padding-left: 15px;
}
img{
   width:25px; 
   height: 25px;
}
`