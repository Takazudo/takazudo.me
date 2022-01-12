module.exports = {
  siteMetadata: {
    siteUrl: "https://takazudo.me",
    title: "takazudo.me",
    description: `booom I'm Takazudo.`,
    author: `Takazudo`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-8S5N0GQWTL",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svgs/,
        },
      },
    },
    //{
    //  resolve: "gatsby-source-filesystem",
    //  options: {
    //    name: "images",
    //    path: "./src/images/",
    //  },
    //  __key: "images",
    //},
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/mdx`,
        //ignore: [`**/*.js`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/mdx`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.jsx"),
        },
        //gatsbyRemarkPlugins: ["gatsby-remark-table-of-contents"],
        remarkPlugins: [require("remark-external-links")],
        rehypePlugins: [
          require("rehype-slug"),
          [require("@mapbox/rehype-prism"), { ignoreMissing: true }],
        ],
      },
    },
  ],
};
