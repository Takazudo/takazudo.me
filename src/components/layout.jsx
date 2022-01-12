import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ArticlePageLayout } from "./article-page-layout";
import { Img } from "../components/img";
import { Note } from "../components/note";
import { ColumnBlock } from "../components/column-block";
//import { RichText } from "../components/rich-text"
import { ClosingArea } from "../components/closing-area";
import { UrlReference } from "../components/url-reference";
import { PreWrapCodeWrapper } from "../components/pre-wrap-code-wrapper";

import { Intro } from "./article/intro";
import { Body } from "./article/body";
import { Outro } from "./article/outro";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

/**
 * convert
 * "/articles/2022-01-12-hogehoge"
 * into
 * "2022 01 12 Wed"
 */
const parsePublishedDate = ({ pathname }) => {
  const matchResult = pathname.match(/^\/articles\/(\d+)-(\d+)-(\d+)-.+/);
  const year = matchResult[1];
  const month = matchResult[2];
  const dayOfMonth = matchResult[3];
  const dayOfWeekNth = dayjs(
    `${year}-${month}-${dayOfMonth}`,
    "YYYY-MM-DD"
  ).day();
  const dayOfWeekEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][
    dayOfWeekNth
  ];
  //console.log(year, month, dayOfMonth, dayOfWeekEn);
  return {
    year,
    month,
    dayOfMonth,
    dayOfWeekEn,
  };
};

const parseTags = ({ tagsString }) => {
  console.log(tagsString);
  if (!tagsString) {
    return [];
  }
  const tags = tagsString.split(",").map((item) => {
    return item.trim();
  });
  //console.log(tags);
  return tags;
};

const stripPathSlashes = (str) => {
  // "/slug/" -> slug
  return str.replace(/^\//, "").replace(/\/$/, "");
};

const components = {
  Intro,
  Body,
  Outro,

  Img,
  ColumnBlock,
  ClosingArea,
  Note,
  UrlReference,
  PreWrapCodeWrapper,
};

const Layout = (props) => {
  const { pageContext, children } = props;
  //const slug = stripPathSlashes(props.location.pathname)
  //console.dir(props, { depth: null });
  const title = pageContext.frontmatter.title;

  //"/articles/2022-01-12-hogehoge".match(/^\/articles\/(\d+)-(\d+)-(\d+)-.+/)
  //props.location.pathname.match(/^\/articles\/(\d+)-(\d+)-(\d+)-.+/)

  return (
    <MDXProvider components={components}>
      <ArticlePageLayout
        title={title}
        publishedDate={parsePublishedDate({
          pathname: props.location.pathname,
        })}
        heroImgUrl={pageContext.frontmatter.heroImgUrl}
        tags={parseTags({ tagsString: pageContext.frontmatter.tags })}
        articleHtml={children}
      />
    </MDXProvider>
  );
};

export default Layout;
