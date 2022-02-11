import * as React from "react";
import { Link } from "../shared/link";

const A = ({ href, children }) => {
  return <Link to={href}>{children}</Link>;
};

export { A };
