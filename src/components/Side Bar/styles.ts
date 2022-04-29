import styled from "styled-components"

export const Image = styled.img`
width: 90%;
`
export const DivTitle = styled.div`
padding: 0.5%;
padding-bottom: 0.1%;
background-color: #f28640;
`
export const Title = styled.h2`
text-rendering: optimizeLegibility;
font-size: 26px;
color: whitesmoke;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const Menu = styled.div`
	box-shadow: 5px 0px 3px #ebebeb;
	top: 0;
	left: 0;
	float: left;
	width: 19%;
	margin: 0;
	position: sticky;
	height: 100vh;
	z-index: 3;
    padding: 0;
	text-align: center;
    ul, li{
		background-color: white;
        margin: 0; padding: 0px;
		text-align: left;
		list-style-type: none;
    } 
`
export const MenuList = styled.ul`
display: block;
word-break: break-word;
li{
border-bottom: 1px solid #CCC;
	:hover{
		cursor: pointer;
	background: #fdf1eb;
	color: #725c5c;
}
	padding: 4% 2% 2%;
}
`
export const Option = styled.a`
padding: 11%;

font-size: 17px;
color: #725c5c;
text-decoration: none;
text-align: center;
`
export const OptionsGroup = styled.div`
`