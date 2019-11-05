import { Link } from "gatsby"
import React from "react"
import componentStyles from "./index.module.css"


const FeaturedProducts = (props) => {
  const products = props.products.map((item, index) =>(
    <li key={index} className={componentStyles.featuredItem}>
      <Link to={item.node.slug}>
        <img src={item.node.featured_media.localFile.childImageSharp.fluid.src} className={componentStyles.featuredItemImage}/>
        <p>{item.node.title}</p>
      </Link>
    </li>
  ))
  return(
    <section>
      <h3 className="h3-style"><span>FEATURED PRODUCTS</span></h3>
        <ul className={componentStyles.featured}>
          {products }
        </ul>
    </section>
  )
}

export default FeaturedProducts

