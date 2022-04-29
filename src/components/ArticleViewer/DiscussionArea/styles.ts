import styled from 'styled-components'

export const Container = styled.section`
margin-left: 4%;
margin-top: 4%;
width: 91%;
border-radius: 3px;
border: #ECECEC 2px solid;
p, h3, h2{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
hr{
    margin-top: 10px;
    margin-left:auto;
    margin-right: auto;
    width: 94.38%;
    border: 1px solid #E7E7E7;
}
#more{
    display: none;
}
`
export const Title = styled.h2`
    text-align: left;
    padding-top: 10px;
    margin-top: 0px;
    width: 98.39%;
    height: auto;
    padding-left: 1.6%;
    background: #FDF1EB;
    border-bottom: 2px solid #ECECEC;
`
export const CreateDiscussion = styled.div`
width: 97%;
text-align: center;
h3{
    color: #ED7839;
}
p{
    padding: 0 20%;
    color: #595959;
}
a{
    cursor: pointer;
    color: #F48F44;
    text-decoration: underline;
}
`
export const IconsArea = styled.div`
`
export const Icon = styled.img`
width: 75px;
padding: 35px;
`
export const CreateDiscussionButton = styled.button`
background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
border: none;
border-radius: 4px;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
color: white;
cursor: pointer;
width: 133px;
height: 32px;
margin-top: 10px;
margin-bottom: 5px;
text-align: center;
font-family: "Quicksand", sans-serif;
img{
    width: 15px;
    margin-top: 2px;
    padding-right: 3px;
}
`
export const Form = styled.form`
text-align: initial;
padding-left: 25px;
img{
    width: 16px;
    padding-top: 6px;
    padding-left: 20px;
}
`
export const Input = styled.input`
width: 99.5%;
height: 40px;
border: 1px solid #CCCCCC;
`
export const TextEditor = styled.div`
display: flex;
align-items: center;
height: 40px;
border: 1px solid #CCCCCC;
background: #EAF1F2;
div{
    cursor: pointer;
}
`
export const TextArea = styled.textarea`
width: 99.5%;
height: 100px;
border: 1px solid #CCCCCC;
`
export const ButtonArea = styled.div`
margin-left: 74%;
@media(max-width: 900px){
    margin-left: 60%;
}
`
export const SendButton = styled.button`
    padding: 6% 50%;
    background: linear-gradient(180deg, #FEB154 0%, #F1833E 100%);
    border-radius: 3px 2px 4px 3px;
    border: transparent;
    color: white;
    font-size: 20px;
    cursor: pointer;
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
`