// dynamic transition reference
// https://conermurphy.com/blog/page-transition-animations-gatsbyjs-framer-motion/

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "../global/header";
import { Footer } from "../global/footer";

const GlobalLayout = ({ children, path }) => {
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={path}
          initial={{ opacity: 0, y: -10, ease: "easeInOut" }}
          animate={{ opacity: 1, y: 0, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.1,
          }}
        >
          {children}
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export { GlobalLayout };
