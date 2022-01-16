import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Header } from "../components/global/header";
import { Footer } from "../components/global/footer";

const Article = () => {
  const src =
    "https://images.prismic.io/cgbook/5852d55f-9e14-443a-8663-674d742d38ec_2022-01-08+13.16.59.jpg?auto=compress,format&fit=crop&w=1200&h=800";
  return (
    <a
      href="/notes/2022-01-12-hogehoge"
      className={ctl(`
        block
        no-underline hover:underline focus:underline
        border-t border-black
        pt-vgap-md border-dashed
        pb-vgap-md 
      `)}
    >
      <div
        className={ctl(`
          gap-x-hgap-sm
          flex
      `)}
      >
        <div className="grow-0 shrink-0 hidden sm:block">
          <img
            className={ctl(`
              border-y-5 border-black
              md:border-y-10
              w-[150px]
            `)}
            src={src}
            alt=""
          />
        </div>
        <div className="grow">
          <p
            className={ctl(`
            font-futura no-underline text-gray-500 
            text-xs sm:text-sm
          `)}
          >
            2022/01/10 (Wed)
          </p>
          <h2 className="text-base underline pt-vgap-xs font-bold">
            彼は背後にひそかな 彼は背後にひそかな 彼は背後にひそかな
          </h2>
          <p
            className={ctl(`
            text-sm sm:text-base
            no-underline
            line-clamp-2 md:line-clamp-1
            pt-vgap-sm md:pt-vgap-xs
          `)}
          >
            彼は背後にひ彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。
            彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。彼は足音が止まったことに気が着いた。あわてて辺りを見回す。ふと狭い抜け道に目が止まる。
            彼は素早く右に身を翻し、建物の間に消え去った。その時彼は、もう少しで道の真中に転がっていたごみバケツに躓き転ぶところだった。
            彼は暗闇の中で道を確かめようとじっと見つめた。どうやら自分の通ってきた道以外にこの中庭からの出道はないようだ。
            足音はだんだん近づき、彼には角を曲がる黒い人影が見えた。彼の目は夜の闇の中を必死にさまよい、逃げ道を探す。もうすべては終わりなのか。すべての苦労と準備は水の泡だというのか。
            突然、彼の横で扉が風に揺らぎ、ほんのわずかにきしむのを聞いた時、彼は背中を壁に押し付け、追跡者に見付けられないことを願った。この扉は望みの綱として投げかけられた、彼のジレンマからの出口なのだろうか。背中を壁にぴったり押し付けたまま、ゆっくりと彼は開いている扉の方へと身を動かして行った。この扉は彼の救いとなるのだろうか。
          </p>
        </div>
      </div>
    </a>
  );
};

const ArticleListPage = () => {
  return (
    <>
      <div>
        <Header />
        <h1
          className={ctl(`
            border-black 
            border-t-5 md:border-t-[10px]
            max-w-[1280px] mx-auto px-hgap-sm
            pt-vgap-md sm:pt-vgap-lg
            sm:pb-vgap-md
            font-futura text-xl sm:text-2xl
            text-center
          `)}
        >
          Notes
        </h1>
        <div
          className={ctl(`
            max-w-[1280px] mx-auto px-hgap-sm pt-vgap-md
          `)}
        >
          <div>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleListPage;
