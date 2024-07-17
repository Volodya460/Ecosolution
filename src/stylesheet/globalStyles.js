import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import FiraSansRegular from "../assets/fonts/Fira_Sans/FiraSans-Regular.ttf";
import FiraSansLight from "../assets/fonts/Fira_Sans/FiraSans-Light.ttf";
import OswaldRegular from "../assets/fonts/Oswald/Oswald-Regular.ttf";

const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: 'FiraSans-Regular';
  src: url(${FiraSansRegular}) format('woff');
  font-style: normal;
  font-weight: 400;

}
@font-face {
  font-family: 'FiraSans-Light';
  src: url(${FiraSansLight}) format('woff');
  font-style: normal;
  font-weight: 400;
  
}
  @font-face {
  font-family: 'Oswald-Regular';
  src: url(${OswaldRegular}) format('woff');
  font-style: normal;
  font-weight: 400;
  
}

body{
  background-color: #f3f5fa;
  color:#173d33;
  font-family:"FiraSans-Regular";

  padding-top:112px;
  
  @media screen and (min-width: 1280px) {
    padding-top: 92px;
  }
}
  
a{
 list-style: none;
    text-decoration:none
}


ul{
    margin: 0;
    padding:0;
    list-style: none;
}



h1,h2,h3,p{
margin:0;
}


img{
    display: block;
    max-width: 100%;
    height: auto;
}
button{
    display:block;
    cursor: pointer;
    border:none;
    padding:0;
    margin: 0;
    color:inherit;
    font:inherit;
    background-color: transparent;
}



`;
export default GlobalStyle;
