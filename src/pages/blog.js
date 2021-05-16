import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import MailChimpForm from "../components/MailchimpForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Head1 = styled.h1`
  text-align: center;
  font-size: 3rem;
`
const NameText = styled.span`
  padding-left: 0.2em;
  padding-right: 0.2em;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.p`
  display: inline;
  color: #606060;
`

const MarkerHeader = styled.p`
  display: inline;
  border-radius: 1em 0 1em 0;
  font-size: 1.7em;
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`
const LightLine = styled.hr`
    border-top: 1px dotted gray;
    opacity: 0.6;
}`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[
          `Akhil K G Blog`,
          `akhilkg`,
          `akhilkg blog`,
          ,
          `Akhil K Gangadharan Blog`,
          "Akhil blog",
        ]}
      />
      <Content>
        <Head1>
          {" "}
          <NameText> Blog </NameText>{" "}
        </Head1>{" "}
        <br /> <br />
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                  :hover {
                    text-decoration: none;
                    color: black;
                    background-image: linear-gradient(
                      rgba(246, 252, 58, 0.8),
                      rgba(246, 252, 58, 0.8)
                    );
                  }
                `}
              >
                <MarkerHeader>{node.frontmatter.title}</MarkerHeader>
              </Link>
              <div>
                <ArticleDate>{node.frontmatter.date}</ArticleDate>
              </div>
              <LightLine />
            </div>
          ))}
        <MailChimpForm />
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false }, type: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
