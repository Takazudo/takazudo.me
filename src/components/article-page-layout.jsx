import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import TwitterIcon from "../assets/svgs/twitter.svg";
import FacebookIcon from "../assets/svgs/facebook.svg";
import { Header } from "./shared/header";
import { Footer } from "./shared/footer";

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
          <TwitterIcon
            className={ctl(`
            w-[30px] h-[30px]
            lg:w-[40px] lg:h-[40px]
            block mx-auto
          `)}
          />
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

const ArticleBody = ({html}) => {
  return (
    <div>
      <div style={{ background: 'orange' }}>DEBUG_BAR</div>
      {html}
      <div style={{ background: 'orange' }}>DEBUG_BAR</div>
      <div
        className={ctl(`
          border-b border-dashed border-gray-600
          md:ml-[-100px] md:pl-[100px]
          lg:ml-[-120px] lg:pl-[120px]
          pb-vgap-sm mb-vgap-lg 
        `)}
      >
        <p className="pb-vgap-md">
          彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。
          彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。
        </p>
        <p className="pb-vgap-md">
          彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。
          彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。
        </p>
      </div>
      <div className="pb-vgap-sm">
        <p className="pb-vgap-md">
          彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。
          彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。
        </p>
        <p className="pb-vgap-md">
          彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。
          彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。
        </p>
        <p className="pb-vgap-md">
          彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。
          彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。
        </p>
      </div>
      <div
        className={ctl(`
          border-t border-dashed border-gray-600
          md:ml-[-100px] md:pl-[100px]
          lg:ml-[-120px] lg:pl-[120px]
          pt-vgap-lg
        `)}
      >
        <p className="pb-vgap-md">
          彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。
          彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。
        </p>
      </div>
    </div>
  );
};

const ArticleTitle = ({ title }) => {
  return (
    <header>
      <h1 className="text-lg sm:text-xl md:text-2xl">{title}</h1>
    </header>
  );
};

const ArticlePageLayout = ({ title, publishedDate, heroImgUrl, tags, articleHtml }) => {
  return (
    <div className="text-base">
      <div>
        <title>{title}</title>
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
