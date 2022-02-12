import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import Densen from "../../assets/svgs/densen.svg";
import SearchIcon from "../../assets/svgs/search.svg";
import { Link } from "../shared/link";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Footer = () => {
  const { globalNav } = useSiteMetadata();
  return (
    <footer className="pt-vgap-lg">
      <div
        className={ctl(`
          max-w-[1400px] mx-auto
          mb-[-32px] md:mb-[-40px]
          pr-[20px] pl-[10px]
        `)}
      >
        <Densen className="w-auto" />
      </div>
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
              <li key="search">
                <Link to="/search/" className="zudo-invert-color-link block">
                  <SearchIcon className="w-[1.4em] h-[1.4em] inline-block align-middle" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
