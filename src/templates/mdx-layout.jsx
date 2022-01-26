import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ArticlePageLayout } from "../components/layout/article-page-layout";
import { HeadMeta } from "../components/global/head-meta";
import { Intro } from "../components/article/intro";
import { Body } from "../components/article/body";
import { Outro } from "../components/article/outro";
import { UrlReference } from "../components/article/url-reference";
import { Youtube } from "../components/article/youtube";
import { Link } from "../components/shared/link";
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

const A = ({ href, children }) => {
  return <Link to={href}>{children}</Link>;
};

const components = {
  h2: H2,
  h3: H3,
  a: A,
  Intro,
  Body,
  Outro,
  UrlReference,
  Youtube,
};

const Layout = (props) => {
  const { pageContext, children } = props;
  const { blurHash } = pageContext;
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
        blurHash={blurHash}
        pageUrl={`${siteUrl}${props.location.pathname}`}
      />
    </MDXProvider>
  );
};

export default Layout;
