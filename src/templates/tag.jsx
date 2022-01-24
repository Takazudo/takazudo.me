import * as React from "react";
import { graphql } from "gatsby";
import { HeadMeta } from "../components/global/head-meta";
import { PageTitle } from "../components/shared/page-title";
import { ArticleNav } from "../components/shared/article-nav";

export const query = graphql`
  query TagLeafPageQuery($tag: [String]) {
    allMdx(filter: { frontmatter: { tags: { in: $tag } } }) {
      edges {
        node {
          id
          slug
          fields {
            blurHash
          }
          frontmatter {
            title
            heroImgUrl
            excerpt
          }
        }
      }
    }
  }
`;

/* data example
{
  "data": {
    "allMdx": {
      "edges": [
        {
          "node": {
            "id": "483ef06d-b20a-572d-8360-9015f4f0ed1e",
            "slug": "notes/2022-01-12-hogehoge",
            "frontmatter": {
              "title": "彼のこの仕事への恐れを和らげる彼のこの仕事への恐れを和らげる",
              "heroImgUrl": "https://images.prismic.io/cgbook/5852d55f-9e14-443a-8663-674d742d38ec_2022-01-08+13.16.59.jpg?auto=compress,format&fit=crop&w=1200&h=400",
              "excerpt": "にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。 彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。彼は足音が止まったことに気が着いた。あわてて辺りを見回す。ふと狭い抜け道に目が止まる。 彼は素早く右に身を翻し、建物の間に消え去った。その時彼は、もう少しで道の真中に転がっていたごみバケツに躓き転ぶところだった。"
            }
          }
        },
        {
          "node": {
            "id": "15d5aac8-7128-517a-856f-4ce652bacef8",
            "slug": "notes/2022-01-13-moomoo",
            "frontmatter": {
              "title": "彼は背後にひそかな足音",
              "heroImgUrl": "https://images.prismic.io/cgbook/5852d55f-9e14-443a-8663-674d742d38ec_2022-01-08+13.16.59.jpg?auto=compress,format&fit=crop&w=1200&h=400",
              "excerpt": "彼は背後にひそかな足音を聞いた。それはあまり良い意味を示すものではない。誰がこんな夜更けに、しかもこんな街灯のお粗末な港街の狭い小道で彼をつけて来るというのだ。人生の航路を捻じ曲げ、その獲物と共に立ち去ろうとしている、その丁度今。 彼のこの仕事への恐れを和らげるために、数多い仲間の中に同じ考えを抱き、彼を見守り、待っている者がいるというのか。それとも背後の足音の主は、この街に無数にいる法監視役で、強靭な罰をすぐにも彼の手首にガシャンと下すというのか。彼は足音が止まったことに気が着いた。あわてて辺りを見回す。ふと狭い抜け道に目が止まる。 彼は素早く右に身を翻し、建物の間に消え去った。その時彼は、もう少しで道の真中に転がっていたごみバケツに躓き転ぶところだった。"
            }
          }
        }
      ]
    }
  },
  "extensions": {}
}
*/

const Page = ({ pageContext, data, location }) => {
  //console.log(pageContext.tag);
  //console.log(data);
  const items = data.allMdx.edges.map(({ node }) => {
    const {
      slug,
      id,
      fields: { blurHash },
      frontmatter: { title, heroImgUrl: imgUrl, excerpt },
    } = node;
    return {
      slug,
      title,
      imgUrl,
      blurHash,
      excerpt,
      id,
    };
  });
  return (
    <>
      <HeadMeta
        pageTitle={`#${pageContext.tag}`}
        pageDescription={`タグ #${pageContext.tag} が設定されている記事の一覧です`}
        isArticle={false}
        path={location.pathname}
      />
      <PageTitle>
        <span className="zudo-hash">#</span>
        {pageContext.tag}
      </PageTitle>
      <ArticleNav items={items} />
    </>
  );
};

export default Page;
