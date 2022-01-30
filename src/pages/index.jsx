import * as React from "react";
import { graphql } from "gatsby";
import ctl from "@netlify/classnames-template-literals";
import { PageTitle } from "../components/shared/page-title";
import { ArticleNav } from "../components/shared/article-nav";
import { Link } from "../components/shared/link";
import { HeadMeta } from "../components/global/head-meta";
import { parsePublishedDateFromPath } from "../utils/misc";
import ArrowRight from "../assets/svgs/arrow-right.svg";

export const query = graphql`
  query IndexPageQuery {
    allMdx {
      edges {
        node {
          id
          slug
          excerpt
          fields {
            blurHash
          }
          frontmatter {
            title
            heroImgUrl
            customExcerpt
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
      excerpt,
      fields: { blurHash },
      frontmatter: { title, heroImgUrl: imgUrl, customExcerpt },
    } = node;
    return {
      slug,
      title,
      imgUrl,
      blurHash,
      excerpt: customExcerpt || excerpt,
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

const IndexPage = ({ data }) => {
  let items = tweakRawDataForView(data);
  //console.log(items);
  items = removeNoDateArticles(items);
  //console.log(items);
  items = pickLatestArticles(items);
  items.length = 10;
  //console.log(items)
  return (
    <>
      <HeadMeta path="/" />
      <PageTitle tagName="p">
        Notes by{" "}
        <a
          href="https://twitter.com/Takazudo"
          rel="noreferrer"
          className="zudo-invert-color-link"
        >
          @Takazudo
        </a>
      </PageTitle>
      <ArticleNav items={items} />
      <ul
        className={ctl(`
          text-center text-base pt-vgap-md font-futura
          border-t border-black border-dashed md:border-t-0
        `)}
      >
        <li>
          <Link to="/list" className="zudo-invert-color-link">
            Older Notes
            <ArrowRight
              className={ctl(`
                w-[1.2em] h-[1.2em]
                inline-block align-middle ml-[4px]
                relative top-[-0.1em]
              `)}
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default IndexPage;
