import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Categories = function ({ data }) {

  const objectOfPosts = data.allWordpressPost.edges.map((post, index) =>
    <li key={index} className="category-list-item">
      <Link to={post.node.slug} className="category-list-link">
        <img src={post.node.featured_media.localFile.childImageSharp.fluid.src} />
          <p>{post.node.title}</p>
      </Link>
      </li>
  );

  return (
    <Layout>
      <SEO title={data.wordpressCategory.name} />
      <div className='wrapper__width' >
        <h1 className="h3-style"><span>{data.wordpressCategory.name}</span></h1>
        <ul className="category-list">
          {objectOfPosts}
        </ul>
      </div>
    </Layout>
  )
} 

Categories.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Categories

export const pageQuery = graphql`
query($id: Int!, $slug: String!) {
  wordpressCategory(wordpress_id: { eq: $id }) {
    name
  }
  allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
    edges {
      node {
        categories {
          name
          count
          description
          slug
        }
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