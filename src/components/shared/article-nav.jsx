import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { parsePublishedDateFromPath } from "../../utils/misc";
import { tweakImgUrl } from "../../utils/misc";

const Article = ({ slug, title, imgUrl, excerpt }) => {
  const { formattedDateString } = parsePublishedDateFromPath(slug);
  if (!/^\//.test(slug)) {
    slug = `/${slug}`;
  }
  return (
    <a
      href={slug}
      className={ctl(`
        block
        no-underline hover:underline focus:underline
        border-t border-black
        pt-vgap-md border-dashed
        sm:pt-0 sm:border-t-0
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
          <img
            className={ctl(`
              block w-full
              border-y-5 border-black
              md:border-y-10
            `)}
            src={tweakImgUrl(imgUrl).srcSquare}
            alt=""
          />
        </div>
        <p
          className={ctl(`
            font-futura no-underline text-gray-500 
            text-xs sm:text-sm
            col-span-2   
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
    </a>
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
          gap-x-hgap-md gap-y-vgap-md
          sm:gap-y-vgap-lg
        `)}
      >
        {items.map((item) => {
          return (
            <Article
              slug={item.slug}
              title={item.title}
              imgUrl={item.imgUrl}
              excerpt={item.excerpt}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export { ArticleNav };
