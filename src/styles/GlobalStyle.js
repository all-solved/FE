import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, textarea, select {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 62.5%;
  // font: inherit;
  vertical-align: baseline;
  /* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

  font-family: 'Noto Sans KR', sans-serif; */
  /* @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css); */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

.nanumgothic * {
 font-family: 'Nanum Gothic', sans-serif;
}
font-family: 'Noto Sans KR', sans-serif;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

div {
  box-sizing : border-box;
}

html, body {
  height: 100%;
  // font-size:62.5%;
   font-family: 'Nanum Gothic', sans-serif;
   font-size: 62.5%;
  /* font-family: 'Gomsin'; */
}

body{
    margin: 0 auto;

}
    a {
    text-decoration: none;
    color:inherit;
      cursor: pointer;
  }

  button {
    font: inherit;
    cursor: pointer;
    border: none;
    background: none;
    // font-family: 'Roboto';
  }

  /* input[type="text"]:disabled{
    background-color: white;
  }
   */

  input[type="text"]:disabled {
    background: white;
}
textarea:disabled{
  background: white;
}
textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
}
`;

export default GlobalStyle;
