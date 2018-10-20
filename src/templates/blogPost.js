import React from "react";
import { graphql, Link } from "gatsby";
import MainDiv from "../styles/MainDiv";

const Template = ({ data: { markdownRemark } }) => {
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;

  return (
    <MainDiv>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </MainDiv>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
