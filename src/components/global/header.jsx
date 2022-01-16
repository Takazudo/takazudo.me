import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { MenuFlyout } from "./menu-flyout";

const Header = () => {
  const navData = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/notes", text: "Notes" },
  ];
  return (
    <div className="px-hgap-sm">
      {/* 
        1280px - 120px*2
      */}
      <header className="flex items-center font-futura mx-auto max-w-[1040px]">
        <div
          className={ctl(`
            grow font-bold
            py-[1rem] md:py-[2rem] 
            text-lg md:text-xl lg:text-2xl
          `)}
        >
          <a href="/" className="no-underline">
            takazudo.me
          </a>
        </div>
        <div className="md:hidden">
          <MenuFlyout items={navData} />
        </div>
        <nav className="grow-0 text-lg hidden md:block">
          <ul className="flex space-x-hgap-sm">
            {navData.map((item) => {
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
