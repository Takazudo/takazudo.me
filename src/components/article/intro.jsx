import * as React from "react";
import ctl from "@netlify/classnames-template-literals";

const Intro = ({ children }) => {
  return (
    <div
      className={ctl(`
        border-b-1 border-dashed border-black
        pb-vgap-sm mb-vgap-lg 
      `)}
    >
      {children}
    </div>
  );
};

export { Intro };
