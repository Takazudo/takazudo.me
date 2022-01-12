import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-hgap-lg py-vgap-lg mt-vgap-lg flex font-futura">
      <div className="self-center grow">takazudo.me</div>
      <nav className="self-center grow-0">
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
    </footer>
  );
};

export { Footer };
