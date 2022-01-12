import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import TwitterIcon from "../assets/svgs/twitter.svg";
import FacebookIcon from "../assets/svgs/facebook.svg";
import { Header } from "./shared/header";
import { Footer } from "./shared/footer";

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
    pre {
      overflow: auto;
    }
    code,
    kbd,
    pre,
    samp {
      ${tw`bg-gray-200 py-[3px] px-[6px] mx-[4px] font-mono`}
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    * {
      box-sizing: border-box;
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
      ${tw`text-red-500`}
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
      ${tw`pt-vgap-md pl-hgap-md border-l-1 border-gray-400`}
    }
    tt,
    code,
    pre {
      ${tw`font-mono`}
    }
    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
      margin-top: 0;
      margin-bottom: 0;
    }
    .highlight {
      margin-bottom: 16px;
    }
    .highlight pre {
      padding: 16px;
      margin-bottom: 0;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: #f7f7f7;
      border-radius: 3px;
    }
    pre {
      padding: 16px;
      margin-bottom: 16px;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: #f7f7f7;
      border-radius: 3px;
      word-wrap: normal;
      & + h2,
      & + h3 {
        ${tw`mt-vgap-lg`}
      }
    }
    pre code,
    pre tt {
      display: inline;
      max-width: initial;
      padding: 0;
      margin: 0;
      overflow: initial;
      line-height: inherit;
      word-wrap: normal;
      background-color: transparent;
      border: 0;
    }
    pre code:before,
    pre code:after {
      content: normal;
    }
    pre tt:before,
    pre tt:after {
      content: normal;
    }
    .poetry pre {
      font-family: Georgia, Garamond, serif !important;
      font-style: italic;
      font-size: 110% !important;
      line-height: 1.6em;
      display: block;
      margin-left: 1em;
    }
    .poetry pre code {
      font-family: Georgia, Garamond, serif !important;
      word-break: break-all;
      word-break: break-word;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      hyphens: auto;
      white-space: pre-wrap;
    }
    sup,
    sub,
    a.footnote {
      font-size: 1.4ex;
      height: 0;
      line-height: 1;
      vertical-align: super;
      position: relative;
    }
    sub {
      vertical-align: sub;
      top: -1px;
    }
    .highlight {
      background: #fff;
    }
    .highlight .c {
      color: #998;
      font-style: italic;
    }
    .highlight .err {
      color: #a61717;
      background-color: #e3d2d2;
    }
    .highlight .k,
    .highlight .o {
      font-weight: 700;
    }
    .highlight .cm {
      color: #998;
      font-style: italic;
    }
    .highlight .cp {
      color: #999;
      font-weight: 700;
    }
    .highlight .c1 {
      color: #998;
      font-style: italic;
    }
    .highlight .cs {
      color: #999;
      font-weight: 700;
      font-style: italic;
    }
    .highlight .gd {
      color: #000;
      background-color: #fdd;
    }
    .highlight .gd .x {
      color: #000;
      background-color: #faa;
    }
    .highlight .ge {
      font-style: italic;
    }
    .highlight .gr {
      color: #a00;
    }
    .highlight .gh {
      color: #999;
    }
    .highlight .gi {
      color: #000;
      background-color: #dfd;
    }
    .highlight .gi .x {
      color: #000;
      background-color: #afa;
    }
    .highlight .go {
      color: #888;
    }
    .highlight .gp {
      color: #555;
    }
    .highlight .gs {
      font-weight: 700;
    }
    .highlight .gu {
      color: purple;
      font-weight: 700;
    }
    .highlight .gt {
      color: #a00;
    }
    .highlight .kc,
    .highlight .kd,
    .highlight .kn,
    .highlight .kp,
    .highlight .kr {
      font-weight: 700;
    }
    .highlight .kt {
      color: #458;
      font-weight: 700;
    }
    .highlight .m {
      color: #099;
    }
    .highlight .s {
      color: #d14;
    }
    .highlight .n {
      color: #333;
    }
    .highlight .na {
      color: teal;
    }
    .highlight .nb {
      color: #0086b3;
    }
    .highlight .nc {
      color: #458;
      font-weight: 700;
    }
    .highlight .no {
      color: teal;
    }
    .highlight .ni {
      color: purple;
    }
    .highlight .ne,
    .highlight .nf {
      color: #900;
      font-weight: 700;
    }
    .highlight .nn {
      color: #555;
    }
    .highlight .nt {
      color: navy;
    }
    .highlight .nv {
      color: teal;
    }
    .highlight .ow {
      font-weight: 700;
    }
    .highlight .w {
      color: #bbb;
    }
    .highlight .mf,
    .highlight .mh,
    .highlight .mi,
    .highlight .mo {
      color: #099;
    }
    .highlight .sb,
    .highlight .sc,
    .highlight .sd,
    .highlight .s2,
    .highlight .se,
    .highlight .sh,
    .highlight .si,
    .highlight .sx {
      color: #d14;
    }
    .highlight .sr {
      color: #009926;
    }
    .highlight .s1 {
      color: #d14;
    }
    .highlight .ss {
      color: #990073;
    }
    .highlight .bp {
      color: #999;
    }
    .highlight .vc,
    .highlight .vg,
    .highlight .vi {
      color: teal;
    }
    .highlight .il {
      color: #099;
    }
    .highlight .gc {
      color: #999;
      background-color: #eaf2f5;
    }
    .type-csharp .highlight .k,
    .type-csharp .highlight .kt {
      color: blue;
    }
    .type-csharp .highlight .nf {
      color: #000;
      font-weight: 400;
    }
    .type-csharp .highlight .nc {
      color: #2b91af;
    }
    .type-csharp .highlight .nn {
      color: #000;
    }
    .type-csharp .highlight .s,
    .type-csharp .highlight .sc {
      color: #a31515;
    }
    .type-csharp .highlight .k,
    .type-csharp .highlight .kt {
      color: #00f;
    }
    .type-csharp .highlight .nf {
      color: #000;
      font-weight: normal;
    }
    .type-csharp .highlight .nc {
      color: #2b91af;
    }
    .type-csharp .highlight .nn {
      color: #000;
    }
    .type-csharp .highlight .s,
    .type-csharp .highlight .sc {
      color: #a31515;
    }
    kbd {
      background-color: #fafbfc;
      border: 1px solid #d1d5da;
      border-radius: 3px;
      box-shadow: inset 0 -1px 0 #d1d5da;
      color: #444d56;
      display: inline-block;
      font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      line-height: 10px;
      padding: 3px 5px;
      vertical-align: middle;
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
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;

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
      ${tw`mb-vgap-md`}
      padding: 1em;
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

const TwitterAnchor = ({ children }) => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${window.document.title}&url=${window.location.href}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
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
  return (
    <div className="">
      <img
        className="border-b-[10px] border-t-[10px] border-black block max-w-[1280px] w-full mx-auto"
        src={src}
        alt=""
      />
    </div>
  );
};

const ShareBarVertical = () => {
  return (
    <div>
      <dl className="flex flex-col text-center mr-auto">
        <dt className="pb-hgap-sm nowrap text-sm font-futura">Share</dt>
        <dd className="pb-hgap-sm">
          <TwitterAnchor>
            <TwitterIcon
              className={ctl(`
                w-[30px] h-[30px]
                lg:w-[40px] lg:h-[40px]
                block mx-auto
              `)}
            />
          </TwitterAnchor>
        </dd>
        <dd className="pb-hgap-sm">
          <FacebookIcon
            className={ctl(`
            w-[30px] h-[30px]
            lg:w-[40px] lg:h-[40px]
            block mx-auto
          `)}
          />
        </dd>
      </dl>
    </div>
  );
};

const ArticleDate = ({ publishedDate }) => {
  return (
    <p className="text-sm text-gray-500 font-futura">
      {publishedDate.year}/{publishedDate.month}/{publishedDate.dayOfMonth} (
      {publishedDate.dayOfWeekEn})
    </p>
  );
};

const ArticleTagsHorizontal = ({ tags }) => {
  return (
    <aside>
      <ul className="text-sm flex flex-wrap -ml-hgap-xs -mt-hgap-xs">
        {tags.map((tag) => {
          return <Tag text={tag} key={tag} />;
        })}
      </ul>
    </aside>
  );
};

const ArticleTagsVertical = ({ tags }) => {
  return (
    <>
      {tags.length && (
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

const ShareBarRightTop = () => {
  return (
    <div className="absolute right-0 top-0">
      <dl className="flex">
        <dt
          className={ctl(`
            nowrap
            text-sm font-futura
            self-center
            pr-hgap-xs
            hidden sm:block
        `)}
        >
          Share
        </dt>
        <dd className="pr-hgap-2xs">
          <TwitterIcon className="w-[24px] h-[24px] block" />
        </dd>
        <dd>
          <FacebookIcon className="w-[22px] h-[22px] block" />
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
      <h1 className="text-lg sm:text-xl md:text-2xl">{title}</h1>
    </header>
  );
};

const ArticlePageLayout = ({
  title,
  publishedDate,
  heroImgUrl,
  tags,
  articleHtml,
}) => {
  return (
    <div className="text-base">
      <div>
        <Header />
        <HeroImg src={heroImgUrl} />
        <div
          className={ctl(`
            md:grid 
            md:grid-cols-[80px_1fr_180px]
            lg:grid-cols-[100px_1fr_220px]
            md:gap-x-hgap-sm
            md:gap-y-vgap-sm lg:gap-y-vgap-md
            w-auto max-w-[1280px]
            mt-hgap-sm sm:mt-hgap-md
            mx-hgap-sm md:mx-auto
            relative
        `)}
        >
          <div className="md:col-start-2">
            <ArticleDate publishedDate={publishedDate} />
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
            <ShareBarVertical />
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
              <ShareBarRightTop />
            </div>
            <ArticleBody html={articleHtml} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { ArticlePageLayout };
