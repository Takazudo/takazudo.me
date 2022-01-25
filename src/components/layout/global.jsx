import * as React from "react";
import { Header } from "../global/header";
import { Footer } from "../global/footer";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { GlobalLayout };
