import * as React from "react";
import ctl from "@netlify/classnames-template-literals";

const FacebookShareButton = ({ children, pageUrl }) => {
  const share = () => {
    window.FB.ui({
      display: "popup",
      method: "share",
      href: pageUrl,
    });
  };
  return (
    <button
      className={ctl(`
        facebook-share-button block
        hover:text-[#4267B2]
        focus:text-[#4267B2]
        active:text-[#4267B2]
      `)}
      onClick={share}
    >
      {children}
    </button>
  );
};

export { FacebookShareButton };
