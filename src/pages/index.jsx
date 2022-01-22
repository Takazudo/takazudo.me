import * as React from "react";
import { graphql } from "gatsby";
import { Header } from "../components/global/header";
import { Footer } from "../components/global/footer";
import { PageTitle } from "../components/shared/page-title";
import { ArticleNav } from "../components/shared/article-nav";
import { parsePublishedDateFromPath } from "../utils/misc";

export const query = graphql`
  query IndexPageQuery {
    allMdx {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            heroImgUrl
            excerpt
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
      frontmatter: { title, heroImgUrl: imgUrl, excerpt },
    } = node;
    return {
      slug,
      title,
      imgUrl,
      excerpt,
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
  return (
    <>
      <Header logoTagName="h1" />
      <PageTitle tagName="p">
        Notes by{" "}
        <a href="https://twitter.com/Takazudo" rel="noreferrer">
          @Takazudo
        </a>
      </PageTitle>
      <ArticleNav items={items} />
      <Footer />
    </>
  );
};

export default IndexPage;
