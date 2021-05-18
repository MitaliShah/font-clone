import React from "react"

const Header =  () => {
  return (
    <React.Fragment>
      <header>
          <h1><span className="logo">Google Font</span> Clone</h1>
          <nav className="header-nav">
            <ul className="header-nav-ul">
              <li><a href="#main">CATALOG</a></li>
              <li><a href="#main">FEATURED</a></li>
              <li><a href="#main">ARTICLES</a></li>
              <li><a href="#main">ABOUT</a></li>
            </ul>
          </nav>
        </header>
    </React.Fragment>
  )
}

export default Header