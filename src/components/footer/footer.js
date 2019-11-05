import { Link } from "gatsby"
import React from "react"
import footerStyles from "./footer.module.css"

const Footer = () => {
  return (
    <footer >
      <div className='wrapper__width'>
        <div className={footerStyles.footerBlock}>
      <div >
        <h4 className={footerStyles.heading}><Link to="/">Logo</Link></h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
        <h4 className={footerStyles.heading}>Contacts</h4>
        <ul>
          <li>
            <p>Phone</p>
            <p>+380 333 66 55</p>
          </li>
          <li>
            <p>Mail</p>
            <p>sendMeEmail@yahoo.com</p>
          </li>
        </ul>
      </div>
      <div>
        <h4 className={footerStyles.heading}>Links</h4>
        <ul>
          <li><Link to="/page-2/">Go to page 2</Link></li>
          <li><Link to="/page-2/">Go to page 2</Link></li>
          <li><Link to="/page-2/">Go to page 2</Link></li>
          <li><Link to="/page-2/">Go to page 2</Link></li>
        </ul>

      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer

