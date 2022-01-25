import * as React from "react";
import { graphql } from "gatsby";
import ctl from "@netlify/classnames-template-literals";
import { Link } from "../components/shared/link";
import { HeadMeta } from "../components/global/head-meta";

export const query = graphql`
  query TagListPageQuery {
    allMdx {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`;

const collectTags = (data) => {
  const tags = [];
  data.allMdx.nodes.forEach((node) => {
    const currentTags = node.frontmatter.tags;
    if (!currentTags || currentTags.length === 0) {
      return;
    }
    currentTags.forEach((tag) => {
      if (tag === "internal") return;
      tags.push(tag);
    });
  });
  console.log(tags);
  return Array.from(new Set(tags));
};

const TagListPage = ({ data, location }) => {
  const tags = collectTags(data);
  return (
    <>
      <HeadMeta
        pageTitle="Tags"
        pageDescription="takazudo.meのタグの一覧です"
        isArticle={false}
        path={location.pathname}
      />
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
          max-w-[1040px] mx-auto px-hgap-sm pt-vgap-md pb-vgap-md
          flex flex-wrap
          font-futura text-lg sm:text-xl
          gap-x-hgap-sm sm:gap-x-hgap-md
          gap-y-vgap-sm sm:gap-y-vgap-md
        `)}
      >
        {tags.map((tag) => {
          if (tag === "internal") return;
          return (
            <div key={tag}>
              <Link to={`/tags/${tag}`} className="zudo-invert-color-link">
                <span className="zudo-hash">#</span>
                {tag}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TagListPage;
