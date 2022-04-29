import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: block;
`
export const Card = styled.div`
position: relative;
margin-left: auto;
margin-right: auto;
width: 95%;
border: 1px solid #E7E7E7;
box-sizing: border-box;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
border-radius: 5px;
margin-bottom: 15px;
opacity: 0.2;
background: #d3d3db;
`
export const TopicSent = styled.div`
    z-index: 1;
    position: absolute;
    text-align: center;
    top: 20px;
    left: 30%;
    right: 30%;
img{
    padding-top: 10px;
    width: 30px;
    }
h3{
    font-family: 'Quicksand', sans-serif;
}
a{
    color: #ED7839;
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
    }
`
export const Title = styled.h3`
margin-left: 3.7%;
color: #ED7839;
`
export const Author = styled.h4`
margin-top: -15px;
margin-left: 3.7%;
font-family: 'Quicksand', sans-serif;
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
margin-bottom: 75px;
`