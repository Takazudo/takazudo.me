const activeEnv = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

const { convertToRssData } = require("./src/utils/rss");

const plugins = [
  {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-216616438-1",
    },
  },
  {
    resolve: `gatsby-plugin-force-trailing-slashes`,
    options: {
      excludedPaths: [`/404.html`],
    },
  },
  "gatsby-plugin-netlify",
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
  "gatsby-plugin-image",
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      defaultLayouts: {
        default: require.resolve("./src/templates/article-page-layout.jsx"),
      },
      //gatsbyRemarkPlugins: ["gatsby-remark-table-of-contents"],
      remarkPlugins: [
        require("remark-external-links"),
        require("remark-breaks"),
        // enable attr syntax for img elements
        [require("remark-attr"), { elements: ["link"] }],
      ],
      rehypePlugins: [
        require("rehype-slug"),
        [require("@mapbox/rehype-prism"), { ignoreMissing: true }],
      ],
    },
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return convertToRssData(site, allMdx);
          },
          query: `
              {
                allMdx(sort: {order: DESC, fields: slug}) {
                  edges {
                    node {
                      slug
                      frontmatter {
                        title
                        customExcerpt
                      }
                      html
                    }
                  }
                }
              }
            `,
          output: "/rss.xml",
          title: "takazudo.me",
        },
      ],
    },
  },
];

// do algolia index update when production
// referring process.env.NODE_ENV will cause index update on local dev.
// so use IS_LOCAL_DEV for this function
if (process.env.IS_LOCAL_DEV === "true") {
  console.info("skipped algolia index update because this is local dev.");
} else {
  plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries: require("./src/utils/algolia-queries"),
    },
  });
}

module.exports = {
  siteMetadata: {
    title: "takazudo.me",
    titleTemplate: "%s | takazudo.me",
    siteUrl: "https://takazudo.me",
    description: "Notes by @Takazudo.",
    author: `Takazudo`,
    imgUrl: `https://images.prismic.io/takazudo-me/0a24ab4e-571f-451a-89bf-172183074676_densen.png?ar=1200:630&w=2000&fit=crop`,
    globalNav: [
      { href: "/", text: "Home" },
      { href: "/notes/about/", text: "About" },
      { href: "/tags/", text: "Tags" },
    ],
  },
  plugins,
};
