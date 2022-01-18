// doc: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require("path");

const collectTags = (data) => {
  let tags = [];
  data.allMdx.nodes.forEach((node) => {
    tags = tags.concat(node.frontmatter.tags);
  });
  return Array.from(new Set(tags));
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const createTagLeafPage = async () => {
    const template = path.resolve("src/templates/tag.jsx");
    const result = await graphql(`
      query TagsQuery {
        allMdx {
          nodes {
            frontmatter {
              tags
            }
          }
        }
      }
    `);
    if (result.errors) {
      throw result.errors;
    }
    //console.dir(result, { depth: null });
    const tags = collectTags(result.data);
    //console.log(tags);
    tags.forEach((tag) => {
      createPage({
        path: `/tags/${tag}`,
        component: template,
        context: {
          tag,
        },
      });
    });
  };
  /* make them all */
  await createTagLeafPage();
};
