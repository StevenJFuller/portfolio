import React from "react"
import styled from "styled-components"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Skills = styled.h3`
  display: inline;
  color: #a6a6a6;
  border-bottom: 5px solid orange;
`
const TypistExample = styled.div``

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi, I'm Steven Fuller.</h1>
    <p className="lead">
      I'm a modern web developer, trying to make the internet a better place.
    </p>
    <TypistLoop interval={3000}>
      {["Hello World", "Good Morning", "Bye"].map(text => (
        <Typist key={text} startDelay={1000}>
          {text}
        </Typist>
      ))}
    </TypistLoop>
  </Layout>
)
