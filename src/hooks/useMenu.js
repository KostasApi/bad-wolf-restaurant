import { graphql, useStaticQuery } from "gatsby"

const useMenus = () => {
  const { allContentfulMenu } = useStaticQuery(
    graphql`
      query ALL_CONTENTFUL_MENU {
        allContentfulMenu {
          nodes {
            name
            sections {
              items {
                name
                description
                price
              }
              image {
                url
              }
            }
          }
        }
      }
    `
  )
  return allContentfulMenu.nodes
}

export default useMenus
