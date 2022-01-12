import * as React from "react";
import ctl from "@netlify/classnames-template-literals";

const Outro = ({ children }) => {
  return (
    <div
      className={ctl(`
        border-t border-dashed border-gray-600
        md:ml-[-100px] md:pl-[100px]
        lg:ml-[-120px] lg:pl-[120px]
        pt-vgap-lg
      `)}
    >
      {children}
    </div>
  );
};

export { Outro };
