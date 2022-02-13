import { default as React, useMemo } from "react";
import ctl from "@netlify/classnames-template-literals";
import tw from "twin.macro";
import { css } from "@emotion/css";
import { Link } from "../components/shared/link";
import { HeadMeta } from "../components/global/head-meta";
import { PageTitle } from "../components/shared/page-title";
import SearchIcon from "../assets/svgs/search.svg";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Snippet,
  Highlight,
} from "react-instantsearch-dom";

// reference about algolia: https://www.gatsbyjs.com/docs/adding-search-with-algolia/

const styledClassNames = {
  searchForm: css`
    input[type="search"] {
      ${tw`rounded-none`}
      ${tw`w-[260px] sm:w-auto`}
      ${tw`px-hgap-sm py-vgap-xs`}
      ${tw`border-3 border-black`}
    }
    button {
      ${tw`hidden`}
    }
  `,
  hitContainer: css`
    > * {
      ${tw`block`}
      ${tw`border-t border-black`}
      ${tw`py-vgap-md border-dashed`}
    }
    em {
      color: #ef4444;
      ${tw`font-bold not-italic`}
      ${tw`group-hover:text-white`}
      ${tw`group-focus:text-white`}
      ${tw`group-active:text-white`}
    }
  `,
  bgBlackLine: css`
    &,
    * {
      ${tw`group-hover:text-white`}
      ${tw`group-hover:bg-black`}
      ${tw`group-hover:text-shadow-none`}
      ${tw`group-focus:text-white`}
      ${tw`group-focus:bg-black`}
      ${tw`group-focus:text-shadow-none`}
      ${tw`group-active:text-white`}
      ${tw`group-active:bg-black`}
      ${tw`group-active:text-shadow-none`}
    }
  `,
};

const Hit = ({ hit }) => {
  return (
    <article className={styledClassNames.hitContainer}>
      <Link to={`/${hit.slug}/`} className="group no-underline">
        <h2 className="text-lg font-bold underline">
          <span className={styledClassNames.bgBlackLine}>
            <Highlight attribute="title" hit={hit} />
          </span>
        </h2>
        <p className="pt-vgap-sm">
          <span className={styledClassNames.bgBlackLine}>
            <Snippet attribute="excerpt" hit={hit} />
            ...
          </span>
        </p>
      </Link>
    </article>
  );
};

const SearchPage = ({ location }) => {
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  );
  return (
    <>
      <HeadMeta
        pageTitle="検索"
        pageDescription="takazudo.meのサイト内検索"
        isArticle={false}
        path={location.pathname}
      />
      <InstantSearch searchClient={searchClient} indexName="Pages">
        <PageTitle tagName="div">
          <div className="flex justify-center mx-auto">
            <div className="flex items-center pr-hgap-xs">
              <SearchIcon
                className={ctl(`
                w-[1.2em] h-[1.2em]
              `)}
              />
            </div>
            <SearchBox
              autoFocus
              defaultRefinement={null}
              translations={{
                placeholder: "Search for...",
              }}
              className={styledClassNames.searchForm}
              submit={null}
              reset={null}
            />
          </div>
        </PageTitle>
        <div className="max-w-[820px] mx-auto px-hgap-sm mb-vgap-sm">
          <Hits hitComponent={Hit} />
        </div>
        {/* <Pagination /> */}
      </InstantSearch>
    </>
  );
};

export default SearchPage;
