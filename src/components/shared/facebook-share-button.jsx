import * as React from "react";

const FacebookShareButton = ({ children, pageUrl }) => {
  const share = () => {
    window.FB.ui({
      display: "popup",
      method: "share",
      href: pageUrl,
    });
  };
  return (
    <button className="facebook-share-button" onClick={share}>
      {children}
    </button>
  );
};

export { FacebookShareButton };
