import { createGlobalStyle } from "styled-components";
import ApercuArabicProRegular from "../fonts/ApercuArabicPro/ApercuArabicPro-Regular.woff2";
import ApercuArabicProMeduim from "../fonts/ApercuArabicPro/ApercuArabicPro-Medium.woff2";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Apercu Arabic Pro";
    font-style: normal;
    font-weight: 400;
    src: local("Apercu Arabic Pro"), url(${ApercuArabicProRegular}) format("truetype")
}

@font-face {
    font-family: "Apercu Arabic Pro Medium";
    font-style: normal;
    font-weight: 500;
    src: local("Apercu Arabic Pro Medium"), url(${ApercuArabicProMeduim}) format("truetype")
}

* {
  margin: 0;
  padding: 0;
}
body {
height: 100%;
background-color: #ffffff;
font-family: "Apercu Arabic Pro";
}
html {
  height: 100%;
}
img,
picture,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
    border: none;
  background-color: transparent;   
  cursor: pointer;
}
`;

export default GlobalStyle;
