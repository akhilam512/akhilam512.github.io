import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const NavLink = styled(Link)`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  padding-right: 0.2em;

  ::after {
    content: "";
    text-decoration: none;
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #f8fc61;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    
  }

  :hover::after {
    text-decoration: none;
    transform: scaleX(1);
    transform-origin: bottom left;
    background-color: #f8fc61;
    color: black;
  }

  :hover {
    text-decoration: none;
    background-color: #f8fc61;
    color: black;
  }
`

const ResumeLink = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    text-decoration: none;
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    color: black;
    background-color: #f8fc61;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    text-decoration: none;
    background-color: #f8fc61;
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  :hover {
    text-decoration: none;
    background-color: #f8fc61;
    color: black;
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
  padding-right: 0.2em;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  min-height: 7em;
`

const HRBreak = styled.hr`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: block;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">{siteTitle}</HomeLink>
        <NavLink to="/blog">blog</NavLink>

      </p>
      <HRBreak></HRBreak>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
