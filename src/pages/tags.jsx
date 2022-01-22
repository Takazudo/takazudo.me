import * as React from "react";
import { graphql } from "gatsby";
import ctl from "@netlify/classnames-template-literals";
import { Link } from "../components/shared/link";

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
  let tags = [];
  data.allMdx.nodes.forEach((node) => {
    if (!node.frontmatter.tags || node.frontmatter.tags.length === 0) {
      return;
    }
    tags = tags.concat(node.frontmatter.tags);
  });
  return Array.from(new Set(tags));
};

const TagListPage = ({ data }) => {
  const tags = collectTags(data);
  return (
    <>
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
              <Link to={`/tags/${tag}`}>
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
