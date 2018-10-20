const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, rej) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js");

    resolve(
      graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `).then(res => {
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path
            }
          });
          resolve();
        });
      })
    );
  });
};