import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => (
  
  <Layout>
    
    <SEO title={data.wordpressPost.title} />
    <div className='wrapper__width' >
    <h1>Hi people this is post</h1>
    <p>{data.wordpressPost.title}</p>

    <div className="content" dangerouslySetInnerHTML={{__html: data.wordpressPost.content}}></div>
    </div>
  </Layout>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const pageQuery = graphql`
query($id: Int!) {
  wordpressPost(wordpress_id: { eq: $id }) {
    title
    excerpt
    content
  }
}
`