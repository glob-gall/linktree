import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  width:100%;
  height:100vh;
  background: rgb(48,46,84);
background: radial-gradient(circle, rgba(48,46,84,1) 0%, rgba(10,10,23,1) 100%);
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