import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Particles from "react-particles-js"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faTwitter,
  faGithub,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons"

library.add(faTwitter, faGithub, faYoutube, faFacebookF)

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <SiteWrapper>
        <Particles
          style={{
            position: `absolute`,
            zIndex: `-1`,
            width: `100%`,
            padding: 0,
          }}
          params={{
            particles: {
              number: {
                value: 80,
              },
              size: {
                value: 3,
              },
              line_linked: {
                enable: true,
                distance: 200,
                color: "#333333",
                opacity: 0.2,
                width: 1,
              },
              color: {
                value: "#333",
              },
              opacity: {
                value: 0.5,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            display: `flex`,
            flexDirection: `column`,
            height: `100%`,
          }}
        >
          <main
            style={{
              flex: `1 1 auto`,
              backgroundColor: `rgba(255, 255, 255, 0.5)`,
              padding: `0 3rem`,
              display: `flex`,
              flexDirection: `column`,
              width: `75vw`,
              maxWidth: `960px`,
              justifyContent: `center`,
            }}
          >
            {children}
          </main>
          <Footer style={{ flex: `0 1 auto` }} />
        </div>
      </SiteWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
