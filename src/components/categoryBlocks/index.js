import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import componentStyles from "./index.module.css"

const Category = () => {
  
  return(
    <section>
    <ul className={componentStyles.categories}>
      <li className={componentStyles.categoriesItem + ' ' + componentStyles.categoriesItemMen}>
        <Link to='men' className={componentStyles.categoriesLink}>
          <p>meanswear</p>
          <p className={componentStyles.categoriesSmall}>Intimates Fall/Winter 2015</p>
        </Link>
      </li>
      <li className={componentStyles.categoriesItem  + ' ' + componentStyles.categoriesItemUncategorised}>
      <Link to='uncategorised' className={componentStyles.categoriesLink}>
        <p>uncategorised</p>
        <p className={componentStyles.categoriesSmall}>Get a new look with Smile Collection</p>
      </Link>
      </li>
      <li className={componentStyles.categoriesItem   + ' ' + componentStyles.categoriesItemOther}>
      <Link to='/' className={componentStyles.categoriesLink}>
        <p>Womenswear</p>
        <p className={componentStyles.categoriesSmall}>Smile Collection new arrivals</p>
      </Link>
      </li>
    </ul>
    </section>

  )
}

export default Category