import * as React from "react";
import tw from "twin.macro";
import { css } from "@emotion/css";

const styledClassNames = {
  h3: css`
    ${tw`text-base sm:text-lg pb-vgap-xs font-bold ml-[-1.5em] pl-[1.5em]`}
    > span {
      ${tw`block relative`}
      a,
      a:visited {
        ${tw`absolute left-[-1em] top-[-0.05em] font-bold hidden no-underline text-black`}
      }
    }
    &:hover > span a {
      ${tw`block`}
    }
  `,
};

const H3 = ({ children, id }) => {
  return (
    <h3 id={id} className={styledClassNames.h3}>
      <span>
        {id && (
          <a href={`#${id}`} aria-hidden="true">
            #
          </a>
        )}
        {children}
      </span>
    </h3>
  );
};

export { H3 };
