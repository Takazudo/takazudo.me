import * as React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const format = (template, title) => {
  return template.replace(/%s/g, title);
};

const TwitterShareButton = ({ children, pageUrl, title }) => {
  const { titleTemplate } = useSiteMetadata();
  const titleInHref = format(titleTemplate, title);
  return (
    <a
      className="block"
      href={`https://twitter.com/intent/tweet?text=${titleInHref}&url=${pageUrl}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export { TwitterShareButton };
