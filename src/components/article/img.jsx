import * as React from "react";
import { ImgixGatsbyImage } from "@imgix/gatsby";
import ctl from "@netlify/classnames-template-literals";

const MAX_IMG_SIZE = 1800;

const Img = ({ src, alt, className }) => {
  let InsideComponent;

  const url = new URL(src);
  const isImgixSrc = url.host === "images.prismic.io";
  const queryW = url.searchParams.get("w");
  const queryH = url.searchParams.get("h");

  // respect the original image's aspect ratio
  const aspectRatio = queryW && queryH ? queryW / queryH : null;

  // however, too big size is not suitable for the web.
  // shrink it to fit the max_img_size rect.
  let width, height, wide, tall, square;
  if (aspectRatio) {
    wide = aspectRatio > 1;
    tall = aspectRatio < 1;
    square = aspectRatio === 1;
    if (wide) {
      width = Math.min(MAX_IMG_SIZE, queryW);
      height = width / aspectRatio;
    }
    if (tall) {
      height = Math.min(MAX_IMG_SIZE, queryH);
      width = height * aspectRatio;
    }
    if (square) {
      width = Math.min(MAX_IMG_SIZE, queryW);
      height = width;
    }
    //console.log(aspectRatio, width, height);
  }

  if (isImgixSrc && !aspectRatio) {
    throw new Error(`imgix's src needs to have w and q on its query`);
  }

  // use ImgixGatsbyImage if the source is imgix's one
  if (isImgixSrc && aspectRatio) {
    InsideComponent = () => (
      <ImgixGatsbyImage
        as="span"
        src={`${url.origin}${url.pathname}`}
        imgixParams={{
          auto: ["format", "compress"],
        }}
        breakpoints={[580, 820, 1240]}
        layout="constrained"
        className="bg-black"
        width={width}
        height={height}
        aspectRatio={aspectRatio}
        alt={alt || ""}
      />
    );
  } else {
    InsideComponent = () => (
      <img src={src} alt={alt} className="block bg-black" />
    );
  }

  return (
    <span
      className={ctl(`
        flex justify-center
        ${className}
      `)}
    >
      <span
        className={ctl(`
          block border border-gray-500
        `)}
      >
        <InsideComponent />
      </span>
    </span>
  );
};

export { Img };
