//const escapeStringRegexp = require("escape-string-regexp");

//const pagePath = `content`;
const indexName = `Pages`;

const pageQuery = `{
  pages: allMdx(filter: {frontmatter: {tags: {nin: "internal"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          description
          customExcerpt
        }
        excerpt(pruneLength: 9999999)
        slug
      }
    }    
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:70`] },
  },
];

module.exports = queries;
