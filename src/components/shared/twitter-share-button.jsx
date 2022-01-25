import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const format = (template, title) => {
  return template.replace(/%s/g, title);
};

const TwitterShareButton = ({ children, pageUrl, title }) => {
  const { titleTemplate } = useSiteMetadata();
  const titleInHref = format(titleTemplate, title);
  return (
    <a
      className={ctl(`
        block
        hover:text-[#1DA1F2]
        focus:text-[#1DA1F2]
        active:text-[#1DA1F2]
      `)}
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(titleInHref)}&url=${encodeURIComponent(pageUrl)}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export { TwitterShareButton };
