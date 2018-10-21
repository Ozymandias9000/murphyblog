import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import "./index.css";

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

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <div style={{ marginBottom: `1rem` }} key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </div>
        );
      })}
    </Layout>
  );
};

export default Index;
