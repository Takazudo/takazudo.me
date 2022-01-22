const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const tweakRawDataForRss = (allMdx) => {
  return allMdx.edges.map(({ node }) => {
    const {
      slug,
      html,
      frontmatter: { title, excerpt },
    } = node;
    const parsedDate = parsePublishedDateFromPath(slug);
    return {
      slug,
      title,
      excerpt,
      html,
      date: parsedDate ? parsedDate.standardDateString : null,
    };
  });
};

// Article page's file name should be start like
// notes/2022-01-12-hogehoge
const removeNoDateArticles = (items) => {
  const newItems = [];
  items.forEach((item) => {
    if (!/^notes\/\d{4}-\d{2}-\d{2}-/.test(item.slug)) {
      return;
    }
    newItems.push(item);
  });
  return newItems;
};

const pickLatestArticles = (items) => {
  items.sort((a, b) => {
    const unixTimeA = parsePublishedDateFromPath(a.slug).unix;
    const unixTimeB = parsePublishedDateFromPath(b.slug).unix;
    if (unixTimeA < unixTimeB) {
      return 1;
    }
    if (unixTimeA > unixTimeB) {
      return -1;
    }
    return 0;
  });
  items.length = 10;
  return items;
};

/**
 * convert
 * "/notes/2022-01-12-hogehoge"
 * into
 * "2022 01 12 Wed"
 */
const parsePublishedDateFromPath = (pagePath) => {
  if (!/^\/?notes\/\d{4}-\d{2}-\d{2}-/.test(pagePath)) {
    return null;
  }
  const matchResult = pagePath.match(/^\/?notes\/(\d+)-(\d+)-(\d+)-.+/);
  const year = matchResult[1];
  const month = matchResult[2];
  const dayOfMonth = matchResult[3];
  const dayjsObj = dayjs(`${year}-${month}-${dayOfMonth}`, "YYYY-MM-DD");
  const dayOfWeekNth = dayjsObj.day();
  const unix = dayjsObj.unix();
  const standardDateString = dayjsObj.format();
  const dayOfWeekEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][
    dayOfWeekNth
  ];
  const formattedDateString = `${year}/${month}/${dayOfMonth} (${dayOfWeekEn})`;
  //console.log(year, month, dayOfMonth, dayOfWeekEn);
  return {
    year,
    month,
    dayOfMonth,
    dayOfWeekEn,
    formattedDateString,
    unix,
    standardDateString,
  };
};

module.exports = {
  siteMetadata: {
    title: "takazudo.me",
    titleTemplate: "%s | takazudo.me",
    siteUrl: "https://takazudo.me",
    description: "Notes by @Takazudo.",
    author: `Takazudo`,
    imgUrl: `https://images.prismic.io/cgbook/5852d55f-9e14-443a-8663-674d742d38ec_2022-01-08+13.16.59.jpg?auto=compress,format&fit=crop&w=1200&h=400`,
    globalNav: [
      { href: "/", text: "Home" },
      { href: "/notes/about", text: "About" },
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
          default: require.resolve("./src/templates/mdx-layout.jsx"),
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
              let items = tweakRawDataForRss(allMdx);
              items = removeNoDateArticles(items);
              items = pickLatestArticles(items);
              return items.map((item) => {
                return {
                  description: item.excerpt,
                  date: item.date,
                  url: `${site.siteMetadata.siteUrl}/${item.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${item.slug}`,
                  custom_elements: [{ "content:encoded": item.html }],
                };
              });
            },
            query: `
              {
                allMdx(sort: {order: DESC, fields: slug}) {
                  edges {
                    node {
                      slug
                      frontmatter {
                        title
                        excerpt
                      }
                      html
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "takazudo.me",
            link: "https://takazudo.me",
          },
        ],
      },
    },
  ],
};
