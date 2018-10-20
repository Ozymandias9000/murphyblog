import React from "react";
import { graphql, Link } from "gatsby";
import MainDiv from "../styles/MainDiv";
import PostNav from "../styles/PostNav";

const Template = ({ data, pathContext }) => {
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;

  return (
    <MainDiv>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <PostNav>
        {pathContext.prev && (
          <Link to={pathContext.prev.frontmatter.path}>Previous Post</Link>
        )}
        {pathContext.next && (
          <Link to={pathContext.next.frontmatter.path}>Next Post</Link>
        )}
      </PostNav>
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
