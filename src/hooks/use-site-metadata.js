import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            titleTemplate
            siteUrl
            description
            imgUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
