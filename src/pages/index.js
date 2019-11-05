import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Category from "../components/categoryBlocks"
import FeaturedProducts from "../components/featured"
import Calc from "../components/calc"
import FindBlock from "../components/findBlock"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className='wrapper__width' >
    <h1>Hi people</h1>
    <Category/>
    </div>
    <FindBlock />
    <div className='wrapper__width' >
    <FeaturedProducts products={data.allWordpressPost.edges}/>
    </div>
    <Calc />

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    
  </Layout>
)

export default IndexPage

export const query = graphql`
query Postsquery {
  allWordpressPost {
    edges {
      node {
        title
        slug
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}
`
