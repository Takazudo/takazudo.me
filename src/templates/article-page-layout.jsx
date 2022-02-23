import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Blurhash } from "react-blurhash";
import { MdxRichText } from "../components/shared/mdx-rich-text";
import { HeadMeta } from "../components/global/head-meta";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import TwitterIcon from "../assets/svgs/twitter.svg";
import FacebookIcon from "../assets/svgs/facebook.svg";
import { TwitterShareButton } from "../components/shared/twitter-share-button";
import { FacebookShareButton } from "../components/shared/facebook-share-button";
import { Link } from "../components/shared/link";
import { parsePublishedDateFromPath } from "../utils/misc";
import { ImgixGatsbyImage } from "@imgix/gatsby";

const Tag = ({ text }) => {
  return (
    <li className="pt-vgap-xs">
      <Link
        to={`/tags/${text}`}
        className={ctl(`
          inline-block
          ml-hgap-xs
          font-futura
          text-shadow-md
          rounded-sm rounded-l-none
          zudo-invert-color-link
        `)}
      >
        <span className="zudo-hash">#</span>
        {text}
      </Link>
    </li>
  );
};

const HeroImg = ({ src, heroImgOptions, blurHash }) => {
  const wideExtender =
    heroImgOptions && heroImgOptions.wide ? heroImgOptions.wide : {};
  const imgixParams_wide = Object.assign(
    {
      auto: ["format", "compress"],
      fit: "crop",
      ar: "3:1",
    },
    wideExtender
  );
  console.log(imgixParams_wide)
  const narrowExtender =
    heroImgOptions && heroImgOptions.narrow ? heroImgOptions.narrow : {};
  const imgixParams_narrow = Object.assign(
    {
      auto: ["format", "compress"],
      fit: "crop",
      ar: "3:2",
    },
    narrowExtender
  );
  return (
    <div
      className={ctl(`
        border-black
        border-t-5 border-b-5
        md:border-b-[10px] md:border-t-[10px]
        max-w-[1280px] mx-auto
        bg-black
      `)}
    >
      {/* wide image */}
      <div className="hidden md:block relative overflow-hidden">
        <div className="zudo-absolute-center">
          <Blurhash hash={blurHash} width={1280} height={427} />
        </div>
        <ImgixGatsbyImage
          src={src}
          imgixParams={imgixParams_wide}
          breakpoints={[580, 820, 1240]}
          layout="constrained"
          className="w-full relative z-10"
          width="1800"
          height="600"
          aspectRatio={3 / 1}
          alt=""
        />
      </div>
      {/* narrow image */}
      <div className="block md:hidden relative overflow-hidden">
        <div className="zudo-absolute-center">
          <Blurhash hash={blurHash} width={900} height={600} />
        </div>
        <ImgixGatsbyImage
          src={src}
          imgixParams={imgixParams_narrow}
          breakpoints={[440]}
          layout="constrained"
          className="w-full relative z-10"
          width="600"
          height="400"
          aspectRatio={3 / 2}
          alt=""
        />
      </div>
    </div>
  );
};

const ShareBarVertical = ({ pageUrl, title }) => {
  return (
    <div className="sticky top-vgap-sm">
      <dl className="flex flex-col text-center mr-auto">
        <dt className="pb-hgap-sm nowrap text-sm font-futura">Share</dt>
        <dd className="pb-hgap-sm flex items-center flex-col">
          <TwitterShareButton pageUrl={pageUrl} title={title}>
            <TwitterIcon
              className={ctl(`
                w-[30px] h-[30px]
                lg:w-[40px] lg:h-[40px]
                block mx-auto
              `)}
            />
          </TwitterShareButton>
        </dd>
        <dd className="pb-hgap-sm flex items-center flex-col">
          <FacebookShareButton pageUrl={pageUrl}>
            <FacebookIcon
              className={ctl(`
                w-[30px] h-[30px]
                lg:w-[40px] lg:h-[40px]
                block mx-auto
              `)}
            />
          </FacebookShareButton>
        </dd>
      </dl>
    </div>
  );
};

const ArticleDate = ({ path }) => {
  const publishedDate = parsePublishedDateFromPath(path);
  return (
    <>
      {publishedDate && (
        <p className="text-sm sm:text-base text-gray-500 font-futura tracking-wider">
          {publishedDate.formattedDateString}
        </p>
      )}
      {!publishedDate && (
        <div className="text-sm sm:text-base" aria-hidden="true">
          &nbsp;
        </div>
      )}
    </>
  );
};

const ArticleTagsHorizontal = ({ tags = [] }) => {
  return (
    <>
      {!!tags.length && (
        <aside>
          <ul className="text-sm flex flex-wrap -ml-hgap-xs -mt-hgap-xs">
            {tags.map((tag) => {
              return <Tag text={tag} key={tag} />;
            })}
          </ul>
        </aside>
      )}
    </>
  );
};

const ArticleTagsVertical = ({ tags = [] }) => {
  return (
    <>
      {!!tags.length && (
        <aside>
          <ul className="text-sm lg:text-base -ml-hgap-xs -mt-hgap-xs">
            {tags.map((tag) => {
              return <Tag text={tag} key={tag} />;
            })}
          </ul>
        </aside>
      )}
    </>
  );
};

const ShareBarRightTop = ({ pageUrl, title }) => {
  return (
    <div className="absolute right-0 top-[-2px]">
      <dl className="flex">
        <dt
          className={ctl(`
            nowrap
            text-xs font-futura
            self-center
            pr-hgap-xs
            hidden sm:block
        `)}
        >
          <span>Share</span>
        </dt>
        <dd className="pr-hgap-2xs">
          <TwitterShareButton pageUrl={pageUrl} title={title}>
            <TwitterIcon className="w-[28px] h-[28px] block" />
          </TwitterShareButton>
        </dd>
        <dd>
          <FacebookShareButton pageUrl={pageUrl}>
            <FacebookIcon className="w-[26px] h-[26px] block" />
          </FacebookShareButton>
        </dd>
      </dl>
    </div>
  );
};

const Layout = ({ pageContext, children, location }) => {
  const {
    blurHash,
    frontmatter: {
      title,
      description,
      heroImgUrl,
      heroImgOptions,
      tags,
      customExcerpt,
    },
  } = pageContext;
  const { siteUrl } = useSiteMetadata();
  //console.log(blurHash);
  //console.log(title);
  //console.log(description);
  //console.log(heroImgUrl);
  //console.log(tags);
  //console.log(customExcerpt);

  const path = location.pathname;
  const pageUrl = `${siteUrl}${location.pathname}`;

  return (
    <>
      <HeadMeta
        pageTitle={title}
        pageDescription={description || customExcerpt}
        pageImgUrl={heroImgUrl || null}
        isArticle={true}
        path={location.pathname}
      />
      <HeroImg
        src={heroImgUrl}
        blurHash={blurHash}
        heroImgOptions={heroImgOptions}
      />
      <div
        className={ctl(`
          md:grid 
          md:grid-cols-[80px_minmax(0,1fr)_180px]
          lg:grid-cols-[100px_minmax(0,1fr)_220px]
          md:gap-x-hgap-sm
          md:gap-y-vgap-sm lg:gap-y-vgap-md
          w-auto max-w-[1280px]
          mt-hgap-sm sm:mt-hgap-md
          mx-hgap-sm md:mx-auto
          pb-vgap-md md:pb-vgap-lg
          relative
        `)}
      >
        <div className="md:col-start-2">
          <ArticleDate path={path} />
          <header className="pt-vgap-xs">
            <h1 className="font-bold text-xl sm:text-xl md:text-2xl text-shadow-md">
              {title}
            </h1>
          </header>
        </div>

        <div
          className={ctl(`
            hidden md:block
            md:col-start-1 md:row-start-2
          `)}
        >
          <ShareBarVertical pageUrl={pageUrl} title={title} />
        </div>

        <div
          className={ctl(`
            hidden md:block
            md:col-start-3 md:row-start-2
            md:pl-hgap-sm
          `)}
        >
          <ArticleTagsVertical tags={tags} />
        </div>

        <div
          className={ctl(`
            md:col-start-2 md:row-start-2
          `)}
        >
          <div className="pt-vgap-sm md:hidden">
            <ArticleTagsHorizontal tags={tags} />
          </div>
          <div className="pt-vgap-sm md:hidden pb-vgap-sm md:pb-[0px]">
            <ShareBarRightTop pageUrl={pageUrl} title={title} />
          </div>
          <MdxRichText>{children}</MdxRichText>
        </div>
      </div>
    </>
  );
};

export default Layout;
