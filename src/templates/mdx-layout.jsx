import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ArticlePageLayout } from "../components/layout/article-page-layout";
import { HeadMeta } from "../components/global/head-meta";
import { H2 } from "../components/article/h2";
import { H3 } from "../components/article/h3";
import { A } from "../components/article/a";
import { Img } from "../components/article/img";
import { Intro } from "../components/article/intro";
import { Body } from "../components/article/body";
import { Outro } from "../components/article/outro";
import { UrlReference } from "../components/article/url-reference";
import { Youtube } from "../components/article/youtube";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const components = {
  h2: H2,
  h3: H3,
  a: A,
  img: Img,
  Intro,
  Body,
  Outro,
  UrlReference,
  Youtube,
};

const Layout = ({ pageContext, children, location }) => {
  const {
    blurHash,
    frontmatter: { title, description, heroImgUrl, tags, customExcerpt },
  } = pageContext;
  const { siteUrl } = useSiteMetadata();
  //console.log(blurHash);
  //console.log(title);
  //console.log(description);
  //console.log(heroImgUrl);
  //console.log(tags);
  //console.log(customExcerpt);

  return (
    <MDXProvider components={components}>
      <HeadMeta
        pageTitle={title}
        pageDescription={description || customExcerpt}
        pageImgUrl={heroImgUrl || null}
        isArticle={true}
        path={location.pathname}
      />
      <ArticlePageLayout
        title={title}
        path={location.pathname}
        heroImgUrl={heroImgUrl}
        tags={tags}
        articleHtml={children}
        blurHash={blurHash}
        pageUrl={`${siteUrl}${location.pathname}`}
      />
    </MDXProvider>
  );
};

export default Layout;
