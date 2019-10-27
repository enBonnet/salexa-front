import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../images/logos/icono.png"
import nombre from "../../images/logos/nombreweb.png"
import "./header.scss"

export const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <Link to="/">
        <div className="logos">
          <img src={logo} alt={siteTitle} className="logo" />
          <img src={nombre} alt="" className="nombre" />
        </div>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
