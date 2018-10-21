import React from "react";
import MainDiv from "../styles/MainDiv";
import Header from "./Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Prompt");
  :root {
    font-size: 20px;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: "Prompt", sans-serif;
  }

  div {
    font-family: "prompt", sans-serif;
  }

  a {
    color: #3355dd;
    text-decoration: none;
    opacity: 0.7;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainDiv>{children}</MainDiv>
    </>
  );
};

export default Layout;
