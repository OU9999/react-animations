import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Root from "./Root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {  
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:black;
    font-weight: 300;
    line-height: 1.2;
  }
  a{
    text-decoration: none;
    color: inherit;
   }
  *{
    box-sizing: border-box;
  }
`;

root.render(
  <>
    <GlobalStyle />
    <Root />
  </>
);
