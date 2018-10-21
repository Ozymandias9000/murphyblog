import React from "react";
import { graphql, Link } from "gatsby";
import MainDiv from "../styles/MainDiv";
import PostNav from "../styles/PostNav";
import Layout from "../components/Layout";

const Template = ({ data, pathContext }) => {
  const { prev, next } = pathContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;

  return (
    <Layout>
      <h1>{title}</h1>
      <MainDiv dangerouslySetInnerHTML={{ __html: html }} />

      <PostNav>
        {prev && <Link to={prev.frontmatter.path}>Previous Post</Link>}
        {next && <Link to={next.frontmatter.path}>Next Post</Link>}
      </PostNav>
    </Layout>
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
