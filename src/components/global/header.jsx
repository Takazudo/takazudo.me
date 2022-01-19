import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { MenuFlyout } from "./menu-flyout";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

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
          <a href="/" className="no-underline">
            takazudo.me
          </a>
        </LogoTag>
        <div className="md:hidden">
          <MenuFlyout items={globalNav} />
        </div>
        <nav className="grow-0 text-lg hidden md:block">
          <ul className="flex space-x-hgap-sm">
            {globalNav.map((item) => {
              return (
                <li key={item.href}>
                  <a href={item.href}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export { Header };
