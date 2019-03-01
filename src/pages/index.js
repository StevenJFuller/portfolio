import React from "react"
import styled from "styled-components"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import TypistLoop from "react-typist-loop"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Intro = styled.h1`
  margin-bottom: 3rem;
`

const Lead = styled.p`
  margin-bottom: 3rem;
`

const Skills = styled.h4`
  display: inline;
  color: #a6a6a6;
  border-bottom: 5px solid orange;
`
const TypistExample = styled.div``

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro>Hi, I'm Steven Fuller.</Intro>
    <Lead>
      I'm a modern web developer, trying to make the internet a better place.
    </Lead>
    <TypistLoop interval={800}>
      {[
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Gatsby",
        "jQuery",
        "Bootstrap",
        "Node",
        "Express",
        "MongoDB",
      ].map(text => (
        <Typist key={text} startDelay={0} style={{ fontSize: `2rem` }}>
          <Skills>{text}</Skills>
          <Typist.Backspace count={text.length} delay={1500} />
        </Typist>
      ))}
    </TypistLoop>
  </Layout>
)
