import React from "react";
import { graphql, Link } from "gatsby";
import Header from "../components/Header";
import MainDiv from "../styles/MainDiv";
import "./index.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Prompt");

  html, body {
    padding: 0;
    margin: 0;
  }

  div {
    font-family: "prompt", sans-serif;
  }

  a {
    color: #3355dd;
    text-decoration: none;
    opacity: 0.5;
  }
`;

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainDiv>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div style={{ marginBottom: `1rem` }} key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          );
        })}
      </MainDiv>
    </>
  );
};

export default Layout;
