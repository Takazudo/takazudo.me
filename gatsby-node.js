// doc: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
const fetch = require(`node-fetch`);
const path = require("path");

const getBlurHashUrl = async (imgixUrl) => {
  const blurhashUrl = `${imgixUrl}?fm=blurhash&w=32`;
  const response = await fetch(blurhashUrl);
  const blurHash = await response.text();
  return blurHash;
};

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;
  if (!node.frontmatter) return;
  const imgUrl = node.frontmatter.heroImgUrl;
  if (!imgUrl) return;
  const blurHash = await getBlurHashUrl(imgUrl);
  createNodeField({
    node,
    name: "blurHash",
    value: blurHash,
  });
};

const isMdxPage = (page) => {
  return /\.mdx$/.test(page.component);
};
exports.onCreatePage = async ({ page, actions }) => {
  if (!isMdxPage(page)) return;
  const imgUrl = page.context.frontmatter.heroImgUrl;
  if (!imgUrl) return;
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);
  deletePage(oldPage);
  const blurHash = await getBlurHashUrl(imgUrl);
  createPage({
    ...page,
    context: {
      ...page.context,
      blurHash: blurHash,
    },
    defer: true, // make DSG on
  });
};

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
      query TagLeafPageQuery {
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
