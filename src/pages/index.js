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
    <hr style={{ marginTop: "3em" }} />
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
              <a
                href="https://dribbble.com/akhilkg"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-dribbble"
              ></a>
              <a
                href="mailto:akhilkg@growtra.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-envelope"
              ></a>
              <a
                href="https://www.quora.com/profile/Akhil-K-Gangadharan-2"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-quora"
              ></a>
            </div>
        </Container>
        <div class="arrow bounce">
          <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {" "}
            <a
              class="fa fa-arrow-up linkz"
              style={{ textDecoration: "none" }}
              href="#"
            />
          </Link>
        </div>
        <p style={{ textAlign: "center" }}>Akhil</p>
  </Layout>
)

export default IndexPage
