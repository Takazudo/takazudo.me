import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Link } from "../shared/link";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Footer = () => {
  const { globalNav } = useSiteMetadata();
  return (
    <footer>
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
            <Link to="/">takazudo.me</Link>
          </div>
          <nav className="grow-0">
            <ul className="flex self-center space-x-hgap-sm">
              {globalNav.map((item) => {
                return (
                  <li key={item.href}>
                    <Link to={item.href}>{item.text}</Link>
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
