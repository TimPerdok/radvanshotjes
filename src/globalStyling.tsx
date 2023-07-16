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
  overflow: hidden;
  height: 100vh;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(22,22,29,1) 0%, rgba(31,31,58,1) 35%, rgba(59,47,74,1) 71%,  rgba(84,62,110,1) 100%);
  background-size: 100% 2000px;
  font-size: 20px;
}
* {
  box-sizing: border-box;
  color: ${theme.colors.secondaryText};
  font-size: 1rem;
  font-family: futura-pt, sans-serif;
}
h1, h2, h3, h4, h5, h6 {
  display: inline-block;
  margin: 0;
}
h1 {
  color: ${theme.colors.primaryText};
  font-size: 5rem;
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

@font-face{
  font-family:proxima-nova;
  src:url(https://use.typekit.net/af/1be3c2/00000000000000007735e606/30/l?subset_id=2&fvd=n3&v=3) format("woff2"),url(https://use.typekit.net/af/1be3c2/00000000000000007735e606/30/d?subset_id=2&fvd=n3&v=3) format("woff"),url(https://use.typekit.net/af/1be3c2/00000000000000007735e606/30/a?subset_id=2&fvd=n3&v=3) format("opentype");
  font-weight:300;
  font-style:normal;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:proxima-nova;
  src:url(https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/l?subset_id=2&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/d?subset_id=2&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/a?subset_id=2&fvd=n4&v=3) format("opentype");
  font-weight:400;
  font-style:normal;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:proxima-nova;
  src:url(https://use.typekit.net/af/23e139/00000000000000007735e605/30/l?subset_id=2&fvd=n5&v=3) format("woff2"),url(https://use.typekit.net/af/23e139/00000000000000007735e605/30/d?subset_id=2&fvd=n5&v=3) format("woff"),url(https://use.typekit.net/af/23e139/00000000000000007735e605/30/a?subset_id=2&fvd=n5&v=3) format("opentype");
  font-weight:500;
  font-style:normal;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:proxima-nova;
  src:url(https://use.typekit.net/af/78aca8/00000000000000007735e60d/30/l?subset_id=2&fvd=n6&v=3) format("woff2"),url(https://use.typekit.net/af/78aca8/00000000000000007735e60d/30/d?subset_id=2&fvd=n6&v=3) format("woff"),url(https://use.typekit.net/af/78aca8/00000000000000007735e60d/30/a?subset_id=2&fvd=n6&v=3) format("opentype");
  font-weight:600;
  font-style:normal;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:proxima-nova;
  src:url(https://use.typekit.net/af/2555e1/00000000000000007735e603/30/l?subset_id=2&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/2555e1/00000000000000007735e603/30/d?subset_id=2&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/2555e1/00000000000000007735e603/30/a?subset_id=2&fvd=n7&v=3) format("opentype");
  font-weight:700;
  font-style:normal;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:proxima-nova;
  src:url(https://use.typekit.net/af/3322cc/00000000000000007735e616/30/l?subset_id=2&fvd=i4&v=3) format("woff2"),url(https://use.typekit.net/af/3322cc/00000000000000007735e616/30/d?subset_id=2&fvd=i4&v=3) format("woff"),url(https://use.typekit.net/af/3322cc/00000000000000007735e616/30/a?subset_id=2&fvd=i4&v=3) format("opentype");
  font-weight:400;
  font-style:italic;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:proxima-nova;
  src:url(https://use.typekit.net/af/79862c/00000000000000007735e60e/30/l?subset_id=2&fvd=i5&v=3) format("woff2"),url(https://use.typekit.net/af/79862c/00000000000000007735e60e/30/d?subset_id=2&fvd=i5&v=3) format("woff"),url(https://use.typekit.net/af/79862c/00000000000000007735e60e/30/a?subset_id=2&fvd=i5&v=3) format("opentype");
  font-weight:500;
  font-style:italic;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:proxima-nova;
  src:url(https://use.typekit.net/af/4de20a/00000000000000007735e604/30/l?subset_id=2&fvd=i7&v=3) format("woff2"),url(https://use.typekit.net/af/4de20a/00000000000000007735e604/30/d?subset_id=2&fvd=i7&v=3) format("woff"),url(https://use.typekit.net/af/4de20a/00000000000000007735e604/30/a?subset_id=2&fvd=i7&v=3) format("opentype");
  font-weight:700;
  font-style:italic;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:futura-pt;
  src:url(https://use.typekit.net/af/9b05f3/000000000000000000013365/27/l?subset_id=2&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/9b05f3/000000000000000000013365/27/d?subset_id=2&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/9b05f3/000000000000000000013365/27/a?subset_id=2&fvd=n4&v=3) format("opentype");
  font-weight:400;
  font-style:normal;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:futura-pt;
  src:url(https://use.typekit.net/af/c4c302/000000000000000000012192/27/l?subset_id=2&fvd=n6&v=3) format("woff2"),url(https://use.typekit.net/af/c4c302/000000000000000000012192/27/d?subset_id=2&fvd=n6&v=3) format("woff"),url(https://use.typekit.net/af/c4c302/000000000000000000012192/27/a?subset_id=2&fvd=n6&v=3) format("opentype");
  font-weight:600;
  font-style:normal;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:futura-pt;
  src:url(https://use.typekit.net/af/309dfe/000000000000000000010091/27/l?subset_id=2&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/309dfe/000000000000000000010091/27/d?subset_id=2&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/309dfe/000000000000000000010091/27/a?subset_id=2&fvd=n7&v=3) format("opentype");
  font-weight:700;
  font-style:normal;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:futura-pt;
  src:url(https://use.typekit.net/af/cf3e4e/000000000000000000010095/27/l?subset_id=2&fvd=i4&v=3) format("woff2"),url(https://use.typekit.net/af/cf3e4e/000000000000000000010095/27/d?subset_id=2&fvd=i4&v=3) format("woff"),url(https://use.typekit.net/af/cf3e4e/000000000000000000010095/27/a?subset_id=2&fvd=i4&v=3) format("opentype");
  font-weight:400;
  font-style:italic;
  font-stretch:normal;
  font-display:auto;
}
@font-face{
  font-family:futura-pt;
  src:url(https://use.typekit.net/af/eb729a/000000000000000000010092/27/l?subset_id=2&fvd=i7&v=3) format("woff2"),url(https://use.typekit.net/af/eb729a/000000000000000000010092/27/d?subset_id=2&fvd=i7&v=3) format("woff"),url(https://use.typekit.net/af/eb729a/000000000000000000010092/27/a?subset_id=2&fvd=i7&v=3) format("opentype");
  font-weight:700;
  font-style:italic;
  font-stretch:normal;
  font-display:auto;
}


`
export default GlobalStyle;