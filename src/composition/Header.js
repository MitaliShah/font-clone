import React from "react"

const Header =  () => {
  return (
    <React.Fragment>
      <header>
          <h2 className="logo">GoogleFont Clone</h2>
          <nav className="header-nav">
            <ul className="header-nav-ul">
              <li><a href="#">CATALOG</a></li>
              <li><a href="#">FEATURED</a></li>
              <li><a href="#">ARTICLES</a></li>
              <li><a href="#">ABOUT</a></li>
            </ul>
          </nav>
        </header>
    </React.Fragment>
  )
}

export default Header