import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import TwitterIcon from "../assets/svgs/twitter.svg";
import FacebookIcon from "../assets/svgs/facebook.svg";
import { Header } from "./global/header";
import { Footer } from "./global/footer";
import { TwitterShareButton } from "./shared/twitter-share-button";
import { FacebookShareButton } from "./shared/facebook-share-button";
import { parsePublishedDateFromPath } from "../utils/misc";

import tw from "twin.macro";
import { css } from "@emotion/css";

const styledClassNames = {
  article: css`
    a {
      ${tw`text-blue-600 font-bold px-[3px]`}
      &:visited {
        ${tw`text-purple-800`}
      }
    }
    em {
      ${tw`font-bold not-italic px-[5px] text-[1.1em]`}
    }
    strong {
      ${tw`font-bold text-red-700 px-[5px] text-[1.1em]`}
    }
    b,
    strong {
      font-weight: bold;
      margin-right: 2px;
      margin-left: 2px;
    }
    mark {
      background: #ff0;
      color: #000;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sup {
      top: -0.5em;
    }
    sub {
      bottom: -0.25em;
    }
    hr {
      box-sizing: content-box;
      height: 0;
    }
    code {
      ${tw`bg-gray-200 py-[3px] px-[6px] mx-[4px] font-mono`}
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    hr {
      ${tw`pb-vgap-md`}
      ${tw`border-0 border-b-1 border-solid border-black`}
      background: transparent;
      height: 0;
      overflow: hidden;
    }
    hr::before {
      content: "";
      display: table;
    }
    hr::after {
      clear: both;
      content: "";
      display: table;
    }
    h2 {
      ${tw`text-lg sm:text-xl pb-vgap-sm pt-vgap-sm font-bold ml-[-1.5em] pl-[1.5em]`}
      > span {
        ${tw`inline-block border-t-5 border-black pt-vgap-xs`}
        > span {
          ${tw`block relative`}
          a,
          a:visited {
            ${tw`absolute left-[-1em] top-[-0.05em] font-bold hidden no-underline text-black`}
          }
        }
      }
      &:hover > span > span a {
        ${tw`block`}
      }
    }
    h3 {
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
    }
    h4 {
      ${tw`font-bold`}
    }
    p {
      ${tw`pb-vgap-md`}
    }
    ul {
      ${tw`list-disc`}
      ${tw`ml-hgap-md pb-vgap-md space-y-vgap-xs`}
    }
    ol {
      ${tw`list-decimal`}
      ${tw`ml-hgap-md pb-vgap-md space-y-vgap-xs`}
    }
    blockquote {
      ${tw`mb-vgap-md`}
      ${tw`pt-vgap-sm pl-hgap-sm`}
      ${tw`sm:pt-vgap-md sm:pl-hgap-md`}
      ${tw`border-l-1 border-gray-400`}
    }

    /* PrismJS 1.22.0
    https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
    /**
    * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
    * Based on https://github.com/chriskempson/tomorrow-theme
    * @author Rose Pritchard
    */

    code[class*="language-"],
    pre[class*="language-"] {
      color: #ccc;
      background: none;
      ${tw`font-mono px-0 mx-0`}
      ${tw`text-xs lg:text-sm leading-snug`}
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    /* Code blocks */
    pre[class*="language-"] {
      ${tw`mb-vgap-md px-hgap-sm py-vgap-sm`}
      overflow: auto;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: #2d2d2d;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
    }

    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #999;
    }

    .token.punctuation {
      color: #ccc;
    }

    .token.tag,
    .token.attr-name,
    .token.namespace,
    .token.deleted {
      color: #e2777a;
    }

    .token.function-name {
      color: #6196cc;
    }

    .token.boolean,
    .token.number,
    .token.function {
      color: #f08d49;
    }

    .token.property,
    .token.class-name,
    .token.constant,
    .token.symbol {
      color: #f8c555;
    }

    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
      color: #cc99cd;
    }

    .token.string,
    .token.char,
    .token.attr-value,
    .token.regex,
    .token.variable {
      color: #7ec699;
    }

    .token.operator,
    .token.entity,
    .token.url {
      color: #67cdcc;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }

    .token.inserted {
      color: green;
    }
  `,
};

const Tag = ({ text }) => {
  return (
    <li className="pt-vgap-xs">
      <a
        href={`/tags/${text}`}
        className={ctl(`
          inline-block
          ml-hgap-xs
          font-futura
          rounded-sm rounded-l-none
          no-underline
          border-b border-black
        `)}
      >
        #<span className="mx-[2px]">{text}</span>
      </a>
    </li>
  );
};

const HeroImg = ({ src }) => {
  const srcWoQuery = src.replace(/\?.*/, "");
  const srcNarrow = new URL(srcWoQuery);
  const srcWide = new URL(srcWoQuery);
  srcNarrow.searchParams.append("auto", "compress,format");
  srcNarrow.searchParams.append("fit", "clip");
  srcNarrow.searchParams.append("w", "800");
  srcNarrow.searchParams.append("h", "800");
  srcWide.searchParams.append("auto", "compress,format");
  srcWide.searchParams.append("fit", "crop");
  srcWide.searchParams.append("w", "2400");
  srcWide.searchParams.append("h", "800");
  return (
    <div
      className={ctl(`
        border-black
        border-t-5 border-b-5
        md:border-b-[10px] md:border-t-[10px]
        max-w-[1280px] mx-auto
      `)}
    >
      <img
        className="w-full block md:hidden"
        src={srcNarrow.toString()}
        alt=""
      />
      <img className="w-full hidden md:block" src={srcWide.toString()} alt="" />
    </div>
  );
};

const ShareBarVertical = ({ pageUrl }) => {
  return (
    <div>
      <dl className="flex flex-col text-center mr-auto">
        <dt className="pb-hgap-sm nowrap text-sm font-futura">Share</dt>
        <dd className="pb-hgap-sm flex items-center flex-col">
          <TwitterShareButton pageUrl={pageUrl}>
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
        <p className="text-sm text-gray-500 font-futura">
          {parsePublishedDateFromPath(path).formattedDateString}
        </p>
      )}
      {!publishedDate && (
        <div className="text-sm" aria-hidden="true">&nbsp;</div>
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

const ShareBarRightTop = ({ pageUrl }) => {
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
          <TwitterShareButton pageUrl={pageUrl}>
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

const ArticleBody = ({ html }) => {
  return <div className={styledClassNames.article}>{html}</div>;
};

const ArticleTitle = ({ title }) => {
  return (
    <header>
      <h1 className="font-bold text-xl sm:text-xl md:text-2xl">{title}</h1>
    </header>
  );
};

const ArticlePageLayout = ({
  title,
  path,
  heroImgUrl,
  tags,
  articleHtml,
  pageUrl,
}) => {
  return (
    <>
      <div>
        <Header />
        <HeroImg src={heroImgUrl} />
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
            relative
        `)}
        >
          <div className="md:col-start-2">
            <ArticleDate path={path} />
            <div className="pt-vgap-xs">
              <ArticleTitle title={title} />
            </div>
          </div>

          <div
            className={ctl(`
            hidden md:block
            md:col-start-1 md:row-start-2
          `)}
          >
            <ShareBarVertical pageUrl={pageUrl} />
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
              <ShareBarRightTop pageUrl={pageUrl} />
            </div>
            <ArticleBody html={articleHtml} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { ArticlePageLayout };
