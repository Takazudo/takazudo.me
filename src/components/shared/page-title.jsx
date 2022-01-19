import * as React from "react";
import ctl from "@netlify/classnames-template-literals";

const PageTitle = ({ children, tagName = "h1" }) => {
  const Tag = tagName;
  return (
    <Tag
      className={ctl(`
        border-black 
        border-t-5 md:border-t-[10px]
        max-w-[1280px] mx-auto px-hgap-sm
        py-vgap-md sm:pt-vgap-lg sm:pb-vgap-xl
        font-futura text-lg sm:text-xl lg:text-2xl
        text-center
      `)}
    >
      {children}
    </Tag>
  );
};

export { PageTitle };
