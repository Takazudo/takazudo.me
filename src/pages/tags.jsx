import * as React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Header } from "../components/global/header";
import { Footer } from "../components/global/footer";

const tags = [
  "The1",
  "quick2",
  "brown3",
  "fox4",
  "jumps5",
  "over6",
  "the7",
  "lazy8",
  "dog9",
  "The10",
  "quick11",
  "brown12",
  "fox13",
  "jumps14",
  "over15",
  "the16",
  "lazy17",
  "dog18",
  "The19",
  "quick20",
  "brown21",
  "fox22",
  "jumps23",
  "over24",
  "the25",
  "lazy26",
  "dog27",
  "The28",
  "quick29",
  "brown30",
  "fox31",
  "jumps32",
  "over33",
  "the34",
  "lazy35",
  "dog36",
];

const TagListPage = () => {
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
          Tags
        </h1>
        <div
          className={ctl(`
            box-content
            max-w-[1040px] mx-auto px-hgap-sm pt-vgap-md 
            flex flex-wrap
            font-futura text-lg sm:text-xl
            gap-x-hgap-sm sm:gap-x-hgap-md
            gap-y-vgap-sm sm:gap-y-vgap-md
          `)}
        >
          {tags.map((tag) => {
            return (
              <div key={tag}>
                <a href="/">#{tag}</a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TagListPage;
