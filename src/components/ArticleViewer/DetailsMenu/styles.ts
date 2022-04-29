import styled from 'styled-components'

export const TextArea = styled.div`
height: 99.5%;
overflow: auto;
border: 2px solid #ECECEC;
border-radius: 3px 3px 0px 0px;
max-height: 650px;
@media(max-width: 790px){
    max-height: 250px;
    width: 100%;
}
p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 95%;
    padding-left: 5%;
    }
#University{
    color: #838895;
    font-size: 91%;
}
`
export const Container = styled.div`
width:20%;
padding-left: 6%;
`
export const DivTitle = styled.div`
h2{
 }
`
export const Title = styled.h2`
    text-align: left;
    padding-top: 10px;
    margin-top: 0px;
    width: 95%;
    height: auto;
    padding-left: 5%;
    background: #FDF1EB;
    border-radius: 4px 3px 0px 0px;
    border-bottom: 2px solid #ECECEC;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
