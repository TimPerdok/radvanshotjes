import { createGlobalStyle } from "styled-components";
import theme from "./data/theme";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  background: linear-gradient(180deg, rgba(22,22,29,1) 0%, rgba(31,31,58,1) 35%, rgba(59,47,74,1) 71%,  rgba(84,62,110,1) 100%);
  
}
* {
  box-sizing: border-box;
  color: ${theme.colors.secondaryText};
  font-size: 1rem;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
h1 {
  color: ${theme.colors.primaryText};
  font-size: 6rem;
}
h2 {
  color: ${theme.colors.secondaryText};
  font-size: 4rem;
}
h3 {
  color: ${theme.colors.secondaryText};
  font-size: 3rem;
}
h4 {
  color: ${theme.colors.secondaryText};
  font-size: 2rem;
}
h5 {
  color: ${theme.colors.secondaryText};
  font-size: 1.5rem;
}
a {
  text-decoration: none;
  color: ${theme.colors.primary};
}
:root {
  --twinkle-duration: 4s;
}

@media all and (max-width: 768px) {
  html,
  body {
    font-size: 75%;
  }
}

`
export default GlobalStyle;