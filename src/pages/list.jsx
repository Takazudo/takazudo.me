import * as React from "react";
import { graphql } from "gatsby";
import ctl from "@netlify/classnames-template-literals";
import { Link } from "../components/shared/link";
import { PageTitle } from "../components/shared/page-title";
import { parsePublishedDateFromPath } from "../utils/misc";

export const query = graphql`
  query ListPageQuery {
    allMdx {
      edges {
        node {
          id
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const tweakRawDataForView = (rawData) => {
  return rawData.allMdx.edges.map(({ node }) => {
    const {
      slug,
      id,
      frontmatter: { title },
    } = node;
    return {
      slug,
      title,
      id,
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
  return items;
};

const ListItem = ({ slug, title }) => {
  const { formattedDateString } = parsePublishedDateFromPath(slug);
  if (!/^\//.test(slug)) {
    slug = `/${slug}`;
  }
  return (
    <div className="sm:table-row">
      <dt
        className={ctl(`
          font-futura text-gray-500 
          text-xs sm:text-sm
          sm:table-cell
          sm:pt-vgap-sm
          sm:pr-hgap-sm
          sm:w-0
          whitespace-nowrap
        `)}
      >
        {formattedDateString}
      </dt>
      <dd
        className={ctl(`
          sm:table-cell
          text-sm sm:text-base
          pt-vgap-xs sm:pt-vgap-sm
        `)}
      >
        <Link to={slug} className="zudo-invert-color-link">{title}</Link>
      </dd>
    </div>
  );
};

const ListPage = ({ data }) => {
  let items = tweakRawDataForView(data);
  items = removeNoDateArticles(items);
  items = pickLatestArticles(items);
  return (
    <>
      <PageTitle>Article List</PageTitle>
      <dl
        className={ctl(`
          box-content
          max-w-[1040px] mx-auto px-hgap-sm
          flex flex-col
          gap-y-vgap-md
          pb-vgap-sm
          sm:table
          sm:-mt-vgap-sm
        `)}
      >
        {items.map((item) => {
          return <ListItem slug={item.slug} title={item.title} key={item.id} />;
        })}
      </dl>
    </>
  );
};

export default ListPage;
