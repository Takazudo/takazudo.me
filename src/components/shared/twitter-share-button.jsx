import * as React from "react";

const TwitterShareButton = ({ children, pageUrl }) => {
  return (
    <a
      className="block"
      href={`https://twitter.com/intent/tweet?text=${window.document.title}&url=${pageUrl}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export { TwitterShareButton };
