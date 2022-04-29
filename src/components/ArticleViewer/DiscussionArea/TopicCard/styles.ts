import styled from 'styled-components'

export const Card = styled.div`
width: 95%;
margin-left: auto;
margin-right: auto;
border: 1px solid #E7E7E7;
box-sizing: border-box;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
border-radius: 4px;
margin-bottom: 15px;
`
export const Title = styled.h3`
margin-left: 3.7%;
color: #ED7839;
`
export const Author = styled.h4`
margin-top: -15px;
margin-left: 3.7%;
font-family: 'Quicksand', sans-serif;
font-style: normal;
font-weight: bold;
line-height: 15px;
color: #5C5C5C;
`
export const Content = styled.p`
margin-left: 3.7%;
font-family: 'Quicksand', sans-serif;
font-style: normal;
font-weight: 400;
line-height: 18px;
color: #4D4D4D;
`
export const OptionsArea = styled.div`
display: flex;
align-items: center;
text-align: center;
margin-left: 3.68%;
margin-bottom: 15px;
p{
    padding-left: 2.3%;
    padding-bottom: 5px;
}
`
export const Dots = styled.img`
cursor: pointer;
height: 28px;
padding-right: 1.68%;
`
export const Like = styled.img`
cursor: pointer;
height: 35px;
`
export const LikesCounter = styled.p`
color: #757575;
`
export const RepliesCounter = styled.p`
color: #757575;
cursor: pointer;
:hover{
    text-decoration: underline;
}
`