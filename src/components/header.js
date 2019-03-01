import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 100%;
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
  @media (max-width: 720px) {
    display: none;
  }
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
  border-bottom-left-radius: 5px;
  @media (max-width: 720px) {
    width: 250px;
  }
  a {
    flex: 1;
    text-align: center;
    height: 100%;
    display: flex;
  }
  li {
    margin: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
    height: 100%;
    font-size: 1.25rem;
    transition: 0.2s ease;
    background-color: #333;
    &:hover {
      background-color: transparent;
      color: #333;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderBar>
    <Link to="/">
      <Logo>{"${ƒ}"}</Logo>
      <Title>{siteTitle}</Title>
    </Link>
    <nav>
      <Navigation>
        <Link to="/about" style={{ color: `#f7f7f7` }}>
          <li>About</li>
        </Link>
        <Link to="/about" style={{ color: `#f7f7f7` }}>
          <li>Contact</li>
        </Link>
        <Link to="/about" style={{ color: `#f7f7f7` }}>
          <li>Blog</li>
        </Link>
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
