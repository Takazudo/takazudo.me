import * as React from "react";
import "./src/styles/global.css";
import { GlobalLayout } from "./src/components/layout/global";

// click to release hash
const enableClickToReleaseHash = () => {
  if (!window) return;
  window.addEventListener("click", (e) => {
    if (!window.location.hash) return;
    window.history.replaceState(
      null,
      window.document.title,
      window.location.pathname
    );
  });
};

const onInitialClientRender = () => {
  enableClickToReleaseHash();
};

const wrapPageElement = ({ element, props }) => {
  enableClickToReleaseHash();
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};

export { onInitialClientRender, wrapPageElement };
