import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  background-color: orange;
  width: 65px;
  height: 65px;
  border-bottom-right-radius: 5px;
  font-weight: 400;
  font-size: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  color: #333;
`

const Title = styled.h1`
  margin: 0;
  display: inline;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  line-height: 0;
  text-transform: uppercase;
  color: #333;
`

const Navigation = styled.ul`
  padding: 0;
  margin: 0;
  height: 65px;
  width: 350px;
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  & li {
    margin: 0;
    padding: 15px 30px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderBar>
    <Link
      to="/"
      style={{ textDecoration: `none`, display: `flex`, alignItems: `center` }}
    >
      <Logo>{"${ƒ}"}</Logo>
      <Title>{siteTitle}</Title>
    </Link>
    <nav>
      <Navigation>
        <Link to="/about" style={{ color: `#f7f7f7`, textDecoration: `none` }}>
          <li>About</li>
        </Link>
        <li>
          <Link
            to="/about"
            style={{ color: `#f7f7f7`, textDecoration: `none` }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ color: `#f7f7f7`, textDecoration: `none` }}
          >
            About
          </Link>
        </li>
      </Navigation>
    </nav>
  </HeaderBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
