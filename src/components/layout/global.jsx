import * as React from "react";
import { Header } from "../global/header";
import { Footer } from "../global/footer";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-[300px]">{children}</div>
      <Footer />
    </>
  );
};

export { GlobalLayout };
