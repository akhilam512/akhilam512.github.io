import "bootstrap/dist/css/bootstrap.min.css"

import React from "react"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Akhil K G`, `akhilkg`, `Akhil K Gangadharan`, "Akhil"]}
    />
    <LandingBio />
  </Layout>
)

export default IndexPage
