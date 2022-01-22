import * as React from "react";
import "./src/styles/global.css";
import { GlobalLayout } from "./src/components/layout/global";

const wrapPageElement = ({ element, props }) => {
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};

export { wrapPageElement };
