import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data }) => (
  
  <Layout>
    {console.log(data.wordpressPage.title)}
    <SEO title={data.wordpressPage.title} />
    <h1>Hi people this is page</h1>
    <p>{data.wordpressPage.title}</p>

    <div className="content" dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}></div>



  </Layout>
)


export default Page

export const pageQuery = graphql`
query($id: Int!) {
  wordpressPage(wordpress_id: { eq: $id }) {
    title
    excerpt
    content
  }
}
`