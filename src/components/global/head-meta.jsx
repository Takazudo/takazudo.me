import * as React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const format = (template, title) => {
  return template.replace(/%s/g, title);
};

const tweakImgSrcForOgp = (src) => {
  if (!src) {
    return src;
  }
  const url = new URL(src);
  const isImgixSrc = url.host === "images.prismic.io";
  if (!isImgixSrc) {
    return src;
  }
  // We need following query for suitable for OGP image
  // ?ar=1200:630&w=2000&fit=crop
  const params = { ar: "1200:630", w: "2000", fit: "crop" };
  Object.keys(params).forEach((key) => {
    url.searchParams.set(key, params[key]);
  });
  return url.toString();
};

const HeadMeta = ({
  pageTitle,
  pageDescription,
  pageImgUrl,
  isArticle,
  path,
}) => {
  const isIndexPage = path === "/";
  const {
    title: siteTitle,
    titleTemplate,
    siteUrl,
    description: siteDescription,
    imgUrl: siteImgUrl,
  } = useSiteMetadata();

  const meta = {
    title: pageTitle || siteTitle,
    titleTemplate,
    description: pageDescription || siteDescription,
    imgUrl: tweakImgSrcForOgp(pageImgUrl) || siteImgUrl,
    url: `${siteUrl}${path}`,
  };

  if (isIndexPage) {
    meta.titleTemplate = "%s";
    meta.url = siteUrl;
  }

  return (
    <Helmet title={meta.title} titleTemplate={meta.titleTemplate}>
      {meta.url && <meta property="og:url" content={meta.url} />}
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      {meta.title && (
        <meta
          property="og:title"
          content={format(meta.titleTemplate, meta.title)}
        />
      )}
      {meta.description && (
        <meta property="og:description" content={meta.description} />
      )}
      {meta.imgUrl && <meta property="og:image" content={meta.imgUrl} />}
      <link rel="canonical" href={meta.url} />
    </Helmet>
  );
};

export { HeadMeta };
