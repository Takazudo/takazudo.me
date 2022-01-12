import * as React from "react";
import ctl from "@netlify/classnames-template-literals";

const Intro = ({ children }) => {
  return (
    <div
      className={ctl(`
        border-b border-dashed border-gray-600
        pb-vgap-sm mb-vgap-lg 
      `)}
    >
      {children}
    </div>
  );
};

export { Intro };
