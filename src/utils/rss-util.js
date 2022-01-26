const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const tweakRawDataForRss = (site, allMdx) => {
  const items = [];
  allMdx.edges.forEach(({ node }) => {
    const {
      slug,
      html,
      excerpt,
      frontmatter: { title, customExcerpt },
    } = node;
    const parsedDate = pickDateFromPath(slug);

    // if no parsed date, it is not notes. ignore them.
    if (!parsedDate) {
      return;
    }

    items.push({
      title,
      description: customExcerpt || excerpt,
      date: parsedDate.standardDateString,
      url: `${site.siteMetadata.siteUrl}/${slug}`,
      guid: `${site.siteMetadata.siteUrl}/${slug}`,
      custom_elements: [{ "content:encoded": html }],
    });
  });
  return items;
};

const pickLatestArticles = (items) => {
  items.sort((a, b) => {
    const unixTimeA = dayjs(a.date).unix();
    const unixTimeB = dayjs(b.date).unix();
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
 * '2022-01-12T00:00:00+09:00'
 */
const pickDateFromPath = (pagePath) => {
  if (!/^\/?notes\/\d{4}-\d{2}-\d{2}-/.test(pagePath)) {
    return null;
  }
  const matchResult = pagePath.match(/^\/?notes\/(\d+)-(\d+)-(\d+)-.+/);
  const year = matchResult[1];
  const month = matchResult[2];
  const dayOfMonth = matchResult[3];
  const dayjsObj = dayjs(`${year}-${month}-${dayOfMonth}`, "YYYY-MM-DD");
  return dayjsObj.format();
};

module.exports = {
  convertToRssData: (site, allMdx) => {
    let items = tweakRawDataForRss(site, allMdx);
    items = pickLatestArticles(items);
    return items;
  },
};
