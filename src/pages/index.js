import "bootstrap/dist/css/bootstrap.min.css"
import styled from "@emotion/styled"

import React from "react"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "react-scroll"

const Container = styled.div`
  text-align: center;
  display: block;
  max-width: 100%;
  caret-color: transparent;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Akhil K G`, `akhilkg`, `Akhil K Gangadharan`, "Akhil"]}
    />
    <LandingBio />
    <Container>
        <div>
              <a
                href="https://twitter.com/akhlkg/"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-twitter"
              ></a>
              <a
                href="https://github.com/akhilam512/"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-github"
              ></a>
              <a
                href="https://www.linkedin.com/in/akhil-k-g/"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-linkedin"
              ></a>
              {/* <a
                href="https://dribbble.com/akhilkg"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-dribbble"
              ></a> */}
              <a
                href="mailto:akhilam512@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-envelope"
              ></a>
              {/* <a
                href="https://www.quora.com/profile/Akhil-K-Gangadharan-2"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-quora"
              ></a> */}
            </div>
        </Container>
  </Layout>
)

export default IndexPage
