import * as React from "react";
import tw from "twin.macro";
import { css } from "@emotion/css";

const styledClassNames = {
  h2: css`
    ${tw`sm:pt-vgap-xs md:pt-vgap-sm`}
    ${tw`text-lg sm:text-xl pb-vgap-md font-bold ml-[-1.5em] pl-[1.5em]`}
    > span {
      ${tw`block border-t-1 border-black`}
      > span {
        ${tw`inline-block border-t-5 border-black pt-vgap-sm mt-[-1px]`}
        > span {
          ${tw`block relative`}
          a,
          a:visited {
            ${tw`absolute left-[-1em] font-bold hidden no-underline text-black`}
            ${tw`top-[0.3em] md:top-0`}
            ${tw`text-sm md:text-xl`}
          }
          a:hover {
            ${tw`text-white`}
          }
        }
      }
    }
    &:hover > span > span a {
      ${tw`block`}
    }
  `,
};

const H2 = ({ children, id }) => {
  return (
    <h2 className={styledClassNames.h2} id={id}>
      <span>
        <span>
          <span>
            {id && (
              <a href={`#${id}`} aria-hidden="true">
                #
              </a>
            )}
            {children}
          </span>
        </span>
      </span>
    </h2>
  );
};

export { H2 };
