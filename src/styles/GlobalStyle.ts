import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  width:100%;
  height:100vh;
  background: ${props => props.theme.background};
  background: radial-gradient(circle, ${props => props.theme.background} 0%, ${props => props.theme.background2} 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

`