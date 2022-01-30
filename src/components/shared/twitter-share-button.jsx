import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const format = (template, title) => {
  return template.replace(/%s/g, title);
};

// Twitter makes the preview of the tweet form takazudo.me toppage.
// replacing 'takazudo.me' to 'takazudo-me' to avoid this.
const tweakTitle = (title) => {
  return title.replace(/([^/])takazudo.me/, "$1takauzudo-me");
};

const TwitterShareButton = ({ children, pageUrl, title }) => {
  const { titleTemplate } = useSiteMetadata();
  const titleInHref = tweakTitle(format(titleTemplate, title));
  return (
    <a
      className={ctl(`
        block
        hover:text-[#1DA1F2]
        focus:text-[#1DA1F2]
        active:text-[#1DA1F2]
      `)}
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
        titleInHref
      )}&url=${encodeURIComponent(pageUrl)}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export { TwitterShareButton };
