import * as React from "react";
import { MenuFlyout } from "./menu-flyout";

const Header = () => {
  const data = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/articles", text: "Articles" },
  ];
  return (
    <div className="px-hgap-md">
      <header className="flex font-futura mx-auto max-w-[1280px]">
        <div className="py-hgap-md self-center grow font-bold text-2xl">
          <a href="/">takazudo.me</a>
        </div>
        <div className="md:hidden">
          <MenuFlyout items={data} />
        </div>
        <nav className="self-center grow-0 text-lg">
          <ul className="flex self-center space-x-hgap-sm">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Articles</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export { Header };
