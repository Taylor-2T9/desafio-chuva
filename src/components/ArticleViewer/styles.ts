import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
a, p, h3{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export const Article = styled.section`
margin-left: 4%;
display: flex;
position: relative;
height: auto;
`
export const ArticleHeader = styled.div`
display: flex;
width: 95%;
margin-left: 4%;
`
export const Title = styled.h3`
width: 60%;
font-size: 23px;
color: #ED7839;
`
export const VideoPlayer = styled.iframe`
width: 70%;
border: 0;
`
export const ButtonsArea = styled.ul`
    position: absolute;
    user-select: none;
    list-style: none;
    right: 5%;
    top: 15%;
    display: flex;
    li {
    cursor: pointer;
    margin-left: 5px;
    background: #ED7839;
    padding: 5px 7px;
    border-radius: 4px;
    }
`
export const DownloadButton = styled.a`
 color: whitesmoke;
`
export const Button = styled.a`
`
export const Favorite = styled.div`
`
export const Icon = styled.img`
        width: 22px;
    display: inline-block;
`
export const DownloadIcon = styled.img`
     width: 19px;
    display: inline-block;
    padding-right: 5px;
`