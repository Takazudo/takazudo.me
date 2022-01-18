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
        path={props.location.pathname}
        heroImgUrl={heroImgUrl}
        tags={tags}
        articleHtml={children}
        pageUrl={`${siteUrl}${props.location.pathname}`}
      />
    </MDXProvider>
  );
};

export default Layout;
