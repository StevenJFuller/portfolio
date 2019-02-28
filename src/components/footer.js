import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = styled.footer`
  margin: 3rem auto;
  max-width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: #666;
`

const SocialBar = styled.div`
  display: flex;
  justify-content: space-between;
`

export default () => (
  <Footer>
    <h3>How to find me</h3>
    <SocialBar>
      <FontAwesomeIcon icon={["fab", "twitter"]} />
      <FontAwesomeIcon icon={["fab", "github"]} />
      <FontAwesomeIcon icon={["fab", "youtube"]} />
      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
    </SocialBar>
  </Footer>
)
