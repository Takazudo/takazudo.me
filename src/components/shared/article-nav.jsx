import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Link } from "../shared/link";
import { parsePublishedDateFromPath } from "../../utils/misc";
import { ImgixGatsbyImage } from "@imgix/gatsby";
import { Blurhash } from "react-blurhash";

const Article = ({ slug, title, imgUrl, blurHash, excerpt }) => {
  const { formattedDateString } = parsePublishedDateFromPath(slug);
  if (!/^\//.test(slug)) {
    slug = `/${slug}`;
  }
  return (
    <Link
      to={slug}
      className={ctl(`
        block
        no-underline hover:underline focus:underline
        border-t border-black
        py-vgap-md border-dashed
        md:pt-0 md:border-t-0
      `)}
    >
      <div
        className={ctl(`
          grid
          grid-cols-3
          grid-rows-[auto_auto_1fr]
          gap-x-hgap-sm
      `)}
      >
        <div className="row-span-2 sm:row-span-3">
          <div
            className={ctl(`
              bg-black
              border-y-5 border-black
              md:border-y-10
              relative overflow-hidden
            `)}
          >
            <div className="zudo-absolute-center">
              <Blurhash hash={blurHash} width={250} height={200} />
            </div>
            <ImgixGatsbyImage
              src={imgUrl}
              imgixParams={{
                auto: ["format", "compress"],
                fit: "crop",
                ar: "5:4",
              }}
              breakpoints={[360]}
              layout="fullWidth"
              className="w-full relative z-10"
              aspectRatio={5 / 4}
              alt=""
            />
          </div>
        </div>
        <p
          className={ctl(`
            font-futura no-underline text-gray-500 
            text-xs sm:text-sm
            col-span-2   
            tracking-wider
          `)}
        >
          {formattedDateString}
        </p>
        <h2 className="col-span-2 text-lg underline pt-vgap-xs line-clamp-3 font-bold">
          {title}
        </h2>
        <p
          className={ctl(`
            col-span-3 sm:col-span-2
            text-sm sm:text-base
            no-underline line-clamp-3
            pt-vgap-sm 
          `)}
        >
          {excerpt}
        </p>
      </div>
    </Link>
  );
};

const ArticleNav = ({ items }) => {
  return (
    <div
      className={ctl(`
        max-w-[1280px] mx-auto px-hgap-sm
      `)}
    >
      <div
        className={ctl(`
          grid 
          grid-cols-[1fr]
          md:grid-cols-[1fr_1fr]
          gap-x-hgap-md
          md:gap-y-vgap-lg
        `)}
      >
        {items.map((item) => {
          return (
            <Article
              slug={item.slug}
              title={item.title}
              imgUrl={item.imgUrl}
              excerpt={item.excerpt}
              blurHash={item.blurHash}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export { ArticleNav };
