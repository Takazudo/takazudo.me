import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ArticlePageLayout } from "./article-page-layout";
import Helmet from "react-helmet";

import { Intro } from "./article/intro";
import { Body } from "./article/body";
import { Outro } from "./article/outro";
import { UrlReference } from "./article/url-reference";
import { Youtube } from "./article/youtube";

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

const H2 = ({ id, children }) => {
  return (
    <h2 id={id}>
      <span>
        <span>
          <a href={`#${id}`} aria-hidden="true">
            #
          </a>
          {children}
        </span>
      </span>
    </h2>
  );
};

const H3 = ({ id, children }) => {
  return (
    <h3 id={id}>
      <span>
        <a href={`#${id}`} aria-hidden="true">
          #
        </a>
        {children}
      </span>
    </h3>
  );
};

const components = {
  h2: H2,
  h3: H3,
  Intro,
  Body,
  Outro,
  UrlReference,
  Youtube,
};

const Layout = (props) => {
  const { pageContext, children } = props;
  const { title, heroImgUrl, tags } = pageContext.frontmatter;
  //console.dir(props, { depth: null });

  return (
    <MDXProvider components={components}>
      <Helmet>
        <title>{title} | takazudo.me</title>
      </Helmet>
      <ArticlePageLayout
        title={title}
        publishedDate={parsePublishedDate({
          pathname: props.location.pathname,
        })}
        heroImgUrl={heroImgUrl}
        tags={tags}
        articleHtml={children}
      />
    </MDXProvider>
  );
};

export default Layout;
