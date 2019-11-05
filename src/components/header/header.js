import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"
import instagramIcon from "../../images/instagram-216-721958.png"
import viberIcon from "../../images/viber-2-226548.png"

console.log(instagramIcon)

const Header = () => (
  <header className={`${headerStyles.header}`} >
    <div className={`wrapper__width ${headerStyles.headerWrapper}`} >
      <div className={headerStyles.logoWrapper}>
        <Link to="/" className={headerStyles.logo}>
          logo
        </Link>
      </div>
      <ul className={headerStyles.menu}>
        <li className={headerStyles.menuItem}><Link className={headerStyles.menuLink} to="/">Link 1</Link></li>
        <li className={headerStyles.menuItem}><Link className={headerStyles.menuLink} to="/">Link 2</Link></li>
        <li className={headerStyles.menuItem}><Link className={headerStyles.menuLink} to="/">Link 3</Link></li>
        <li className={headerStyles.menuItem}><Link className={headerStyles.menuLink} to="/">Link 4</Link></li>
        <li className={headerStyles.menuItem}><Link className={headerStyles.menuLink} to="/">Link 5</Link></li>
      </ul>
      <div className={headerStyles.social}>
        <Link to="/" className={headerStyles.socialLink} ><img src={instagramIcon}/></Link>
        
        <Link to="/" className={headerStyles.socialLink}><img src={viberIcon}/></Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
