import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #fdf1eb;
font-family: Arial, Helvetica, sans-serif;
width: 79.7%;
margin-left: auto;
padding: 0.5%;
padding-bottom: 0.1%;
color: #725c5c;
`
export const DivTitle = styled.div`
padding-left: 2%;
height: 50%;
h5, h2, p{
    margin: -2%;
    margin-left: 0;
    margin-top:0.3%;
}
`
export const LanguageChanger = styled.div`
margin-top: auto;
margin-bottom: auto;
border: 1px solid #CCCCCC;
box-sizing: border-box;
border-radius: 3px;
img{
    height: 30px;
}
`
export const Serial = styled.h5`
font-weight: 400;
padding-bottom: 2.2%;
`
export const Selector = styled.select`
border: 0;
background: none;
padding: 0;
margin: 0;
`
export const Subtitle = styled.p`
font-size: 14px;
`
export const Title = styled.h3`
font-size: 125%;
font-family: "Quicksand",sans-serif;
font-weight: 400;
margin-bottom: 1%;
`
export const UserArea = styled.div`
display: flex;
margin-right: 4%;
text-align: center;
`
export const TextArea = styled.div`
margin-left: -5%;
margin-top: auto;
margin-bottom: auto;
`
export const Salutation = styled.p`
margin-top: 10%;
font-size: 15px;
`
export const Email = styled.p`
padding-top: 0;
margin-top: 0;
margin-bottom: 10%;
font-size: 12px;
`
export const AvatarArea = styled.div`
margin-left: 5%;
margin-top: auto;
margin-bottom: auto;
`
export const Avatar = styled.img`
width: 45px;
margin-top: auto;
margin-bottom: auto;
border-radius: 70%;
`