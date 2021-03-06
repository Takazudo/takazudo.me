import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Link } from "../shared/link";
import { MenuFlyout } from "./menu-flyout";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import SearchIcon from "../../assets/svgs/search.svg";

const Header = ({ logoTagName = "div" }) => {
  const { globalNav } = useSiteMetadata();
  const LogoTag = logoTagName;
  return (
    <div className="px-hgap-sm">
      {/* 
        1280px - 120px*2
      */}
      <header className="flex items-center font-futura mx-auto max-w-[1040px]">
        <LogoTag
          className={ctl(`
            grow font-bold
            py-[1rem] md:py-[2rem] 
            text-lg md:text-xl lg:text-2xl
          `)}
        >
          <Link to="/" className="zudo-invert-color-link no-underline">
            takazudo.me
          </Link>
        </LogoTag>
        <div className="md:hidden">
          <MenuFlyout items={globalNav} />
        </div>
        <nav className="grow-0 text-lg hidden md:block">
          <ul className="flex space-x-hgap-sm">
            {globalNav.map((item) => {
              return (
                <li key={item.href}>
                  <Link to={item.href} className="zudo-invert-color-link">
                    {item.text}
                  </Link>
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
      </header>
    </div>
  );
};

export { Header };
