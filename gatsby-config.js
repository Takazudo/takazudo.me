module.exports = {
  siteMetadata: {
    title: "takazudo.me",
    titleTemplate: "%s | takazudo.me",
    siteUrl: "https://takazudo.me",
    description: `booom I'm Takazudo.`,
    author: `Takazudo`,
    imgUrl: `https://images.prismic.io/cgbook/5852d55f-9e14-443a-8663-674d742d38ec_2022-01-08+13.16.59.jpg?auto=compress,format&fit=crop&w=1200&h=400`,
    globalNav: [
      { href: "/", text: "Home" },
      { href: "/about", text: "About" },
      { href: "/notes", text: "Notes" },
      { href: "/tags", text: "Tags" },
    ],
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
        name: `notes`,
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
        remarkPlugins: [
          require("remark-external-links"),
          require("remark-breaks"),
        ],
        rehypePlugins: [
          require("rehype-slug"),
          [require("@mapbox/rehype-prism"), { ignoreMissing: true }],
        ],
      },
    },
  ],
};
