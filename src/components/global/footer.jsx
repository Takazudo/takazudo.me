import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Footer = () => {
  const { globalNav } = useSiteMetadata();
  return (
    <footer className="pt-vgap-sm sm:pt-vgap-md">
      <div
        className={ctl(`
          px-hgap-sm
          font-futura
          bg-black text-white
        `)}
      >
        <div
          className={ctl(`
            mx-auto max-w-[1040px]
            py-vgap-md
            mt-vgap-md
            flex items-center
          `)}
        >
          <div className="grow hidden sm:block">
            <a href="/">takazudo.me</a>
          </div>
          <nav className="grow-0">
            <ul className="flex self-center space-x-hgap-sm">
              {globalNav.map((item) => {
                return (
                  <li key={item.href}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
