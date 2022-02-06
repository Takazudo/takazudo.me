// dynamic transition reference
// https://conermurphy.com/blog/page-transition-animations-gatsbyjs-framer-motion/

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "../global/header";
import { Footer } from "../global/footer";

const GlobalLayout = ({ children, path }) => {
  return (
    <>
      <div className="min-h-screen relative">
        <Header />
        <div className="pb-[180px]">
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
            </motion.main>
          </AnimatePresence>
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-[200px] md:h-[220px]">
          <div className="absolute right-0 bottom-0 left-0">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export { GlobalLayout };
