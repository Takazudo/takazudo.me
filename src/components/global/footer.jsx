import * as React from "react";
import ctl from "@netlify/classnames-template-literals";

const Footer = () => {
  const navData = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/articles", text: "Articles" },
  ];
  return (
    <footer
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
          mt-vgap-lg
          flex items-center
        `)}
      >
        <div className="grow hidden sm:block">
          <a href="/">takazudo.me</a>
        </div>
        <nav className="grow-0">
          <ul className="flex self-center space-x-hgap-sm">
            {navData.map((item) => {
              return (
                <li key={item.href}>
                  <a href={item.href}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
