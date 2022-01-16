import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ArticlePageLayout } from "./article-page-layout";
import { HeadMeta } from "./global/head-meta";
import { Intro } from "./article/intro";
import { Body } from "./article/body";
import { Outro } from "./article/outro";
import { UrlReference } from "./article/url-reference";
import { Youtube } from "./article/youtube";
import { useSiteMetadata } from "../hooks/use-site-metadata";

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
  const { title, description, heroImgUrl, tags } = pageContext.frontmatter;
  const { siteUrl } = useSiteMetadata();
  //console.dir(props, { depth: null });

  return (
    <MDXProvider components={components}>
      <HeadMeta
        pageTitle={title}
        pageDescription={description}
        pageImgUrl={heroImgUrl || null}
        isArticle={true}
        path={props.location.pathname}
      />
      <ArticlePageLayout
        title={title}
        publishedDate={parsePublishedDate({
          pathname: props.location.pathname,
        })}
        heroImgUrl={heroImgUrl}
        tags={tags}
        articleHtml={children}
        pageUrl={`${siteUrl}${props.location.pathname}`}
      />
    </MDXProvider>
  );
};

export default Layout;
