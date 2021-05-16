import "bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "react-scroll"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Akhil K G`, `akhilkg`, `Akhil K Gangadharan`, "Akhil"]}
    />
    <LandingBio />
    <hr style={{ marginTop: "3em" }} />
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
